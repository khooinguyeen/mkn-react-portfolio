# GitHub Pages Deployment Guide

This guide will help you deploy and maintain your React portfolio website on GitHub Pages.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Initial Setup](#initial-setup)
- [Deployment Process](#deployment-process)
- [Updating Your Website](#updating-your-website)
- [Custom Domain (Optional)](#custom-domain-optional)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before deploying, ensure you have:
- Git installed on your computer
- A GitHub account
- Node.js and npm installed
- This repository cloned to your local machine

## Initial Setup

### 1. Verify package.json Configuration

The `package.json` file should already contain the following configurations:

```json
{
  "homepage": "https://khooinguyeen.github.io/mkn-react-portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "devDependencies": {
    "gh-pages": "^4.0.0"
  }
}
```

**Important:** If you fork this repo or use a different GitHub username, update the `homepage` URL:
```
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
```

### 2. Install Dependencies

If you haven't already, install all required dependencies:

```bash
npm install
```

This will install `gh-pages` along with other dependencies needed for the project.

## Deployment Process

### First Time Deployment

1. **Ensure your code is committed:**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin master
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

   This command will:
   - Run `npm run build` to create an optimized production build
   - Create/update the `gh-pages` branch
   - Push the built files to the `gh-pages` branch

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "Pages" section
   - Under "Source", select `gh-pages` branch
   - Click "Save"

4. **Wait for deployment:**
   - GitHub Pages typically takes 1-5 minutes to deploy
   - Your site will be available at: `https://khooinguyeen.github.io/mkn-react-portfolio`

## Updating Your Website

Whenever you make changes to your portfolio:

### 1. Update Project Data

To add or modify projects, edit `/src/components/Portfolio/index.js`:

```javascript
const portfolio = [
    {
        name: "Project Full Name",
        shortName: "Short Name",  // Displayed on planet labels
        description: "Project description...",
        url: "https://github.com/username/repo",
        github: "https://github.com/username/repo",
        technologies: ["Tech1", "Tech2", "Tech3"],
        image: "https://opengraph.githubassets.com/1/username/repo",
        features: [
            "Feature 1",
            "Feature 2",
            "Feature 3"
        ]
    }
];
```

### 2. Test Locally

Before deploying, always test your changes locally:

```bash
npm start
```

Visit `http://localhost:3000` to verify everything works correctly.

### 3. Deploy Changes

Once you're satisfied with the changes:

```bash
# Commit your changes
git add .
git commit -m "Update portfolio projects"
git push origin master

# Deploy to GitHub Pages
npm run deploy
```

### 4. Verify Deployment

- Wait 1-5 minutes for GitHub Pages to update
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Visit your website to see the changes

## Custom Domain (Optional)

To use a custom domain (e.g., `www.yourname.com`):

### 1. Update package.json

```json
{
  "homepage": "https://www.yourname.com"
}
```

### 2. Add CNAME File

Create a file named `CNAME` in the `/public` folder with your domain:

```
www.yourname.com
```

### 3. Configure DNS

In your domain provider's DNS settings, add:

- **A Records** pointing to GitHub Pages IPs:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`

- **CNAME Record** (if using www):
  - Host: `www`
  - Value: `khooinguyeen.github.io`

### 4. Enable HTTPS

- Go to repository Settings > Pages
- Check "Enforce HTTPS"

## Maintenance Tips

### Regular Updates

1. **Update Dependencies** (every 3-6 months):
   ```bash
   npm outdated  # Check for outdated packages
   npm update    # Update dependencies
   ```

2. **Security Updates**:
   ```bash
   npm audit      # Check for vulnerabilities
   npm audit fix  # Automatically fix vulnerabilities
   ```

### Content Updates

- **Resume/CV**: Replace `/public/Khoi_Nguyen_Mai_Resume.pdf` with your updated resume
- **Profile Picture**: Replace `/src/assets/images/tui.jpg` with your photo
- **Themes**: Modify colors in `/src/context/ThemeContext.js`
- **Contact Info**: Update email configuration in `/src/components/Contact/index.js`

### Backup

Always keep a backup of:
- Your source code (use Git branches)
- Custom assets (images, PDFs, etc.)
- Configuration files

## Troubleshooting

### Issue: Blank Page After Deployment

**Solution:**
- Verify `homepage` in `package.json` matches your GitHub Pages URL
- Check browser console for errors (F12)
- Ensure all routes use `basename` in React Router

### Issue: 404 Error on Page Refresh

**Solution:**
This is expected for client-side routing on GitHub Pages. The home page works, but direct URLs to other pages may not. To fix:
- Use hash routing instead of browser routing (already configured in this project)

### Issue: Changes Not Appearing

**Solution:**
1. Clear browser cache (Ctrl+Shift+R)
2. Check if deployment was successful: `git log origin/gh-pages`
3. Verify GitHub Pages is enabled in repository settings
4. Wait 5-10 minutes for CDN to update

### Issue: Images Not Loading

**Solution:**
- Use relative paths: `./image.jpg` instead of `/image.jpg`
- Place images in `/public` folder or import them in components
- Check image file names match exactly (case-sensitive)

### Issue: Build Fails

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

## Useful Commands

```bash
# Start development server
npm start

# Create production build
npm run build

# Deploy to GitHub Pages
npm run deploy

# Run tests
npm test

# Check for issues
npm audit

# Update all dependencies
npm update
```

## Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Create React App Deployment Guide](https://create-react-app.dev/docs/deployment/)
- [gh-pages Package](https://www.npmjs.com/package/gh-pages)

## Support

If you encounter issues:
1. Check the [Troubleshooting](#troubleshooting) section
2. Review GitHub Actions logs in your repository
3. Search for similar issues on Stack Overflow
4. Check browser console for error messages

---

**Last Updated:** November 2025
