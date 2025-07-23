import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import TractionSection from "@/components/sections/TractionSection";
import PlatformSection from "@/components/sections/PlatformSection";
import InvestorSection from "@/components/sections/InvestorSection";

const PublicSite = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header variant="public" />
      <HeroSection />
      <PlatformSection />
      <TractionSection />
      <InvestorSection />
      
      {/* Footer */}
      <footer className="bg-brand-dark text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">LC</span>
                </div>
                <span className="text-xl font-bold">Lowest-Code®</span>
              </div>
              <p className="text-primary-foreground/80 mb-4 max-w-md">
                Revolutionizing insurance operations with unified Office & ERP platform. 
                Beyond the AI hype: real power, real control.
              </p>
              <div className="text-sm text-primary-foreground/60">
                #lowestcode • In production since June 2024
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#platform" className="hover:text-accent transition-colors">Office Suite</a></li>
                <li><a href="#platform" className="hover:text-accent transition-colors">Low-Code Studio</a></li>
                <li><a href="#platform" className="hover:text-accent transition-colors">ERP Modules</a></li>
                <li><a href="#platform" className="hover:text-accent transition-colors">Enterprise IDE</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#investors" className="hover:text-accent transition-colors">Investors</a></li>
                <li><a href="#traction" className="hover:text-accent transition-colors">Case Studies</a></li>
                <li><a href="#roadmap" className="hover:text-accent transition-colors">Roadmap</a></li>
                <li><a href="mailto:contact@lowestcode.com" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Lowest-Code®. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicSite;