export function validateUrl(url) {
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return urlRegex.test(url);
}

export function generateShortcode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function getStoredUrls() {
  const urls = localStorage.getItem('shortenedUrls');
  return urls ? JSON.parse(urls) : {};
}

export function storeUrl(shortcode, originalUrl) {
  const urls = getStoredUrls();
  urls[shortcode] = { originalUrl, clicks: 0, createdAt: new Date().toISOString() };
  localStorage.setItem('shortenedUrls', JSON.stringify(urls));
}

export function getUrl(shortcode) {
  const urls = getStoredUrls();
  return urls[shortcode];
}

export function incrementClicks(shortcode) {
  const urls = getStoredUrls();
  if (urls[shortcode]) {
    urls[shortcode].clicks += 1;
    localStorage.setItem('shortenedUrls', JSON.stringify(urls));
  }
}