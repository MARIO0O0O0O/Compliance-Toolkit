import Link from 'next/link';
import {
  Scale,
  Shield,
  Zap,
  Users,
  CheckCircle2,
  ArrowRight,
  FileCheck,
  BookOpen,
  Headphones,
  Clock,
  Award,
  Building2,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ContactForm } from '@/components/consultancy/contact-form';

const services = [
  {
    id: 'audit',
    icon: FileCheck,
    title: 'Compliance Audit',
    description: 'Comprehensive assessment of your current HR practices against California requirements.',
    features: [
      'Full policy and procedure review',
      'Gap analysis report',
      'Prioritized action plan',
      'Risk assessment',
    ],
    popular: false,
  },
  {
    id: 'policy',
    icon: BookOpen,
    title: 'Policy Development',
    description: 'Custom employee handbooks and HR policies tailored to your business.',
    features: [
      'Employee handbook creation/update',
      'Individual policy development',
      'California-specific clauses',
      'Annual update service',
    ],
    popular: true,
  },
  {
    id: 'training',
    icon: Users,
    title: 'Training Programs',
    description: 'SB 1343 compliant harassment prevention and management training.',
    features: [
      '2-hour supervisor training',
      '1-hour staff training',
      'Interactive sessions',
      'Certificates provided',
    ],
    popular: false,
  },
  {
    id: 'support',
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'Retainer-based HR compliance support for peace of mind.',
    features: [
      'Monthly compliance updates',
      'Email/phone support',
      'Document review',
      'Regulatory alerts',
    ],
    popular: false,
  },
];

const processSteps = [
  {
    step: 1,
    title: 'Discovery Call',
    description: 'Free 30-minute consultation to understand your business and compliance needs.',
  },
  {
    step: 2,
    title: 'Assessment',
    description: 'Comprehensive review of your current HR practices, policies, and documentation.',
  },
  {
    step: 3,
    title: 'Action Plan',
    description: 'Detailed roadmap with prioritized recommendations and implementation timeline.',
  },
  {
    step: 4,
    title: 'Implementation',
    description: 'Hands-on support to implement changes and train your team.',
  },
  {
    step: 5,
    title: 'Ongoing Support',
    description: 'Continuous compliance monitoring and updates as regulations change.',
  },
];

const faqs = [
  {
    question: 'What size businesses do you work with?',
    answer: 'We work with California businesses of all sizes, from startups with their first employee to established companies with hundreds of staff. Our services scale to your needs.',
  },
  {
    question: 'How quickly can you help us become compliant?',
    answer: 'Timeline depends on your current state and complexity. Most clients see significant progress within 2-4 weeks for basic compliance, with full implementation typically within 60-90 days.',
  },
  {
    question: 'Do you provide legal advice?',
    answer: 'We provide HR compliance consulting, not legal advice. For specific legal questions, we recommend consulting with an employment attorney. We can provide referrals to trusted legal partners.',
  },
  {
    question: 'What makes your approach different?',
    answer: 'Our tech-first approach uses AI and automation tools to dramatically increase efficiency. Combined with 10+ years of government experience, we deliver compliance solutions that pay for themselves through saved time and reduced risk.',
  },
  {
    question: 'Do you offer remote services?',
    answer: 'Yes! While we\'re based in California, we serve clients throughout the state via video conferencing, secure document sharing, and our digital compliance tools.',
  },
];

export default function ConsultancyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-california-blue via-california-darkblue to-california-blue py-20 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="california" className="mb-4">
              HR Compliance Consulting
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Expert Guidance Through California&apos;s
              <span className="text-california-gold"> Complex HR Requirements</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              With 10+ years of municipal government experience and a Master of Public
              Administration, I help businesses navigate compliance while leveraging
              technology for maximum efficiency.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="#contact">
                <Button variant="gold" size="xl" className="gap-2">
                  Schedule Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="#services">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 border-white text-white hover:bg-white hover:text-california-blue"
                >
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">
              Our Services
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Comprehensive Compliance Solutions
            </h2>
            <p className="mb-12 text-muted-foreground">
              From one-time audits to ongoing support, we offer flexible services
              to meet your compliance needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Card
                key={service.id}
                id={service.id}
                className={`relative transition-all hover:shadow-lg ${
                  service.popular ? 'border-california-gold border-2' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="california">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-california-blue/10 text-california-blue">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="#contact" className="mt-6 block">
                    <Button variant="outline" className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">
              Our Process
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              How We Work Together
            </h2>
            <p className="mb-12 text-muted-foreground">
              A structured approach to getting your business compliant efficiently.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              {processSteps.map((item, index) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-california-blue text-white font-bold">
                      {item.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="mt-2 h-full w-0.5 bg-california-blue/20" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About/Credentials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Badge variant="outline" className="mb-4">
                About Your Consultant
              </Badge>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Government Experience Meets Modern Technology
              </h2>
              <p className="mb-6 text-muted-foreground">
                With over a decade of municipal government experience and a Master of
                Public Administration, I understand the regulatory landscape from the
                inside. But I&apos;m also a developer who believes in using cutting-edge
                technology to achieve efficiency.
              </p>
              <p className="mb-6 text-muted-foreground">
                My goal is simple: help your business become compliant while saving
                time and money. My tech-first approach means leveraging AI and
                automation to do the work of 5+ employees at lightning speed.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-california-gold/20">
                    <Award className="h-5 w-5 text-california-blue" />
                  </div>
                  <div>
                    <div className="font-semibold">MPA</div>
                    <div className="text-sm text-muted-foreground">
                      Master of Public Administration
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-california-gold/20">
                    <Clock className="h-5 w-5 text-california-blue" />
                  </div>
                  <div>
                    <div className="font-semibold">10+ Years</div>
                    <div className="text-sm text-muted-foreground">
                      Government Experience
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-california-gold/20">
                    <Building2 className="h-5 w-5 text-california-blue" />
                  </div>
                  <div>
                    <div className="font-semibold">Municipal</div>
                    <div className="text-sm text-muted-foreground">
                      Regulatory Background
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-california-gold/20">
                    <Zap className="h-5 w-5 text-california-blue" />
                  </div>
                  <div>
                    <div className="font-semibold">Tech-First</div>
                    <div className="text-sm text-muted-foreground">
                      AI-Powered Approach
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Why Compliance Matters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
                    <div className="font-semibold text-red-700 dark:text-red-300">
                      Non-Compliance Penalties
                    </div>
                    <ul className="mt-2 space-y-1 text-sm text-red-600 dark:text-red-400">
                      <li>PAGA penalties: $100-$200 per employee per pay period</li>
                      <li>Wage statement violations: $50-$4,000 per employee</li>
                      <li>Meal/rest break penalties: 1 hour pay per violation</li>
                      <li>Harassment claims: Unlimited liability</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950">
                    <div className="font-semibold text-green-700 dark:text-green-300">
                      Benefits of Compliance
                    </div>
                    <ul className="mt-2 space-y-1 text-sm text-green-600 dark:text-green-400">
                      <li>Avoid costly lawsuits and penalties</li>
                      <li>Improve employee retention and morale</li>
                      <li>Build a positive workplace culture</li>
                      <li>Protect your business reputation</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">
              FAQ
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mb-12 text-muted-foreground">
              Answers to common questions about our consulting services.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.question}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Badge variant="outline" className="mb-4">
                Get Started
              </Badge>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Schedule Your Free Consultation
              </h2>
              <p className="mb-6 text-muted-foreground">
                Ready to simplify your HR compliance? Fill out the form and I&apos;ll
                be in touch within 24 hours to schedule your free 30-minute
                consultation.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-california-blue/10">
                    <Mail className="h-5 w-5 text-california-blue" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <a href="mailto:contact@cacompliance.com" className="font-medium hover:text-california-blue">
                      contact@cacompliance.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-california-blue/10">
                    <Phone className="h-5 w-5 text-california-blue" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <a href="tel:+1234567890" className="font-medium hover:text-california-blue">
                      (123) 456-7890
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-california-blue/10">
                    <MapPin className="h-5 w-5 text-california-blue" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-medium">California (Remote Services Available)</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
