import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  CheckCircle2,
  Download,
  Share2,
  Clock,
  Building2,
  AlertTriangle,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getChecklistById, complianceCategories } from '@/lib/compliance-data';
import { InteractiveChecklist } from '@/components/compliance/interactive-checklist';

export default async function ChecklistPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const checklist = getChecklistById(id);

  if (!checklist) {
    notFound();
  }

  const category = complianceCategories.find((c) => c.id === checklist.category);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-california-blue via-california-darkblue to-california-blue py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/tools#checklists"
              className="mb-6 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Checklists
            </Link>

            <div className="mb-4 flex flex-wrap gap-2">
              <Badge variant="secondary">{category?.name}</Badge>
              {checklist.deadline && (
                <Badge variant="destructive">{checklist.deadline}</Badge>
              )}
              {checklist.employeeThreshold && (
                <Badge variant="outline" className="border-white text-white">
                  <Building2 className="mr-1 h-3 w-3" />
                  {checklist.employeeThreshold}+ employees
                </Badge>
              )}
            </div>

            <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              {checklist.title}
            </h1>

            <p className="mb-6 text-lg text-gray-300">{checklist.description}</p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle2 className="h-4 w-4" />
                {checklist.items.length} checklist items
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Clock className="h-4 w-4" />
                ~{Math.ceil(checklist.items.length * 2)} min to complete
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Checklist */}
            <div className="lg:col-span-2">
              <InteractiveChecklist checklist={checklist} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Applicability */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Who Must Comply?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{checklist.applicability}</p>
                </CardContent>
              </Card>

              {/* Deadline */}
              {checklist.deadline && (
                <Card className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg text-red-700 dark:text-red-300">
                      <AlertTriangle className="h-5 w-5" />
                      Deadline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-600 dark:text-red-400">
                      This compliance requirement has a deadline: <strong>{checklist.deadline}</strong>
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Cross References */}
              {checklist.crossReferences && checklist.crossReferences.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Related Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {checklist.crossReferences.map((ref) => (
                        <li
                          key={ref}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <ExternalLink className="mt-0.5 h-4 w-4 shrink-0" />
                          {ref}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full gap-2">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Share2 className="h-4 w-4" />
                    Share Checklist
                  </Button>
                </CardContent>
              </Card>

              {/* Help CTA */}
              <Card className="bg-california-blue text-white">
                <CardHeader>
                  <CardTitle className="text-lg text-white">
                    Need Expert Guidance?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-gray-300">
                    Get personalized help implementing these requirements for your
                    specific business situation.
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
