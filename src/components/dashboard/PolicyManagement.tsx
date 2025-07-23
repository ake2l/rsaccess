import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  Plus, 
  Eye, 
  Edit, 
  MoreHorizontal,
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  Download
} from "lucide-react";

const PolicyManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const policies = [
    {
      id: "POL-2024-001847",
      policyHolder: "Johnson Manufacturing Inc.",
      type: "Commercial General Liability",
      premium: "$24,500",
      status: "Active",
      effectiveDate: "2024-01-15",
      expirationDate: "2025-01-15",
      agent: "Sarah Chen",
      lastModified: "2024-01-20"
    },
    {
      id: "POL-2024-001846",
      policyHolder: "Martinez Construction LLC",
      type: "Workers' Compensation",
      premium: "$18,750",
      status: "Pending Review",
      effectiveDate: "2024-02-01",
      expirationDate: "2025-02-01",
      agent: "Mike Rodriguez",
      lastModified: "2024-01-19"
    },
    {
      id: "POL-2024-001845",
      policyHolder: "TechStart Solutions",
      type: "Professional Liability",
      premium: "$12,200",
      status: "Active",
      effectiveDate: "2023-12-01",
      expirationDate: "2024-12-01",
      agent: "Alex Kim",
      lastModified: "2024-01-18"
    },
    {
      id: "POL-2024-001844",
      policyHolder: "Green Valley Medical Center",
      type: "Medical Malpractice",
      premium: "$67,400",
      status: "Expired",
      effectiveDate: "2023-01-01",
      expirationDate: "2024-01-01",
      agent: "Linda Thompson",
      lastModified: "2024-01-01"
    },
    {
      id: "POL-2024-001843",
      policyHolder: "Riverside Auto Dealership",
      type: "Commercial Auto",
      premium: "$31,800",
      status: "Active",
      effectiveDate: "2024-01-10",
      expirationDate: "2025-01-10",
      agent: "David Wilson",
      lastModified: "2024-01-17"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Active":
        return <CheckCircle className="w-4 h-4 text-success" />;
      case "Pending Review":
        return <Clock className="w-4 h-4 text-orange-500" />;
      case "Expired":
        return <AlertCircle className="w-4 h-4 text-destructive" />;
      default:
        return <FileText className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-success/10 text-success border-success/20";
      case "Pending Review":
        return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      case "Expired":
        return "bg-destructive/10 text-destructive border-destructive/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const filteredPolicies = policies.filter(policy =>
    policy.policyHolder.toLowerCase().includes(searchTerm.toLowerCase()) ||
    policy.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    policy.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Policy Management</h1>
          <p className="text-muted-foreground mt-1">Manage and track all insurance policies</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="hero" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            New Policy
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="border-none shadow-card-hover">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by policy number, holder, or type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Policies Table */}
      <Card className="border-none shadow-card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Active Policies ({filteredPolicies.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Policy</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Holder</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Premium</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Expiration</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Agent</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPolicies.map((policy, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4">
                      <div className="font-medium text-foreground">{policy.id}</div>
                      <div className="text-sm text-muted-foreground">{policy.effectiveDate}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-medium text-foreground">{policy.policyHolder}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-foreground">{policy.type}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-semibold text-foreground">{policy.premium}</div>
                      <div className="text-sm text-muted-foreground">Annual</div>
                    </td>
                    <td className="py-4 px-4">
                      <Badge variant="outline" className={getStatusColor(policy.status)}>
                        <div className="flex items-center gap-1">
                          {getStatusIcon(policy.status)}
                          {policy.status}
                        </div>
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-foreground">{policy.expirationDate}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-foreground">{policy.agent}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-none shadow-card-hover">
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-success mb-1">847</div>
            <div className="text-sm text-muted-foreground">Active Policies</div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-card-hover">
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-orange-500 mb-1">23</div>
            <div className="text-sm text-muted-foreground">Pending Review</div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-card-hover">
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-destructive mb-1">12</div>
            <div className="text-sm text-muted-foreground">Expiring Soon</div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-card-hover">
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-1">$2.4M</div>
            <div className="text-sm text-muted-foreground">Monthly Premium</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PolicyManagement;