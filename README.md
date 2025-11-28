# React Portfolio Website

A modern, interactive portfolio website built with React featuring a space-themed project showcase with multiple viewing modes, dynamic theming, and smooth animations.

## Live Demo

Visit the live website: [https://khooinguyeen.github.io/mkn-react-portfolio](https://khooinguyeen.github.io/mkn-react-portfolio)

## Features

- **Multiple Portfolio Views:**
  - 🌌 Galaxy View: Interactive 3D planets orbiting in space
  - 🎨 Grid View: Clean card-based layout
  - 📋 List View: Detailed table format

- **Dynamic Theming:**
  - Multiple pre-configured color themes
  - Smooth theme transitions
  - Persistent theme selection across sessions

- **Interactive Elements:**
  - Animated text with bounce effects
  - Hover animations on navigation and UI elements
  - 3D rotating skill sphere on About page
  - Rotating profile image with decorative elements

- **Portfolio Management:**
  - Technology filtering
  - Project detail modals
  - GitHub repository integration
  - Direct links to live projects

- **Contact Integration:**
  - EmailJS integration for contact form
  - Interactive map with location marker
  - Social media links

- **Responsive Design:**
  - Mobile-friendly layouts
  - Adaptive navigation
  - Optimized for all screen sizes

## Tech Stack

### Core Technologies
- **React 18.2** - UI framework
- **React Router 6.3** - Client-side routing
- **SASS** - CSS preprocessing
- **EmailJS** - Contact form functionality

### UI & Animation Libraries
- **Animate.css** - Pre-built CSS animations
- **GSAP** - Advanced animations
- **React Loaders** - Loading indicators
- **Font Awesome** - Icon library

### Additional Tools
- **React Leaflet** - Interactive maps
- **Firebase** - Backend services (optional)
- **gh-pages** - GitHub Pages deployment

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 14.x or higher)
- **npm** (version 6.x or higher)
- **Git**

To check if you have Node.js and npm installed:
```bash
node --version
npm --version
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/khooinguyeen/mkn-react-portfolio.git
   cd mkn-react-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

   This will install all required packages listed in `package.json`.

3. **Set up environment variables (optional):**

   If you want to use the contact form, create a `.env` file in the root directory:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

   Get these credentials from [EmailJS](https://www.emailjs.com/).

### Running Locally

Start the development server:

```bash
npm start
```

The application will open in your browser at [http://localhost:3000](http://localhost:3000).

The page will automatically reload when you make changes. You'll see build errors and warnings in the console.

### Building for Production

Create an optimized production build:

```bash
npm run build
```

This creates a `build` folder with production-ready files optimized for performance.

## Project Structure

```
mkn-react-portfolio/
├── public/
│   ├── index.html              # HTML template
│   ├── Khoi_Nguyen_Mai_Resume.pdf  # Resume/CV file
│   └── ...
├── src/
│   ├── assets/
│   │   └── images/             # Images and icons
│   ├── components/
│   │   ├── About/              # About page component
│   │   ├── AnimatedLetters/    # Text animation component
│   │   ├── Contact/            # Contact page with form
│   │   ├── Home/               # Landing page
│   │   ├── Layout/             # Main layout wrapper
│   │   ├── Portfolio/          # Portfolio showcase
│   │   ├── Sidebar/            # Navigation sidebar
│   │   └── ThemeSwitcher/      # Theme toggle component
│   ├── context/
│   │   └── ThemeContext.js     # Theme management
│   ├── App.js                  # Main app component
│   ├── App.scss                # Global styles
│   └── index.js                # Entry point
├── package.json                # Dependencies and scripts
├── DEPLOYMENT.md              # Deployment guide
└── README.md                   # This file
```

## Customization Guide

### 1. Update Personal Information

#### Profile Picture
Replace the image at:
```
/src/assets/images/tui.jpg
```

#### Resume/CV
Replace the PDF at:
```
/public/Khoi_Nguyen_Mai_Resume.pdf
```

Update the link in `/src/components/Home/index.js`:
```javascript
<a href="/mkn-react-portfolio/YOUR_RESUME.pdf" download="Your_Name_CV.pdf">
    DOWNLOAD CV
</a>
```

### 2. Update Projects

Edit `/src/components/Portfolio/index.js`:

```javascript
const portfolio = [
    {
        name: "Full Project Name",
        shortName: "Display Name",  // Shown on planet labels
        description: "Detailed description of your project...",
        url: "https://github.com/username/repo",
        github: "https://github.com/username/repo",
        technologies: ["React", "Node.js", "MongoDB"],
        image: "https://opengraph.githubassets.com/1/username/repo",
        features: [
            "Key feature 1",
            "Key feature 2",
            "Key feature 3"
        ]
    }
];
```

### 3. Customize Themes

Edit `/src/context/ThemeContext.js`:

```javascript
const themes = {
    yourTheme: {
        name: 'Your Theme',
        colors: {
            primary: '#YOUR_COLOR',
            secondary: '#YOUR_COLOR',
            accent: '#YOUR_COLOR',
            // ... more colors
        }
    }
};
```

### 4. Update Contact Information

Edit `/src/components/Contact/index.js`:

- Update map coordinates
- Change contact email
- Modify EmailJS configuration

### 5. Modify Navigation

Edit `/src/components/Sidebar/index.js`:

- Add or remove navigation links
- Update social media links
- Change navigation icons

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm run deploy`
Deploys the production build to GitHub Pages.

### `npm run eject`
**Note: this is a one-way operation!** Ejects from Create React App for full configuration control.

## Deployment

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

Quick deployment to GitHub Pages:

```bash
npm run deploy
```

## Browser Support

This project supports modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

- Code splitting for reduced bundle size
- Lazy loading of components
- Optimized images
- CSS minification
- Tree shaking for unused code

## Troubleshooting

### Port 3000 Already in Use

```bash
# Linux/Mac
PORT=3001 npm start

# Windows
set PORT=3001 && npm start
```

### Dependencies Installation Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Build Errors

```bash
# Clear build cache
rm -rf build
npm run build
```

### Styling Issues

If styles don't load properly, ensure SASS is installed:
```bash
npm install sass --save
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from [Font Awesome](https://fontawesome.com/)
- Animations from [Animate.css](https://animate.style/)
- Maps powered by [Leaflet](https://leafletjs.com/)

## Contact

**Khoi Nguyen (Julian)**

- GitHub: [@khooinguyeen](https://github.com/khooinguyeen)
- Portfolio: [https://khooinguyeen.github.io/mkn-react-portfolio](https://khooinguyeen.github.io/mkn-react-portfolio)

---

