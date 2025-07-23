import { useState } from "react";
import Header from "@/components/layout/Header";
import DashboardHome from "@/components/dashboard/DashboardHome";
import PolicyManagement from "@/components/dashboard/PolicyManagement";
import LowCodeBuilder from "@/components/dashboard/LowCodeBuilder";
import SpreadsheetView from "@/components/dashboard/SpreadsheetView";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  FileText, 
  AlertTriangle, 
  Users, 
  DollarSign, 
  Code, 
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Grid3X3
} from "lucide-react";

const Dashboard = () => {
  const [activeModule, setActiveModule] = useState("home");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const modules = [
    { id: "home", name: "Dashboard", icon: Home },
    { id: "policies", name: "Policies", icon: FileText },
    { id: "claims", name: "Claims", icon: AlertTriangle },
    { id: "customers", name: "Customers", icon: Users },
    { id: "finance", name: "Finance", icon: DollarSign },
    { id: "builder", name: "Low-Code Builder", icon: Code },
    { id: "spreadsheet", name: "Excel Calculator", icon: Grid3X3 },
    { id: "analytics", name: "Analytics", icon: BarChart3 },
    { id: "settings", name: "Settings", icon: Settings }
  ];

  const renderContent = () => {
    switch (activeModule) {
      case "home":
        return <DashboardHome />;
      case "policies":
        return <PolicyManagement />;
      case "builder":
        return <LowCodeBuilder />;
      case "spreadsheet":
        return <SpreadsheetView />;
      case "claims":
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-foreground mb-4">Claims Processing</h1>
            <p className="text-muted-foreground">Claims management module coming soon...</p>
          </div>
        );
      case "customers":
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-foreground mb-4">Customer Management</h1>
            <p className="text-muted-foreground">Customer relationship module coming soon...</p>
          </div>
        );
      case "finance":
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-foreground mb-4">Financial Operations</h1>
            <p className="text-muted-foreground">Financial management module coming soon...</p>
          </div>
        );
      case "analytics":
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-foreground mb-4">Analytics & Reporting</h1>
            <p className="text-muted-foreground">Business intelligence module coming soon...</p>
          </div>
        );
      case "settings":
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-foreground mb-4">System Settings</h1>
            <p className="text-muted-foreground">Configuration and administration tools coming soon...</p>
          </div>
        );
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className={`bg-card border-r border-border transition-all duration-300 ${sidebarCollapsed ? 'w-16' : 'w-64'}`}>
        <div className="p-4">
          {!sidebarCollapsed && (
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">LC</span>
              </div>
              <span className="text-lg font-semibold text-foreground">Lowest-Code®</span>
            </div>
          )}
          
          <nav className="space-y-2">
            {modules.map((module) => (
              <Button
                key={module.id}
                variant={activeModule === module.id ? "secondary" : "ghost"}
                className={`w-full justify-start gap-3 ${sidebarCollapsed ? 'px-2' : 'px-3'}`}
                onClick={() => setActiveModule(module.id)}
              >
                <module.icon className="w-5 h-5" />
                {!sidebarCollapsed && <span>{module.name}</span>}
              </Button>
            ))}
          </nav>
        </div>
        
        {/* Sidebar Toggle */}
        <div className="absolute top-20 -right-3">
          <Button
            variant="outline"
            size="sm"
            className="w-6 h-6 rounded-full p-0 bg-background border-border"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          >
            {sidebarCollapsed ? (
              <ChevronRight className="w-3 h-3" />
            ) : (
              <ChevronLeft className="w-3 h-3" />
            )}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header variant="dashboard" />
        <main className="flex-1 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;