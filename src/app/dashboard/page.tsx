import Link from 'next/link';
import { redirect } from 'next/navigation';
import {
  CheckCircle2,
  Clock,
  AlertTriangle,
  FileCheck,
  ArrowRight,
  Building2,
  Calendar,
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { createClient } from '@/lib/supabase/server';
import { complianceChecklists } from '@/lib/compliance-data';
import type { Database } from '@/types/database';

type Profile = Database['public']['Tables']['profiles']['Row'];

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/login');
  }

  // Get user profile
  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  const profile = data as Profile | null;

  // In production, you would fetch actual progress from the database
  // For now, we'll use mock data
  const mockProgress = {
    totalChecklists: complianceChecklists.length,
    completed: 3,
    inProgress: 5,
    notStarted: complianceChecklists.length - 8,
    overallPercentage: 15,
  };

  const upcomingDeadlines = complianceChecklists
    .filter((c) => c.deadline)
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Welcome back, {profile?.full_name || user.email?.split('@')[0]}
        </h1>
        <p className="text-muted-foreground">
          Track your California compliance progress and stay on top of requirements.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Checklists</CardTitle>
            <FileCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockProgress.totalChecklists}</div>
            <p className="text-xs text-muted-foreground">
              California compliance requirements
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {mockProgress.completed}
            </div>
            <p className="text-xs text-muted-foreground">Checklists finished</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {mockProgress.inProgress}
            </div>
            <p className="text-xs text-muted-foreground">Currently working on</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Not Started</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {mockProgress.notStarted}
            </div>
            <p className="text-xs text-muted-foreground">Needs attention</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Overall Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Overall Compliance Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {mockProgress.completed} of {mockProgress.totalChecklists} complete
                </span>
                <span className="text-lg font-bold">
                  {mockProgress.overallPercentage}%
                </span>
              </div>
              <Progress value={mockProgress.overallPercentage} className="h-4" />
              <p className="mt-4 text-sm text-muted-foreground">
                Keep going! Complete more checklists to improve your compliance score.
              </p>
            </CardContent>
          </Card>

          {/* Recent Checklists */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Continue Where You Left Off</CardTitle>
                <Link href="/tools#checklists">
                  <Button variant="ghost" size="sm" className="gap-1">
                    View All
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {complianceChecklists.slice(0, 5).map((checklist, index) => {
                  const progress = [75, 50, 30, 0, 0][index];
                  return (
                    <Link
                      key={checklist.id}
                      href={`/tools/checklist/${checklist.id}`}
                      className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{checklist.shortTitle}</span>
                          {checklist.deadline && (
                            <Badge variant="destructive" className="text-xs">
                              {checklist.deadline}
                            </Badge>
                          )}
                        </div>
                        <div className="mt-2 flex items-center gap-4">
                          <Progress value={progress} className="h-2 w-32" />
                          <span className="text-xs text-muted-foreground">
                            {progress}% complete
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </Link>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Company Profile */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Your Business
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-muted-foreground">Company</span>
                  <p className="font-medium">
                    {profile?.company_name || 'Not set'}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Employees</span>
                  <p className="font-medium">
                    {profile?.employee_count
                      ? `${profile.employee_count} employees`
                      : 'Not set'}
                  </p>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/settings">Update Profile</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Deadlines */}
          <Card className="border-red-200 dark:border-red-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-300">
                <Calendar className="h-5 w-5" />
                Upcoming Deadlines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingDeadlines.map((checklist) => (
                  <Link
                    key={checklist.id}
                    href={`/tools/checklist/${checklist.id}`}
                    className="block"
                  >
                    <div className="rounded-lg border border-red-200 bg-red-50 p-3 transition-colors hover:bg-red-100 dark:border-red-800 dark:bg-red-950 dark:hover:bg-red-900">
                      <div className="text-sm font-medium">{checklist.shortTitle}</div>
                      <div className="text-xs text-red-600 dark:text-red-400">
                        Due: {checklist.deadline}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Get Help */}
          <Card className="bg-california-blue text-white">
            <CardHeader>
              <CardTitle className="text-white">Need Expert Help?</CardTitle>
              <CardDescription className="text-gray-300">
                Get personalized guidance from our compliance experts.
              </CardDescription>
            </CardHeader>
            <CardContent>
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
  );
}
