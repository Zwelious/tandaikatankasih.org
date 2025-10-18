import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Home, GraduationCap, Utensils, HeartPulse } from "lucide-react";
import impactImage from "@/assets/impact-community.jpg";

export default function Impact() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 text-accent mx-auto mb-6" fill="currentColor" />
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Impact</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95">
            Creating lasting change through compassion, one life at a time
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 bg-card border-y">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl font-serif italic text-primary max-w-4xl mx-auto">
            "In charity golf, the prize isn't a trophy — it's the difference you make in someone's life."
          </blockquote>
        </div>
      </section>

      {/* HALO Partnership */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">Partnership with HALO Children Foundation</h2>
              <p className="text-lg leading-relaxed mb-6">
                We are proud to collaborate with the HALO Children Foundation in Central Java to create sustainable impact for vulnerable children. Together, we are building more than facilities—we are building futures.
              </p>
              <p className="text-lg leading-relaxed">
                This partnership represents our commitment to creating dignity, opportunity, and love for those who need it most.
              </p>
            </div>
            <div className="relative">
              <img 
                src={impactImage} 
                alt="Happy children and elderly community members together, representing TI&A's impact" 
                className="rounded-lg shadow-lifted"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <Utensils className="h-10 w-10 text-accent mb-2" />
                <CardTitle className="text-xl font-serif">Nutritious Meals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ensuring every child receives balanced, nutritious meals to support healthy growth and development.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <HeartPulse className="h-10 w-10 text-accent mb-2" />
                <CardTitle className="text-xl font-serif">Healthcare Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Providing medical care, regular health check-ups, and emergency healthcare services.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <GraduationCap className="h-10 w-10 text-accent mb-2" />
                <CardTitle className="text-xl font-serif">Education & Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Supporting school attendance and vocational training to empower children with knowledge and skills.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <Home className="h-10 w-10 text-accent mb-2" />
                <CardTitle className="text-xl font-serif">Safe Housing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Renovation and new construction to provide safe, comfortable living environments.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <Heart className="h-10 w-10 text-accent mb-2" />
                <CardTitle className="text-xl font-serif">Emotional Well-being</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Creating supportive environments that nurture emotional health and personal development.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <Users className="h-10 w-10 text-accent mb-2" />
                <CardTitle className="text-xl font-serif">Family Reunification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Working toward improved life outcomes that enable reunification with families or adoption.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visit Report */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-serif font-bold mb-8 text-center">First Donation Visit - August 27, 2025</h2>
          
          <Card className="shadow-card">
            <CardContent className="p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-serif font-semibold mb-4">Gunung Pati Orphanage</h3>
                <p className="text-lg leading-relaxed mb-4">
                  On August 27, 2025, the TI&A team made our first donation visit to the Gunung Pati orphanage, marking the beginning of our hands-on impact work with HALO Children Foundation.
                </p>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3">Donations Provided:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>New mattresses for comfortable, restful sleep</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Food supplies to support nutritious meals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Essential household items and personal care products</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed">
                The visit reinforced our mission and deepened our commitment to creating sustainable change. Seeing the children's smiles and the gratitude of the caregivers reminded us why this work matters.
              </p>

              <p className="text-lg leading-relaxed">
                This visit marks the first of many planned programs to support orphanages, elderly care facilities, and youth empowerment initiatives across Indonesia. Together with our members and sponsors, we are building a legacy of compassion.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Memory Lane */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-serif font-bold mb-8 text-center">Memory Lane</h2>
          
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardContent className="p-8 text-center">
                <p className="text-xl font-serif italic text-primary leading-relaxed">
                  "Golf brings us together, charity keeps us connected for a greater purpose."
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-center text-muted-foreground">
                  Over 23 years of charity golf tournaments, countless lives have been touched by the generosity of our community. From supporting elderly care homes to funding youth education programs, each swing has made a difference.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* In Loving Memory */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-serif font-bold mb-8 text-center">In Loving Memory</h2>
          
          <Card className="shadow-card border-accent/20">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-center mb-6">
                We honor and remember the supporters and community members whose legacy of compassion continues to inspire our work. Their dedication to helping others lives on through every life we touch.
              </p>
              
              <div className="h-32 flex items-center justify-center bg-muted rounded-lg">
                <p className="text-muted-foreground text-center px-6">
                  In memory of all who have contributed to our mission of love and service
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 p-6 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Ethical Note:</strong> All impact stories are presented with dignity and respect for those we serve. We focus on empowerment and creating lasting positive change in partnership with the communities we support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
