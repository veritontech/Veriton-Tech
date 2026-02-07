# 📥 How to Download and Run Your Veriton Website

## What You're Getting

A complete, production-ready STEM education website with:
- ✅ 6 fully-functional pages
- ✅ 65+ modular components
- ✅ Professional blue-indigo design
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Teaching Platforms section (School + Individual)
- ✅ Ready for local development
- ✅ Complete documentation (8 guides!)

---

## 📦 Download Methods

### Method 1: Download from Figma Make (Recommended)

1. **Click the Download button** in Figma Make
2. **Save the ZIP file** to your computer (e.g., Downloads folder)
3. **Extract the ZIP file:**
   - **Windows:** Right-click → "Extract All"
   - **Mac:** Double-click the ZIP file
   - **Linux:** Right-click → "Extract Here"
4. **Move the folder** to a good location like:
   - `Documents/Projects/veriton-website`
   - `~/dev/veriton-website`
   - Anywhere you keep your projects!

### Method 2: Clone with Git (If Available)

```bash
git clone [repository-url]
cd veriton-website
```

---

## 🚀 Quick Setup (3 Steps)

Once you have the folder on your computer:

### Step 1: Open Terminal/Command Prompt

**Windows:**
- Press `Win + R`
- Type `cmd` and press Enter

**Mac:**
- Press `Cmd + Space`
- Type `Terminal` and press Enter

**Linux:**
- Press `Ctrl + Alt + T`

### Step 2: Navigate to the Project

```bash
cd path/to/veriton-website
```

**Example:**
```bash
cd Documents/Projects/veriton-website
```

**Tip:** You can drag the folder into Terminal to get its path!

### Step 3: Install and Run

```bash
npm install    # Wait 2-5 minutes
npm run dev    # Starts the website
```

**Open your browser to:** `http://localhost:5173`

---

## 📁 What's in the Download?

```
veriton-website.zip
└── veriton-website/
    ├── 📚 Documentation (8 files)
    │   ├── START-HERE.md          ⭐ Read this first!
    │   ├── README.md              📖 Complete guide
    │   ├── SETUP-GUIDE.md         🔧 Detailed setup
    │   ├── WEBSITE-OVERVIEW.md    🌐 Pages & features
    │   ├── TROUBLESHOOTING.md     🆘 Fix problems
    │   ├── PROJECT-STRUCTURE.md   📁 File organization
    │   ├── QUICK-REFERENCE.md     ⚡ Command cheat sheet
    │   └── CHANGELOG.md           📝 What's new
    │
    ├── 📂 Source Code
    │   ├── src/                   💻 All your code
    │   ├── public/                🖼️  Static assets
    │   └── index.html             🌐 Entry point
    │
    ├── ⚙️ Configuration
    │   ├── package.json           📦 Dependencies
    │   ├── vite.config.ts         🔨 Build config
    │   └── tsconfig.json          📘 TypeScript
    │
    └── 🚫 NOT INCLUDED (auto-generated)
        ├── node_modules/          (Created by npm install)
        └── dist/                  (Created by npm run build)
```

**Total Size:**
- Downloaded ZIP: ~500 KB
- After npm install: ~250 MB (includes all dependencies)
- Built website: ~200-300 KB

---

## 💻 System Requirements

### Minimum Requirements:
- **Operating System:** Windows 10+, macOS 10.14+, or Linux
- **Node.js:** Version 18.0 or higher
- **RAM:** 4 GB minimum
- **Disk Space:** 500 MB free space
- **Internet:** Required for initial npm install

### Recommended:
- **RAM:** 8 GB or more
- **Disk Space:** 1 GB free space
- **Code Editor:** VS Code (free)
- **Browser:** Chrome, Firefox, or Edge (latest version)

---

## 🔍 First-Time Setup Checklist

Before you start, make sure you have:

- [ ] **Node.js installed** (version 18 or higher)
  - Check: `node --version`
  - Download: https://nodejs.org/

- [ ] **npm installed** (comes with Node.js)
  - Check: `npm --version`

- [ ] **Code editor** (VS Code recommended)
  - Download: https://code.visualstudio.com/

- [ ] **Modern browser** (Chrome, Firefox, Edge)

- [ ] **Terminal/Command Prompt** access

- [ ] **Internet connection** (for npm install)

---

## 🎯 What to Do After Download

### For Complete Beginners:

1. ✅ Extract the ZIP file
2. 📖 Open `START-HERE.md` in any text editor
3. 📋 Follow the step-by-step instructions
4. 🆘 If stuck, check `TROUBLESHOOTING.md`

### For Developers:

1. ✅ Extract the ZIP file
2. ⚡ Open `QUICK-REFERENCE.md`
3. 💻 Run `npm install && npm run dev`
4. 🎨 Start customizing!

### For Project Managers:

1. ✅ Extract the ZIP file
2. 🌐 Read `WEBSITE-OVERVIEW.md` to see all features
3. 📁 Review `PROJECT-STRUCTURE.md` to understand organization
4. 👥 Share appropriate guides with your team

---

## 📚 Documentation Guide

**Choose the right guide for your needs:**

| I want to... | Read this file |
|--------------|----------------|
| Get started quickly | START-HERE.md |
| Understand what I'm building | WEBSITE-OVERVIEW.md |
| Set up step-by-step | SETUP-GUIDE.md |
| Fix a problem | TROUBLESHOOTING.md |
| Understand the code structure | PROJECT-STRUCTURE.md |
| Find commands quickly | QUICK-REFERENCE.md |
| See the file tree | FILE-TREE.txt |
| Know what's new | CHANGELOG.md |
| Read everything | README.md |

---

## 🔧 Common Post-Download Issues

### Issue 1: "ZIP file won't extract"

**Solution:**
- Right-click the ZIP file
- Select "Extract All" (Windows) or double-click (Mac)
- Choose a destination folder
- Make sure you have write permissions

### Issue 2: "Can't find the project folder"

**Solution:**
- Check your Downloads folder
- Look for "veriton-website" or "veriton-website-main"
- Use your file manager's search function
- Make sure extraction completed successfully

### Issue 3: "Files look weird or corrupted"

**Solution:**
- Re-download the ZIP file
- Make sure download completed (check file size)
- Try a different extraction tool (7-Zip, WinRAR, etc.)
- Check antivirus didn't quarantine files

### Issue 4: "node_modules folder is missing"

**Solution:**
- This is normal! node_modules is created by `npm install`
- It's intentionally not included in the download (too large)
- Just run `npm install` to create it

---

## 🚀 Next Steps After Installation

1. **Explore the Website**
   - Click through all 6 pages
   - Check responsiveness (resize browser)
   - Look at the Teaching Platforms section

2. **Read Documentation**
   - Start with START-HERE.md
   - Move to WEBSITE-OVERVIEW.md
   - Keep QUICK-REFERENCE.md handy

3. **Make Your First Edit**
   - Open `/src/app/components/home/HeroSection.tsx`
   - Change some text
   - Save and watch it update in browser!

4. **Customize the Design**
   - Open `/src/styles/theme.css`
   - Change colors to match your brand
   - Add your logo to the header

5. **Add Your Content**
   - Replace placeholder text
   - Add your own images
   - Update contact information

---

## 💡 Pro Tips

### Tip 1: Organize Your Workspace
```
Projects/
└── veriton-website/
    ├── (downloaded files here)
    └── backups/         ← Create this for safety
```

### Tip 2: Keep Backups
Before making big changes:
```bash
# Copy the whole folder
cp -r veriton-website veriton-website-backup-2026-01-27
```

### Tip 3: Use VS Code
1. Download VS Code: https://code.visualstudio.com/
2. Open the project folder in VS Code
3. Install recommended extensions (it will ask you)
4. Use built-in terminal: Ctrl+` (backtick)

### Tip 4: Learn by Doing
- Start with small changes
- Use the browser's inspect tool (F12)
- Check the console for errors
- Read error messages carefully

### Tip 5: Git for Version Control
```bash
cd veriton-website
git init
git add .
git commit -m "Initial commit - Downloaded Veriton website"
```

---

## 🎓 Learning Resources

### For React Beginners:
- Official React Docs: https://react.dev/
- React Tutorial: https://react.dev/learn

### For TypeScript:
- TypeScript Handbook: https://typescriptlang.org/docs/

### For Tailwind CSS:
- Tailwind Docs: https://tailwindcss.com/docs
- Tailwind Cheat Sheet: https://nerdcave.com/tailwind-cheat-sheet

### For Vite:
- Vite Guide: https://vitejs.dev/guide/

---

## 📞 Support Checklist

Before asking for help, make sure:

- [ ] You've read START-HERE.md
- [ ] You've checked TROUBLESHOOTING.md
- [ ] Node.js is installed (version 18+)
- [ ] You've run `npm install` successfully
- [ ] You've tried `npm cache clean --force` then `npm install`
- [ ] You've checked browser console for errors (F12)
- [ ] You've read the error messages carefully

---

## ✅ Success Indicators

You'll know everything is working when:

✅ `npm install` completes without errors
✅ `npm run dev` starts the server
✅ Browser shows the Veriton website at localhost:5173
✅ You can navigate between all 6 pages
✅ Changes to files update automatically in browser
✅ No errors in browser console (F12)

---

## 🎉 You're All Set!

Your Veriton website is ready to:
- ✅ Run locally for development
- ✅ Be customized to your needs
- ✅ Be built for production
- ✅ Be deployed to any hosting service
- ✅ Be converted to Angular 20 (if needed)

**Now start building something amazing!**

---

## 📄 File Manifest

**What you should have after extraction:**

```
Documentation:     8 files
Source Code:       65+ components
Configuration:     10+ files
Styles:            4 CSS files
TypeScript:        2 config files
Total Files:       100+ files
Total Folders:     20+ folders
```

**What will be created by npm install:**
```
node_modules/      1000+ packages
package-lock.json  1 file
```

**What will be created by npm run build:**
```
dist/              Optimized production files
```

---

**Questions?** Check the documentation files included in your download!

**Happy Coding! 🚀**
