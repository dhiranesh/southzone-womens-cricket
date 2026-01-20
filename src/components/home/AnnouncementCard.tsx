import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Clock } from "lucide-react";

interface Announcement {
  id: string;
  title: string;
  message: string;
  type: "info" | "urgent" | "update";
  time: string;
}

const announcements: Announcement[] = [
  {
    id: "1",
    title: "Opening Ceremony",
    message: "Opening ceremony will begin at 9:00 AM sharp. All teams must report by 8:30 AM.",
    type: "urgent",
    time: "2 hours ago",
  },
  {
    id: "2",
    title: "Practice Schedule Updated",
    message: "Practice nets available from 6:00 AM to 8:00 AM and 4:00 PM to 6:00 PM.",
    type: "update",
    time: "5 hours ago",
  },
  {
    id: "3",
    title: "Registration Reminder",
    message: "Team managers please complete registration at the help desk.",
    type: "info",
    time: "1 day ago",
  },
];

const typeStyles = {
  urgent: "bg-destructive text-destructive-foreground",
  update: "bg-secondary text-secondary-foreground",
  info: "bg-muted text-foreground",
};

const AnnouncementCard = () => {
  return (
    <div className="px-4 pb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">Latest Updates</h2>
        <Bell className="h-5 w-5 text-muted-foreground" />
      </div>
      <div className="space-y-3">
        {announcements.map((announcement) => (
          <Card key={announcement.id} className="p-4 bg-card shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <Badge className={typeStyles[announcement.type]}>
                {announcement.type.charAt(0).toUpperCase() + announcement.type.slice(1)}
              </Badge>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {announcement.time}
              </div>
            </div>
            <h3 className="font-semibold text-foreground mb-1">{announcement.title}</h3>
            <p className="text-sm text-muted-foreground">{announcement.message}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementCard;
