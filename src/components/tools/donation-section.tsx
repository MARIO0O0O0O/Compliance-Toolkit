'use client';

import { useState } from 'react';
import { Heart, Coffee, Gift, Star, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const donationTiers = [
  {
    id: 'coffee',
    name: 'Buy me a coffee',
    amount: 5,
    icon: Coffee,
    description: 'A small thank you that keeps us caffeinated!',
  },
  {
    id: 'supporter',
    name: 'Supporter',
    amount: 25,
    icon: Heart,
    description: 'Help us maintain and update our free tools.',
    popular: true,
  },
  {
    id: 'champion',
    name: 'Champion',
    amount: 50,
    icon: Star,
    description: 'Support development of new compliance resources.',
  },
  {
    id: 'patron',
    name: 'Patron',
    amount: 100,
    icon: Gift,
    description: 'Become a patron and get early access to new tools.',
  },
];

export function DonationSection() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleDonate = async () => {
    setIsProcessing(true);

    // Simulate Stripe checkout - in production, this would redirect to Stripe
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In production:
    // const response = await fetch('/api/create-checkout-session', {
    //   method: 'POST',
    //   body: JSON.stringify({ amount: selectedAmount }),
    // });
    // const { url } = await response.json();
    // window.location.href = url;

    setIsProcessing(false);
    setIsComplete(true);
  };

  const selectedAmount = selectedTier === 'custom'
    ? parseInt(customAmount) || 0
    : donationTiers.find((t) => t.id === selectedTier)?.amount || 0;

  if (isComplete) {
    return (
      <section id="donate" className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-lg">
            <CardContent className="flex flex-col items-center py-12 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-2 text-2xl font-bold">Thank You!</h3>
              <p className="text-muted-foreground">
                Your support helps us keep these tools free for everyone.
                We truly appreciate your generosity.
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => {
                  setIsComplete(false);
                  setSelectedTier(null);
                }}
              >
                Make Another Donation
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="donate" className="bg-muted/50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <Badge variant="california" className="mb-4">
              <Heart className="mr-1 h-3 w-3" />
              Support Free Tools
            </Badge>
            <h2 className="mb-4 text-3xl font-bold">
              Help Keep These Tools Free
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our mission is to make compliance accessible to all California businesses,
              regardless of budget. Your donations help us maintain, improve, and expand
              our free resources.
            </p>
          </div>

          {/* Donation Tiers */}
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {donationTiers.map((tier) => (
              <Card
                key={tier.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedTier === tier.id
                    ? 'border-2 border-california-gold ring-2 ring-california-gold/20'
                    : ''
                } ${tier.popular ? 'relative' : ''}`}
                onClick={() => setSelectedTier(tier.id)}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="california">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-california-gold/20">
                    <tier.icon className="h-6 w-6 text-california-blue" />
                  </div>
                  <CardTitle className="text-lg">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-california-blue">
                    ${tier.amount}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm">
                    {tier.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Custom Amount */}
          <Card className="mb-8">
            <CardContent className="py-6">
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <div className="flex-1">
                  <Label htmlFor="custom-amount">Or enter a custom amount:</Label>
                  <div className="relative mt-2">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      $
                    </span>
                    <Input
                      id="custom-amount"
                      type="number"
                      min="1"
                      placeholder="Enter amount"
                      className="pl-7"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedTier('custom');
                      }}
                      onFocus={() => setSelectedTier('custom')}
                    />
                  </div>
                </div>
                <div className="w-full sm:w-auto">
                  <Button
                    variant="gold"
                    size="lg"
                    className="w-full gap-2"
                    disabled={!selectedAmount || isProcessing}
                    onClick={handleDonate}
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Heart className="h-5 w-5" />
                        Donate {selectedAmount > 0 ? `$${selectedAmount}` : ''}
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trust Indicators */}
          <div className="text-center">
            <p className="mb-4 text-sm text-muted-foreground">
              Secure payment processing by Stripe. Your donation is not tax-deductible.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Secure Payment
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                No Account Required
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                One-Time Donation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
