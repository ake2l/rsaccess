import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-success/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-primary-foreground text-sm font-medium">
              In Production Since June 2024 • The Alliance Insurance
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-slide-up">
            Transform Your{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Business
            </span>
          </h1>

          {/* Subheadline */}
          <h2 className="text-2xl md:text-3xl text-primary-foreground/90 mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Beyond the AI Hype: Real Power, Real Control
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            A revolutionary Office & ERP platform redefining productivity for insurers.{" "}
            <span className="text-accent font-semibold">Create Faster • Customize Freely • Automate Everything</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" variant="accent" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Request Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
              <Download className="w-5 h-5 mr-2" />
              Download Whitepaper
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-sm text-primary-foreground/70">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">40%</div>
              <div className="text-sm text-primary-foreground/70">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">$2.1M</div>
              <div className="text-sm text-primary-foreground/70">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">18mo</div>
              <div className="text-sm text-primary-foreground/70">Production Ready</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;