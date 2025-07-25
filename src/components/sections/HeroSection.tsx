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
              Enterprise-Ready Platform • Privacy-Compliant • Multi-Language Support
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-slide-up">
            Lowest-Code{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Platform
            </span>
          </h1>

          {/* Subheadline */}
          <h2 className="text-2xl md:text-3xl text-primary-foreground/90 mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            No-Code Development for Enterprise Applications
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Build cross-platform software with RPA automation and cloud infrastructure.{" "}
            <span className="text-accent font-semibold">Java • Kotlin • Python • Desktop & Web</span>
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
              <div className="text-3xl font-bold text-accent mb-2">8</div>
              <div className="text-sm text-primary-foreground/70">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-primary-foreground/70">Privacy-First</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">K8s</div>
              <div className="text-sm text-primary-foreground/70">Cloud Ready</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">RPA</div>
              <div className="text-sm text-primary-foreground/70">Automation</div>
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