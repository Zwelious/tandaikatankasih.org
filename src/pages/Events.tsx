import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, MapPin, Trophy, Award, Target, Clock, Music, Gift } from "lucide-react";
import { Link } from "react-router-dom";

export default function Events() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <Trophy className="h-16 w-16 text-accent mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            23rd Annual Charity Golf Tournament
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xl mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-accent" />
              <span>October 17-18, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-6 w-6 text-accent" />
              <span>Bukit Darmo Golf, Surabaya</span>
            </div>
          </div>
          <Button size="lg" variant="secondary" asChild className="shadow-lifted">
            <Link to="/contact">Register Now</Link>
          </Button>
        </div>
      </section>

      {/* Theme Quote */}
      <section className="py-12 bg-card border-y">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl font-serif italic text-primary max-w-4xl mx-auto">
            "In charity golf, the prize isn't a trophy — it's the difference you make in someone's life."
          </blockquote>
        </div>
      </section>

      {/* Program of Events */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Program of Events</h2>

          <div className="space-y-8">
            {/* October 17 */}
            <Card className="shadow-card">
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle className="text-2xl font-serif flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-accent" />
                  October 17, 2025 - Anniversary Day
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Evening Celebration</h3>
                    <p className="text-muted-foreground">
                      Dinner buffet with drinks, live music entertainment, lucky draw, and prize pick-up for tournament participants.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* October 18 */}
            <Card className="shadow-card">
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle className="text-2xl font-serif flex items-center gap-3">
                  <Trophy className="h-6 w-6 text-accent" />
                  October 18, 2025 - Tournament Day
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Morning - Registration & Brunch</h3>
                      <p className="text-muted-foreground">
                        Early registration and prize collection followed by brunch service.
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Pre-Tournament Activities</h3>
                      <p className="text-muted-foreground">
                        Practice green warm-up and drone group photo session.
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-start gap-3">
                    <Trophy className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">11:30 AM - Shotgun Start</h3>
                      <p className="text-muted-foreground">
                        Official tournament begins. Submit signed scorecards immediately after completion. Cutoff time: 18:00.
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-start gap-3">
                    <Music className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Evening - Gala Dinner</h3>
                      <p className="text-muted-foreground">
                        Exclusive gala dinner for donors, participants, and committee featuring:
                      </p>
                      <ul className="mt-2 space-y-1 text-muted-foreground ml-4">
                        <li>• Division and novelty prize presentations</li>
                        <li>• Antique tobacco jar charity auction</li>
                        <li>• Grand lucky draw</li>
                        <li>• Live music entertainment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tournament Format & Rules */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Tournament Format & Rules</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">System 36 Format</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Points are allocated based on your score relative to par on each hole. The system rewards consistent play and ensures fair competition across all skill levels.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Handicap 36 Same-Day System</h4>
                  <p className="text-sm text-muted-foreground">
                    Handicaps are calculated on tournament day based on your performance, ensuring the most accurate and fair competition possible.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Tournament Rules</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Maximum double-par per hole applies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Submit signed scorecards immediately after completion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Cutoff time: 18:00 (6:00 PM)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Ties decided by club count-back method</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Referee and rules committee appointed by organizers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Weather interruptions at organizers' discretion</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Divisions & Prizes */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Divisions & Prizes</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="shadow-card">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 text-accent mx-auto mb-2" />
                <CardTitle className="text-2xl font-serif">Rookies</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">Age range to be confirmed after final entries</p>
                <div className="space-y-2">
                  <p className="font-semibold">Awards: Top 3</p>
                  <p className="text-sm text-muted-foreground">1st, 2nd, and 3rd place trophies</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 text-accent mx-auto mb-2" />
                <CardTitle className="text-2xl font-serif">Midlife</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">Age range to be confirmed after final entries</p>
                <div className="space-y-2">
                  <p className="font-semibold">Awards: Top 3</p>
                  <p className="text-sm text-muted-foreground">1st, 2nd, and 3rd place trophies</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 text-accent mx-auto mb-2" />
                <CardTitle className="text-2xl font-serif">Legends</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">Age range to be confirmed after final entries</p>
                <div className="space-y-2">
                  <p className="font-semibold">Awards: Top 3</p>
                  <p className="text-sm text-muted-foreground">1st, 2nd, and 3rd place trophies</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-serif flex items-center gap-3">
                <Gift className="h-6 w-6 text-accent" />
                Novelty Prizes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Nearest to the Line</p>
                    <p className="text-sm text-muted-foreground">Special recognition for precision shots</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Trophy className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Longest Drive</p>
                    <p className="text-sm text-muted-foreground">Awarded to the longest tee shot</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Hole-in-One Grand Prize: Honda Brio RS MT</p>
                    <p className="text-sm text-muted-foreground">Plus multiple BDG golf memberships</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Gift className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Jackpot Fresh Money</p>
                    <p className="text-sm text-muted-foreground">Prize split equally if multiple winners</p>
                  </div>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Note:</strong> All prizes and awards are subject to change. Details to be confirmed closer to event date.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Ready to Participate?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Join us for two days of golf, community, and making a difference in the lives of those who need it most.
          </p>
          <Button size="lg" variant="secondary" asChild className="shadow-lifted">
            <Link to="/contact">Register for Tournament</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
