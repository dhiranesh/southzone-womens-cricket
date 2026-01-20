import AppLayout from "@/components/layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Phone, Shield, Heart, MapPin, Search } from "lucide-react";

const emergencyContacts = [
  {
    icon: Heart,
    title: "Medical Emergency",
    subtitle: "Campus Medical Center",
    phone: "+91 98765 00010",
    color: "bg-destructive",
  },
  {
    icon: Phone,
    title: "Ambulance",
    subtitle: "24/7 Emergency Service",
    phone: "+91 98765 00011",
    color: "bg-destructive",
  },
  {
    icon: Shield,
    title: "Women Safety Officer",
    subtitle: "Dr. S. Vasanthi",
    phone: "+91 98765 00020",
    color: "bg-secondary",
  },
  {
    icon: Shield,
    title: "Campus Security",
    subtitle: "Main Gate Security",
    phone: "+91 98765 00012",
    color: "bg-primary",
  },
  {
    icon: MapPin,
    title: "Nearby Hospital",
    subtitle: "KSR Hospital (2 km)",
    phone: "+91 98765 00030",
    color: "bg-primary",
  },
  {
    icon: Search,
    title: "Lost & Found",
    subtitle: "Help Desk",
    phone: "+91 98765 00013",
    color: "bg-muted-foreground",
  },
];

const Emergency = () => {
  return (
    <AppLayout>
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="h-6 w-6 text-destructive" />
          <h1 className="text-2xl font-bold text-foreground">Emergency Help</h1>
        </div>

        <Card className="p-4 bg-destructive text-destructive-foreground">
          <p className="text-center mb-4 font-medium">One-Tap Emergency Call</p>
          <Button 
            size="lg"
            className="w-full bg-card text-destructive hover:bg-card/90 text-lg font-bold"
            asChild
          >
            <a href="tel:+919876500010">
              <Phone className="h-5 w-5 mr-2 animate-pulse" />
              CALL EMERGENCY
            </a>
          </Button>
        </Card>

        <div className="space-y-3">
          {emergencyContacts.map((contact) => (
            <Card key={contact.phone} className="p-4">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${contact.color} rounded-full flex items-center justify-center`}>
                  <contact.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{contact.title}</h3>
                  <p className="text-sm text-muted-foreground">{contact.subtitle}</p>
                </div>
                <Button 
                  size="icon"
                  variant="outline"
                  className="h-12 w-12"
                  asChild
                >
                  <a href={`tel:${contact.phone}`}>
                    <Phone className="h-5 w-5 text-primary" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-4 bg-muted">
          <h3 className="font-semibold text-foreground mb-2">Important Instructions</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Stay calm and provide clear information</li>
            <li>• Share your exact location when calling</li>
            <li>• Follow instructions from emergency responders</li>
            <li>• Keep this number saved: +91 98765 00010</li>
          </ul>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Emergency;
