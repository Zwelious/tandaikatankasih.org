import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Calendar, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-golf.jpg";

export default function Home() {
  const sponsors = [
    "Djarum Foundation",
    "Gudang Garam",
    "HM Sampoerna",
    "Bentoel Group",
    "Nojorono Tobacco",
    "PT Karyadibya Mahardhika",
    "Wismilak Group",
    "Bukit Darmo Golf",
    "Bank Mandiri",
    "Bank BCA",
    "Telkom Indonesia",
    "Astra International"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Charity Golf Tournament at beautiful Indonesian golf course" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-overlay" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance">
            Tanda Ikatan Asih
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto opacity-95 text-balance">
            Compassion Through Community and Golf
          </p>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Users className="h-6 w-6 text-accent" />
            <p className="text-3xl font-bold text-accent">16,000+</p>
            <p className="text-lg opacity-90">Members Strong</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="default" asChild className="shadow-lifted">
              <Link to="/membership">Join TI&A</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild className="shadow-lifted">
              <a href="https://wa.me/62XXXXXXXXX" target="_blank" rel="noopener noreferrer">
                Contact via WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild className="shadow-lifted">
              <Link to="/events">View Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="shadow-card transition-smooth hover:shadow-lifted hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold mb-3">Mission & Vision</h3>
                <p className="text-muted-foreground mb-4">
                  Creating dignity for the elderly, opportunity for youth, and love for orphans through compassionate giving.
                </p>
                <Button variant="link" asChild className="text-accent">
                  <Link to="/about">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card transition-smooth hover:shadow-lifted hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold mb-3">23rd Annual Charity Golf</h3>
                <p className="text-muted-foreground mb-4">
                  October 17-18, 2025 at Bukit Darmo Golf, Surabaya. Join us for two days of golf and giving.
                </p>
                <Button variant="link" asChild className="text-accent">
                  <Link to="/events">See Program <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card transition-smooth hover:shadow-lifted hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold mb-3">Membership Benefits</h3>
                <p className="text-muted-foreground mb-4">
                  Join our community with Individual or Corporate membership. Build lasting connections and impact.
                </p>
                <Button variant="link" asChild className="text-accent">
                  <Link to="/membership">Join Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card transition-smooth hover:shadow-lifted hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold mb-3">Latest Impact Story</h3>
                <p className="text-muted-foreground mb-4">
                  Partnership with HALO Children Foundation supporting children in Central Java with meals, healthcare, and education.
                </p>
                <Button variant="link" asChild className="text-accent">
                  <Link to="/impact">Read Impact <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsor Marquee */}
      <section className="py-16 bg-card border-y">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Our Valued Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {sponsors.map((sponsor, idx) => (
              <div key={idx} className="w-full h-24 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-muted/70 transition-colors">
                <span className="text-sm font-medium">{sponsor}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/sponsors">View All Partners <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Event CTA */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Calendar className="h-16 w-16 text-accent mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Upcoming Event</h2>
          <p className="text-2xl mb-3">23rd Annual Charity Golf Tournament</p>
          <p className="text-xl opacity-90 mb-8">Surabaya • October 18, 2025</p>
          <Button size="lg" variant="secondary" asChild className="shadow-lifted">
            <Link to="/events">See Program & Register</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
