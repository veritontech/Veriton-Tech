# 🔧 Troubleshooting Guide - Veriton Website

## Common Issues and Solutions

### 1. "Command not found: npm" or "npm is not recognized"

**Problem:** Node.js is not installed or not in your system PATH.

**Solution:**
1. Download and install Node.js from https://nodejs.org/
2. Choose the LTS (Long Term Support) version
3. Restart your terminal/command prompt after installation
4. Verify installation: `node --version` and `npm --version`

---

### 2. "Cannot find module" or "Module not found"

**Problem:** Dependencies are not installed.

**Solution:**
```bash
# Delete node_modules and lock file
rm -rf node_modules package-lock.json

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
npm install
```

**For Windows:**
```bash
# Delete node_modules folder manually or use:
rmdir /s node_modules
del package-lock.json

# Clear cache and reinstall
npm cache clean --force
npm install
```

---

### 3. Installation Fails or Hangs

**Problem:** Network issues, corrupted cache, or permission problems.

**Solutions:**

**Try 1: Use different registry**
```bash
npm install --registry=https://registry.npmjs.org/
```

**Try 2: Clear cache**
```bash
npm cache clean --force
npm install
```

**Try 3: Check permissions (Mac/Linux)**
```bash
sudo chown -R $USER:$GROUP ~/.npm
sudo chown -R $USER:$GROUP ~/.config
```

**Try 4: Use different package manager**
```bash
# Install pnpm
npm install -g pnpm

# Use pnpm instead
pnpm install
pnpm dev
```

---

### 4. "Port 5173 is already in use"

**Problem:** Another application is using the default port.

**Solutions:**

**Option 1:** Vite will automatically use the next available port (5174, 5175, etc.)

**Option 2:** Manually specify a different port
```bash
npm run dev -- --port 3000
```

**Option 3:** Kill the process using port 5173

**Windows:**
```bash
netstat -ano | findstr :5173
taskkill /PID [PID_NUMBER] /F
```

**Mac/Linux:**
```bash
lsof -ti:5173 | xargs kill
```

---

### 5. Blank White Screen / Nothing Shows

**Problem:** Build errors, JavaScript errors, or missing files.

**Solutions:**

**Check browser console:**
1. Open browser Developer Tools (F12 or Ctrl+Shift+I)
2. Go to Console tab
3. Look for error messages

**Check terminal:**
- Look for compilation errors in the terminal where you ran `npm run dev`

**Try rebuilding:**
```bash
# Stop the server (Ctrl+C)
rm -rf dist
npm run dev
```

---

### 6. CSS/Styles Not Loading

**Problem:** Tailwind CSS not configured properly or CSS files missing.

**Solutions:**

**Verify CSS files exist:**
```bash
# Check these files exist:
src/styles/index.css
src/styles/tailwind.css
src/styles/theme.css
src/styles/fonts.css
```

**Restart dev server:**
```bash
# Stop server (Ctrl+C)
npm run dev
```

**Clear browser cache:**
- Chrome: Ctrl+Shift+Delete (or Cmd+Shift+Delete on Mac)
- Or try incognito/private mode

---

### 7. "TypeScript" Errors

**Problem:** Missing type definitions or TypeScript configuration issues.

**Solution:**
```bash
# Install missing type definitions
npm install --save-dev @types/node @types/react @types/react-dom

# Restart TypeScript server in VS Code
# Press: Ctrl+Shift+P (or Cmd+Shift+P on Mac)
# Type: "TypeScript: Restart TS Server"
```

---

### 8. Changes Not Reflecting / Hot Reload Not Working

**Problem:** Vite's hot module replacement (HMR) not working.

**Solutions:**

**Hard refresh browser:**
- Chrome/Edge: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
- Or clear cache

**Restart dev server:**
```bash
# Stop server (Ctrl+C)
npm run dev
```

**Check file watchers (Linux):**
```bash
# Increase file watcher limit
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

---

### 9. Build Fails (`npm run build`)

**Problem:** TypeScript errors, missing dependencies, or configuration issues.

**Solutions:**

**Check for errors:**
```bash
npm run build
# Read the error messages carefully
```

**Common fixes:**
```bash
# Update dependencies
npm update

# Clean install
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

---

### 10. Images Not Loading from Unsplash

**Problem:** Network issues or Unsplash API rate limits.

**Solutions:**

**Check internet connection**

**Replace with local images:**
1. Download images and place in `public/images/` folder
2. Update image imports in components:
```tsx
// Change from:
<img src="https://images.unsplash.com/photo-..." />

// To:
<img src="/images/your-image.jpg" />
```

---

### 11. "Permission Denied" Errors

**Problem:** Insufficient permissions to install packages or run commands.

**Solutions:**

**Mac/Linux:**
```bash
# Don't use sudo with npm! Instead fix permissions:
sudo chown -R $USER /usr/local/lib/node_modules
sudo chown -R $USER /usr/local/bin
```

**Windows:**
- Run Command Prompt or PowerShell as Administrator
- Right-click → "Run as administrator"

---

### 12. Slow Installation or Development Server

**Problem:** Large number of dependencies or system resources.

**Solutions:**

**Use pnpm (faster package manager):**
```bash
npm install -g pnpm
pnpm install
pnpm dev
```

**Close unnecessary applications**
- Free up RAM and CPU

**Check antivirus:**
- Some antivirus software slows down npm
- Add project folder to antivirus exclusions

---

### 13. Git/Version Control Issues

**Problem:** Large `node_modules` folder being tracked.

**Solution:**
```bash
# Make sure .gitignore exists with:
node_modules
dist
.env.local

# Remove node_modules from git
git rm -r --cached node_modules
git commit -m "Remove node_modules from repository"
```

---

### 14. VS Code / Editor Issues

**Problem:** IntelliSense not working, import errors shown.

**Solutions:**

**Install recommended extensions:**
1. Tailwind CSS IntelliSense
2. ESLint
3. Prettier

**Reload VS Code:**
- Ctrl+Shift+P → "Developer: Reload Window"

**Verify TypeScript version:**
- Bottom right of VS Code should show TypeScript version
- Click it to use workspace version

---

### 15. Production Build Issues

**Problem:** Build works locally but fails in production.

**Solutions:**

**Test production build locally:**
```bash
npm run build
npm run preview
```

**Check environment variables:**
- Ensure all required env vars are set in production
- Create `.env.production` file if needed

**Check build output:**
- Verify `dist` folder is created
- Check file sizes (should be optimized)

---

## 🆘 Still Having Issues?

### Checklist Before Asking for Help:

- [ ] Node.js version is 18.x or higher (`node --version`)
- [ ] Deleted `node_modules` and `package-lock.json`
- [ ] Ran `npm cache clean --force`
- [ ] Ran `npm install` successfully
- [ ] No errors in terminal when running `npm run dev`
- [ ] Checked browser console for JavaScript errors (F12)
- [ ] Tried in incognito/private browser mode
- [ ] Read all error messages carefully

### Gather This Information:

1. **Operating System:** (Windows 10/11, macOS, Linux)
2. **Node.js Version:** Run `node --version`
3. **npm Version:** Run `npm --version`
4. **Error Message:** Copy the full error from terminal
5. **Browser Console Errors:** Screenshots from F12 console
6. **What You Were Doing:** Steps to reproduce the issue

---

## 📚 Additional Resources

- **Node.js Documentation:** https://nodejs.org/docs/
- **npm Documentation:** https://docs.npmjs.com/
- **Vite Documentation:** https://vitejs.dev/
- **React Documentation:** https://react.dev/
- **Tailwind CSS:** https://tailwindcss.com/docs

---

## 🔄 Complete Reset (Last Resort)

If nothing else works, here's how to completely reset the project:

```bash
# 1. Stop the dev server (Ctrl+C)

# 2. Delete generated files
rm -rf node_modules
rm -rf dist
rm package-lock.json

# 3. Clear npm cache
npm cache clean --force

# 4. Reinstall everything
npm install

# 5. Start fresh
npm run dev
```

**Windows users replace `rm -rf` with:**
```bash
rmdir /s node_modules
rmdir /s dist
del package-lock.json
```

---

**Last Updated:** January 2026
