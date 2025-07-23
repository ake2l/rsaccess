import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  FileSpreadsheet, 
  Database, 
  Zap, 
  Shield, 
  Puzzle,
  ArrowRight,
  Monitor
} from "lucide-react";

const PlatformSection = () => {
  const platformFeatures = [
    {
      icon: FileSpreadsheet,
      title: "Unified Office Suite",
      description: "Documents, spreadsheets, presentations, and databases in one seamless environment",
      features: ["Real-time collaboration", "Version control", "Template library", "AI assistance"],
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Code,
      title: "Low-Code Studio",
      description: "Visual workflow builder for insurance processes without technical complexity",
      features: ["Drag-and-drop interface", "Pre-built templates", "Custom logic rules", "API integrations"],
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Database,
      title: "ERP Foundation",
      description: "Complete business management system designed for insurance operations",
      features: ["Policy management", "Claims processing", "Financial tracking", "Compliance tools"],
      color: "bg-success/10 text-success"
    },
    {
      icon: Monitor,
      title: "Enterprise IDE",
      description: "Advanced development environment for technical teams and customizations",
      features: ["Full-stack development", "Custom extensions", "API development", "Advanced debugging"],
      color: "bg-purple-500/10 text-purple-500"
    }
  ];

  const valueProps = [
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with insurance industry compliance built-in",
      highlights: ["SOC 2 Type II", "GDPR Compliant", "256-bit Encryption", "Audit Trails"]
    },
    {
      icon: Puzzle,
      title: "Extensibility",
      description: "Modular architecture that grows with your business needs",
      highlights: ["Plugin Ecosystem", "Custom Modules", "Third-party Integrations", "Open APIs"]
    },
    {
      icon: Zap,
      title: "Performance & Speed",
      description: "Lightning-fast response times with cloud-native architecture",
      highlights: ["Sub-second Queries", "99.9% Uptime", "Auto-scaling", "Global CDN"]
    }
  ];

  return (
    <section id="platform" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Code className="w-4 h-4 mr-1" />
            Revolutionary Platform
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            One Platform,{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Infinite Possibilities
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built from the ground up to eliminate the complexity of managing multiple software systems. 
            Everything your insurance business needs in one unified, powerful platform.
          </p>
        </div>

        {/* Platform Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {platformFeatures.map((feature, index) => (
            <Card key={index} className="border-none shadow-card-hover hover:shadow-elegant transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${feature.color} transition-transform group-hover:scale-110`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {feature.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <ArrowRight className="w-3 h-3 text-primary" />
                      <span className="text-foreground">{feat}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Value Propositions */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Why Choose Lowest-Code®?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                  <prop.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">{prop.title}</h4>
                <p className="text-muted-foreground mb-6">{prop.description}</p>
                <div className="space-y-2">
                  {prop.highlights.map((highlight, idx) => (
                    <Badge key={idx} variant="outline" className="bg-muted/50 text-foreground border-border">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;