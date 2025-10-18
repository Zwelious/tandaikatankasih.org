import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Users, Check, Heart, HandHeart, Award } from "lucide-react";
import { useState } from "react";
import membershipImage from "@/assets/membership-card.jpg";

export default function Membership() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    memberType: "individual",
    interests: [] as string[],
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi TI&A, I'd like to join as ${formData.memberType} member. Name: ${formData.name}, Email: ${formData.email}`;
    window.open(`https://wa.me/62XXXXXXXXX?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <Users className="h-16 w-16 text-accent mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Join TI&A Membership</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95">
            Build a sustainable foundation and closer community for ongoing impact
          </p>
        </div>
      </section>

      {/* Program Intent */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">Why Become a Member?</h2>
              <p className="text-lg leading-relaxed mb-6">
                TI&A membership is more than joining an association—it's becoming part of a movement dedicated to creating lasting change through compassion and community.
              </p>
              <p className="text-lg leading-relaxed">
                Your membership helps us build a sustainable foundation for our charitable initiatives, ensuring we can continue supporting the elderly, empowering youth, and caring for orphans for years to come.
              </p>
            </div>
            <div className="relative">
              <img 
                src={membershipImage} 
                alt="TI&A membership card with elegant green and gold design" 
                className="rounded-lg shadow-lifted"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Membership Categories */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Membership Categories</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-card border-2 hover:border-accent transition-colors">
              <CardHeader>
                <Heart className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-3xl font-serif">Individual</CardTitle>
                <CardDescription className="text-xl font-bold text-accent">
                  IDR 500,000 / year
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Perfect for individuals who want to make a personal commitment to our charitable mission.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Official TI&A membership recognition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Access to impact updates and reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Invitations to charity visits and events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Networking opportunities with community members</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card border-2 hover:border-accent transition-colors">
              <CardHeader>
                <Award className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-3xl font-serif">Corporate</CardTitle>
                <CardDescription className="text-xl font-bold text-accent">
                  IDR 5,000,000 / year
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  For companies committed to corporate social responsibility and community impact.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>All Individual membership benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Corporate recognition on website and events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Priority access to sponsorship opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Team volunteering and community outreach programs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-4 bg-muted rounded-lg text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Membership benefits list subject to final announcement. Fees are subject to change.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Member Benefits</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card text-center">
              <CardContent className="pt-8">
                <HandHeart className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold mb-3">Direct Impact</h3>
                <p className="text-muted-foreground">
                  Participate in charity visits and see firsthand how your contribution makes a difference in lives.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card text-center">
              <CardContent className="pt-8">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold mb-3">Community Network</h3>
                <p className="text-muted-foreground">
                  Connect with like-minded individuals and organizations who share your passion for giving back.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card text-center">
              <CardContent className="pt-8">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold mb-3">Recognition</h3>
                <p className="text-muted-foreground">
                  Be acknowledged for your commitment to community welfare and charitable causes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-serif font-bold mb-8 text-center">Apply for Membership</h2>
          
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company / Organization (Optional)</Label>
                  <Input 
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
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

                <div className="space-y-3">
                  <Label>Membership Type *</Label>
                  <RadioGroup 
                    value={formData.memberType}
                    onValueChange={(value) => setFormData({...formData, memberType: value})}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="individual" id="individual" />
                      <Label htmlFor="individual" className="font-normal cursor-pointer">
                        Individual (IDR 500,000/year)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="corporate" id="corporate" />
                      <Label htmlFor="corporate" className="font-normal cursor-pointer">
                        Corporate (IDR 5,000,000/year)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label>Areas of Interest</Label>
                  <div className="space-y-2">
                    {["Volunteer at events", "Sponsorship opportunities", "Golf tournament participation", "Community outreach"].map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox id={interest} />
                        <Label htmlFor={interest} className="font-normal cursor-pointer">
                          {interest}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => setFormData({...formData, consent: checked as boolean})}
                    required
                  />
                  <Label htmlFor="consent" className="font-normal text-sm cursor-pointer">
                    I consent to TI&A contacting me about membership and keeping me updated on events and impact stories.
                  </Label>
                </div>

                const isValid =
                  formData.name.trim() &&
                  formData.email.trim() &&
                  formData.phone.trim() &&
                  formData.memberType.trim() &&
                  formData.consent
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={!isValid}
                >
                  <Send className="mr-2 h-5 w-5" />
                  Submit Application
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  Feature coming soon. Contact us directly via WhatsApp for inquiries
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
