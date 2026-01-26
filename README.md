# California Compliance Consultancy

A full-stack HR consultancy web application built with Next.js 14, Supabase, and Tailwind CSS. This application helps California businesses navigate complex federal, state, and local HR compliance requirements.

## Features

### 1. Consultancy Services
- Professional HR compliance consulting
- Compliance audits and policy development
- Training programs (SB 1343 harassment prevention)
- Ongoing support and advisory services
- Contact form for lead generation

### 2. Blog with Affiliate Support
- Full-featured blog system
- Affiliate link tracking and disclosure
- Tag and category filtering
- Newsletter subscription
- SEO optimized

### 3. Free Tools
- **20+ Interactive Compliance Checklists** covering:
  - Harassment Prevention (SB 1343)
  - Workplace Violence Prevention (SB 553)
  - Wage & Hour Compliance
  - Leave Administration (CFRA/FMLA)
  - Cal/OSHA Safety Requirements
  - Pay Data Reporting (SB 1162)
  - And more...
- **Compliance Calculator** - Find requirements based on employee count
- Progress tracking with local storage
- Download options (PDF export)
- **Donation System** - Support free tools development

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Deployment**: Vercel
- **Payments**: Stripe (for donations)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Stripe account (for donations)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MARIO0O0O0O/Compliance-Toolkit.git
   cd Compliance-Toolkit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Fill in your environment variables:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   STRIPE_SECRET_KEY=your_stripe_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

4. **Set up Supabase database**
   - Go to your Supabase dashboard
   - Open the SQL Editor
   - Run the schema from `supabase/schema.sql`

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

### Deployment to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── auth/               # Authentication pages
│   │   ├── blog/               # Blog pages
│   │   ├── consultancy/        # Consultancy services page
│   │   ├── dashboard/          # User dashboard
│   │   ├── tools/              # Free tools pages
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Homepage
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── layout/             # Header, Footer
│   │   ├── compliance/         # Checklist components
│   │   ├── consultancy/        # Contact form
│   │   ├── blog/               # Blog components
│   │   └── tools/              # Calculator, Donation
│   ├── lib/
│   │   ├── supabase/           # Supabase client setup
│   │   ├── compliance-data.ts  # Checklist data
│   │   └── utils.ts            # Utility functions
│   └── types/
│       └── database.ts         # TypeScript types
├── content/                    # MDX blog content (optional)
├── public/                     # Static assets
├── supabase/
│   └── schema.sql              # Database schema
└── California_*.md             # Original compliance artifacts
```

## Compliance Checklists Included

1. Harassment Prevention (SB 1343)
2. Workplace Violence Prevention (SB 553)
3. SB 294 Know Your Rights
4. Posting & Notice Requirements
5. AB 692 Stay-or-Pay Prohibition
6. Leave Administration (1-49 employees)
7. Leave Administration (50-100 employees)
8. Personnel Records
9. Wage & Hour Compliance
10. Immigration (I-9)
11. Pay Data Reporting (SB 1162)
12. Cal/OSHA Safety
13. Benefits Administration
14. Recruitment & Hiring
15. Termination & Offboarding
16. Cal-WARN (Mass Layoffs)
17. Independent Contractor (ABC Test)
18. Lactation Accommodation
19. Remote Work & Expenses
20. Master Compliance Dashboard

## Customization

### Adding New Checklists
Edit `src/lib/compliance-data.ts` to add new checklists following the existing format.

### Styling
The app uses Tailwind CSS with a custom California-themed color palette:
- `california-gold`: #FDB515
- `california-blue`: #003262
- `california-darkblue`: #002147

### Blog Posts
Blog posts can be managed through:
1. Direct database entries in Supabase
2. MDX files in the `content/blog` directory

## License

MIT License - feel free to use this for your own consultancy business.

## Recommended Templates/Boilerplates

This project was built from scratch but was informed by these excellent open-source templates:

- [next-saas-stripe-starter](https://github.com/mickasmt/next-saas-stripe-starter) - MIT License
- [Vercel Supabase Starter](https://vercel.com/templates/supabase) - Open Source
- [Saas-Starter-Kit](https://github.com/Saas-Starter-Kit/Saas-Kit-supabase) - MIT License

## Support

If you find these free tools helpful, please consider:
- [Making a donation](/tools#donate)
- Sharing with other California businesses
- Scheduling a [consultation](/consultancy#contact) for personalized help

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a PR.

---

Built with expertise from 10+ years of municipal government experience and a Master of Public Administration. Tech-first approach to HR compliance.
