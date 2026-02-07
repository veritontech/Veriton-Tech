# 🚀 QUICK SETUP GUIDE FOR VERITON WEBSITE

## Step-by-Step Setup (For Beginners)

### Step 1: Install Node.js

1. Go to https://nodejs.org/
2. Download the **LTS version** (Long Term Support)
3. Run the installer
4. Follow the installation wizard (click "Next" and keep default settings)
5. Verify installation by opening **Command Prompt** (Windows) or **Terminal** (Mac/Linux) and typing:
   ```
   node --version
   ```
   You should see something like `v18.x.x` or `v20.x.x`

### Step 2: Extract and Open Project

1. Extract the downloaded ZIP file to a location like `Documents/veriton-website`
2. Open **Command Prompt** (Windows) or **Terminal** (Mac/Linux)
3. Navigate to the project folder:
   ```bash
   cd Documents/veriton-website
   ```
   (Replace with your actual folder path)

### Step 3: Install Dependencies

In the terminal, run this command:
```bash
npm install
```

This will take 2-5 minutes. You'll see a progress bar downloading all required packages.

**Common Issues:**
- If you get "npm command not found", Node.js isn't installed properly. Go back to Step 1.
- If installation fails, try running: `npm cache clean --force` then `npm install` again

### Step 4: Start the Development Server

Once installation is complete, run:
```bash
npm run dev
```

You should see output like:
```
  VITE v6.3.5  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Step 5: View the Website

1. Open your web browser (Chrome, Firefox, Edge, etc.)
2. Go to: `http://localhost:5173`
3. You should see the Veriton website! 🎉

### Step 6: Making Changes

- The website will automatically reload when you save changes to any file
- Edit files in the `src/` folder to customize the website
- Press `Ctrl+C` in the terminal to stop the development server

---

## 📁 What Files Can I Edit?

### To Change Content:
- **src/app/components/** - Edit component text and structure
- **src/app/pages/** - Edit page layouts

### To Change Styles:
- **src/styles/theme.css** - Edit colors, fonts, spacing
- Individual component files - Add Tailwind classes

### To Change Images:
- Components use Unsplash images - search for `unsplash` in component files

---

## 🆘 Troubleshooting

### "Cannot find module" error
**Solution:** Run `npm install` again

### "Port 5173 already in use"
**Solution:** Close other applications or Vite will use port 5174 automatically

### Changes not showing
**Solution:** 
1. Save the file you edited
2. Check the terminal for errors
3. Refresh your browser (Ctrl+R or Cmd+R)

### Website looks broken
**Solution:**
1. Stop the server (Ctrl+C)
2. Run `npm install` again
3. Run `npm run dev` again

---

## 🏗️ Building for Production

When ready to deploy online:

1. Run:
   ```bash
   npm run build
   ```

2. A `dist` folder will be created with optimized files

3. Upload the `dist` folder contents to your web hosting service

---

## 💡 Tips

- Keep the terminal window open while working
- Use VS Code or any code editor to edit files
- Always run `npm install` after downloading or updating the project
- The website runs locally - only you can see it until you deploy it online

---

## 📞 Common Commands Reference

| Command | What it does |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `Ctrl+C` | Stop the development server |

---

**Need more help?** Check README.md for detailed documentation.
