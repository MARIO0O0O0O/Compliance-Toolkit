import Link from 'next/link';
import {
  Shield,
  CheckCircle2,
  FileText,
  Users,
  ArrowRight,
  Building2,
  Scale,
  Clock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { complianceChecklists } from '@/lib/compliance-data';

const features = [
  {
    icon: CheckCircle2,
    title: 'Interactive Checklists',
    description:
      'Track your compliance progress with 20+ California HR checklists covering all major requirements.',
  },
  {
    icon: FileText,
    title: 'Comprehensive Coverage',
    description:
      'From new hire onboarding to termination procedures, every aspect of CA employment law.',
  },
  {
    icon: Users,
    title: 'Expert Consultancy',
    description:
      'Get personalized guidance from HR compliance experts for your specific business needs.',
  },
  {
    icon: Clock,
    title: 'Stay Current',
    description:
      'Regular updates to reflect the latest California employment law changes and requirements.',
  },
];

const categories = [
  { name: 'Onboarding', count: 1, color: 'bg-blue-500' },
  { name: 'Compensation', count: 2, color: 'bg-green-500' },
  { name: 'Safety', count: 4, color: 'bg-orange-500' },
  { name: 'Benefits', count: 1, color: 'bg-purple-500' },
  { name: 'Compliance', count: 6, color: 'bg-red-500' },
  { name: 'Documentation', count: 2, color: 'bg-cyan-500' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">CA Compliance Toolkit</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/tools"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Checklists
            </Link>
            <Link
              href="/blog"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Resources
            </Link>
            <Link
              href="/consultancy/contact"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Consultancy
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="/auth/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-muted/50 to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
              <Scale className="h-4 w-4" />
              California HR Compliance Made Simple
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Stay Compliant with California Employment Law
            </h1>
            <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
              Interactive checklists, expert guidance, and comprehensive tools
              to help your business navigate California&apos;s complex HR
              requirements.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/tools">
                  Browse Checklists
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/consultancy/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                {complianceChecklists.length}
              </div>
              <div className="text-sm text-muted-foreground">
                Compliance Checklists
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                {complianceChecklists.reduce((sum, c) => sum + c.items.length, 0)}+
              </div>
              <div className="text-sm text-muted-foreground">
                Checklist Items
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2025</div>
              <div className="text-sm text-muted-foreground">
                Laws Updated
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">
                California Focused
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Everything You Need for HR Compliance
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our comprehensive toolkit helps California employers stay
              compliant with state and federal employment laws.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-2 transition-colors hover:border-primary/50">
                <CardHeader>
                  <feature.icon className="mb-2 h-10 w-10 text-primary" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="border-t bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Compliance Categories</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our checklists cover all major areas of California employment law.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Card key={category.name} className="flex items-center gap-4 p-4">
                <div className={`h-3 w-3 rounded-full ${category.color}`} />
                <div className="flex-1">
                  <div className="font-medium">{category.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {category.count} checklist{category.count !== 1 ? 's' : ''}
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/tools">
                View All Checklists
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="flex flex-col items-center gap-6 p-12 text-center">
              <Building2 className="h-16 w-16" />
              <h2 className="text-3xl font-bold">
                Need Personalized Compliance Help?
              </h2>
              <p className="max-w-xl opacity-90">
                Our HR compliance experts can provide tailored guidance for your
                business, conduct audits, and help you implement compliant
                policies.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/consultancy/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <span className="font-bold">CA Compliance Toolkit</span>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                Helping California employers stay compliant with state
                employment laws.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Tools</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/tools" className="hover:text-foreground">
                    All Checklists
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-foreground">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/blog" className="hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/consultancy/contact"
                    className="hover:text-foreground"
                  >
                    Consultancy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Account</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/auth/login" className="hover:text-foreground">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link href="/auth/signup" className="hover:text-foreground">
                    Create Account
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} CA Compliance Toolkit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
