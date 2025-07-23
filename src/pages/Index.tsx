import { useState } from "react";
import { Button } from "@/components/ui/button";
import PublicSite from "./PublicSite";
import Dashboard from "./Dashboard";

const Index = () => {
  const [currentView, setCurrentView] = useState<"public" | "dashboard">("public");

  if (currentView === "dashboard") {
    return <Dashboard />;
  }

  return (
    <div className="relative">
      <PublicSite />
      
      {/* Demo Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <Button 
          variant="hero" 
          onClick={() => setCurrentView("dashboard")}
          className="shadow-glow"
        >
          View Dashboard Demo
        </Button>
      </div>
      
      {/* Dashboard Demo Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button 
          variant="accent" 
          onClick={() => setCurrentView(currentView === "public" ? "dashboard" : "public")}
          className="shadow-glow"
        >
          {currentView === "public" ? "Dashboard Demo" : "← Back to Site"}
        </Button>
      </div>
    </div>
  );
};

export default Index;
