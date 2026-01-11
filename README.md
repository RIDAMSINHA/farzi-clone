# Farzi London - Modern Indian Restaurant Website

A modern, responsive website for Farzi London restaurant built with Next.js 15.

## 🏗️ Project Structure

```
farzi-next/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and imports
│   │   ├── layout.js            # Root layout with Header
│   │   └── page.js              # Home page composition
│   ├── components/
│   │   ├── About/               # About section
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Destinations/        # Two locations section
│   │   │   ├── Destinations.jsx
│   │   │   └── Destinations.css
│   │   ├── Footer/              # Footer with contact info
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── Gallery/             # Image gallery section
│   │   │   ├── Gallery.jsx
│   │   │   └── Gallery.css
│   │   ├── Header/              # Fixed header with navigation
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── Hero/                # Video hero section
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── Newsletter/          # Newsletter signup
│   │   │   ├── Newsletter.jsx
│   │   │   └── Newsletter.css
│   │   ├── PrivateHire/         # Private hire section
│   │   │   ├── PrivateHire.jsx
│   │   │   └── PrivateHire.css
│   │   └── Story/               # The Farzi story section
│   │       ├── Story.jsx
│   │       └── Story.css
│   └── styles/
│       └── variables.css        # CSS custom properties (design tokens)
└── public/
    └── hero.mp4                 # Hero video file
```

## 🎨 Design System

### CSS Variables

All design tokens are centralized in `src/styles/variables.css`:

#### Colors
- **Primary Brand**: `--color-primary` (#c9a961)
- **Dark Backgrounds**: `--color-bg-dark-teal` (#1a4040)
- **Text Colors**: `--color-text-light`, `--color-text-dark`, etc.

#### Spacing
- Scale from `--spacing-xs` (0.5rem) to `--spacing-4xl` (8rem)

#### Typography
- Primary font: `--font-primary` (Cormorant Garamond)
- Font sizes: `--font-size-xs` to `--font-size-6xl`

### Changing Colors

To change the color scheme:
1. Open `src/styles/variables.css`
2. Modify the color variables:
```css
:root {
  --color-primary: #your-new-color;
  --color-bg-dark-teal: #your-background;
}
```

### Modifying Component Styles

Each component has its own CSS file for easy maintenance:

1. **Locate the component**: `src/components/[ComponentName]/`
2. **Edit the CSS file**: `[ComponentName].css`
3. **Use CSS variables**: Reference design tokens for consistency

Example:
```css
/* Instead of hard-coded colors */
background: #c9a961; ❌

/* Use variables */
background: var(--color-primary); ✅
```

## 🧩 Component Architecture

### Header Component
- Fixed position navigation
- Mobile-responsive hamburger menu
- Smooth slide-in menu on mobile

### Hero Component
- Full-screen video background
- Centered logo mark
- Responsive typography

### Section Components
All section components follow the same pattern:
- Separator lines (top and bottom)
- Consistent padding using spacing variables
- Responsive breakpoints at 1024px and 768px

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🎯 Button Styles

Buttons are component-specific (not global) for easy customization:

```jsx
// In component CSS file
.component-name button {
  background: var(--color-primary);
  border: 2px solid var(--color-primary);
  /* ... other styles */
}
```

## 🚀 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📝 Common Tasks

### Adding a New Section
1. Create folder: `src/components/NewSection/`
2. Create files:
   - `NewSection.jsx`
   - `NewSection.css`
3. Import in `src/app/page.js`
4. Use CSS variables for styling

### Changing Fonts
Edit `src/app/layout.js` to import different Google Fonts or update `--font-primary` in variables.css

### Updating Separator Lines
All sections use:
```css
.section::before,
.section::after {
  background: var(--color-separator);
}
```

## 🔧 Customization Guide

### Modifying Spacing
```css
/* In variables.css */
--spacing-xl: 3rem; /* Change this value */

/* Then use in components */
padding: var(--spacing-xl);
```

### Changing Button Styles
Each button is styled in its component's CSS file. Find the component and modify:
```css
.component-name button {
  /* Modify these properties */
}
```

### Adjusting Responsive Behavior
Edit media queries in component CSS files:
```css
@media (max-width: 768px) {
  /* Mobile styles */
}
```

## 📦 Dependencies

- Next.js 15
- React 19
- CSS Modules (component-scoped)

## 🎓 Best Practices

1. **Always use CSS variables** for colors, spacing, fonts
2. **Keep components isolated** - each has its own CSS
3. **Follow naming conventions** - BEM-like class names
4. **Mobile-first approach** - design for mobile, enhance for desktop
5. **Semantic HTML** - use proper section, header, footer tags

## 📞 Support

For questions about customization or development, refer to this documentation or examine the well-commented code in each component.
