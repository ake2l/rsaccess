import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  Calculator,
  BarChart3,
  Grid3X3,
  FileSpreadsheet,
  Plus,
  Download,
  Share,
  Save,
  Undo,
  Redo
} from "lucide-react";

const SpreadsheetView = () => {
  const [selectedCell, setSelectedCell] = useState<{row: number, col: number} | null>(null);
  
  // Excel-like column headers (A, B, C, etc.)
  const getColumnHeader = (index: number) => {
    return String.fromCharCode(65 + index);
  };

  // Sample data for the spreadsheet
  const initialData = [
    ["Policy ID", "Premium", "Commission", "Total", "=B2*C2"],
    ["POL-001", "24500", "0.15", "=B2*C2", "3675"],
    ["POL-002", "18750", "0.12", "=B3*C3", "2250"],
    ["POL-003", "67400", "0.18", "=B4*C4", "12132"],
    ["POL-004", "31800", "0.15", "=B5*C5", "4770"],
    ["", "", "SUM:", "=SUM(B2:B5)", "=SUM(E2:E5)"],
    ["", "", "", "", ""],
    ["Analytics", "", "", "", ""],
    ["Avg Premium", "=AVERAGE(B2:B5)", "", "", ""],
    ["Max Premium", "=MAX(B2:B5)", "", "", ""],
    ["Min Premium", "=MIN(B2:B5)", "", "", ""],
  ];

  const [data, setData] = useState(initialData);

  const handleCellClick = (row: number, col: number) => {
    setSelectedCell({row, col});
  };

  const handleCellChange = (row: number, col: number, value: string) => {
    const newData = [...data];
    newData[row][col] = value;
    setData(newData);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <FileSpreadsheet className="w-8 h-8 text-primary" />
            Insurance Calculator
          </h1>
          <p className="text-muted-foreground mt-1">Excel-like spreadsheet for policy calculations</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Undo className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Redo className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Save className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button variant="outline" size="sm">
            <Share className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button variant="hero" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Toolbar */}
      <Card className="border-none shadow-card-hover">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <Input 
              placeholder="fx SUM(B2:B5)" 
              className="font-mono text-sm w-64"
              value={selectedCell ? `=${data[selectedCell.row]?.[selectedCell.col] || ''}` : ''}
            />
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Calculator className="w-4 h-4 mr-2" />
                Functions
              </Button>
              <Button variant="outline" size="sm">
                <BarChart3 className="w-4 h-4 mr-2" />
                Insert Chart
              </Button>
              <Button variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Insert Row
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Spreadsheet */}
      <Card className="border-none shadow-card-hover bg-gradient-to-br from-card to-card/80">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b">
          <CardTitle className="flex items-center gap-2">
            <Grid3X3 className="w-5 h-5 text-primary" />
            Policy Commission Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-auto max-h-[700px] border border-border/20">
            <Table>
              <TableHeader className="sticky top-0 bg-muted/80 backdrop-blur-sm">
                <TableRow className="hover:bg-transparent border-b-2 border-primary/20">
                  <TableHead className="w-[50px] bg-muted/90 font-bold text-center border-r border-border/50 text-muted-foreground">
                    #
                  </TableHead>
                  {Array.from({length: 8}, (_, i) => (
                    <TableHead 
                      key={i} 
                      className="min-w-[120px] bg-muted/90 font-bold text-center border-r border-border/50 text-foreground"
                    >
                      {getColumnHeader(i)}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((row, rowIndex) => (
                  <TableRow 
                    key={rowIndex} 
                    className="hover:bg-accent/10 transition-all duration-200 group border-b border-border/30"
                  >
                    <TableCell className="text-center font-mono text-xs bg-muted/40 border-r border-border/50 font-bold text-muted-foreground">
                      {rowIndex + 1}
                    </TableCell>
                    {Array.from({length: 8}, (_, colIndex) => {
                      const cellValue = row[colIndex] || '';
                      const isSelected = selectedCell?.row === rowIndex && selectedCell?.col === colIndex;
                      const isFormula = cellValue.startsWith('=');
                      const isHeader = rowIndex === 0;
                      
                      return (
                        <TableCell 
                          key={colIndex}
                          className={`
                            border-r border-border/30 transition-all duration-200 cursor-pointer
                            ${isSelected ? 'bg-primary/20 ring-2 ring-primary/40' : 'group-hover:bg-primary/5'}
                            ${isHeader ? 'bg-accent/10 font-semibold' : ''}
                            ${isFormula ? 'bg-success/5 text-success font-mono' : ''}
                          `}
                          onClick={() => handleCellClick(rowIndex, colIndex)}
                        >
                          <Input
                            value={cellValue}
                            onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                            className={`
                              border-none bg-transparent p-0 h-auto text-sm
                              ${isFormula ? 'font-mono text-success' : ''}
                              ${isHeader ? 'font-semibold' : ''}
                            `}
                            placeholder=""
                          />
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {/* Excel-like Status Bar */}
          <div className="bg-muted/40 border-t border-border/50 px-4 py-2 text-xs flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-success">Ready</span>
              <span className="text-muted-foreground">|</span>
              <span>
                Cell: <span className="font-mono font-semibold">
                  {selectedCell ? `${getColumnHeader(selectedCell.col)}${selectedCell.row + 1}` : 'A1'}
                </span>
              </span>
              <span className="text-muted-foreground">|</span>
              <span>Sum: <span className="font-semibold text-success">$142,450</span></span>
              <span className="text-muted-foreground">|</span>
              <span>Avg: <span className="font-semibold text-primary">$35,612</span></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Sheet1</span>
              <Button variant="ghost" size="sm" className="h-5 w-5 text-xs p-0">
                +
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpreadsheetView;