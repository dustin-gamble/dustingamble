import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const CONTENT_ROOT = path.resolve(process.cwd(), "content");

marked.setOptions({
  gfm: true,
  breaks: false
});

let writingCache;
let projectCache;

function readJson(filePath) {
  const source = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(source);
}

function estimateReadingTime(markdown) {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

function parseMarkdownCollection(type) {
  const folder = path.join(CONTENT_ROOT, type);
  const indexPath = path.join(folder, "index.json");
  const index = readJson(indexPath);

  if (!Array.isArray(index)) {
    throw new Error(`Expected array in ${indexPath}`);
  }

  return index.map((item) => {
    const slug = item.slug;
    if (!slug) {
      throw new Error(`Missing slug in ${indexPath}`);
    }

    const markdownPath = path.join(folder, `${slug}.md`);
    const source = fs.readFileSync(markdownPath, "utf-8");
    const parsed = matter(source);
    const frontmatter = parsed.data ?? {};

    const title = frontmatter.title ?? item.title;
    const date = frontmatter.date ?? item.date;
    const summary = frontmatter.summary ?? item.summary;
    const tags = Array.isArray(frontmatter.tags)
      ? frontmatter.tags
      : Array.isArray(item.tags)
        ? item.tags
        : [];
    const draft = Boolean(
      frontmatter.draft !== undefined ? frontmatter.draft : item.draft
    );

    if (!title || !date || !summary) {
      throw new Error(`Missing required metadata in ${markdownPath}`);
    }

    return {
      ...item,
      ...frontmatter,
      slug,
      title,
      date,
      summary,
      tags,
      draft,
      body: parsed.content,
      html: marked.parse(parsed.content),
      readingTime: estimateReadingTime(parsed.content)
    };
  });
}

export function getWriting({ includeDraft = false } = {}) {
  if (!writingCache) {
    writingCache = parseMarkdownCollection("writing");
  }

  const entries = includeDraft
    ? writingCache
    : writingCache.filter((entry) => !entry.draft);

  return [...entries].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getWritingBySlug(slug) {
  return getWriting({ includeDraft: true }).find((entry) => entry.slug === slug);
}

export function getProjects({ includeDraft = false } = {}) {
  if (!projectCache) {
    projectCache = parseMarkdownCollection("projects");
  }

  const entries = includeDraft
    ? projectCache
    : projectCache.filter((entry) => !entry.draft);

  return [...entries].sort((a, b) => {
    const orderA = Number.isFinite(a.order) ? a.order : 999;
    const orderB = Number.isFinite(b.order) ? b.order : 999;
    if (orderA !== orderB) return orderA - orderB;
    return new Date(b.date) - new Date(a.date);
  });
}

export function getProjectBySlug(slug) {
  return getProjects({ includeDraft: true }).find((entry) => entry.slug === slug);
}

export function getFeaturedWriting(limit = 4) {
  return getWriting().filter((entry) => entry.featured).slice(0, limit);
}

export function getFeaturedProjects(limit = 4) {
  return getProjects().filter((entry) => entry.featured).slice(0, limit);
}

export function formatDate(dateString) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(dateString));
}
