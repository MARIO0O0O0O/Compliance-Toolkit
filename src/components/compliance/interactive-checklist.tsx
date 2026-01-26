'use client';

import { useState, useEffect } from 'react';
import { CheckCircle2, Circle, ChevronDown, ChevronUp, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import type { ComplianceChecklist, ChecklistItem } from '@/lib/compliance-data';

interface CheckedItems {
  [key: string]: boolean;
}

interface InteractiveChecklistProps {
  checklist: ComplianceChecklist;
}

export function InteractiveChecklist({ checklist }: InteractiveChecklistProps) {
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({});
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [isSaved, setIsSaved] = useState(false);

  // Load saved progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`checklist-${checklist.id}`);
    if (saved) {
      setCheckedItems(JSON.parse(saved));
    }
  }, [checklist.id]);

  // Calculate total items (including sub-items)
  const getTotalItems = (): number => {
    return checklist.items.reduce((total, item) => {
      return total + 1 + (item.subItems?.length || 0);
    }, 0);
  };

  const getCompletedCount = (): number => {
    return Object.values(checkedItems).filter(Boolean).length;
  };

  const totalItems = getTotalItems();
  const completedCount = getCompletedCount();
  const progressPercentage = Math.round((completedCount / totalItems) * 100);

  const handleCheck = (itemId: string, checked: boolean) => {
    const newCheckedItems = { ...checkedItems, [itemId]: checked };
    setCheckedItems(newCheckedItems);
    setIsSaved(false);
  };

  const handleCheckAll = (item: ChecklistItem, checked: boolean) => {
    const newCheckedItems = { ...checkedItems, [item.id]: checked };

    // Also check/uncheck all sub-items
    if (item.subItems) {
      item.subItems.forEach((_, index) => {
        newCheckedItems[`${item.id}-sub-${index}`] = checked;
      });
    }

    setCheckedItems(newCheckedItems);
    setIsSaved(false);
  };

  const toggleExpand = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const saveProgress = () => {
    localStorage.setItem(
      `checklist-${checklist.id}`,
      JSON.stringify(checkedItems)
    );
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const resetProgress = () => {
    setCheckedItems({});
    localStorage.removeItem(`checklist-${checklist.id}`);
  };

  const isItemComplete = (item: ChecklistItem): boolean => {
    if (!checkedItems[item.id]) return false;
    if (item.subItems) {
      return item.subItems.every((_, index) =>
        checkedItems[`${item.id}-sub-${index}`]
      );
    }
    return true;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Compliance Checklist</CardTitle>
          <Badge
            variant={progressPercentage === 100 ? 'success' : 'secondary'}
          >
            {completedCount}/{totalItems} Complete
          </Badge>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">{progressPercentage}%</span>
          </div>
          <Progress value={progressPercentage} className="h-3" />
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Checklist Items */}
        {checklist.items.map((item) => {
          const isComplete = isItemComplete(item);
          const isExpanded = expandedItems.has(item.id);
          const hasSubItems = item.subItems && item.subItems.length > 0;

          return (
            <div
              key={item.id}
              className={`checklist-item flex-col ${
                isComplete ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950' : ''
              }`}
              data-completed={isComplete}
            >
              <div className="flex w-full items-start gap-3">
                <Checkbox
                  id={item.id}
                  checked={checkedItems[item.id] || false}
                  onCheckedChange={(checked) =>
                    hasSubItems
                      ? handleCheckAll(item, checked as boolean)
                      : handleCheck(item.id, checked as boolean)
                  }
                  className="mt-0.5"
                />
                <div className="flex-1">
                  <label
                    htmlFor={item.id}
                    className={`cursor-pointer font-medium ${
                      isComplete ? 'text-green-700 line-through dark:text-green-300' : ''
                    }`}
                  >
                    {item.text}
                  </label>
                  {item.reference && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      Reference: {item.reference}
                    </p>
                  )}
                </div>

                {hasSubItems && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpand(item.id)}
                    className="h-8 w-8 p-0"
                  >
                    {isExpanded ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                )}
              </div>

              {/* Sub-items */}
              {hasSubItems && isExpanded && (
                <div className="ml-8 mt-3 space-y-2 border-l-2 border-muted pl-4">
                  {item.subItems!.map((subItem, index) => {
                    const subItemId = `${item.id}-sub-${index}`;
                    const isSubChecked = checkedItems[subItemId] || false;

                    return (
                      <div key={subItemId} className="flex items-start gap-3">
                        <Checkbox
                          id={subItemId}
                          checked={isSubChecked}
                          onCheckedChange={(checked) =>
                            handleCheck(subItemId, checked as boolean)
                          }
                          className="mt-0.5"
                        />
                        <label
                          htmlFor={subItemId}
                          className={`cursor-pointer text-sm ${
                            isSubChecked
                              ? 'text-green-700 line-through dark:text-green-300'
                              : 'text-muted-foreground'
                          }`}
                        >
                          {subItem}
                        </label>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        {/* Actions */}
        <div className="flex flex-col gap-3 border-t pt-4 sm:flex-row">
          <Button
            variant="california"
            className="flex-1 gap-2"
            onClick={saveProgress}
          >
            {isSaved ? (
              <>
                <CheckCircle2 className="h-4 w-4" />
                Saved!
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                Save Progress
              </>
            )}
          </Button>
          <Button
            variant="outline"
            className="flex-1"
            onClick={resetProgress}
          >
            Reset Checklist
          </Button>
        </div>

        {/* Note */}
        <p className="text-center text-xs text-muted-foreground">
          Your progress is saved locally in your browser. Create an account to
          save progress across devices.
        </p>
      </CardContent>
    </Card>
  );
}
