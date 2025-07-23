import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, DollarSign, Clock, CheckCircle, Building } from "lucide-react";

const TractionSection = () => {
  const metrics = [
    {
      icon: TrendingUp,
      title: "Performance Gains",
      value: "40%",
      description: "Faster claims processing",
      trend: "+12% vs Q2"
    },
    {
      icon: DollarSign,
      title: "Cost Savings",
      value: "$2.1M",
      description: "Annual operational savings",
      trend: "ROI: 340%"
    },
    {
      icon: Clock,
      title: "System Uptime",
      value: "99.9%",
      description: "Zero critical failures",
      trend: "24/7 monitoring"
    },
    {
      icon: Users,
      title: "Active Users",
      value: "847",
      description: "Daily active insurance staff",
      trend: "+23% adoption"
    }
  ];

  const milestones = [
    {
      date: "June 2024",
      title: "Production Launch",
      description: "The Alliance Insurance goes live with complete ERP suite",
      status: "completed"
    },
    {
      date: "September 2024",
      title: "Claims Automation",
      description: "AI-powered claims processing reduces manual work by 60%",
      status: "completed"
    },
    {
      date: "December 2024",
      title: "Low-Code Builder",
      description: "Non-technical staff creating custom workflows",
      status: "completed"
    },
    {
      date: "Q1 2025",
      title: "Multi-Tenant Expansion",
      description: "Platform ready for additional insurance groups",
      status: "in-progress"
    }
  ];

  return (
    <section id="traction" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-success/10 text-success border-success/20">
            <Building className="w-4 h-4 mr-1" />
            Real Production Deployment
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Proven Results in{" "}
            <span className="bg-gradient-success bg-clip-text text-transparent">
              Production
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Alliance Insurance has been running Lowest-Code® as their complete business platform for over 6 months, 
            delivering measurable results and operational transformation.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="border-none shadow-card-hover hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <metric.icon className="w-8 h-8 text-primary" />
                  <Badge variant="outline" className="text-xs bg-success/10 text-success border-success/20">
                    {metric.trend}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
                <CardTitle className="text-base font-semibold text-foreground mb-1">{metric.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Production Milestones</h3>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {milestone.status === "completed" ? (
                    <CheckCircle className="w-6 h-6 text-success" />
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-primary bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {milestone.date}
                    </span>
                    {milestone.status === "completed" && (
                      <Badge variant="secondary" className="bg-success/10 text-success border-success/20 text-xs">
                        ✓ Completed
                      </Badge>
                    )}
                    {milestone.status === "in-progress" && (
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                        In Progress
                      </Badge>
                    )}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">{milestone.title}</h4>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TractionSection;