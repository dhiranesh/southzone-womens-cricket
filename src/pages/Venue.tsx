import AppLayout from "@/components/layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, AlertTriangle, Navigation, Image } from "lucide-react";
import stadiumImg from "@/assets/stadium.jpg";

const groundRules = [
  "Report 30 minutes before match time",
  "Use designated warm-up areas only",
  "Follow equipment guidelines strictly",
  "Restricted zones marked with barriers",
  "No spectators in playing area",
  "Follow umpire instructions at all times",
];

const Venue = () => {
  return (
    <AppLayout>
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold text-foreground">Venue Details</h1>
        
        <Card className="overflow-hidden">
          <img 
            src={stadiumImg} 
            alt="KSRCT Cricket Ground" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-foreground mb-2">
              KSRCT Cricket Ground
            </h2>
            <div className="flex items-start gap-2 text-sm text-muted-foreground mb-4">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>
                K.S. Rangasamy College of Technology, Tiruchengode, 
                Namakkal District, Tamil Nadu - 637215
              </span>
            </div>
            <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Navigation className="h-4 w-4 mr-2" />
              Open in Google Maps
            </Button>
          </div>
        </Card>

        <Card className="p-4">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Ground Timings
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Morning Session</span>
              <span className="font-medium text-foreground">6:00 AM - 12:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Afternoon Session</span>
              <span className="font-medium text-foreground">2:00 PM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Practice Nets</span>
              <span className="font-medium text-foreground">6:00 AM - 8:00 AM</span>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            Ground Rules
          </h3>
          <ul className="space-y-2">
            {groundRules.map((rule, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <span className="h-5 w-5 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-muted-foreground">{rule}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-4">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Image className="h-5 w-5 text-secondary" />
            Facilities
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {["Main Ground", "Practice Nets", "Dressing Rooms", "Pavilion", "Scoreboard", "Canteen"].map((facility) => (
              <div 
                key={facility}
                className="bg-muted rounded-lg p-3 text-center text-sm font-medium text-foreground"
              >
                {facility}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Venue;
