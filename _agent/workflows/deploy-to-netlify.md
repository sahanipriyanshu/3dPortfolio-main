---
description: How to deploy the 3D Portfolio to Netlify
---

Follow these steps to deploy your Vite + React portfolio to Netlify:

### Option 1: Automated Deployment (Recommended)
This is the best way to keep your site updated automatically whenever you push code to GitHub.

1. **Push your code to GitHub**: Ensure your latest changes are committed and pushed to your repository.
2. **Log in to Netlify**: Go to [app.netlify.com](https://app.netlify.com).
3. **Add New Site**: Click "Add new site" > "Import an existing project".
4. **Choose GitHub**: Authorize Netlify to access your repositories.
5. **Select Repository**: Search for `3dPortfolio-main`.
6. **Configure Build Settings**:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
7. **Deploy**: Click "Deploy site".

### Option 2: Manual "Drag and Drop"
Use this for a quick one-time deployment without linking to GitHub.

1. **Build the project**: Run the following command in your terminal:
   ```bash
   npm run build
   ```
2. **Locate the Output**: This creates a folder named `dist` in your project root.
3. **Drag to Netlify**: Log in to Netlify, go to "Sites", and drag the `dist` folder into the upload area.

### Important: Fixing "Page Not Found" on Refresh
Since this is a Single Page Application (SPA), you need to tell Netlify how to handle routes.

1. Create a file named `public/_redirects`.
2. Add this line inside it:
   ```text
   /*   /index.html   200
   ```
3. Re-deploy.

### Summary
| Setting | Value |
| :--- | :--- |
| **Repo** | GitHub / Local |
| **Build Command** | `npm run build` |
| **Publish Directory** | `dist` |
| **Node Version** | Latest (Default) |
