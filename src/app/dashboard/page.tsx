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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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

  // Get user profile with explicit typing
  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  const profile = data as Profile | null;

  // Get checklist progress
  const { data: progressData } = await supabase
    .from('checklist_progress')
    .select('*')
    .eq('user_id', user.id);

  const checklistProgress = progressData || [];

  // Calculate stats
  const totalChecklists = complianceChecklists.length;
  const startedChecklists = checklistProgress.length;
  const completedChecklists = checklistProgress.filter(
    (p) => p.progress_percentage === 100
  ).length;
  const avgProgress =
    startedChecklists > 0
      ? Math.round(
          checklistProgress.reduce((sum, p) => sum + p.progress_percentage, 0) /
            startedChecklists
        )
      : 0;

  // Get recent activity (last 5 updated checklists)
  const recentActivity = checklistProgress
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    )
    .slice(0, 5);

  // Recommended checklists (not started yet)
  const startedIds = new Set(checklistProgress.map((p) => p.checklist_id));
  const recommendedChecklists = complianceChecklists
    .filter((c) => !startedIds.has(c.id))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="border-b bg-background">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Welcome back, {profile?.full_name || 'User'}
              </h1>
              <p className="text-muted-foreground">
                {profile?.company_name
                  ? `${profile.company_name} - `
                  : ''}
                Track your California HR compliance progress
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <Link href="/tools">
                  <FileCheck className="mr-2 h-4 w-4" />
                  All Checklists
                </Link>
              </Button>
              <Button asChild>
                <Link href="/consultancy/contact">Get Expert Help</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Checklists
              </CardTitle>
              <FileCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalChecklists}</div>
              <p className="text-xs text-muted-foreground">
                Available compliance checklists
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">In Progress</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{startedChecklists}</div>
              <p className="text-xs text-muted-foreground">
                Checklists you&apos;ve started
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{completedChecklists}</div>
              <p className="text-xs text-muted-foreground">
                Fully completed checklists
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Avg. Progress
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{avgProgress}%</div>
              <Progress value={avgProgress} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Your recently updated compliance checklists
                </CardDescription>
              </CardHeader>
              <CardContent>
                {recentActivity.length > 0 ? (
                  <div className="space-y-4">
                    {recentActivity.map((activity) => {
                      const checklist = complianceChecklists.find(
                        (c) => c.id === activity.checklist_id
                      );
                      if (!checklist) return null;

                      return (
                        <div
                          key={activity.id}
                          className="flex items-center justify-between rounded-lg border p-4"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium">{checklist.title}</h4>
                              {activity.progress_percentage === 100 ? (
                                <Badge
                                  variant="default"
                                  className="bg-green-500"
                                >
                                  Complete
                                </Badge>
                              ) : (
                                <Badge variant="secondary">In Progress</Badge>
                              )}
                            </div>
                            <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {new Date(
                                  activity.updated_at
                                ).toLocaleDateString()}
                              </span>
                              <span>{activity.progress_percentage}% complete</span>
                            </div>
                            <Progress
                              value={activity.progress_percentage}
                              className="mt-2 h-2"
                            />
                          </div>
                          <Button variant="ghost" size="sm" asChild>
                            <Link
                              href={`/tools/checklist/${activity.checklist_id}`}
                            >
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <AlertTriangle className="mb-4 h-12 w-12 text-muted-foreground" />
                    <h3 className="mb-2 font-semibold">No activity yet</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Start a compliance checklist to track your progress
                    </p>
                    <Button asChild>
                      <Link href="/tools">Browse Checklists</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Recommended Checklists */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Recommended for You</CardTitle>
                <CardDescription>
                  Checklists you haven&apos;t started yet
                </CardDescription>
              </CardHeader>
              <CardContent>
                {recommendedChecklists.length > 0 ? (
                  <div className="space-y-4">
                    {recommendedChecklists.map((checklist) => (
                      <div
                        key={checklist.id}
                        className="rounded-lg border p-4 transition-colors hover:bg-muted/50"
                      >
                        <div className="mb-2 flex items-start justify-between">
                          <Badge variant="outline">{checklist.category}</Badge>
                          <Building2 className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <h4 className="mb-1 font-medium">{checklist.title}</h4>
                        <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                          {checklist.description}
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full bg-transparent"
                          asChild
                        >
                          <Link href={`/tools/checklist/${checklist.id}`}>
                            Start Checklist
                          </Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-4 text-center">
                    <CheckCircle2 className="mx-auto mb-2 h-8 w-8 text-green-500" />
                    <p className="text-sm text-muted-foreground">
                      You&apos;ve started all available checklists!
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
