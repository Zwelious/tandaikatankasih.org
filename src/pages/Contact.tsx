import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MessageCircle, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi TI&A,\n\nSubject: ${formData.subject}\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`;
    window.open(`https://wa.me/62XXXXXXXXX?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <MessageCircle className="h-16 w-16 text-accent mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Get in Touch</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95">
            We'd love to hear from you. Reach out with questions, partnership inquiries, or to learn more about joining TI&A.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <Card className="shadow-card">
                    <CardContent className="p-6 flex items-start gap-4">
                      <MessageCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">WhatsApp</h3>
                        <p className="text-muted-foreground mb-2">Fastest way to reach us</p>
                        <a 
                          href="https://wa.me/62XXXXXXXXX" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-accent hover:underline"
                        >
                          +62 82233019778
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card">
                    <CardContent className="p-6 flex items-start gap-4">
                      <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <p className="text-muted-foreground mb-2">Send us a message</p>
                        <a 
                          href="mailto:info@tia.org"
                          className="text-accent hover:underline"
                        >
                          ria@ondihita.org
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card">
                    <CardContent className="p-6 flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Address</h3>
                        <p className="text-muted-foreground">
                          Surabaya, Indonesia
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card className="shadow-card bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-xl font-serif">Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="opacity-90">Looking for something specific?</p>
                  <ul className="space-y-2 mt-4">
                    <li>
                      <a href="/membership" className="hover:text-accent transition-colors">→ Join TI&A Membership</a>
                    </li>
                    <li>
                      <a href="/events" className="hover:text-accent transition-colors">→ Register for Golf Tournament</a>
                    </li>
                    <li>
                      <a href="/sponsors" className="hover:text-accent transition-colors">→ Sponsorship Opportunities</a>
                    </li>
                    <li>
                      <a href="/impact" className="hover:text-accent transition-colors">→ View Our Impact</a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">Send Us a Message</h2>
              
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input 
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
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
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Select value={formData.subject} onValueChange={(value) => setFormData({...formData, subject: value})} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="membership">Membership Inquiry</SelectItem>
                          <SelectItem value="tournament">Tournament Registration</SelectItem>
                          <SelectItem value="sponsorship">Sponsorship Opportunity</SelectItem>
                          <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                          <SelectItem value="volunteer">Volunteer Interest</SelectItem>
                          <SelectItem value="general">General Question</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us how we can help..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={
                        !formData.name.trim() ||
                        !formData.email.trim() ||
                        !formData.subject.trim() ||
                        !formData.message.trim()
                      }
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      Feature coming soon. Contact us directly via WhatsApp for inquiries
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
