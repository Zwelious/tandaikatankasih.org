import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Handshake, Award, Users, TrendingUp, FileText, Megaphone } from "lucide-react";
import { useState } from "react";

export default function Sponsors() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    tier: "",
    budget: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi TI&A, I'm interested in sponsorship. Company: ${formData.company}, Name: ${formData.name}, Tier: ${formData.tier}`;
    window.open(`https://wa.me/62XXXXXXXXX?text=${encodeURIComponent(message)}`, "_blank");
  };

  const sponsors = {
    platinum: ["Platinum Sponsor A", "Platinum Sponsor B"],
    gold: ["Gold Sponsor A", "Gold Sponsor B", "Gold Sponsor C"],
    silver: ["Silver Sponsor A", "Silver Sponsor B", "Silver Sponsor C", "Silver Sponsor D"],
    partners: ["Partner A", "Partner B", "Partner C", "Partner D", "Partner E", "Partner F"],
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <Handshake className="h-16 w-16 text-accent mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Sponsors & Partners</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95">
            Together, we create meaningful impact through strategic partnerships and generous support
          </p>
        </div>
      </section>

      {/* Gratitude */}
      <section className="py-16 bg-card border-y">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-xl leading-relaxed">
            TI&A extends heartfelt gratitude to all our donors and strategic partners. Your commitment to our mission enables us to continue creating positive change in the lives of the elderly, youth, and orphans across Indonesia.
          </p>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Our Valued Sponsors</h2>

          <div className="space-y-12">
            {/* Platinum */}
            <div>
              <div className="flex items-center justify-center gap-3 mb-6">
                <Award className="h-8 w-8 text-accent" />
                <h3 className="text-2xl font-serif font-bold">Platinum Sponsors</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {sponsors.platinum.map((sponsor, idx) => (
                  <Card key={idx} className="shadow-card">
                    <CardContent className="p-8 text-center">
                      <div className="h-32 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-lg font-semibold">{sponsor}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Gold */}
            <div>
              <div className="flex items-center justify-center gap-3 mb-6">
                <Award className="h-7 w-7 text-accent" />
                <h3 className="text-xl font-serif font-bold">Gold Sponsors</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {sponsors.gold.map((sponsor, idx) => (
                  <Card key={idx} className="shadow-card">
                    <CardContent className="p-6 text-center">
                      <div className="h-24 bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-sm font-medium">{sponsor}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Silver */}
            <div>
              <div className="flex items-center justify-center gap-3 mb-6">
                <Award className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-serif font-bold">Silver Sponsors</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {sponsors.silver.map((sponsor, idx) => (
                  <Card key={idx} className="shadow-card">
                    <CardContent className="p-4 text-center">
                      <div className="h-20 bg-muted rounded flex items-center justify-center">
                        <span className="text-xs font-medium">{sponsor}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Strategic Partners */}
            <div>
              <div className="flex items-center justify-center gap-3 mb-6">
                <Users className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-serif font-bold">Strategic Partners</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {sponsors.partners.map((partner, idx) => (
                  <Card key={idx} className="shadow-card">
                    <CardContent className="p-3 text-center">
                      <div className="h-16 bg-muted rounded flex items-center justify-center">
                        <span className="text-xs">{partner}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Value */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Sponsorship Benefits</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <Megaphone className="h-10 w-10 text-accent mb-2" />
                <CardTitle className="text-xl font-serif">Brand Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Prominent visibility on our website, event materials, and across all promotional channels reaching thousands of community members.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <Users className="h-10 w-10 text-accent mb-2" />
                <CardTitle className="text-xl font-serif">Event Presence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Opportunities for booth space, speaking engagements, and direct interaction with our 16,000+ member community.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <FileText className="h-10 w-10 text-accent mb-2" />
                <CardTitle className="text-xl font-serif">Impact Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Detailed reports showing the direct impact of your sponsorship, perfect for CSR documentation and stakeholder communication.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <Handshake className="h-10 w-10 text-accent mb-2" />
                <CardTitle className="text-xl font-serif">Networking Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect with Indonesia's tobacco ecosystem leaders, philanthropists, and business professionals at exclusive events.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <Award className="h-10 w-10 text-accent mb-2" />
                <CardTitle className="text-xl font-serif">Recognition Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Special acknowledgment at our Annual Charity Golf Tournament and other flagship events throughout the year.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-accent mb-2" />
                <CardTitle className="text-xl font-serif">Community Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Demonstrate your commitment to social responsibility while making measurable difference in vulnerable communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsorship Inquiry Form */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-serif font-bold mb-8 text-center">Become a Sponsor</h2>
          
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Contact Name *</Label>
                    <Input 
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input 
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tier">Sponsorship Tier Interest</Label>
                  <Select value={formData.tier} onValueChange={(value) => setFormData({...formData, tier: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select tier" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="platinum">Platinum</SelectItem>
                      <SelectItem value="gold">Gold</SelectItem>
                      <SelectItem value="silver">Silver</SelectItem>
                      <SelectItem value="partner">Strategic Partner</SelectItem>
                      <SelectItem value="custom">Custom Package</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Approximate Budget Range</Label>
                  <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-50m">Under IDR 50,000,000</SelectItem>
                      <SelectItem value="50m-100m">IDR 50,000,000 - 100,000,000</SelectItem>
                      <SelectItem value="100m-200m">IDR 100,000,000 - 200,000,000</SelectItem>
                      <SelectItem value="above-200m">Above IDR 200,000,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea 
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    placeholder="Tell us about your objectives, timeline, or any specific questions..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Sponsorship Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
