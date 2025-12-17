# AI Tech Portfolio & Blog

A modern, responsive portfolio website template designed for AI engineers and developers. Built with **React**, **Vite**, and **Tailwind CSS**, featuring a built-in **Gemini-powered Marketing Assistant**.

![Project Preview](public/preview.png)
*(Note: Add a screenshot of your project as `public/preview.png` to see it here)*

## 🚀 Features

- **🎨 Modern UI/UX**: Clean, dark-themed design with glassmorphism effects using Tailwind CSS.
- **🤖 AI Marketing Assistant**: Integrated with Google Gemini API to help generate content strategies, blog ideas, and social media posts for your projects.
- **📂 Project Showcase**: Display your projects with descriptions, tags, and links.
- **📝 Blog Section**: Share your thoughts and technical articles.
- **📧 Contact Form**: Functional contact form integrated with Formspree.
- **⚙️ Easy Configuration**: Customize your profile, social links, and avatar via a simple `metadata.json` file.
- **📱 Fully Responsive**: Looks great on mobile, tablet, and desktop.

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **AI Integration**: Google Gemini API (`@google/genai`)
- **Deployment**: GitHub Pages (`gh-pages`)

## 🏁 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- A Google Gemini API Key (Get one [here](https://aistudio.google.com/app/apikey))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Samzhonghk/my-website.git
   cd my-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the root directory and add your Gemini API Key:
   ```env
   GEMINI_API_KEY=your_actual_api_key_here
   ```

4. **Run Locally**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## ⚙️ Configuration

You can customize the site content without touching the code by editing `public/metadata.json`:

```json
{
  "name": "AI Tech Portfolio & Blog",
  "description": "...",
  "avatar": "me.jpg",  // Place your image in the public/ folder
  "socials": {
    "github": "https://github.com/your-username",
    "linkedin": "https://linkedin.com/in/your-username",
    "twitter": "https://twitter.com/your-username"
  }
}
```

### Contact Form Setup
To make the contact form work:
1. Register at [Formspree](https://formspree.io/).
2. Create a new form and get your **Form ID**.
3. Open `components/ContactPage.tsx` and update the `FORMSPREE_ENDPOINT`:
   ```typescript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
   ```

## 🚀 Deployment

This project is configured for easy deployment to **GitHub Pages**.

1. **Update `package.json`**
   Ensure the `homepage` field matches your GitHub repository URL:
   ```json
   "homepage": "https://Samzhonghk.github.io/my-website",
   ```

2. **Update `vite.config.ts`**
   Ensure the `base` path matches your repository name:
   ```typescript
   base: '/my-website/',
   ```

3. **Deploy**
   Run the deployment script:
   ```bash
   npm run deploy
   ```
   This will build the project and push it to the `gh-pages` branch.

## 📂 Project Structure

```
ai-tech-portfolio-blog/
├── components/         # React components (Hero, Projects, Blog, etc.)
├── public/             # Static assets (images, metadata.json)
├── services/           # API services (Gemini integration)
├── App.tsx             # Main application component
├── main.tsx            # Entry point
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
└── vite.config.ts      # Vite configuration
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
