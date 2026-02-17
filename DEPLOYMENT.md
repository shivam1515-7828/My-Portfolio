# Deployment Guide (Vercel)

## Prerequisites

- A GitHub account.
- A Vercel account (sign up with GitHub).

## Steps

### 1. Push to GitHub

If you haven't already pushed your code to GitHub:

```bash
git add .
git commit -m "Ready for deployment"
# Create a new repo on GitHub and follow instructions to push:
# git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
# git branch -M main
# git push -u origin main
```

### 2. Deploy on Vercel

1.  Go to [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** -> **"Project"**.
3.  Import your GitHub repository (`my-portfolio` or whatever you named it).
4.  **Configure Project**:
    - **Framework Preset**: Next.js (should be auto-detected).
    - **Root Directory**: `./` (default).
    - **Build Command**: `npm run build` (default).
    - **Install Command**: `npm install` (default).
5.  Click **"Deploy"**.

### 3. Finalize

- Vercel will build your project and give you a live URL (e.g., `https://your-portfolio.vercel.app`).
- Add this URL to your GitHub repository "About" section.

## Contact Form Setup

To make the contact form working:

1.  Go to [Getform.io](https://getform.io) or [Formspree](https://formspree.io).
2.  Create a new form endpoint.
3.  Copy the URL.
4.  Open `components/Contact.jsx` and replace `action="https://getform.io/f/your-form-id"` with your actual endpoint.
5.  Push changes to GitHub (Vercel will auto-redeploy).
