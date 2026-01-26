import Link from 'next/link';
import {
  Wrench,
  FileCheck,
  Calculator,
  Download,
  Heart,
  CheckCircle2,
  Building2,
  Clock,
  Users,
  DollarSign,
  Shield,
  Calendar,
  FileText,
  BarChart,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { complianceChecklists, complianceCategories } from '@/lib/compliance-data';
import { DonationSection } from '@/components/tools/donation-section';
import { ComplianceCalculator } from '@/components/tools/compliance-calculator';

const freeTools = [
  {
    id: 'checklists',
    icon: FileCheck,
    title: 'Compliance Checklists',
    description: '20+ interactive checklists covering all major California compliance areas.',
    count: complianceChecklists.length,
    href: '#checklists',
  },
  {
    id: 'calculator',
    icon: Calculator,
    title: 'Compliance Calculator',
    description: 'Find out which compliance requirements apply based on your employee count.',
    href: '#calculator',
  },
  {
    id: 'templates',
    icon: FileText,
    title: 'Document Templates',
    description: 'Free templates for common HR documents and notices.',
    comingSoon: true,
    href: '#templates',
  },
  {
    id: 'deadlines',
    icon: Calendar,
    title: 'Compliance Calendar',
    description: 'Key California compliance deadlines and important dates.',
    comingSoon: true,
    href: '#deadlines',
  },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield: Shield,
  HardHat: FileCheck,
  DollarSign: DollarSign,
  Calendar: Calendar,
  Users: Users,
  FileText: FileText,
  Heart: Heart,
  BarChart: BarChart,
};

export default function ToolsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-california-blue via-california-darkblue to-california-blue py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="california" className="mb-4">
              <Wrench className="mr-1 h-3 w-3" />
              Free Tools
            </Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Free Compliance Tools for DIYers
            </h1>
            <p className="mb-8 text-lg text-gray-300">
              We believe compliance should be accessible. Use our free tools to
              assess your needs, track your progress, and stay compliant.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="#checklists">
                <Button variant="gold" size="lg" className="gap-2">
                  <FileCheck className="h-5 w-5" />
                  Browse Checklists
                </Button>
              </Link>
              <Link href="#donate">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 border-white text-white hover:bg-white hover:text-california-blue"
                >
                  <Heart className="h-5 w-5" />
                  Support Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {freeTools.map((tool) => (
              <Card
                key={tool.id}
                className={`transition-all hover:shadow-lg ${
                  tool.comingSoon ? 'opacity-75' : ''
                }`}
              >
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-california-blue/10 text-california-blue">
                    <tool.icon className="h-6 w-6" />
                  </div>
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-lg">{tool.title}</CardTitle>
                    {tool.comingSoon && (
                      <Badge variant="secondary">Coming Soon</Badge>
                    )}
                    {tool.count && (
                      <Badge variant="california">{tool.count}</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{tool.description}</CardDescription>
                  {!tool.comingSoon && (
                    <Link href={tool.href} className="mt-4 block">
                      <Button variant="outline" size="sm" className="w-full">
                        Access Tool
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Calculator */}
      <section id="calculator" className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <Badge variant="outline" className="mb-4">
                <Calculator className="mr-1 h-3 w-3" />
                Free Tool
              </Badge>
              <h2 className="mb-4 text-3xl font-bold">
                What Compliance Requirements Apply to You?
              </h2>
              <p className="text-muted-foreground">
                Enter your employee count to see which California compliance
                requirements apply to your business.
              </p>
            </div>

            <ComplianceCalculator />
          </div>
        </div>
      </section>

      {/* Checklists Section */}
      <section id="checklists" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <Badge variant="outline" className="mb-4">
              <FileCheck className="mr-1 h-3 w-3" />
              Interactive Checklists
            </Badge>
            <h2 className="mb-4 text-3xl font-bold">
              California Compliance Checklists (2026)
            </h2>
            <p className="text-muted-foreground">
              {complianceChecklists.length} comprehensive checklists organized by category.
              Click any checklist to view details.
            </p>
          </div>

          {/* Category Filters */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {complianceCategories.map((category) => {
              const Icon = iconMap[category.icon] || FileCheck;
              return (
                <Badge
                  key={category.id}
                  variant="outline"
                  className="cursor-pointer px-4 py-2 hover:bg-california-blue hover:text-white"
                >
                  <Icon className="mr-1 h-3 w-3" />
                  {category.name}
                </Badge>
              );
            })}
          </div>

          {/* Checklists Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {complianceChecklists.map((checklist) => (
              <Link key={checklist.id} href={`/tools/checklist/${checklist.id}`}>
                <Card className="h-full transition-all hover:border-california-gold hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {complianceCategories.find((c) => c.id === checklist.category)?.name}
                      </Badge>
                      {checklist.deadline && (
                        <Badge variant="destructive" className="text-xs">
                          {checklist.deadline}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="line-clamp-2 text-lg">
                      {checklist.shortTitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-2">
                      {checklist.description}
                    </CardDescription>
                    <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="h-4 w-4" />
                        {checklist.items.length} items
                      </span>
                      <span className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        {checklist.applicability}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Download All */}
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" className="gap-2">
              <Download className="h-5 w-5" />
              Download All Checklists (PDF)
            </Button>
            <p className="mt-2 text-sm text-muted-foreground">
              Free download - no email required
            </p>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <DonationSection />

      {/* CTA Section */}
      <section className="bg-california-blue py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Need Help Beyond DIY?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Our free tools are great for getting started, but complex compliance
            issues sometimes need expert guidance. We&apos;re here to help.
          </p>
          <Link href="/consultancy#contact">
            <Button variant="gold" size="xl" className="gap-2">
              Schedule Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
