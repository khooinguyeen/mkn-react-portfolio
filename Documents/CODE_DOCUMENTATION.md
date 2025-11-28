# React Portfolio - Code Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Core Components](#core-components)
6. [Routing System](#routing-system)
7. [State Management](#state-management)
8. [External Integrations](#external-integrations)
9. [Styling Approach](#styling-approach)
10. [Deployment](#deployment)
11. [Key Features](#key-features)

---

## Project Overview

This is a personal portfolio website built with React, showcasing the work and skills of Mai Khôi Nguyên, a Vietnamese high school student passionate about programming and AI. The portfolio features animated text, a responsive design, contact functionality, and a Firebase-integrated dashboard for content management.

**Live Site:** https://khooinguyeen.github.io/mkn-react-portfolio

---

## Architecture

### Application Flow

```
index.js (Entry Point)
    ↓
  App.js (Router Configuration)
    ↓
Layout Component (Persistent Layout)
    ├── Sidebar (Navigation)
    └── Outlet (Dynamic Content)
        ├── Home
        ├── About
        ├── Contact
        ├── Portfolio
        ├── Dashboard
        └── TemplateBlog
```

The application uses a nested routing structure where the `Layout` component wraps all pages, providing consistent navigation and design elements.

---

## Technology Stack

### Core Technologies
- **React 18.2.0** - UI library
- **React Router DOM 6.3.0** - Client-side routing
- **Sass 1.54.5** - CSS preprocessing

### UI/UX Libraries
- **Animate.css 4.1.1** - CSS animations
- **GSAP Trial 3.11.0** - Advanced animations
- **React Loaders 3.0.1** - Loading animations
- **FontAwesome** - Icon library (brands & solid)

### Backend Services
- **Firebase 9.10.0** - Backend-as-a-Service
  - Authentication
  - Firestore Database
  - Storage

### Additional Libraries
- **EmailJS Browser 3.6.2** - Email service integration
- **React Leaflet 4.0.2** - Interactive maps

### Development Tools
- **React Scripts 5.0.1** - Build tooling
- **gh-pages 4.0.0** - GitHub Pages deployment

---

## Project Structure

```
mkn-react-portfolio/
├── public/
│   └── manifest.json
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── About/
│   │   │   ├── index.js
│   │   │   └── index.scss
│   │   ├── AnimatedLetters/
│   │   │   ├── index.js
│   │   │   └── index.scss
│   │   ├── Blogs/
│   │   │   ├── TemplateBlog.js
│   │   │   └── TemplateBlog.scss
│   │   ├── Contact/
│   │   │   ├── index.js
│   │   │   └── index.scss
│   │   ├── Dashboard/
│   │   │   ├── index.js
│   │   │   └── home.js
│   │   ├── Home/
│   │   │   ├── index.js
│   │   │   ├── index.scss
│   │   │   └── Logo/
│   │   ├── Layout/
│   │   │   ├── index.js
│   │   │   └── index.scss
│   │   ├── Login/
│   │   │   └── index.js
│   │   ├── Portfolio/
│   │   │   ├── index.js
│   │   │   └── index.scss
│   │   └── Sidebar/
│   │       ├── index.js
│   │       └── index.scss
│   ├── data/
│   │   └── portfolio.json
│   ├── App.js
│   ├── App.scss
│   ├── firebase.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

---

## Core Components

### 1. App Component ([App.js](src/App.js))

**Purpose:** Root component that defines the routing structure.

**Key Features:**
- Configures all application routes
- Uses React Router v6 nested routing
- Wraps routes in a common Layout component

**Routes:**
```javascript
/ (index)         → Home
/about            → About
/contact          → Contact
/portfolio        → Portfolio
/dashboard        → Dashboard (Protected)
/templateblog     → TemplateBlog
```

---

### 2. Layout Component ([components/Layout/index.js](src/components/Layout/index.js))

**Purpose:** Provides the consistent layout structure for all pages.

**Structure:**
```jsx
<div className="App">
    <Sidebar />           {/* Navigation */}
    <div className='page'>
        <span className='tags top-tags'>&lt;body&gt;</span>
        <Outlet />        {/* Page content */}
        <span className='tags bottom-tags'>
            &lt;/body&gt;
            &lt;/html&gt;
        </span>
    </div>
</div>
```

**Features:**
- HTML-styled tags for developer aesthetic
- Sidebar navigation always visible
- Content area with React Router Outlet

---

### 3. Sidebar Component ([components/Sidebar/index.js](src/components/Sidebar/index.js))

**Purpose:** Navigation menu with social links.

**Key Features:**
- Responsive hamburger menu for mobile devices
- Icon-based navigation using FontAwesome
- Social media links (LinkedIn, GitHub, Facebook, Instagram)
- Toggle functionality for mobile navigation

**Navigation Links:**
- Home (faHome icon)
- About (faUser icon)
- Portfolio (faSuitcase icon)
- Contact (faEnvelope icon)

**State Management:**
```javascript
const [showNav, setShowNav] = useState(false);
```
Controls mobile menu visibility.

**Social Links:**
- LinkedIn: https://www.linkedin.com/in/khôi-nguyên-mai-a24609260/
- GitHub: https://github.com/khooinguyeen
- Facebook: https://www.facebook.com/khoinguyen.mai.7902
- Instagram: https://www.instagram.com/n__g__u__y__e__n/

---

### 4. Home Component ([components/Home/index.js](src/components/Home/index.js))

**Purpose:** Landing page with animated introduction.

**Key Features:**
- Character-by-character animated text
- Personal photo with decorative shape
- Call-to-action button to contact page

**Animation System:**
```javascript
const [letterClass, setLetterClass] = useState('text-animate')

useEffect(() => {
    const timer = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
}, []);
```

**Text Structure:**
- "Hi, I'm Nguyen" - Animated letter by letter
- "web developer." - Animated with staggered delay
- Subtitle: "a Vietnamese high school student who is passionate about programming, especially AI"

**Visual Elements:**
- Profile picture with h-shape decorative element
- Pacman loader animation

---

### 5. About Component ([components/About/index.js](src/components/About/index.js))

**Purpose:** About page with skills showcase.

**Key Features:**
- Animated "About me" title
- 3D rotating cube displaying tech stack icons
- Informational text about the developer

**Tech Stack Cube:**
- Face 1: Java (faJava, #D0A384)
- Face 2: Python (faPython, #306998)
- Face 3: Android (faAndroid, #3DDC84)
- Face 4: CSS3 (faCss3, #28A4D9)
- Face 5: HTML5 (faHtml5, #F06529)
- Face 6: JavaScript (faJsSquare, #EFD81D)

**Animation Timing:**
Similar to Home component - 3-second delay before hover state.

---

### 6. Contact Component ([components/Contact/index.js](src/components/Contact/index.js))

**Purpose:** Contact form and location information.

**Key Features:**

#### Contact Form Integration
Uses EmailJS for email functionality:
```javascript
const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
        'service_mkn1710',      // Service ID
        'template_mkn1710',     // Template ID
        refForm.current,
        'PXvgQw2wiXhDs5phz'    // Public Key
    )
}
```

**Form Fields:**
- Name (required)
- Email (required)
- Subject (required)
- Message (required)

#### Interactive Map
Uses React Leaflet to display location:
```javascript
<MapContainer center={[20.984470, 105.787030]} zoom={13}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker position={[20.984470, 105.787030]}>
        <Popup>Nguyen lives here, come over for a cup of coffee :)</Popup>
    </Marker>
</MapContainer>
```

**Contact Information:**
- Name: Mai Khôi Nguyên
- Location: TSQ apartment, Mo Lao urban area, Ha Dong, Hanoi, Vietnam
- Email: khoinguyenmai17102005@gmail.com
- Coordinates: 20.984470°N, 105.787030°E

---

### 7. Portfolio Component ([components/Portfolio/index.js](src/components/Portfolio/index.js))

**Purpose:** Display portfolio projects from Firebase.

**Data Flow:**
1. Component mounts
2. Fetches portfolio data from Firestore
3. Renders project cards with images, descriptions, and links

**Firebase Integration:**
```javascript
const getPortfolio = async () => {
    const querySnapshot = await getDocs(collection(db, 'portfolio'));
    setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
}
```

**Project Card Structure:**
```javascript
{
    image: "URL",
    name: "Project Name",
    description: "Tech stack or description",
    url: "Project URL"
}
```

**Features:**
- Dynamic portfolio loading from Firebase
- Image preview
- Project title and description
- "View" button linking to live project
- Grid layout for project cards

---

### 8. Dashboard Component ([components/Dashboard/index.js](src/components/Dashboard/index.js))

**Purpose:** Admin panel for managing portfolio content (protected).

**Authentication Flow:**
```javascript
const [user, setUser] = useState(null);
const auth = getAuth();

useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if(user) {
            setUser(user);
        } else {
            setUser(null);
        }
    })
}, []);

return (
    <div>
        {user ? <Home/> : <Login/>}
    </div>
)
```

**Access Control:**
- Unauthenticated users see Login component
- Authenticated users see Dashboard Home
- Uses Firebase Authentication

---

### 9. AnimatedLetters Component ([components/AnimatedLetters/index.js](src/components/AnimatedLetters/index.js))

**Purpose:** Reusable component for letter-by-letter text animation.

**Props:**
- `letterClass` - CSS class for animation state
- `strArray` - Array of characters to animate
- `idx` - Starting index for animation delay

**Implementation:**
```javascript
const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {
        strArray.map((char, i) => (
          <span key={char + i} className={`${letterClass} _${i + idx}`}>
            {char}
          </span>
       ))
      }
    </span>
  )
};
```

**How It Works:**
1. Takes a string as character array
2. Maps each character to a span
3. Applies CSS class with unique index
4. CSS animations trigger sequentially based on index

**Usage Example:**
```javascript
<AnimatedLetters
    letterClass={letterClass}
    strArray={['H','e','l','l','o']}
    idx={15}
/>
```

---

## Routing System

### Router Configuration ([index.js](src/index.js))

Uses HashRouter instead of BrowserRouter for GitHub Pages compatibility:

```javascript
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);
```

**Why HashRouter?**
- GitHub Pages doesn't support server-side routing
- HashRouter uses URL hash (#) for routing
- Works without server configuration

**Routes Structure:**
- Nested routes using React Router v6
- Layout component as parent route
- Child routes render in `<Outlet />`

---

## State Management

The application uses **React Hooks** for state management. No external state management library (Redux, MobX, etc.) is used.

### Common State Patterns

#### 1. Animation State
```javascript
const [letterClass, setLetterClass] = useState('text-animate')

useEffect(() => {
    const timer = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
}, []);
```
Used in: Home, About, Contact, Portfolio

#### 2. Data Fetching State
```javascript
const [portfolio, setPortfolio] = useState([]);

useEffect(() => {
    getPortfolio();
}, []);
```
Used in: Portfolio

#### 3. Authentication State
```javascript
const [user, setUser] = useState(null);

useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        setUser(user ? user : null);
    })
}, []);
```
Used in: Dashboard

#### 4. UI Toggle State
```javascript
const [showNav, setShowNav] = useState(false);
```
Used in: Sidebar (mobile menu)

#### 5. Form Reference
```javascript
const refForm = useRef()

<form ref={refForm} onSubmit={sendEmail}>
```
Used in: Contact (EmailJS integration)

---

## External Integrations

### 1. Firebase ([firebase.js](src/firebase.js))

**Configuration:**
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyDhGgnDFQ8BzpzZRGrvSVN5ghOo78dXuVA",
  authDomain: "mkn-portfolio-dashboard.firebaseapp.com",
  projectId: "mkn-portfolio-dashboard",
  storageBucket: "mkn-portfolio-dashboard.appspot.com",
  messagingSenderId: "1014295769872",
  appId: "1:1014295769872:web:07d66a657c9646b3272b95",
  measurementId: "G-SDJTHRCSS0"
};
```

**Services Used:**

#### Authentication
```javascript
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
```
- Google Sign-In for dashboard access
- Used in Dashboard and Login components

#### Firestore Database
```javascript
export const db = getFirestore(app);
```
- Stores portfolio projects
- Collection: `portfolio`
- Documents contain: image, name, description, url

#### Storage
```javascript
export const storage = getStorage(app);
```
- Stores uploaded images
- Used for portfolio project images

---

### 2. EmailJS (Contact Form)

**Service Configuration:**
- Service ID: `service_mkn1710`
- Template ID: `template_mkn1710`
- Public Key: `PXvgQw2wiXhDs5phz`

**Implementation:**
```javascript
emailjs.sendForm(
    'service_mkn1710',
    'template_mkn1710',
    refForm.current,
    'PXvgQw2wiXhDs5phz'
)
```

**Form Handling:**
- Success: Alert + page reload
- Failure: Alert with retry message

---

### 3. OpenStreetMap (React Leaflet)

**Map Configuration:**
```javascript
<MapContainer center={[20.984470, 105.787030]} zoom={13}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker position={[20.984470, 105.787030]}>
        <Popup>Nguyen lives here, come over for a cup of coffee :)</Popup>
    </Marker>
</MapContainer>
```

**Features:**
- Interactive map in Contact page
- Marker at developer's location
- Custom popup message

---

## Styling Approach

### Technology: Sass (SCSS)

Each component has its own `.scss` file following the component structure:

```
Component/
├── index.js
└── index.scss
```

### CSS Architecture

**Global Styles:**
- [index.css](src/index.css) - Base styles
- [App.scss](src/App.scss) - App-level styles

**Component Styles:**
- Scoped to component using BEM or similar methodology
- Component-specific animations
- Responsive breakpoints

### Animation Libraries

1. **Animate.css**
   - Pre-built CSS animations
   - Applied via className

2. **GSAP (GreenSock Animation Platform)**
   - Advanced JavaScript animations
   - Used for complex animation sequences

3. **Custom CSS Animations**
   - Letter-by-letter animations
   - Cube spinner animation
   - Hover effects

### Key CSS Classes

**Animation Classes:**
- `text-animate` - Initial animation state
- `text-animate-hover` - Final animation state
- Individual letter delays: `_1`, `_2`, `_3`, etc.

**Layout Classes:**
- `container` - Main content wrapper
- `text-zone` - Text content area
- `page` - Page wrapper in Layout

---

## Deployment

### Platform: GitHub Pages

**Homepage URL:**
```json
"homepage": "https://khooinguyeen.github.io/mkn-react-portfolio"
```

### Deployment Scripts ([package.json](package.json))

```json
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build"
}
```

### Deployment Process

1. **Build Application:**
   ```bash
   npm run build
   ```
   Creates optimized production build in `build/` folder

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```
   - Runs `predeploy` script (builds the app)
   - Publishes `build/` folder to `gh-pages` branch
   - GitHub Pages serves the site

### Why HashRouter?

GitHub Pages is a static hosting service and doesn't support server-side routing. HashRouter uses URL hashes (#/about, #/contact) which work on static hosts without server configuration.

---

## Key Features

### 1. Text Animations
- **Letter-by-letter animation** on page load
- **Staggered delays** for visual effect
- **Hover state transition** after 3 seconds
- **Reusable AnimatedLetters component**

### 2. Responsive Design
- **Mobile-first approach**
- **Hamburger menu** for mobile navigation
- **Adaptive layouts** using CSS Grid/Flexbox
- **Touch-friendly interactions**

### 3. Interactive Elements
- **3D rotating cube** showcasing tech stack
- **Interactive map** with location marker
- **Contact form** with email integration
- **Portfolio grid** with hover effects

### 4. Loading States
- **Pacman loader** on each page
- **Smooth transitions** between routes
- **Loading animations** during data fetching

### 5. Content Management
- **Firebase backend** for dynamic content
- **Protected dashboard** for admin access
- **Google Authentication** for security
- **Firestore database** for portfolio projects

### 6. Developer Aesthetic
- **HTML tag decorations** in layout
- **Code-inspired design** elements
- **Minimalist color scheme**
- **Clean, modern interface**

---

## Component Communication

### Parent → Child (Props)

**Example: AnimatedLetters**
```javascript
// Parent (Home component)
<AnimatedLetters
    letterClass={letterClass}
    strArray={nameArray}
    idx={17}
/>

// Child (AnimatedLetters component)
const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    // Uses props
}
```

### Data Flow in Portfolio

```
Firebase (Firestore)
    ↓
Portfolio Component (getPortfolio)
    ↓
State Update (setPortfolio)
    ↓
renderPortfolio Function
    ↓
Portfolio Grid UI
```

### Authentication Flow

```
Dashboard Component
    ↓
Firebase Auth (onAuthStateChanged)
    ↓
State Update (setUser)
    ↓
Conditional Render
    ├── Authenticated → Dashboard Home
    └── Not Authenticated → Login Component
```

---

## Performance Considerations

### 1. Code Splitting
- React Router handles route-based code splitting
- Lazy loading not explicitly implemented (potential optimization)

### 2. Animation Performance
- **GSAP** used for smooth, GPU-accelerated animations
- **CSS transforms** preferred over layout properties
- **useEffect cleanup** prevents memory leaks

### 3. Firebase Optimization
- Data fetched once on component mount
- Firestore queries optimized for minimal reads
- Authentication state cached

### 4. Build Optimization
- React Scripts includes production optimizations
- Minification and bundling automatic
- Asset optimization built-in

---

## Development Workflow

### Start Development Server
```bash
npm start
```
- Runs on http://localhost:3000
- Hot module reloading enabled
- Auto-opens in browser

### Run Tests
```bash
npm test
```
- Jest test runner
- React Testing Library included

### Build for Production
```bash
npm build
```
- Creates optimized build
- Output in `build/` directory
- Ready for deployment

### Deploy
```bash
npm run deploy
```
- Builds and deploys to GitHub Pages
- Automatic process

---

## Browser Support

As defined in [package.json](package.json):

**Production:**
- \>0.2% market share
- Not dead browsers
- Not Opera Mini

**Development:**
- Last 1 Chrome version
- Last 1 Firefox version
- Last 1 Safari version

---

## Future Improvements (Potential)

### Performance
1. Implement lazy loading for routes
2. Add service worker for offline capability
3. Optimize images with next-gen formats (WebP, AVIF)
4. Implement virtual scrolling for portfolio grid

### Features
1. Blog section implementation (TemplateBlog component exists)
2. Dark mode toggle
3. Multi-language support
4. Project filtering and search in Portfolio
5. Admin panel for content management (Dashboard home.js)

### Code Quality
1. Add TypeScript for type safety
2. Implement comprehensive testing
3. Add error boundaries
4. Improve accessibility (ARIA labels, keyboard navigation)
5. Add loading states and error handling

### Security
1. Move Firebase config to environment variables
2. Implement security rules in Firebase
3. Add rate limiting for contact form
4. Sanitize user inputs

---

## File Dependencies

### Key Import Patterns

**React & Router:**
```javascript
import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
```

**Firebase:**
```javascript
import { getDocs, collection } from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { db } from "../../firebase"
```

**UI Libraries:**
```javascript
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
```

**Styling:**
```javascript
import './index.scss'
import 'animate.css'
```

---

## Git Information

**Repository:** https://github.com/khooinguyeen/mkn-react-portfolio

**Recent Commits:**
- `51030ef` - responsive web
- `3c65c51` - new look of the home page
- `4038ed6` - khai code đầu năm ạ
- `6ccb18f` - mobile devices optimization
- `d48a489` - complete portfolio section

**Current Branch:** master

---

## Contact & Support

**Developer:** Mai Khôi Nguyên
**Email:** khoinguyenmai17102005@gmail.com
**Location:** Hanoi, Vietnam

**Social Media:**
- LinkedIn: https://www.linkedin.com/in/khôi-nguyên-mai-a24609260/
- GitHub: https://github.com/khooinguyeen
- Facebook: https://www.facebook.com/khoinguyen.mai.7902
- Instagram: https://www.instagram.com/n__g__u__y__e__n/

---

## Summary

This React portfolio is a modern, single-page application showcasing web development skills through:

- **Clean Architecture** - Component-based structure with clear separation of concerns
- **Modern Stack** - React 18, React Router v6, Firebase, Sass
- **Rich Interactions** - Animations, 3D effects, maps, forms
- **Responsive Design** - Mobile-first, touch-friendly
- **Professional Features** - Contact form, portfolio management, authentication

The codebase demonstrates proficiency in:
- React hooks and component lifecycle
- Client-side routing
- External API integration (Firebase, EmailJS)
- CSS animations and responsive design
- Modern JavaScript (ES6+)
- Build tools and deployment

The application is production-ready, deployed on GitHub Pages, and serves as both a portfolio showcase and a demonstration of full-stack development capabilities.
