export function buildWhatsAppShareUrl(url: string, title: string) {
  const text = encodeURIComponent(`${title}\n${url}`);
  return `https://wa.me/?text=${text}`;
}
