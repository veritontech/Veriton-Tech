# ⚡ Quick Reference Card - Veriton Website

## 🚀 Get Started in 3 Steps

```bash
1. npm install          # Install dependencies (5 mins)
2. npm run dev          # Start dev server
3. Open localhost:5173  # View in browser
```

## 📋 Essential Commands

| Command | What it does |
|---------|--------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `Ctrl+C` | Stop the dev server |

## 📁 Key Files & Folders

```
src/
├── app/App.tsx              # Main app component
├── app/pages/               # Full page components
│   ├── HomePage.tsx
│   ├── ProgramsPage.tsx
│   └── ...
├── app/components/          # Reusable components
│   ├── home/               # Home page sections
│   ├── layout/             # Header, Footer
│   └── ui/                 # Buttons, Cards, etc.
└── styles/
    ├── theme.css           # 🎨 Edit colors here
    └── fonts.css           # 🔤 Add fonts here
```

## 🎨 Common Customizations

### Change Colors
**File:** `/src/styles/theme.css`
```css
:root {
  --color-primary: #2563eb;  /* Blue */
  --color-secondary: #4f46e5; /* Indigo */
}
```

### Add a Font
**File:** `/src/styles/fonts.css`
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font');
```

### Add an Image
```tsx
// Place image in /public/images/
<img src="/images/photo.jpg" alt="Description" />

// Or use Unsplash
<img src="https://images.unsplash.com/photo-..." alt="Description" />
```

### Add an Icon
```tsx
import { IconName } from 'lucide-react';

<IconName className="w-6 h-6" />
```
Browse icons: https://lucide.dev/icons/

## 🧩 Component Template

```tsx
// /src/app/components/[category]/YourComponent.tsx

export function YourComponent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">
          Your Heading
        </h2>
        <p className="text-slate-600">
          Your content here
        </p>
      </div>
    </section>
  );
}
```

## 🎯 Tailwind CSS Cheat Sheet

### Layout
```tsx
className="container mx-auto px-4"      // Container with padding
className="grid md:grid-cols-2 gap-8"   // 2-column grid
className="flex items-center gap-4"     // Flexbox centered
```

### Spacing
```tsx
className="p-8"      // Padding all sides
className="py-16"    // Padding top/bottom
className="mb-6"     // Margin bottom
className="gap-4"    // Gap between flex/grid items
```

### Colors
```tsx
className="bg-blue-600"         // Background
className="text-white"          // Text color
className="border-slate-200"    // Border color
```

### Typography
```tsx
className="text-3xl"        // Font size
className="font-bold"       // Font weight
className="text-center"     // Text alignment
```

### Effects
```tsx
className="rounded-lg"              // Rounded corners
className="shadow-lg"               // Drop shadow
className="hover:bg-blue-700"       // Hover state
className="transition-all"          // Smooth transitions
```

### Responsive Design
```tsx
className="text-xl md:text-3xl"          // Small on mobile, large on desktop
className="grid grid-cols-1 md:grid-cols-2"  // 1 col mobile, 2 cols desktop
```

**Breakpoints:**
- `sm:` - 640px and up (mobile)
- `md:` - 768px and up (tablet)
- `lg:` - 1024px and up (desktop)
- `xl:` - 1280px and up (large desktop)

## 🔧 Quick Fixes

### Styles not showing?
```bash
# Restart server
Ctrl+C
npm run dev
```

### Changes not updating?
```bash
# Hard refresh browser
Ctrl+Shift+R (Windows)
Cmd+Shift+R (Mac)
```

### Install failed?
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Port already in use?
```bash
# Vite will auto-use next port (5174, 5175...)
# Or specify custom port:
npm run dev -- --port 3000
```

## 📦 Useful Packages Already Installed

| Package | Usage | Import |
|---------|-------|--------|
| lucide-react | Icons | `import { Icon } from 'lucide-react'` |
| motion | Animations | `import { motion } from 'motion/react'` |
| react-hook-form | Forms | `import { useForm } from 'react-hook-form'` |
| recharts | Charts | `import { LineChart } from 'recharts'` |

## 🗺️ Navigation Flow

```
User clicks link in Header
    ↓
App.tsx updates currentPage state
    ↓
renderPage() function runs
    ↓
Correct Page component renders
    ↓
Page imports and displays its sections
```

## 🎨 Design System

**Colors:**
- Primary: Blue (#2563eb)
- Secondary: Indigo (#4f46e5)
- Accent: Purple
- Neutral: Slate

**Gradients:**
```tsx
className="bg-gradient-to-r from-blue-600 to-indigo-600"
className="bg-gradient-to-br from-slate-50 to-blue-50"
```

## 🔍 Finding Things

### Search for a component:
```bash
# In terminal/command prompt
find . -name "*Hero*"

# Or search in VS Code: Ctrl+P
```

### Search for text in files:
```bash
# VS Code: Ctrl+Shift+F
# Search for: "the text you're looking for"
```

## 📊 Project Stats

- **Total Components:** 25+
- **Pages:** 6 (Home, Programs, Market Needs, Solutions, About, Contact)
- **UI Components:** 40+ reusable primitives
- **Dependencies:** 60+
- **Build Time:** ~10-30 seconds
- **Dev Server Startup:** ~1-3 seconds

## 🆘 Emergency Contacts

1. **Node.js Issues:** Check NODE_VERSION >= 18
2. **CSS Issues:** Check `/src/styles/` files exist
3. **Import Issues:** Use `@/` alias, not relative paths
4. **Build Issues:** Read error messages carefully!

## 📚 Documentation Files

- **README.md** - Full documentation
- **SETUP-GUIDE.md** - Step-by-step setup (for beginners)
- **TROUBLESHOOTING.md** - Common issues and fixes
- **PROJECT-STRUCTURE.md** - File/folder explanation
- **QUICK-REFERENCE.md** - This file!

## ⌨️ VS Code Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+P` | Quick file open |
| `Ctrl+Shift+F` | Search in files |
| `Ctrl+`` | Toggle terminal |
| `Alt+Up/Down` | Move line up/down |
| `Ctrl+D` | Select next occurrence |
| `Ctrl+/` | Comment/uncomment |

## 🌐 Useful Links

- **React Docs:** https://react.dev/
- **Tailwind Docs:** https://tailwindcss.com/
- **Lucide Icons:** https://lucide.dev/
- **Vite Docs:** https://vitejs.dev/
- **TypeScript:** https://typescriptlang.org/

---

## 💡 Pro Tips

1. **Always run `npm install`** after downloading/cloning
2. **Use `@/` imports** instead of relative paths
3. **Keep dev server running** while coding
4. **Check browser console** (F12) for errors
5. **Use Tailwind classes** instead of custom CSS
6. **Build often** to catch production issues early
7. **Test on mobile** using browser DevTools
8. **Commit code frequently** if using Git

---

**Print this and keep it handy! 📌**
