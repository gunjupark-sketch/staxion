/**
 * HTML sanitizer — XSS 방지용
 * 허용 태그/속성만 통과, 나머지 strip
 */

const ALLOWED_TAGS: Record<string, string[]> = {
  h1: ["class", "id"],
  h2: ["class", "id"],
  h3: ["class", "id"],
  h4: ["class", "id"],
  p: ["class"],
  br: [],
  hr: [],
  strong: [],
  b: [],
  em: [],
  i: [],
  u: [],
  s: [],
  a: ["href", "target", "rel", "class"],
  img: ["src", "alt", "width", "height", "class", "loading"],
  ul: ["class"],
  ol: ["class"],
  li: [],
  blockquote: ["class"],
  pre: ["class"],
  code: ["class"],
  div: ["class"],
  span: ["class", "style"],
  table: ["class"],
  thead: [],
  tbody: [],
  tr: [],
  th: ["class", "colspan", "rowspan"],
  td: ["class", "colspan", "rowspan"],
  figure: ["class"],
  figcaption: ["class"],
  video: ["src", "controls", "width", "height", "class"],
  source: ["src", "type"],
};

const ALLOWED_TAG_NAMES = new Set(Object.keys(ALLOWED_TAGS));

export function sanitizeHtml(html: string): string {
  // 1. 위험 태그 완전 제거 (내용 포함)
  let clean = html.replace(/<(script|iframe|object|embed|form|style|math|svg|template|textarea|select|input|button|link|meta|base|noscript)[^>]*>[\s\S]*?<\/\1>/gi, "");
  // self-closing 위험 태그 제거
  clean = clean.replace(/<(script|iframe|object|embed|form|style|math|svg|template|textarea|select|input|button|link|meta|base|noscript)[^>]*\/?>/gi, "");

  // 2. on* 이벤트 핸들러 제거
  clean = clean.replace(/\s+on\w+\s*=\s*["'][^"']*["']/gi, "");
  clean = clean.replace(/\s+on\w+\s*=\s*[^\s>]*/gi, "");

  // 3. javascript: / data: 프로토콜 제거
  clean = clean.replace(/(href|src|action)\s*=\s*["']\s*(javascript|data|vbscript):[^"']*["']/gi, '$1="#"');

  // 4. 허용되지 않은 태그 strip (내용은 보존)
  clean = clean.replace(/<\/?([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>/g, (match, tagName) => {
    const lower = tagName.toLowerCase();
    if (!ALLOWED_TAG_NAMES.has(lower)) {
      return ""; // 태그 제거, 내용은 보존
    }

    // 허용된 태그 — 속성 필터링
    const allowedAttrs = ALLOWED_TAGS[lower] || [];
    if (match.startsWith("</")) {
      return `</${lower}>`; // closing tag는 그대로
    }

    // 속성 추출 후 허용된 것만 남기기
    const attrString = match.replace(/^<[a-zA-Z][a-zA-Z0-9]*/, "").replace(/\/?>$/, "");
    const filteredAttrs: string[] = [];

    // 속성 파싱: name="value" | name='value' | name=value | name
    const attrRegex = /([a-zA-Z][\w-]*)\s*(?:=\s*(?:"([^"]*)"|'([^']*)'|(\S+)))?/g;
    let attrMatch;
    while ((attrMatch = attrRegex.exec(attrString)) !== null) {
      const attrName = attrMatch[1].toLowerCase();
      const attrValue = attrMatch[2] ?? attrMatch[3] ?? attrMatch[4] ?? "";
      if (allowedAttrs.includes(attrName)) {
        // style 속성은 위험 패턴 제거
        if (attrName === "style") {
          const safeStyle = attrValue
            .replace(/expression\s*\(/gi, "")
            .replace(/url\s*\(/gi, "")
            .replace(/-moz-binding/gi, "");
          filteredAttrs.push(`${attrName}="${safeStyle}"`);
        } else {
          filteredAttrs.push(`${attrName}="${attrValue}"`);
        }
      }
    }

    const selfClosing = match.endsWith("/>") ? " /" : "";
    const attrs = filteredAttrs.length > 0 ? " " + filteredAttrs.join(" ") : "";
    return `<${lower}${attrs}${selfClosing}>`;
  });

  return clean;
}
