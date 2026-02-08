import fs from "node:fs";
import path from "node:path";

const PUBLIC_ROOT = path.resolve(process.cwd(), "public");
const IMAGE_EXTENSIONS = ["webp", "png", "jpg", "jpeg"];
const DEFAULT_MAX_IMAGES = 4;

function toWebPath(absolutePath) {
  const relative = path.relative(PUBLIC_ROOT, absolutePath).replace(/\\/g, "/");
  return `/${relative}`;
}

function findImagePath(basePathWithoutExtension) {
  for (const extension of IMAGE_EXTENSIONS) {
    const candidate = `${basePathWithoutExtension}.${extension}`;
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }
  return null;
}

export function getExistingPageImages(collection, slug, title, maxImages = DEFAULT_MAX_IMAGES) {
  const images = [];

  for (let index = 1; index <= maxImages; index += 1) {
    const basename = `${slug}-${index}`;
    const basePathWithoutExtension = path.join(PUBLIC_ROOT, "images", collection, basename);
    const absolutePath = findImagePath(basePathWithoutExtension);
    if (!absolutePath) continue;

    images.push({
      src: toWebPath(absolutePath),
      alt: `${title} illustration ${index}`
    });
  }

  return images;
}
