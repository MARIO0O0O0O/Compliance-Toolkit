'use client';

import { useState } from 'react';
import {
  Building2,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { getChecklistsByEmployeeCount, complianceChecklists } from '@/lib/compliance-data';
import Link from 'next/link';

const employeeTiers = [
  {
    range: '1-4',
    min: 1,
    max: 4,
    label: 'Micro Business',
    description: 'Basic mandates apply',
  },
  {
    range: '5-14',
    min: 5,
    max: 14,
    label: 'Small Business',
    description: '+ Harassment Training, CFRA',
  },
  {
    range: '15-49',
    min: 15,
    max: 49,
    label: 'Growing Business',
    description: '+ Pay Scale Disclosure',
  },
  {
    range: '50-99',
    min: 50,
    max: 99,
    label: 'Mid-Size Business',
    description: '+ FMLA, Cal/OSHA IIPP',
  },
  {
    range: '100+',
    min: 100,
    max: Infinity,
    label: 'Large Business',
    description: '+ Pay Data Reporting',
  },
];

export function ComplianceCalculator() {
  const [employeeCount, setEmployeeCount] = useState<number | ''>('');
  const [showResults, setShowResults] = useState(false);

  const handleCalculate = () => {
    if (employeeCount && employeeCount > 0) {
      setShowResults(true);
    }
  };

  const currentTier = employeeTiers.find(
    (tier) =>
      typeof employeeCount === 'number' &&
      employeeCount >= tier.min &&
      employeeCount <= tier.max
  );

  const applicableChecklists =
    typeof employeeCount === 'number'
      ? getChecklistsByEmployeeCount(employeeCount)
      : [];

  const totalChecklists = complianceChecklists.length;
  const applicablePercentage = Math.round(
    (applicableChecklists.length / totalChecklists) * 100
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building2 className="h-5 w-5 text-california-blue" />
          Compliance Calculator
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!showResults ? (
          <div className="space-y-6">
            <div>
              <Label htmlFor="employee-count" className="text-base">
                How many employees do you have in California?
              </Label>
              <p className="mb-3 text-sm text-muted-foreground">
                Include full-time, part-time, and temporary employees.
              </p>
              <div className="flex gap-4">
                <Input
                  id="employee-count"
                  type="number"
                  min="1"
                  placeholder="Enter number"
                  value={employeeCount}
                  onChange={(e) =>
                    setEmployeeCount(
                      e.target.value ? parseInt(e.target.value) : ''
                    )
                  }
                  className="max-w-[200px]"
                />
                <Button
                  variant="california"
                  onClick={handleCalculate}
                  disabled={!employeeCount || employeeCount < 1}
                >
                  Calculate
                </Button>
              </div>
            </div>

            {/* Quick Select Buttons */}
            <div>
              <p className="mb-3 text-sm text-muted-foreground">
                Or select a range:
              </p>
              <div className="flex flex-wrap gap-2">
                {employeeTiers.map((tier) => (
                  <Button
                    key={tier.range}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setEmployeeCount(tier.min);
                      setShowResults(true);
                    }}
                  >
                    {tier.range}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Results Header */}
            <div className="rounded-lg bg-california-blue/10 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    With {employeeCount} employees, you are classified as a:
                  </p>
                  <h3 className="text-xl font-bold text-california-blue">
                    {currentTier?.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {currentTier?.description}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowResults(false)}
                >
                  Change
                </Button>
              </div>
            </div>

            {/* Compliance Score */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium">Requirements That Apply</span>
                <span className="text-sm text-muted-foreground">
                  {applicableChecklists.length} of {totalChecklists} checklists
                </span>
              </div>
              <Progress value={applicablePercentage} className="h-3" />
            </div>

            {/* Tier Breakdown */}
            <div>
              <h4 className="mb-3 font-semibold">What Applies to You:</h4>
              <div className="space-y-2">
                {employeeTiers.map((tier) => {
                  const isApplicable =
                    typeof employeeCount === 'number' &&
                    employeeCount >= tier.min;
                  return (
                    <div
                      key={tier.range}
                      className={`flex items-center gap-3 rounded-lg border p-3 ${
                        isApplicable
                          ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950'
                          : 'opacity-50'
                      }`}
                    >
                      {isApplicable ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      ) : (
                        <div className="h-5 w-5 rounded-full border-2" />
                      )}
                      <div className="flex-1">
                        <span className="font-medium">{tier.range} employees:</span>
                        <span className="ml-2 text-muted-foreground">
                          {tier.description}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Applicable Checklists */}
            <div>
              <h4 className="mb-3 font-semibold">
                Your Required Checklists ({applicableChecklists.length}):
              </h4>
              <div className="max-h-[400px] space-y-2 overflow-y-auto">
                {applicableChecklists.map((checklist) => (
                  <Link
                    key={checklist.id}
                    href={`/tools/checklist/${checklist.id}`}
                    className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-muted"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-california-blue" />
                      <div>
                        <span className="font-medium">{checklist.shortTitle}</span>
                        {checklist.deadline && (
                          <Badge variant="destructive" className="ml-2 text-xs">
                            {checklist.deadline}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Warning */}
            <div className="flex items-start gap-3 rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-4 dark:bg-yellow-950">
              <AlertTriangle className="mt-0.5 h-5 w-5 text-yellow-600" />
              <div className="text-sm">
                <p className="font-medium text-yellow-700 dark:text-yellow-300">
                  Important Note
                </p>
                <p className="text-yellow-600 dark:text-yellow-400">
                  This calculator provides general guidance. Some requirements depend
                  on factors beyond employee count (industry, location, etc.).
                  Consult with a professional for specific advice.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="#checklists" className="flex-1">
                <Button variant="outline" className="w-full">
                  View All Checklists
                </Button>
              </Link>
              <Link href="/consultancy#contact" className="flex-1">
                <Button variant="california" className="w-full">
                  Get Expert Help
                </Button>
              </Link>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
