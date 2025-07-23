import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Users, 
  DollarSign, 
  AlertTriangle, 
  TrendingUp, 
  Calendar,
  Settings,
  Plus,
  Code,
  Database,
  BarChart3,
  Grid3X3
} from "lucide-react";

const DashboardHome = () => {
  const quickStats = [
    {
      title: "Active Policies",
      value: "12,847",
      change: "+5.2%",
      icon: FileText,
      color: "text-primary"
    },
    {
      title: "Pending Claims",
      value: "234",
      change: "-12%",
      icon: AlertTriangle,
      color: "text-orange-500"
    },
    {
      title: "Monthly Premium",
      value: "$2.4M",
      change: "+8.1%",
      icon: DollarSign,
      color: "text-success"
    },
    {
      title: "Active Users",
      value: "847",
      change: "+3%",
      icon: Users,
      color: "text-accent"
    }
  ];

  const modules = [
    {
      title: "Policy Management",
      description: "Create, modify, and track insurance policies",
      icon: FileText,
      users: 156,
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Claims Processing",
      description: "Handle claims from submission to settlement",
      icon: AlertTriangle,
      users: 89,
      color: "bg-orange-500/10 text-orange-500"
    },
    {
      title: "Customer Relations",
      description: "Manage customer interactions and support",
      icon: Users,
      users: 234,
      color: "bg-success/10 text-success"
    },
    {
      title: "Financial Operations",
      description: "Accounting, billing, and financial reporting",
      icon: DollarSign,
      users: 67,
      color: "bg-accent/10 text-accent"
    },
    {
      title: "Analytics & Reporting",
      description: "Business intelligence and performance metrics",
      icon: BarChart3,
      users: 123,
      color: "bg-purple-500/10 text-purple-500"
    },
    {
      title: "Low-Code Builder",
      description: "Create custom workflows and applications",
      icon: Code,
      users: 45,
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      title: "Excel Calculator",
      description: "Spreadsheet with formulas and analytics",
      icon: Grid3X3,
      users: 78,
      color: "bg-brand-green/10 text-brand-green"
    }
  ];

  const recentActivity = [
    {
      action: "New claim submitted",
      user: "Sarah Johnson",
      time: "2 minutes ago",
      type: "claim"
    },
    {
      action: "Policy updated",
      user: "Mike Chen",
      time: "15 minutes ago",
      type: "policy"
    },
    {
      action: "Custom workflow deployed",
      user: "Alex Rivera",
      time: "1 hour ago",
      type: "workflow"
    },
    {
      action: "Monthly report generated",
      user: "System",
      time: "2 hours ago",
      type: "report"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
          <p className="text-muted-foreground mt-1">Welcome back to your insurance management platform</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
          <Button variant="hero" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            New Policy
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <Card key={index} className="border-none shadow-card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3 text-success" />
                    <span className="text-xs text-success">{stat.change}</span>
                  </div>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ERP Modules */}
        <div className="lg:col-span-2">
          <Card className="border-none shadow-card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-primary" />
                ERP Modules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {modules.map((module, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer hover:shadow-card-hover"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${module.color}`}>
                        <module.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-foreground mb-1">{module.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{module.description}</p>
                        <Badge variant="secondary" className="text-xs">
                          {module.users} active users
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div>
          <Card className="border-none shadow-card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-grow">
                      <p className="text-sm font-medium text-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">by {activity.user}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4 text-sm">
                View All Activity
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;