import { Link } from "react-router-dom";
import { 
  Calendar, 
  MapPin, 
  Building, 
  Utensils, 
  Bus, 
  Phone, 
  AlertTriangle,
  Trophy
} from "lucide-react";

const actions = [
  { icon: Calendar, label: "Schedule", path: "/schedule", color: "bg-primary" },
  { icon: MapPin, label: "Venue", path: "/venue", color: "bg-secondary" },
  { icon: Building, label: "Stay", path: "/accommodation", color: "bg-primary" },
  { icon: Utensils, label: "Food", path: "/food", color: "bg-secondary" },
  { icon: Bus, label: "Transport", path: "/transport", color: "bg-primary" },
  { icon: Phone, label: "Contacts", path: "/contacts", color: "bg-secondary" },
  { icon: AlertTriangle, label: "Emergency", path: "/emergency", color: "bg-destructive" },
  { icon: Trophy, label: "Results", path: "/results", color: "bg-primary" },
];

const QuickActions = () => {
  return (
    <div className="px-4 py-6">
      <h2 className="text-lg font-semibold text-foreground mb-4">Quick Access</h2>
      <div className="grid grid-cols-4 gap-3">
        {actions.map((action) => (
          <Link
            key={action.path}
            to={action.path}
            className="flex flex-col items-center gap-2"
          >
            <div className={`${action.color} p-3 rounded-xl shadow-sm`}>
              <action.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xs text-foreground font-medium text-center">{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
