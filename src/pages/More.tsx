import AppLayout from "@/components/layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Info, 
  BookOpen, 
  Camera, 
  MessageSquare,
  MoreHorizontal,
  ChevronRight
} from "lucide-react";

const menuItems = [
  {
    icon: Info,
    label: "About Tournament",
    description: "Tournament details and officials",
    path: "/about",
    color: "bg-primary",
  },
  {
    icon: BookOpen,
    label: "Rules & Guidelines",
    description: "Tournament rules and fair play",
    path: "/rules",
    color: "bg-secondary",
  },
  {
    icon: Camera,
    label: "Photo Gallery",
    description: "Photos from the tournament",
    path: "/gallery",
    color: "bg-primary",
  },
  {
    icon: MessageSquare,
    label: "Feedback & Support",
    description: "Share your feedback",
    path: "/feedback",
    color: "bg-secondary",
  },
];

const More = () => {
  return (
    <AppLayout>
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <MoreHorizontal className="h-6 w-6 text-primary" />
          More Options
        </h1>

        <div className="space-y-3">
          {menuItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Card className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center`}>
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <Card className="p-4 bg-muted/50 mt-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-1">
              South Zone Women's Cricket Tournament
            </p>
            <p className="text-xs text-muted-foreground">
              © 2026 K.S. Rangasamy College of Technology
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Version 1.0.0
            </p>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
};

export default More;
