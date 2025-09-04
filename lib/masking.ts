export function maskPII(text = ""): string {
  return text
    .replace(/\b(\d{10})\b/g, m => m.replace(/\d(?=\d{4})/g, "X")) // phone
    .replace(/([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[A-Za-z]{2,})/g, "***@***")
    .replace(/\b(\d{12,16})\b/g, "****");                          // acct/card
}
