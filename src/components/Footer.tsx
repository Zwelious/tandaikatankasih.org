import { Heart, Mail, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Heart className="h-8 w-8 text-accent" fill="currentColor" />
              <div>
                <h3 className="font-serif text-xl font-bold">TI&A</h3>
                <p className="text-sm opacity-90">Tanda Ikatan Asih</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Creating impactful, inclusive events to raise funds for elderly care, youth empowerment, and orphanages through compassion and community.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/membership" className="opacity-80 hover:opacity-100 transition-opacity">Membership</Link></li>
              <li><Link to="/events" className="opacity-80 hover:opacity-100 transition-opacity">Events</Link></li>
              <li><Link to="/sponsors" className="opacity-80 hover:opacity-100 transition-opacity">Sponsors</Link></li>
              <li><Link to="/impact" className="opacity-80 hover:opacity-100 transition-opacity">Impact</Link></li>
              <li><Link to="/gallery" className="opacity-80 hover:opacity-100 transition-opacity">Gallery</Link></li>
              <li><Link to="/contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-accent" />
                <a href="https://wa.me/62XXXXXXXXX" className="opacity-80 hover:opacity-100 transition-opacity">
                  +62 82233019778
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@tia.org" className="opacity-80 hover:opacity-100 transition-opacity">
                  ria@ondihita.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm opacity-80 mb-4">Stay updated with our latest events and impact stories.</p>
            <form className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button type="submit" variant="secondary" size="sm" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Tanda Ikatan Asih. All rights reserved.</p>
          <p className="mt-2">With gratitude to our committee, members, sponsors, and community.</p>
        </div>
      </div>
    </footer>
  );
}
