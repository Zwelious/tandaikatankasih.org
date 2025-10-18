import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Heart } from "lucide-react";

export default function Gallery() {
  const placeholderImages = Array(12).fill(null);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <Camera className="h-16 w-16 text-accent mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95">
            Moments of compassion, community, and celebration captured through the years
          </p>
        </div>
      </section>

      {/* Quote */}
      <section className="py-12 bg-card border-y">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-xl md:text-2xl font-serif italic text-primary max-w-4xl mx-auto">
            "Golf brings us together, charity keeps us connected for a greater purpose."
          </blockquote>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4 max-w-7xl">
          <Tabs defaultValue="anniversary" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-12">
              <TabsTrigger value="anniversary">Anniversary</TabsTrigger>
              <TabsTrigger value="gala">Gala Dinner</TabsTrigger>
              <TabsTrigger value="candid">Candid Moments</TabsTrigger>
              <TabsTrigger value="group">Group Photos</TabsTrigger>
              <TabsTrigger value="memory">Memory Lane</TabsTrigger>
            </TabsList>

            <TabsContent value="anniversary" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold mb-4">Anniversary Celebrations</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Highlights from our annual anniversary gatherings, where we come together to celebrate our mission and community.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {placeholderImages.map((_, idx) => (
                  <Card key={idx} className="shadow-card overflow-hidden group">
                    <CardContent className="p-0">
                      <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <Camera className="h-12 w-12 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="gala" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold mb-4">Gala Dinner Events</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Elegant evenings of celebration, prize presentations, and community bonding at our annual gala dinners.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {placeholderImages.map((_, idx) => (
                  <Card key={idx} className="shadow-card overflow-hidden group">
                    <CardContent className="p-0">
                      <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <Camera className="h-12 w-12 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="candid" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold mb-4">Candid Moments</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Authentic moments of joy, laughter, and connection captured throughout our events and charity visits.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {placeholderImages.map((_, idx) => (
                  <Card key={idx} className="shadow-card overflow-hidden group">
                    <CardContent className="p-0">
                      <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <Heart className="h-10 w-10 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="group" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold mb-4">Group Photos</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our community together - official group photos from tournaments, committee meetings, and special gatherings.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {placeholderImages.slice(0, 6).map((_, idx) => (
                  <Card key={idx} className="shadow-card overflow-hidden group">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <Camera className="h-16 w-16 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="memory" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold mb-4">Memory Lane</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  A journey through 23 years of compassion, golf, and community impact - cherished memories from our history.
                </p>
              </div>

              <Card className="shadow-card mb-8">
                <CardContent className="p-8 text-center">
                  <p className="text-xl font-serif italic text-primary leading-relaxed">
                    "Every photograph tells a story of lives touched, communities strengthened, and hope restored."
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {placeholderImages.map((_, idx) => (
                  <Card key={idx} className="shadow-card overflow-hidden group">
                    <CardContent className="p-0">
                      <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted-foreground/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <Camera className="h-12 w-12 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="shadow-card mt-8">
                <CardContent className="p-8 text-center">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    From our first tournament in 2001 to today, these images capture the essence of TI&A: compassion in action, community united, and the enduring power of giving back.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-12 w-12 text-accent mx-auto mb-6" fill="currentColor" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Be Part of Our Story</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Join us at our next event and create new memories while making a lasting impact.
          </p>
        </div>
      </section>
    </div>
  );
}
