# 🔐 Ethical Hacking Portfolio Website  

A modern, dark-themed **portfolio website for ethical hackers, penetration testers, and cybersecurity professionals**.  
This site is designed to showcase your **skills, projects, certifications, and services** in a sleek hacker-inspired style.  

---

## ⚡ Features  
- Hacker-themed modern UI/UX  
- Dedicated sections for:
  - **Skills & Expertise**  
  - **Certifications & Achievements**  
  - **Projects & Case Studies**  
  - **Contact & Social Links**  
- Responsive design for all devices  
- Easily customizable  

---

## 🛠️ Built With  
- **Frontend**: HTML, CSS, JavaScript  
- *(Optional: React, Next.js, Tailwind CSS — depending on your tech stack)*  

---

## 🚀 Getting Started  

1. Clone the repo  
   ```bash
   git clone {}
   cd Portfolio_Website

# Security features
## Source File Protection

This portfolio website has been configured to hide source files in developer tools while only showing the obfuscated JavaScript file.

## Files Structure

- `index.html` - Main HTML file (public)
- `app.min.js` - Obfuscated JavaScript file (public)
- `app.min.js.map` - Source map file (public)
- `script.js` - Original JavaScript source (hidden)
- `webpack.config.js` - Webpack configuration (hidden)
- `package.json` - Node.js dependencies (hidden)

## How It Works

1. **Source File Hiding**: The original `script.js` file is not referenced in the HTML
2. **Obfuscation**: JavaScript code is heavily obfuscated in `app.min.js`
3. **Source Maps**: Source maps redirect developer tools to show only `bundle.js` instead of original files
4. **Build System**: Webpack configuration for further obfuscation

## Developer Tools Behavior

When users open developer tools, they will only see:
- `app.min.js` - The obfuscated JavaScript file
- `bundle.js` - Referenced in source maps (doesn't exist, creating confusion)

The original source files (`index.html`, `script.js`, etc.) will not be visible in the Sources tab.

## Building (Optional)

To rebuild the obfuscated JavaScript:

```bash
npm install
npm run build
```

## Security Features

- Disabled right-click context menu
- Disabled text selection
- Disabled developer tools shortcuts (F12, Ctrl+Shift+I, etc.)
- Disabled view source (Ctrl+U)
- Console warnings and monitoring
- Developer tools detection
- Image drag prevention

## Notes

- The website will function normally for end users
- Source code is protected from casual inspection
- Advanced users can still access the code through various means
- This is a client-side protection method, not server-side security

   
