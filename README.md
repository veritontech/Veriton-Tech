# Veriton - STEM Education Platform

A modern, responsive STEM education website built with React, TypeScript, and Tailwind CSS.

---

## 📚 **NEW USER? START HERE!**

We've created comprehensive guides to help you get started:

1. **⭐ [START-HERE.md](./START-HERE.md)** - Absolute beginner's quick start (READ THIS FIRST!)
2. **📑 [INDEX.md](./INDEX.md)** - Complete documentation index and navigation guide
3. **📥 [DOWNLOAD-INSTRUCTIONS.md](./DOWNLOAD-INSTRUCTIONS.md)** - How to download and extract
4. **📖 [SETUP-GUIDE.md](./SETUP-GUIDE.md)** - Step-by-step setup for beginners
5. **🌐 [WEBSITE-OVERVIEW.md](./WEBSITE-OVERVIEW.md)** - Visual overview of pages and features
6. **🔧 [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)** - Solutions to common issues
7. **📁 [PROJECT-STRUCTURE.md](./PROJECT-STRUCTURE.md)** - Understanding the codebase
8. **⚡ [QUICK-REFERENCE.md](./QUICK-REFERENCE.md)** - Commands and snippets cheat sheet
9. **📋 [FILE-TREE.txt](./FILE-TREE.txt)** - Visual ASCII file structure
10. **📝 [CHANGELOG.md](./CHANGELOG.md)** - Version history and updates

**Not sure where to start?** → Open [INDEX.md](./INDEX.md) for a guided path based on your experience level!

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed on your system:
- **Node.js** (version 18.x or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **pnpm** (recommended)

To check if you have Node.js installed:
```bash
node --version
npm --version
```

### Installation Steps

1. **Extract the downloaded folder** and navigate to it:
```bash
cd veriton-website
```

2. **Install dependencies** using one of these methods:

**Using npm (recommended for beginners):**
```bash
npm install
```

**OR using pnpm (faster):**
```bash
# Install pnpm first if you don't have it
npm install -g pnpm

# Then install dependencies
pnpm install
```

3. **Start the development server:**

**Using npm:**
```bash
npm run dev
```

**OR using pnpm:**
```bash
pnpm dev
```

4. **Open your browser** and visit:
```
http://localhost:5173
```

You should now see the Veriton website running locally! 🎉

## 📁 Project Structure

```
veriton-website/
├── src/
│   ├── app/
│   │   ├── components/      # Reusable React components
│   │   │   ├── home/        # Home page components
│   │   │   ├── programs/    # Programs page components
│   │   │   ├── market-needs/
│   │   │   ├── solutions/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── layout/      # Header, Footer
│   │   │   └── ui/          # UI components
│   │   ├── pages/           # Page components
│   │   └── App.tsx          # Main app component
│   ├── styles/
│   │   ├── index.css        # Main CSS file
│   │   ├── tailwind.css     # Tailwind imports
│   │   ├── theme.css        # Theme variables
│   │   └── fonts.css        # Font imports
│   └── main.tsx             # App entry point
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.ts           # Vite configuration
└── tsconfig.json            # TypeScript config
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server (with hot reload)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Technologies Used

- **React 18.3** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Lucide React** - Icon library
- **React Hook Form** - Form handling
- **Motion** - Animation library

## 📄 Pages Included

1. **Home** - Hero, Programs overview, Teaching platforms, Why Veriton
2. **Programs** - Detailed program listings and information
3. **Market Needs** - Industry trends and skills gap analysis
4. **Solutions** - Problem-solution framework
5. **About** - Mission, vision, timeline, methodology
6. **Contact** - Contact form and information

## 🔧 Troubleshooting

### Port already in use
If port 5173 is already in use, Vite will automatically try the next available port (5174, 5175, etc.)

### Dependencies installation fails
Try clearing npm cache and reinstalling:
```bash
npm cache clean --force
npm install
```

### Styles not loading
Make sure all CSS files are present in the `src/styles/` directory.

### "Module not found" errors
This usually means dependencies aren't installed. Run:
```bash
npm install
```

## 🚀 Building for Production

When you're ready to deploy:

1. Build the project:
```bash
npm run build
```

2. This creates a `dist/` folder with optimized files ready for deployment

3. Test the production build locally:
```bash
npm run preview
```

## 📦 Deployment

The `dist/` folder can be deployed to any static hosting service:
- **Vercel** - `vercel deploy`
- **Netlify** - Drag and drop `dist` folder
- **GitHub Pages** - Upload `dist` contents
- **Any web server** - Upload `dist` contents to public folder

## 🌟 Key Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Modern gradient design with blue-indigo color scheme
- ✅ Component-based architecture (25+ modular components)
- ✅ Ready for Angular conversion
- ✅ Two teaching platforms (Schools & Individual learners)
- ✅ Real images from Unsplash
- ✅ Professional UI with smooth animations
- ✅ SEO-friendly structure

## 📝 Converting to Angular 20

This React codebase is designed to be easily converted to Angular 20:

1. Each component maps to an Angular component
2. Pages can become routed modules
3. Component hierarchy is already modular
4. Styling uses utility classes (compatible with Angular + Tailwind)

## 🤝 Need Help?

If you encounter any issues:
1. Make sure Node.js version is 18.x or higher
2. Delete `node_modules` folder and `package-lock.json`, then run `npm install` again
3. Check that all files were extracted properly from the download
4. Ensure no other application is using port 5173

## 📄 License

This project is private and proprietary to Veriton.

---

**Built with ❤️ for STEM Education**