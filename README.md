
# ✍️ PureText | Markdown & Symbol Cleaner

PureText is a lightweight, high-performance web tool designed to strip Markdown formatting and normalize mathematical symbols from raw text. Built with a modern **Glassmorphism** UI, it provides a distraction-free environment for cleaning up technical notes, AI-generated content, or documentation.

---

## ✨ Key Features

- **Markdown Stripping**: Instantly removes headers, bold/italic syntax, code blocks, and HTML tags.
- **Symbol Normalization**: 
  - Converts LaTeX-style `\times` to `×`.
  - Converts LaTeX-style `\div` to `÷`.
  - Normalizes spacing around `=` signs (e.g., `5 = 5` becomes `5=5`).
- **Structure Cleaning**: Removes specific layout artifacts like `* ` (list markers) and `|` (table pipes).
- **One-Click Copy**: Quickly copy the cleaned result to your clipboard.
- **Responsive Design**: Fully functional on desktop, tablet, and mobile browsers.
- **SEO Optimized**: Includes meta tags for high search engine visibility and social sharing.

## 🚀 Live Demo

[Insert your hosted URL here, e.g., https://your-username.github.io/puretext]

---

## 🛠️ Tech Stack

- **HTML5**: Semantic structure and SEO meta tagging.
- **CSS3**: Custom properties (CSS variables), Glassmorphism effects, and Flexbox layout.
- **JavaScript (ES6+)**: Regex-driven text processing and DOM manipulation.

---

## 📖 How to Use

1. **Paste** your raw Markdown or LaTeX-heavy text into the **Source Content** area.
2. Click **Clean Text**.
3. View the result in the **Cleaned Output** box.
4. Click **Copy Result** to use the text elsewhere.

### Example Transformation

**Input:**
```markdown
# Results
* 10 \times 5 = 50 |
| **Note**: Calculation is `accurate`.
````

**Output:**

```text
Results
10 × 5=50
Note: Calculation is accurate.
```

-----

## 📂 Project Structure

```text
├── index.html   # SEO Tags & UI Structure
├── style.css    # UI Design & Responsive Layout
├── script.js    # Regex Cleaning Logic
└── README.md    # Project Documentation
```

-----

## 🔧 Customization

To add your own replacement rules, simply add a new line to the `processText` function in `script.js`:

```javascript
clean = clean.replace(/your-pattern/g, 'your-replacement');
```

## 📄 License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).

-----

Developed with ❤️ for clean text enthusiasts.

