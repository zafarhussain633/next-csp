import { chainMatch, isPageRequest, csp } from "@next-safe/middleware";

export const nonce = "shdjed2323nm223nmm233sdmndmnn2"

const securityMiddleware = [
  
  csp({
    // Your CSP base configuration with IntelliSense
    // Single quotes for values like 'self' are automatic
    
    directives: {
      "default-src": ["self", "google.com"],
      "img-src": ["self", "data:", "https://images.unsplash.com"],
      "font-src": ["self", "https://fonts.gstatic.com"],
      "style-src": [
        "self",
        "unsafe-inline",
        "https://fonts.googleapis.com"
        
      ],
      "connect-src": [
        "self",
        "https://www.google.com",
        "https://www.gstatic.com",
      ],
      "script-src": [
        "self",
        "unsafe-eval",
        `nonce-${nonce}`,
        "https://www.google.com",
        "https://www.gstatic.com",
      ],
      "frame-src": [
        "self",
        "https://www.google.com",
        "https://www.gstatic.com",
      ],
    },
  }),
];

export default chainMatch(isPageRequest)(...securityMiddleware);
