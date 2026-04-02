document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("markdown-input");
  const output = document.getElementById("plain-output");
  const stripBtn = document.getElementById("strip-btn");
  const copyBtn = document.getElementById("copy-btn");
  const clearBtn = document.getElementById("clear-btn");

  function processText(text) {
    if (!text) return "";

    let clean = text;

    // 1. SPECIFIC CHARACTER REMOVALS
    // Removes "* " (with space), "| " (with space), and "|"
    clean = clean.replace(/\*\s/g, "");
    clean = clean.replace(/\*/g, "");
    clean = clean.replace(/\|\s/g, "");
    clean = clean.replace(/\|/g, "");
    clean = clean.replace(/\$/g, "");

    // 2. MATHEMATICAL REPLACEMENTS
    // Note: \\ is used to represent a single literal backslash in Regex
    clean = clean.replace(/\s?\\times\s?/g, "×");
    clean = clean.replace(/\s?\\div\s?/g, "÷");

    // Replace " = " with "="
    clean = clean.replace(/\s+=\s+/g, "=");

    // 3. GENERAL MARKDOWN STRIPPING
    clean = clean.replace(/<[^>]*>/g, ""); // HTML
    clean = clean.replace(/!\[(.*?)\]\(.*?\)/g, "$1"); // Images
    clean = clean.replace(/\[(.*?)\]\(.*?\)/g, "$1"); // Links
    clean = clean.replace(/(\*\*|__)(.*?)\1/g, "$2"); // Bold
    clean = clean.replace(/(\*|_)(.*?)\1/g, "$2"); // Italic
    clean = clean.replace(/^#+\s+/gm, ""); // Headers
    clean = clean.replace(/^\s{0,3}>\s?/gm, ""); // Blockquotes
    clean = clean.replace(/`{1,3}[\s\S]*?`{1,3}/g, ""); // Code

    return clean.trim();
  }

  stripBtn.addEventListener("click", () => {
    output.value = processText(input.value);
  });

  copyBtn.addEventListener("click", () => {
    if (output.value) {
      navigator.clipboard.writeText(output.value);
      const originalText = copyBtn.textContent;
      copyBtn.textContent = "Copied!";
      copyBtn.style.background = "#22c55e";
      setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.style.background = "#334155";
      }, 2000);
    }
  });

  clearBtn.addEventListener("click", () => {
    input.value = "";
    output.value = "";
    input.focus();
  });
});
