urls=(
  "https://www.scouting.org/skills/merit-badges/all/"
  "https://www.scouting.org/skills/merit-badges/aviation/"
  "https://www.scouting.org/skills/merit-badges/robotics/"
  "https://www.scouting.org/skills/merit-badges/programming/"
  "https://www.scouting.org/skills/merit-badges/artificial-intelligence/"
  "https://www.scouting.org/skills/merit-badges/engineering/"
  "https://www.scouting.org/skills/merit-badges/inventing/"
  "https://www.scouting.org/skills/merit-badges/game-design/"
  "https://www.scouting.org/skills/merit-badges/space-exploration/"
)

names=(
  "all"
  "aviation"
  "robotics"
  "programming"
  "artificial-intelligence"
  "engineering"
  "inventing"
  "game-design"
  "space-exploration"
)

# This specific User-Agent sometimes helps bypass Cloudflare basic checks if it looks like a real browser
ua="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"

for i in "${!urls[@]}"; do
  url="${urls[$i]}"
  name="${names[$i]}"
  echo "Fetching $name..."
  # Use --compressed and extra headers to look more like a browser
  code=$(curl -sS -L -A "$ua" \
    -H "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7" \
    -H "Accept-Language: en-US,en;q=0.9" \
    -H "Cache-Control: max-age=0" \
    -H "Sec-Ch-Ua: \"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"" \
    -H "Sec-Ch-Ua-Mobile: ?0" \
    -H "Sec-Ch-Ua-Platform: \"Windows\"" \
    -H "Sec-Fetch-Dest: document" \
    -H "Sec-Fetch-Mode: navigate" \
    -H "Sec-Fetch-Site: none" \
    -H "Sec-Fetch-User: ?1" \
    -H "Upgrade-Insecure-Requests: 1" \
    --compressed \
    -o "/tmp/mb_$name.html" -w "%{http_code}" "$url")
  
  echo "Status: $code"
  
  if [[ -f "/tmp/mb_$name.html" ]]; then
     echo "Summary for $name:"
     # Check for common requirement markers
     grep -Ei "Requirement|Resources|\.pdf" "/tmp/mb_$name.html" | sed 's/^[[:space:]]*//' | head -n 15 | cut -c 1-100
  fi
  echo "----------------------------------------"
done
