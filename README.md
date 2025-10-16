# Cyberrk Technology Website

A modern, production-ready website built with Next.js 14 and Chakra UI, featuring elegant animations and a dark/light theme toggle.

## Features

- ⚡ **Next.js 14** - Latest React framework with App Router
- 🎨 **Chakra UI** - Modern component library with built-in accessibility
- 🌓 **Dark/Light Mode** - Seamless theme switching with custom color palette
- ✨ **Framer Motion** - Smooth, professional animations
- 📱 **Fully Responsive** - Mobile-first design approach
- 🎯 **SEO Optimized** - Meta tags and semantic HTML
- 🚀 **Production Ready** - Optimized for performance
- 💼 **TypeScript** - Type-safe code

## Color Palette

- Royal Blue Traditional: `#00296b`
- Marian Blue: `#003f88`
- Polynesian Blue: `#00509d`
- Mikado Yellow: `#fdc500`
- Gold: `#ffd500`

## Services Offered

1. **SEO Optimization** - Boost your online visibility
2. **Website Design & Development** - Custom web solutions
3. **Mobile & Web Applications** - Cross-platform development
4. **Development Training** - Professional courses and bootcamps

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cyberrk-website
```

2. Install dependencies:
```bash
npm install
```

3. **Setup Favicon (Optional but Recommended)**:
   - Open `FAVICON_GENERATOR.html` in your browser
   - Follow the instructions to generate favicon files
   - Place them in the `public/` folder

4. **Setup Email Functionality (Optional)**:
   - Follow instructions in `EMAIL_SETUP.md`
   - Get a free Web3Forms access key
   - Create `.env.local` with your key

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
cyberrk-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with providers
│   │   ├── page.tsx            # Home page
│   │   ├── providers.tsx       # Chakra UI provider
│   │   ├── services/
│   │   │   └── page.tsx        # Services page
│   │   ├── about/
│   │   │   └── page.tsx        # About page
│   │   └── contact/
│   │       └── page.tsx        # Contact page
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation with theme toggle
│   │   ├── Hero.tsx            # Hero section with animations
│   │   ├── Services.tsx        # Services showcase
│   │   ├── About.tsx           # About section
│   │   ├── Contact.tsx         # Contact form
│   │   └── Footer.tsx          # Footer component
│   └── theme/
│       └── index.ts            # Custom Chakra UI theme
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## Key Features Explained

### Theme Toggle
The navigation bar includes a theme toggle button that smoothly transitions between light and dark modes, with custom colors for each theme.

### Gradient Text
Landing page headings feature animated gradient text using the custom color palette for a modern, eye-catching effect.

### Animations
- Hero section with floating background elements
- Smooth page transitions
- Hover effects on cards and buttons
- Scroll-triggered animations using Framer Motion

### Responsive Design
- Mobile-first approach
- Breakpoints: base (mobile), md (tablet), lg (desktop)
- Collapsible navigation menu on mobile

## Customization

### Updating Colors
Edit `src/theme/index.ts` to modify the color palette:

```typescript
const colors = {
  brand: {
    royalBlue: '#00296b',
    marianBlue: '#003f88',
    polynesianBlue: '#00509d',
    mikadoYellow: '#fdc500',
    gold: '#ffd500',
  },
};
```

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Import and use existing components

### Modifying Content
- Update service information in `src/components/Services.tsx`
- Edit company details in `src/components/About.tsx`
- Modify contact information in `src/components/Contact.tsx`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Other Platforms
```bash
npm run build
npm start
```

## Performance Optimization

- Automatic code splitting
- Image optimization with Next.js Image component
- CSS-in-JS with Emotion (Chakra UI)
- Server-side rendering for better SEO

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Support

For support, email info@cyberrk.com or visit our contact page.

## Acknowledgments

- Next.js team for the amazing framework
- Chakra UI for the component library
- Framer Motion for animation capabilities
