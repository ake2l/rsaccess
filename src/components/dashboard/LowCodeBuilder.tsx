import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Zap, 
  Database, 
  Workflow, 
  Plus, 
  Play, 
  Save, 
  Settings,
  FileText,
  Users,
  Calendar,
  DollarSign,
  Bot,
  Eye
} from "lucide-react";

const LowCodeBuilder = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState("claim-processing");

  const workflowComponents = [
    {
      id: "data-input",
      name: "Data Input",
      icon: FileText,
      description: "Form fields and data entry",
      color: "bg-primary/10 text-primary"
    },
    {
      id: "user-task",
      name: "User Task",
      icon: Users,
      description: "Manual review or approval",
      color: "bg-accent/10 text-accent"
    },
    {
      id: "automation",
      name: "Automation",
      icon: Zap,
      description: "Automated processing rules",
      color: "bg-success/10 text-success"
    },
    {
      id: "database",
      name: "Database",
      icon: Database,
      description: "Data storage and retrieval",
      color: "bg-purple-500/10 text-purple-500"
    },
    {
      id: "notification",
      name: "Notification",
      icon: Calendar,
      description: "Email or system alerts",
      color: "bg-orange-500/10 text-orange-500"
    },
    {
      id: "payment",
      name: "Payment",
      icon: DollarSign,
      description: "Financial transactions",
      color: "bg-blue-500/10 text-blue-500"
    }
  ];

  const templates = [
    {
      name: "Claim Processing",
      description: "End-to-end claim handling workflow",
      steps: 8,
      users: 34,
      status: "Active"
    },
    {
      name: "Policy Underwriting",
      description: "Risk assessment and policy approval",
      steps: 12,
      users: 23,
      status: "Active"
    },
    {
      name: "Customer Onboarding",
      description: "New customer registration process",
      steps: 6,
      users: 45,
      status: "Draft"
    },
    {
      name: "Renewal Processing",
      description: "Automated policy renewal workflow",
      steps: 5,
      users: 18,
      status: "Active"
    }
  ];

  const activeWorkflows = [
    {
      name: "Auto Claim #CLM-2024-1847",
      progress: 75,
      currentStep: "Damage Assessment",
      assignee: "Sarah Johnson",
      created: "2 hours ago"
    },
    {
      name: "Property Policy Review",
      progress: 40,
      currentStep: "Risk Analysis",
      assignee: "Mike Chen",
      created: "5 hours ago"
    },
    {
      name: "Customer Onboarding",
      progress: 90,
      currentStep: "Final Approval",
      assignee: "Alex Rivera",
      created: "1 day ago"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Low-Code Builder</h1>
          <p className="text-muted-foreground mt-1">Create and manage custom workflows without coding</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button variant="success" size="sm">
            <Save className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button variant="hero" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            New Workflow
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Component Library */}
        <div className="lg:col-span-1">
          <Card className="border-none shadow-card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Code className="w-5 h-5 text-primary" />
                Components
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {workflowComponents.map((component) => (
                <div
                  key={component.id}
                  className="p-3 rounded-lg border border-border hover:border-primary/30 cursor-pointer transition-all duration-300 hover:shadow-card-hover"
                  draggable
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded ${component.color}`}>
                      <component.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">{component.name}</div>
                      <div className="text-xs text-muted-foreground">{component.description}</div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* AI Assistant */}
              <div className="mt-6 p-3 rounded-lg bg-gradient-accent/10 border border-accent/20">
                <div className="flex items-center gap-2 mb-2">
                  <Bot className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-accent">AI Assistant</span>
                </div>
                <p className="text-xs text-accent/80 mb-3">
                  I can help you build workflows based on your requirements.
                </p>
                <Button variant="accent" size="sm" className="w-full text-xs">
                  Ask AI to Build
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Workflow Canvas */}
        <div className="lg:col-span-2">
          <Card className="border-none shadow-card-hover h-[600px]">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Workflow className="w-5 h-5 text-primary" />
                  Workflow Canvas
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Settings className="w-4 h-4" />
                  </Button>
                  <Button variant="success" size="sm">
                    <Play className="w-4 h-4 mr-1" />
                    Test
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-full bg-muted/20 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                <div className="text-center">
                  <Workflow className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Build Your Workflow</h3>
                  <p className="text-muted-foreground mb-4">
                    Drag components from the left panel to start building your workflow
                  </p>
                  <Button variant="outline">
                    <Plus className="w-4 h-4 mr-2" />
                    Start with Template
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Templates and Active Workflows */}
        <div className="lg:col-span-1 space-y-6">
          {/* Templates */}
          <Card className="border-none shadow-card-hover">
            <CardHeader>
              <CardTitle className="text-lg">Templates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {templates.map((template, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg border border-border hover:border-primary/30 cursor-pointer transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-foreground text-sm">{template.name}</h4>
                    <Badge 
                      variant="outline" 
                      className={template.status === "Active" ? "bg-success/10 text-success border-success/20" : "bg-muted text-muted-foreground"}
                    >
                      {template.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{template.description}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{template.steps} steps</span>
                    <span>{template.users} users</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Active Workflows */}
          <Card className="border-none shadow-card-hover">
            <CardHeader>
              <CardTitle className="text-lg">Active Workflows</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {activeWorkflows.map((workflow, index) => (
                <div key={index} className="p-3 rounded-lg border border-border">
                  <h4 className="font-medium text-foreground text-sm mb-1">{workflow.name}</h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    {workflow.currentStep} • {workflow.assignee}
                  </p>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex-grow bg-muted rounded-full h-1.5">
                      <div 
                        className="bg-primary h-1.5 rounded-full transition-all duration-300"
                        style={{ width: `${workflow.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-muted-foreground">{workflow.progress}%</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{workflow.created}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LowCodeBuilder;