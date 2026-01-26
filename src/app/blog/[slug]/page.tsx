import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  Share2,
  BookOpen,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Sample blog post content - in production, this would come from Supabase
const blogPosts: Record<string, BlogPost> = {
  'california-minimum-wage-2026': {
    id: '1',
    slug: 'california-minimum-wage-2026',
    title: 'California Minimum Wage 2026: What Employers Need to Know',
    excerpt:
      'A comprehensive guide to the new minimum wage rates taking effect in 2026.',
    content: `
## Overview

California's minimum wage continues to evolve, and staying compliant is essential for all employers. This guide covers everything you need to know about the 2026 minimum wage requirements.

## State Minimum Wage

As of January 1, 2026, California's state minimum wage is **$16.50 per hour** for all employers, regardless of size. This represents an increase from the previous rate and affects:

- Regular employees
- Part-time workers
- Temporary employees
- Piece-rate workers (with some calculations)

## Local Minimum Wages

Many California cities and counties have their own minimum wage ordinances that exceed the state rate. Always check local requirements:

### Major Cities with Higher Minimums

| City | 2026 Minimum Wage |
|------|------------------|
| Los Angeles (City) | Check current rate |
| Los Angeles (County) | Check current rate |
| San Francisco | Check current rate |
| San Jose | Check current rate |
| Berkeley | Check current rate |

## Exempt Employee Salary

For employees to qualify as exempt from overtime, they must earn at least **twice the state minimum wage** for full-time employment:

**Minimum Exempt Salary = $16.50 × 2 × 2,080 hours = $68,640/year**

## Industry-Specific Rates

Certain industries have different minimum wage requirements:

- **Fast Food (AB 1228)**: Check current rate for qualifying establishments
- **Healthcare**: Check current rate for covered healthcare facilities

## Compliance Checklist

- [ ] Update payroll systems with new rates
- [ ] Review exempt status classifications
- [ ] Check local ordinance requirements
- [ ] Update job postings with correct pay scales
- [ ] Train managers on new requirements
- [ ] Post updated minimum wage notices

## Penalties for Non-Compliance

Failure to pay minimum wage can result in:

- Back pay for all underpaid wages
- Waiting time penalties (up to 30 days of wages)
- PAGA penalties
- Civil penalties from the Labor Commissioner

## Need Help?

If you're unsure about your minimum wage obligations or need help updating your payroll systems, [contact us for a consultation](/consultancy#contact).
    `,
    publishedAt: '2026-01-15',
    tags: ['Wage & Hour', 'Compliance', '2026 Updates'],
    readTime: '5 min read',
    isAffiliate: false,
    affiliateLinks: [],
  },
  'best-hr-software-small-business': {
    id: '2',
    slug: 'best-hr-software-small-business',
    title: 'Best HR Software for Small California Businesses (2026)',
    excerpt:
      'Our top picks for HR software that helps small businesses manage compliance.',
    content: `
## Why HR Software Matters for California Compliance

Managing HR compliance in California is complex. The right software can help you:

- Track employee hours and breaks for wage compliance
- Manage required training (harassment prevention, etc.)
- Maintain proper records
- Generate compliant wage statements
- Stay on top of deadlines

## Our Top Picks

### 1. Gusto

**Best for**: Small businesses (1-50 employees)

Gusto is our top recommendation for small California businesses. It's designed with compliance in mind and includes:

- California-specific payroll calculations
- Automated tax filings
- Built-in compliance alerts
- Employee onboarding workflows

**Pricing**: Starting at $40/month + $6/employee

[Try Gusto Free for 3 Months →](#affiliate-link)

---

### 2. Rippling

**Best for**: Growing businesses (10-500 employees)

Rippling offers a unified platform that connects HR, IT, and Finance:

- Automatic compliance updates
- Time tracking with break management
- Document management
- Custom workflows

**Pricing**: Starting at $8/employee/month

[Get Rippling Demo →](#affiliate-link)

---

### 3. BambooHR

**Best for**: Employee experience focused companies

BambooHR excels at creating a great employee experience while maintaining compliance:

- Easy-to-use interface
- Performance management
- Applicant tracking
- Reporting and analytics

**Pricing**: Custom pricing based on company size

[Try BambooHR Free →](#affiliate-link)

## Comparison Chart

| Feature | Gusto | Rippling | BambooHR |
|---------|-------|----------|----------|
| CA Payroll | ✓ | ✓ | ✓ |
| Time Tracking | ✓ | ✓ | Add-on |
| Break Management | ✓ | ✓ | Limited |
| Compliance Alerts | ✓ | ✓ | ✓ |
| Price (10 employees) | $100/mo | $80/mo | Custom |

## How We Evaluate

We test each platform ourselves and evaluate based on:

1. **California-specific compliance features**
2. **Ease of use**
3. **Customer support quality**
4. **Value for money**
5. **Integration capabilities**

## Affiliate Disclosure

This post contains affiliate links. If you sign up through our links, we may earn a commission at no extra cost to you. We only recommend products we've tested and trust.

## Questions?

Need help choosing the right HR software for your business? [Schedule a free consultation](/consultancy#contact) and we'll help you evaluate your options.
    `,
    publishedAt: '2026-01-10',
    tags: ['Tools', 'Software', 'Affiliate'],
    readTime: '8 min read',
    isAffiliate: true,
    affiliateLinks: [
      {
        name: 'Gusto',
        url: '#affiliate-gusto',
        description: 'Try Gusto Free for 3 Months',
      },
      {
        name: 'Rippling',
        url: '#affiliate-rippling',
        description: 'Get Rippling Demo',
      },
      {
        name: 'BambooHR',
        url: '#affiliate-bamboohr',
        description: 'Try BambooHR Free',
      },
    ],
  },
};

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  tags: string[];
  readTime: string;
  isAffiliate: boolean;
  affiliateLinks: Array<{ name: string; url: string; description: string }>;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-california-blue via-california-darkblue to-california-blue py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="mb-4 flex flex-wrap gap-2">
              {post.isAffiliate && (
                <Badge variant="california">Affiliate Content</Badge>
              )}
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <p className="mb-6 text-lg text-gray-300">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {post.isAffiliate && (
                <Card className="mb-8 border-california-gold/50 bg-california-gold/10">
                  <CardContent className="flex items-start gap-3 py-4">
                    <Tag className="mt-0.5 h-5 w-5 text-california-blue" />
                    <p className="text-sm">
                      <strong>Affiliate Disclosure:</strong> This post contains
                      affiliate links. We may earn a commission if you make a
                      purchase through these links, at no extra cost to you.
                    </p>
                  </CardContent>
                </Card>
              )}

              <article className="prose prose-lg max-w-none">
                {/* In production, you would render MDX content here */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.content
                      .replace(/^## /gm, '<h2>')
                      .replace(/^### /gm, '<h3>')
                      .replace(/\n\n/g, '</p><p>')
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
                      .replace(/- \[ \]/g, '&#9744;')
                      .replace(/- \[x\]/g, '&#9745;'),
                  }}
                />
              </article>

              {/* Share */}
              <div className="mt-12 flex items-center justify-between border-t pt-8">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">Share:</span>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
                <Link href="/blog">
                  <Button variant="outline" className="gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    More Articles
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Affiliate Links Box */}
              {post.isAffiliate && post.affiliateLinks.length > 0 && (
                <Card className="sticky top-24 border-california-gold">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Products Mentioned
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {post.affiliateLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-muted"
                      >
                        <div>
                          <div className="font-medium">{link.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {link.description}
                          </div>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </a>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Related */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Articles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.values(blogPosts)
                    .filter((p) => p.slug !== post.slug)
                    .slice(0, 3)
                    .map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        href={`/blog/${relatedPost.slug}`}
                        className="block"
                      >
                        <div className="group">
                          <h4 className="font-medium group-hover:text-california-blue line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {relatedPost.readTime}
                          </p>
                        </div>
                      </Link>
                    ))}
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-california-blue text-white">
                <CardHeader>
                  <CardTitle className="text-lg text-white">
                    Need Expert Help?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-gray-300">
                    Get personalized compliance guidance from our team of experts.
                  </p>
                  <Link href="/consultancy#contact">
                    <Button variant="gold" className="w-full">
                      Schedule Consultation
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
