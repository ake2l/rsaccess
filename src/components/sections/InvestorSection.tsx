import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Target, 
  Users, 
  Globe, 
  DollarSign, 
  Calendar,
  ArrowRight,
  Download
} from "lucide-react";

const InvestorSection = () => {
  const marketOpportunity = [
    {
      metric: "$732B",
      label: "Global Insurance Software Market",
      sublabel: "Growing at 6.2% CAGR",
      icon: Globe
    },
    {
      metric: "15,000+",
      label: "Mid-Market Insurance Companies",
      sublabel: "In North America alone",
      icon: Target
    },
    {
      metric: "$2.3M",
      label: "Average IT Spend per Company",
      sublabel: "Fragmented across 12+ systems",
      icon: DollarSign
    }
  ];

  const investmentHighlights = [
    {
      title: "Proven Product-Market Fit",
      description: "18 months in production with The Alliance Insurance demonstrates real-world viability",
      icon: TrendingUp,
      color: "text-success"
    },
    {
      title: "Massive Market Opportunity",
      description: "Replacing legacy systems across thousands of mid-market insurance companies",
      icon: Target,
      color: "text-primary"
    },
    {
      title: "Defensible Technology",
      description: "Proprietary low-code architecture with 3 years of R&D investment",
      icon: Users,
      color: "text-accent"
    }
  ];

  const financialProjections = [
    { year: "2024", revenue: "$1.2M", customers: "1", arr: "$1.2M" },
    { year: "2025", revenue: "$8.5M", customers: "12", arr: "$8.5M" },
    { year: "2026", revenue: "$24M", customers: "35", arr: "$24M" },
    { year: "2027", revenue: "$67M", customers: "89", arr: "$67M" },
    { year: "2028", revenue: "$156M", customers: "185", arr: "$156M" }
  ];

  return (
    <section id="investors" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-success/10 text-success border-success/20">
            <TrendingUp className="w-4 h-4 mr-1" />
            Investment Opportunity
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Disrupt the{" "}
            <span className="bg-gradient-success bg-clip-text text-transparent">
              $732B Market
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insurance companies are trapped in legacy systems. We've built the platform that sets them free, 
            with proven results and massive market opportunity.
          </p>
        </div>

        {/* Market Opportunity */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {marketOpportunity.map((item, index) => (
            <Card key={index} className="text-center border-none shadow-card-hover">
              <CardContent className="p-8">
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">{item.metric}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{item.label}</div>
                <div className="text-sm text-muted-foreground">{item.sublabel}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Investment Highlights */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">Investment Highlights</h3>
          <div className="space-y-6">
            {investmentHighlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-6 p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300">
                <div className={`p-3 rounded-xl bg-muted ${highlight.color}`}>
                  <highlight.icon className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h4 className="text-xl font-semibold text-foreground mb-2">{highlight.title}</h4>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Projections */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="border-none shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-center">5-Year Financial Projections</CardTitle>
              <p className="text-center text-muted-foreground">Conservative estimates based on comparable SaaS companies</p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Year</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Revenue</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Customers</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">ARR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {financialProjections.map((row, index) => (
                      <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                        <td className="py-3 px-4 font-medium text-foreground">{row.year}</td>
                        <td className="py-3 px-4 text-foreground">{row.revenue}</td>
                        <td className="py-3 px-4 text-foreground">{row.customers}</td>
                        <td className="py-3 px-4 font-semibold text-success">{row.arr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-hero text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Insurance Software?</h3>
            <p className="text-primary-foreground/90 mb-6">
              Join us in revolutionizing how insurance companies operate. Download our investor deck 
              or schedule a detailed presentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="text-lg px-8">
                <Download className="w-5 h-5 mr-2" />
                Download Investor Deck
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Presentation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorSection;