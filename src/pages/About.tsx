import { Heart, Target, Eye, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 text-accent mx-auto mb-6" fill="currentColor" />
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">About Tanda Ikatan Asih</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95">
            A legacy of compassion, community, and charitable giving through golf since 2001
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="shadow-card">
              <CardHeader>
                <Target className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-3xl font-serif">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg leading-relaxed">
                <p>
                  Create impactful, inclusive events to raise funds for elderly care, youth empowerment, and orphanages through creativity, collaboration, and compassion.
                </p>
                <p>
                  We believe that every swing of a golf club can create waves of positive change in our community, transforming lives through the power of collective giving.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <Eye className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-3xl font-serif">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg leading-relaxed">
                <p>
                  <strong>Dignity for the elderly:</strong> Ensuring our seniors live with respect and care in their golden years.
                </p>
                <p>
                  <strong>Opportunity for youth:</strong> Empowering the next generation with education, skills, and hope for a brighter future.
                </p>
                <p>
                  <strong>Love for orphans:</strong> Creating a legacy of giving that uplifts the most vulnerable among us.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-serif font-bold mb-8 text-center">Our Story</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Tanda Ikatan Asih (TI&A) has its roots deeply planted in charity golf since 2001. What began as a simple gathering of compassionate individuals has grown into a thriving non-profit social association that unites Indonesia's tobacco ecosystem around a shared mission of philanthropy.
            </p>
            <p>
              Through our flagship Annual Charity Golf Tournament, now in its 23rd year, we have raised substantial funds for those who need it most. Our events bring together donors, participants, and volunteers who share a common vision: to create meaningful change through the spirit of giving.
            </p>
            <p>
              Today, with over 16,000 members strong, TI&A stands as a testament to the continued generosity of our community. Every tournament, every donation, and every volunteer hour contributes to building a legacy that uplifts the vulnerable and creates lasting impact across Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Leadership & Acknowledgments</h2>
          
          <Card className="shadow-card mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Chairman's Message</CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed space-y-4">
              <p>
                Dear Friends and Members,
              </p>
              <p>
                It is with deep gratitude that I reflect on our journey together. TI&A exists because of your unwavering support, your generous contributions, and your shared commitment to making a difference in the lives of others.
              </p>
              <p>
                Each year, our Annual Charity Golf Tournament brings us together not just as golfers, but as a community bound by compassion. Through your participation, we have been able to support orphanages, empower youth, and provide dignity to our elderly.
              </p>
              <p>
                Thank you for being the heart of TI&A. Together, we continue to build a legacy of love and hope.
              </p>
              <p className="font-semibold mt-6">
                With deepest appreciation,<br />
                The TI&A Committee
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Committee Greetings</CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed">
              <p>
                On behalf of the entire organizing committee, we extend our warmest greetings to all members, sponsors, and participants. Your dedication makes every event a success and every impact story possible.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Association Explainer */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <Users className="h-12 w-12 text-accent mx-auto mb-6" />
          <h2 className="text-4xl font-serif font-bold mb-8 text-center">What is a Social Association?</h2>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              A social association in Indonesia is a non-profit organization formed by individuals or entities united by common social, educational, cultural, or charitable objectives.
            </p>
            
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-4">Legal Characteristics:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Non-profit nature:</strong> All funds are directed toward the association's charitable mission</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Membership-based:</strong> Built on voluntary participation and community support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Transparent governance:</strong> Accountable to members with clear reporting and oversight</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Social impact focus:</strong> Dedicated to improving the welfare of communities and individuals in need</span>
                </li>
              </ul>
            </div>

            <p>
              As a registered social association, TI&A operates with full transparency and accountability, ensuring that every contribution directly supports our charitable initiatives and creates measurable impact in the communities we serve.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
