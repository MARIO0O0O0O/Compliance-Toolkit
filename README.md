# Compliance Toolkit

A comprehensive collection of California employment law compliance checklists and resources, built with Next.js and integrated with Vercel Speed Insights.

## Features

- 📋 Comprehensive California compliance checklists
- ⚡ Built with Next.js 14 (App Router)
- 📊 Vercel Speed Insights integration for performance monitoring
- 🎨 Clean, responsive design
- 🚀 Static site generation for fast loading

## Getting Started

### Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository in Vercel
3. Enable Speed Insights in your Vercel project settings
4. Deploy!

Alternatively, use the Vercel CLI:

```bash
npm install -g vercel
vercel deploy
```

## Speed Insights

This project includes Vercel Speed Insights to track and monitor web performance metrics:

- **Real User Monitoring (RUM)**: Track actual user experiences
- **Core Web Vitals**: Monitor LCP, FID, CLS, and other key metrics
- **Performance Dashboard**: View metrics in your Vercel dashboard

To enable Speed Insights:

1. Go to your project in the Vercel dashboard
2. Navigate to the **Speed Insights** tab
3. Click **Enable**

The `<SpeedInsights />` component is already integrated in `app/layout.tsx`.

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with Speed Insights
│   ├── page.tsx            # Home page listing all checklists
│   ├── globals.css         # Global styles
│   └── checklist/
│       └── [slug]/
│           └── page.tsx    # Dynamic checklist pages
├── *.md                    # Compliance checklist markdown files
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## Compliance Checklists

This toolkit includes comprehensive checklists for:

- Harassment Prevention
- Workplace Violence Prevention (SB 553)
- Employee Notices (SB 294)
- Stay-or-Pay Prohibition (AB 692)
- CalOSHA Safety
- CalWARN Mass Layoff
- Immigration (I-9)
- Pay Data Transparency
- Personnel Records
- Wage & Hour
- Benefits Administration
- Recruitment & Hiring
- Termination & Offboarding
- And more...

## License

This project is for informational purposes. Please consult with legal counsel for compliance advice.
