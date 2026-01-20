import { Card } from "@/components/ui/card";
import { Users, User } from "lucide-react";
import { Link } from "react-router-dom";

interface Team {
  id: string;
  name: string;
  shortName: string;
  university: string;
  manager: string;
  coach: string;
  playerCount: number;
}

interface TeamCardProps {
  team: Team;
}

const TeamCard = ({ team }: TeamCardProps) => {
  return (
    <Link to={`/teams/${team.id}`}>
      <Card className="p-4 bg-card shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-lg font-bold text-primary">{team.shortName}</span>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground">{team.name}</h3>
            <p className="text-sm text-muted-foreground">{team.university}</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Manager: {team.manager}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{team.playerCount} Players</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default TeamCard;
