import { Link } from "react-router";
import { LogoFull } from "./brand/LogoFull";
import { Linkedin, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A1A2F] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <LogoFull className="h-10 w-auto mb-6" variant="light" />
            <p className="text-white/70 text-sm leading-relaxed">
              Ireland's trusted partner for IT, AI, Learning and Technology staffing since 2024.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services#it-consulting" className="text-white/70 hover:text-white transition-colors">
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link to="/services#ai-solutions" className="text-white/70 hover:text-white transition-colors">
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link to="/services#digital-learning" className="text-white/70 hover:text-white transition-colors">
                  Digital Learning
                </Link>
              </li>
              <li>
                <Link to="/services#technology-strategy" className="text-white/70 hover:text-white transition-colors">
                  Technology Strategy
                </Link>
              </li>
              <li>
                <Link to="/staffing" className="text-white/70 hover:text-white transition-colors">
                  Staffing Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-white/70 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-white/70">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Ireland</span>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:info@bremoreconsulting.ie" className="hover:text-white transition-colors">
                  info@bremoreconsulting.ie
                </a>
              </li>
              <li className="flex items-start gap-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>&copy; 2024 Bremore Consulting Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white/70 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white/70 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
