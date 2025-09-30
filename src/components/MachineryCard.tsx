import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory } from "lucide-react";

interface MachineryCardProps {
  name: string;
  capacity: string;
  quantity: number;
  category: string;
}

const MachineryCard = ({ name, capacity, quantity, category }: MachineryCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3 flex-1">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Factory className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-base font-semibold text-foreground leading-tight">
              {name}
            </CardTitle>
          </div>
          <Badge variant="secondary" className="flex-shrink-0">
            {category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Capacity</p>
            <p className="text-sm font-semibold text-foreground">{capacity}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Quantity</p>
            <p className="text-sm font-semibold text-foreground">×{quantity}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MachineryCard;
