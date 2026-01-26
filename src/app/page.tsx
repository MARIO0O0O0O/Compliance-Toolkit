import Link from 'next/link';
import {
  Scale,
  Shield,
  Zap,
  Users,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Wrench,
  Award,
  Clock,
  Building2,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    icon: Shield,
    title: 'Compliance Audits',
    description:
      'Comprehensive review of your HR practices against California, federal, and local requirements.',
  },
  {
    icon: Scale,
    title: 'Policy Development',
    description:
      'Custom employee handbooks and policies that meet all California compliance standards.',
  },
  {
    icon: Users,
    title: 'Training Programs',
    description:
      'SB 1343 compliant harassment prevention training and management development.',
  },
  {
    icon: Zap,
    title: 'Tech Integration',
    description:
      'AI-powered tools to automate compliance tracking and do the work of 5+ employees.',
  },
];

const complianceAreas = [
  'Harassment Prevention (SB 1343)',
  'Workplace Violence (SB 553)',
  'Cal/OSHA Safety Requirements',
  'Wage & Hour Compliance',
  'Pay Data Reporting (SB 1162)',
  'Leave Administration (CFRA/FMLA)',
  'Personnel Records',
  'Immigration (I-9)',
];

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '20+', label: 'Compliance Areas' },
  { value: 'MPA', label: 'Credential' },
  { value: '100%', label: 'Tech-Driven' },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-california-blue via-california-darkblue to-california-blue py-20 text-white md:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="california" className="mb-4">
              California Compliance Experts
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Navigate California&apos;s Complex
              <span className="text-california-gold"> HR Compliance</span> with Confidence
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
              Expert guidance through federal, state, and local mandates. Our tech-first
              approach delivers efficiency that pays for itself.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/consultancy#contact">
                <Button variant="gold" size="xl" className="gap-2">
                  Schedule Consultation
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/tools">
                <Button
                  variant="outline"
                  size="xl"
                  className="gap-2 border-white text-white hover:bg-white hover:text-california-blue"
                >
                  <Wrench className="h-5 w-5" />
                  Free Compliance Tools
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-california-blue md:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">
              Our Services
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Comprehensive HR Compliance Solutions
            </h2>
            <p className="mb-12 text-muted-foreground">
              From startups to established businesses, we help California employers
              stay compliant and efficient.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="group transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-california-blue/10 text-california-blue group-hover:bg-california-gold group-hover:text-california-darkblue transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/consultancy">
              <Button variant="california" size="lg" className="gap-2">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Badge variant="outline" className="mb-4">
                Coverage Areas
              </Badge>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                20+ California Compliance Requirements Covered
              </h2>
              <p className="mb-6 text-muted-foreground">
                California has some of the most complex employment laws in the nation.
                Our toolkit covers all major compliance areas based on your company size.
              </p>
              <div className="mb-8 grid gap-3 sm:grid-cols-2">
                {complianceAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
              <Link href="/tools#checklists">
                <Button variant="outline" className="gap-2">
                  View All Checklists
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="flex items-center">
              <Card className="w-full">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-6 w-6 text-california-blue" />
                    <CardTitle>Size-Based Requirements</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="font-semibold">1-4 Employees</div>
                    <div className="text-sm text-muted-foreground">
                      Basic mandates: Postings, Pay, Safety
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="font-semibold">5-14 Employees</div>
                    <div className="text-sm text-muted-foreground">
                      + Harassment Training, CFRA, FEHA
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="font-semibold">15-49 Employees</div>
                    <div className="text-sm text-muted-foreground">
                      + Pay Scale Disclosure, Organ Donor Leave
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="font-semibold">50-99 Employees</div>
                    <div className="text-sm text-muted-foreground">
                      + FMLA, Cal/OSHA IIPP, Cal-WARN
                    </div>
                  </div>
                  <div className="rounded-lg border bg-california-gold/10 p-4">
                    <div className="font-semibold">100+ Employees</div>
                    <div className="text-sm text-muted-foreground">
                      + Pay Data Reporting (SB 1162)
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About/Differentiator Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="mb-4">
              Why Choose Us
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Government Experience Meets Cutting-Edge Technology
            </h2>
            <p className="mb-12 text-lg text-muted-foreground">
              With over 10 years of municipal government experience and a Master of Public
              Administration, I bring deep knowledge of regulatory compliance. Combined with
              my passion for technology, I help businesses achieve compliance while
              dramatically increasing efficiency.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader className="text-center">
                  <Award className="mx-auto mb-2 h-10 w-10 text-california-gold" />
                  <CardTitle>Expert Knowledge</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Master of Public Administration with deep understanding of regulatory
                    frameworks and bureaucratic processes.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Sparkles className="mx-auto mb-2 h-10 w-10 text-california-gold" />
                  <CardTitle>AI-Powered Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Leverage bleeding-edge AI tools to perform the work of 5+ employees
                    at lightning speed with quality performance.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Clock className="mx-auto mb-2 h-10 w-10 text-california-gold" />
                  <CardTitle>ROI Focused</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Our tech-first approach achieves efficiency that pays for itself.
                    Compliance shouldn&apos;t break the bank.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Resources Preview */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <Badge variant="outline" className="mb-4">
                Latest Resources
              </Badge>
              <h2 className="text-3xl font-bold md:text-4xl">
                Stay Compliant with Our Blog
              </h2>
              <p className="mt-2 text-muted-foreground">
                Expert insights, product reviews, and compliance updates.
              </p>
            </div>
            <Link href="/blog">
              <Button variant="outline" className="gap-2">
                <BookOpen className="h-4 w-4" />
                View All Posts
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="group overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-california-blue to-california-darkblue" />
                <CardHeader>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Compliance</Badge>
                    <Badge variant="outline">2026</Badge>
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-california-blue">
                    Understanding California&apos;s Latest HR Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3">
                    A comprehensive guide to the new compliance requirements taking
                    effect in 2026 and how to prepare your business.
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-california-blue py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Simplify Your Compliance?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Schedule a free consultation to discuss your compliance needs and discover
            how our tech-first approach can save you time and money.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/consultancy#contact">
              <Button variant="gold" size="xl" className="gap-2">
                Schedule Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/tools">
              <Button
                variant="outline"
                size="xl"
                className="gap-2 border-white text-white hover:bg-white hover:text-california-blue"
              >
                Try Free Tools First
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
