import { LogoFull } from "./LogoFull";
import { LogoMinimal } from "./LogoMinimal";
import { LogoGeometric } from "./LogoGeometric";
import { Code, Brain, GraduationCap, TrendingUp, Users, Shield, Cloud, Database } from "lucide-react";

export function BrandGuide() {
  const colors = [
    { name: "Deep Navy", hex: "#0A1A2F", usage: "Primary brand color, headers, footers" },
    { name: "Electric Blue", hex: "#0066FF", usage: "CTAs, links, interactive elements" },
    { name: "White", hex: "#FFFFFF", usage: "Backgrounds, text on dark" },
    { name: "Slate Grey", hex: "#4A5568", usage: "Secondary text, subtle elements" },
    { name: "Light Grey", hex: "#F8FAFC", usage: "Backgrounds, cards" },
  ];

  const typography = [
    { name: "Headings", font: "Inter, SF Pro, IBM Plex Sans", weight: "600-700", usage: "H1-H4, headlines" },
    { name: "Body", font: "Inter, Roboto, system-ui", weight: "400", usage: "Paragraph text, UI labels" },
    { name: "Accent", font: "SF Mono, Monospace", weight: "500", usage: "Numbers, code, metrics" },
  ];

  const iconSet = [
    { Icon: Code, name: "IT Consulting" },
    { Icon: Brain, name: "AI Solutions" },
    { Icon: GraduationCap, name: "Digital Learning" },
    { Icon: TrendingUp, name: "Technology Strategy" },
    { Icon: Users, name: "Staffing" },
    { Icon: Shield, name: "Cybersecurity" },
    { Icon: Cloud, name: "Cloud Services" },
    { Icon: Database, name: "Data & Analytics" },
  ];

  return (
    <div className="min-h-screen bg-white py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Bremore Consulting Brand Guide</h1>
        <p className="text-xl text-foreground/70 mb-16">
          Complete brand identity system for Bremore Consulting Ltd
        </p>

        {/* Logos */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">Logo Variations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-secondary/30 rounded-xl">
              <LogoFull className="h-12 w-auto mb-4" />
              <p className="text-sm font-medium">Full Logo (Dark)</p>
              <p className="text-xs text-foreground/60 mt-1">Primary usage</p>
            </div>
            <div className="p-8 bg-[#0A1A2F] rounded-xl">
              <LogoFull className="h-12 w-auto mb-4" variant="light" />
              <p className="text-sm font-medium text-white">Full Logo (Light)</p>
              <p className="text-xs text-white/60 mt-1">On dark backgrounds</p>
            </div>
            <div className="p-8 bg-secondary/30 rounded-xl">
              <LogoMinimal className="h-12 w-auto mb-4" />
              <p className="text-sm font-medium">Minimal Logo</p>
              <p className="text-xs text-foreground/60 mt-1">Small spaces, favicons</p>
            </div>
            <div className="p-8 bg-secondary/30 rounded-xl">
              <LogoGeometric className="h-12 w-auto mb-4" />
              <p className="text-sm font-medium">Geometric Logo</p>
              <p className="text-xs text-foreground/60 mt-1">Alternative mark</p>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">Color Palette</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colors.map((color) => (
              <div key={color.hex} className="border border-border rounded-xl overflow-hidden">
                <div
                  className="h-32"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="p-4">
                  <div className="font-semibold">{color.name}</div>
                  <div className="text-sm text-foreground/60 mb-2">{color.hex}</div>
                  <div className="text-xs text-foreground/50">{color.usage}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-6 bg-gradient-to-r from-[#0A1A2F] to-[#003B8E] rounded-xl">
            <p className="text-white font-medium mb-2">Gradient</p>
            <p className="text-white/70 text-sm">#0A1A2F → #003B8E</p>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">Typography</h2>
          <div className="space-y-6">
            {typography.map((type) => (
              <div key={type.name} className="p-6 border border-border rounded-xl">
                <div className="grid md:grid-cols-4 gap-4 items-center">
                  <div>
                    <div className="font-semibold">{type.name}</div>
                    <div className="text-sm text-foreground/60">{type.usage}</div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="text-sm text-foreground/60 mb-1">Font Family</div>
                    <div className="font-mono text-sm">{type.font}</div>
                  </div>
                  <div>
                    <div className="text-sm text-foreground/60 mb-1">Weight</div>
                    <div className="font-mono text-sm">{type.weight}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            <div className="text-5xl font-bold">Heading 1 Example</div>
            <div className="text-4xl font-bold">Heading 2 Example</div>
            <div className="text-3xl font-bold">Heading 3 Example</div>
            <div className="text-xl">Body text example with regular weight</div>
            <div className="text-base text-foreground/70">
              Secondary body text in slate grey for less emphasis
            </div>
          </div>
        </section>

        {/* Icons */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">Icon Set</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {iconSet.map(({ Icon, name }) => (
              <div key={name} className="p-6 border border-border rounded-xl text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon className="text-primary" size={24} />
                </div>
                <div className="text-sm font-medium">{name}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-foreground/60 mt-6">Using Lucide React icon library</p>
        </section>

        {/* Buttons */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">Button Styles</h2>
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
                Primary Button
              </button>
              <button className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-medium">
                Secondary Button
              </button>
              <button className="px-6 py-3 text-primary hover:text-primary/80 font-medium">
                Ghost Button
              </button>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">Card Components</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Service Card</h3>
              <p className="text-foreground/70">
                Clean card design with icon, heading, and description.
              </p>
            </div>

            <div className="p-6 bg-secondary/30 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Highlight Card</h3>
              <p className="text-foreground/70">
                Subtle background for emphasized content areas.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-primary to-primary/80 text-white rounded-xl">
              <h3 className="text-xl font-semibold mb-2">CTA Card</h3>
              <p className="text-white/90">
                Gradient background for call-to-action sections.
              </p>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">Spacing System</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm font-medium">Small (1rem)</div>
              <div className="h-4 bg-primary" style={{ width: '1rem' }} />
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm font-medium">Medium (1.5rem)</div>
              <div className="h-4 bg-primary" style={{ width: '1.5rem' }} />
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm font-medium">Large (2rem)</div>
              <div className="h-4 bg-primary" style={{ width: '2rem' }} />
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm font-medium">XL (3rem)</div>
              <div className="h-4 bg-primary" style={{ width: '3rem' }} />
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm font-medium">2XL (4rem)</div>
              <div className="h-4 bg-primary" style={{ width: '4rem' }} />
            </div>
          </div>
        </section>

        {/* Grid System */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Grid System</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-12 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-primary/10 h-16 rounded flex items-center justify-center text-sm font-medium">
                  {i + 1}
                </div>
              ))}
            </div>
            <p className="text-sm text-foreground/60">12-column responsive grid system</p>
          </div>
        </section>
      </div>
    </div>
  );
}
