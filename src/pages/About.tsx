import AppLayout from "@/components/layout/AppLayout";
import { Card } from "@/components/ui/card";
import { 
  Trophy, 
  Calendar, 
  MapPin, 
  Users, 
  Target,
  Building,
  GraduationCap
} from "lucide-react";

const About = () => {
  return (
    <AppLayout>
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold text-foreground">About Tournament</h1>

        <Card className="p-4 bg-primary text-primary-foreground">
          <div className="flex items-center gap-3 mb-3">
            <Trophy className="h-8 w-8" />
            <div>
              <h2 className="font-bold text-lg">South Zone Women's Cricket Tournament</h2>
              <p className="text-sm text-primary-foreground/80">Anna University Inter-University Championship</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-start gap-3 mb-4">
            <Building className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground">Organizing Institution</h3>
              <p className="text-sm text-muted-foreground">K.S. Rangasamy College of Technology</p>
              <p className="text-sm text-muted-foreground">Tiruchengode, Tamil Nadu</p>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground">Affiliated To</h3>
              <p className="text-sm text-muted-foreground">Anna University, Chennai</p>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <Calendar className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground">Tournament Dates</h3>
              <p className="text-sm text-muted-foreground">February 15 - 22, 2026</p>
              <p className="text-sm text-muted-foreground">8 Days of Cricket Action</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground">Venue</h3>
              <p className="text-sm text-muted-foreground">KSRCT Cricket Ground</p>
              <p className="text-sm text-muted-foreground">Tiruchengode, Namakkal District</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Target className="h-5 w-5 text-secondary" />
            <h3 className="font-semibold text-foreground">Tournament Objective</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            To promote women's cricket among university students, provide a competitive platform 
            for talented players, foster sportsmanship, and encourage physical fitness through 
            inter-university sports participation.
          </p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Users className="h-5 w-5 text-secondary" />
            <h3 className="font-semibold text-foreground">Participating Teams</h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Madras University",
              "Bharathiar University",
              "Madurai Kamaraj University",
              "Annamalai University",
              "Periyar University",
              "KSRCT (Host)",
              "SRM University",
              "Alagappa University"
            ].map((team) => (
              <div 
                key={team}
                className="bg-muted rounded-lg p-2 text-sm text-foreground text-center"
              >
                {team}
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-4">
          <h3 className="font-semibold text-foreground mb-3">Anna University Officials</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-foreground">Dr. R. Velraj</p>
                <p className="text-muted-foreground">Vice Chancellor, Anna University</p>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-foreground">Dr. M. Krishnan</p>
                <p className="text-muted-foreground">Director of Physical Education</p>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-foreground">Dr. S. Ramachandran</p>
                <p className="text-muted-foreground">Sports Board Member</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
};

export default About;
