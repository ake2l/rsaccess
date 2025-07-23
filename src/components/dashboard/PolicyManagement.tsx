import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
  Download,
  Calculator,
  BarChart3,
  Grid3X3
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

      {/* Excel-like Policy Grid */}
      <Card className="border-none shadow-card-hover bg-gradient-to-br from-card to-card/80">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Grid3X3 className="w-5 h-5 text-primary" />
              Policy Spreadsheet ({filteredPolicies.length} rows)
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Calculator className="w-4 h-4 mr-2" />
                Formulas
              </Button>
              <Button variant="outline" size="sm">
                <BarChart3 className="w-4 h-4 mr-2" />
                Charts
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-auto max-h-[600px]">
            <Table>
              <TableHeader className="sticky top-0 bg-muted/50 backdrop-blur-sm">
                <TableRow className="hover:bg-transparent border-b-2 border-primary/20">
                  <TableHead className="w-[50px] bg-muted/80 font-bold text-center border-r">A</TableHead>
                  <TableHead className="min-w-[160px] bg-muted/80 font-bold border-r">Policy ID</TableHead>
                  <TableHead className="min-w-[200px] bg-muted/80 font-bold border-r">Policy Holder</TableHead>
                  <TableHead className="min-w-[180px] bg-muted/80 font-bold border-r">Type</TableHead>
                  <TableHead className="min-w-[120px] bg-muted/80 font-bold border-r">Premium</TableHead>
                  <TableHead className="min-w-[130px] bg-muted/80 font-bold border-r">Status</TableHead>
                  <TableHead className="min-w-[120px] bg-muted/80 font-bold border-r">Effective</TableHead>
                  <TableHead className="min-w-[120px] bg-muted/80 font-bold border-r">Expiration</TableHead>
                  <TableHead className="min-w-[120px] bg-muted/80 font-bold border-r">Agent</TableHead>
                  <TableHead className="min-w-[100px] bg-muted/80 font-bold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPolicies.map((policy, index) => (
                  <TableRow 
                    key={index} 
                    className="hover:bg-accent/10 transition-all duration-200 group border-b border-border/50"
                  >
                    <TableCell className="text-center font-mono text-xs bg-muted/30 border-r font-bold text-muted-foreground">
                      {index + 2}
                    </TableCell>
                    <TableCell className="font-mono text-sm border-r group-hover:bg-primary/5 transition-colors">
                      <div className="font-semibold text-primary">{policy.id}</div>
                      <div className="text-xs text-muted-foreground">{policy.effectiveDate}</div>
                    </TableCell>
                    <TableCell className="border-r group-hover:bg-primary/5 transition-colors">
                      <div className="font-medium">{policy.policyHolder}</div>
                    </TableCell>
                    <TableCell className="border-r group-hover:bg-primary/5 transition-colors">
                      <div className="text-sm">{policy.type}</div>
                    </TableCell>
                    <TableCell className="border-r group-hover:bg-primary/5 transition-colors">
                      <div className="font-bold text-success">{policy.premium}</div>
                      <div className="text-xs text-muted-foreground">Annual</div>
                    </TableCell>
                    <TableCell className="border-r group-hover:bg-primary/5 transition-colors">
                      <Badge variant="outline" className={`${getStatusColor(policy.status)} text-xs`}>
                        <div className="flex items-center gap-1">
                          {getStatusIcon(policy.status)}
                          {policy.status}
                        </div>
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm border-r group-hover:bg-primary/5 transition-colors">
                      {policy.effectiveDate}
                    </TableCell>
                    <TableCell className="text-sm border-r group-hover:bg-primary/5 transition-colors">
                      {policy.expirationDate}
                    </TableCell>
                    <TableCell className="text-sm border-r group-hover:bg-primary/5 transition-colors">
                      {policy.agent}
                    </TableCell>
                    <TableCell className="group-hover:bg-primary/5 transition-colors">
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-primary/20">
                          <Eye className="w-3 h-3" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-primary/20">
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-primary/20">
                          <MoreHorizontal className="w-3 h-3" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {/* Excel-like Status Bar */}
          <div className="bg-muted/30 border-t px-4 py-2 text-xs flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span>Ready</span>
              <span className="text-muted-foreground">|</span>
              <span>Sum: <span className="font-semibold text-success">$154,650</span></span>
              <span className="text-muted-foreground">|</span>
              <span>Count: <span className="font-semibold">{filteredPolicies.length}</span></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Sheet 1</span>
              <Button variant="ghost" size="sm" className="h-6 text-xs">
                +
              </Button>
            </div>
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