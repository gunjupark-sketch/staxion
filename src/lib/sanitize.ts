/**
 * 간단한 HTML sanitizer — XSS 방지용
 * 허용 태그/속성만 통과, 나머지 strip
 */

const ALLOWED_TAGS: Record<string, string[]> = {
  h2: ["class"],
  h3: ["class"],
  p: ["class"],
  br: [],
  strong: [],
  b: [],
  em: [],
  i: [],
  u: [],
  a: ["href", "target", "rel"],
  img: ["src", "alt", "width", "height", "class"],
  ul: ["class"],
  ol: ["class"],
  li: [],
  blockquote: ["class"],
  div: ["class"],
  span: ["class", "style"],
};

export function sanitizeHtml(html: string): string {
  // script, iframe, object, embed, form 태그 완전 제거
  let clean = html.replace(/<(script|iframe|object|embed|form|style)[^>]*>[\s\S]*?<\/\1>/gi, "");
  // self-closing 위험 태그 제거
  clean = clean.replace(/<(script|iframe|object|embed|form|style)[^>]*\/?>/gi, "");
  // on* 이벤트 핸들러 제거
  clean = clean.replace(/\s+on\w+\s*=\s*["'][^"']*["']/gi, "");
  clean = clean.replace(/\s+on\w+\s*=\s*[^\s>]*/gi, "");
  // javascript: 프로토콜 제거
  clean = clean.replace(/href\s*=\s*["']javascript:[^"']*["']/gi, 'href="#"');

  return clean;
}
