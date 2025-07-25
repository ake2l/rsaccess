import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  variant?: "public" | "dashboard";
}

const Header = ({ variant = "public" }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (variant === "dashboard") {
    return (
      <header className="bg-card border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logos/rsaccess-logo.svg" alt="RSAccess Logo" className="w-8 h-8" />
            <span className="text-lg font-semibold text-foreground">RSAccess</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">The Alliance Insurance</span>
            <div className="w-8 h-8 bg-primary rounded-full"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logos/rsaccess-logo.svg" alt="RSAccess Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-foreground">RSAccess</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#platform" className="text-foreground hover:text-primary transition-colors">Platform</a>
            <a href="#traction" className="text-foreground hover:text-primary transition-colors">Traction</a>
            <a href="#investors" className="text-foreground hover:text-primary transition-colors">Investors</a>
            <a href="#roadmap" className="text-foreground hover:text-primary transition-colors">Roadmap</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline">Download Whitepaper</Button>
            <Button variant="hero">Request Demo</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col gap-4">
              <a href="#platform" className="text-foreground hover:text-primary transition-colors">Platform</a>
              <a href="#traction" className="text-foreground hover:text-primary transition-colors">Traction</a>
              <a href="#investors" className="text-foreground hover:text-primary transition-colors">Investors</a>
              <a href="#roadmap" className="text-foreground hover:text-primary transition-colors">Roadmap</a>
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="outline" className="w-full">Download Whitepaper</Button>
                <Button variant="hero" className="w-full">Request Demo</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;