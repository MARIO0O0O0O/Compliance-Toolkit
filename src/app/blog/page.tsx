import Link from 'next/link';
import { BookOpen, Calendar, Tag, ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

// Sample blog posts - in production, these would come from Supabase
const blogPosts = [
  {
    id: '1',
    slug: 'california-minimum-wage-2026',
    title: 'California Minimum Wage 2026: What Employers Need to Know',
    excerpt: 'A comprehensive guide to the new minimum wage rates taking effect in 2026 and how to ensure your business stays compliant.',
    coverImage: null,
    publishedAt: '2026-01-15',
    tags: ['Wage & Hour', 'Compliance', '2026 Updates'],
    readTime: '5 min read',
    isAffiliate: false,
  },
  {
    id: '2',
    slug: 'best-hr-software-small-business',
    title: 'Best HR Software for Small California Businesses (2026)',
    excerpt: 'Our top picks for HR software that helps small businesses manage compliance, payroll, and employee records efficiently.',
    coverImage: null,
    publishedAt: '2026-01-10',
    tags: ['Tools', 'Software', 'Affiliate'],
    readTime: '8 min read',
    isAffiliate: true,
  },
  {
    id: '3',
    slug: 'sb-553-workplace-violence-prevention',
    title: 'SB 553 Compliance Guide: Workplace Violence Prevention Plan',
    excerpt: 'Step-by-step guide to creating a compliant workplace violence prevention plan under California SB 553.',
    coverImage: null,
    publishedAt: '2026-01-05',
    tags: ['Safety', 'SB 553', 'Compliance'],
    readTime: '10 min read',
    isAffiliate: false,
  },
  {
    id: '4',
    slug: 'harassment-prevention-training-platforms',
    title: 'Top 5 Harassment Prevention Training Platforms Reviewed',
    excerpt: 'Compare the best SB 1343 compliant harassment prevention training platforms for California employers.',
    coverImage: null,
    publishedAt: '2025-12-28',
    tags: ['Training', 'Software', 'Affiliate'],
    readTime: '7 min read',
    isAffiliate: true,
  },
  {
    id: '5',
    slug: 'pay-data-reporting-guide',
    title: 'SB 1162 Pay Data Reporting: Complete Guide for 2026',
    excerpt: 'Everything you need to know about California\'s pay data reporting requirements for employers with 100+ employees.',
    coverImage: null,
    publishedAt: '2025-12-20',
    tags: ['Reporting', 'SB 1162', 'Compliance'],
    readTime: '12 min read',
    isAffiliate: false,
  },
  {
    id: '6',
    slug: 'best-time-tracking-apps',
    title: 'Best Time Tracking Apps for California Wage Compliance',
    excerpt: 'Our favorite time tracking apps that help ensure meal and rest break compliance in California.',
    coverImage: null,
    publishedAt: '2025-12-15',
    tags: ['Tools', 'Wage & Hour', 'Affiliate'],
    readTime: '6 min read',
    isAffiliate: true,
  },
];

const categories = [
  { name: 'All Posts', count: 6 },
  { name: 'Compliance', count: 4 },
  { name: 'Tools & Software', count: 3 },
  { name: 'Training', count: 2 },
  { name: 'Updates', count: 2 },
];

const popularTags = [
  'Compliance',
  'Wage & Hour',
  '2026 Updates',
  'Software',
  'Training',
  'SB 553',
  'SB 1162',
  'Safety',
];

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-california-blue via-california-darkblue to-california-blue py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="california" className="mb-4">
              <BookOpen className="mr-1 h-3 w-3" />
              Blog & Resources
            </Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Stay Compliant with Expert Insights
            </h1>
            <p className="mb-8 text-lg text-gray-300">
              Compliance updates, how-to guides, and honest product reviews
              to help California businesses thrive.
            </p>

            {/* Search */}
            <div className="relative mx-auto max-w-xl">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="bg-white pl-10 text-foreground"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Latest Articles</h2>
                <Badge variant="outline">{blogPosts.length} posts</Badge>
              </div>

              <div className="space-y-6">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden transition-shadow hover:shadow-lg">
                    <div className="grid md:grid-cols-3">
                      <div className="aspect-video bg-gradient-to-br from-california-blue to-california-darkblue md:aspect-auto" />
                      <div className="p-6 md:col-span-2">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          {post.isAffiliate && (
                            <Badge variant="california" className="text-xs">
                              Affiliate
                            </Badge>
                          )}
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                          <h3 className="mb-2 text-xl font-semibold hover:text-california-blue">
                            {post.title}
                          </h3>
                        </Link>
                        <p className="mb-4 text-muted-foreground line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </span>
                            <span>{post.readTime}</span>
                          </div>
                          <Link href={`/blog/${post.slug}`}>
                            <Button variant="ghost" size="sm" className="gap-1">
                              Read More
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <Button variant="outline">Load More Articles</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category.name}>
                        <Link
                          href={`/blog?category=${category.name.toLowerCase().replace(/ /g, '-')}`}
                          className="flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-muted"
                        >
                          <span>{category.name}</span>
                          <Badge variant="secondary">{category.count}</Badge>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Popular Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, '-')}`}>
                        <Badge
                          variant="outline"
                          className="cursor-pointer hover:bg-california-blue hover:text-white"
                        >
                          <Tag className="mr-1 h-3 w-3" />
                          {tag}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="bg-california-blue text-white">
                <CardHeader>
                  <CardTitle className="text-lg text-white">
                    Stay Updated
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Get compliance updates and new articles delivered to your inbox.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="bg-white text-foreground"
                    />
                    <Button variant="gold" className="w-full">
                      Subscribe
                    </Button>
                  </form>
                  <p className="mt-3 text-xs text-gray-300">
                    No spam. Unsubscribe anytime.
                  </p>
                </CardContent>
              </Card>

              {/* Affiliate Disclosure */}
              <Card className="border-california-gold/50 bg-california-gold/10">
                <CardHeader>
                  <CardTitle className="text-lg">Affiliate Disclosure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Some posts contain affiliate links. If you purchase through these
                    links, we may earn a commission at no extra cost to you. We only
                    recommend products we trust and use ourselves.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
