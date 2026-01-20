import AppLayout from "@/components/layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Trophy, Users, AlertTriangle, ThumbsUp } from "lucide-react";

const rules = [
  {
    id: "tournament",
    icon: Trophy,
    title: "Tournament Rules",
    items: [
      "All matches will be played as per BCCI Women's Cricket rules",
      "Each team must have 11 players on field at all times",
      "20 overs per side in league matches",
      "Points: Win - 2, Loss - 0, Tie/No Result - 1",
      "Top 4 teams qualify for semifinals",
      "Decisions of umpires are final",
    ],
  },
  {
    id: "discipline",
    icon: Users,
    title: "Discipline Guidelines",
    items: [
      "Players must wear proper team uniform during matches",
      "Report to venue 30 minutes before scheduled time",
      "Maintain sportsman spirit at all times",
      "No verbal abuse or sledging allowed",
      "Respect all officials, players, and staff",
      "Follow COVID-19 protocols if applicable",
    ],
  },
  {
    id: "anti-ragging",
    icon: AlertTriangle,
    title: "Anti-Ragging Policy",
    items: [
      "Ragging in any form is strictly prohibited",
      "Violators will face immediate disqualification",
      "Anti-ragging committee available 24/7",
      "Report any incident to the Women Safety Officer",
      "Strict action as per UGC guidelines",
    ],
  },
  {
    id: "fair-play",
    icon: ThumbsUp,
    title: "Fair Play Code",
    items: [
      "Play to win but accept defeat gracefully",
      "Respect the game and its traditions",
      "No match-fixing or unsportsmanlike conduct",
      "Support equal opportunities for all",
      "Celebrate success, learn from failure",
      "Be a role model on and off the field",
    ],
  },
];

const Rules = () => {
  return (
    <AppLayout>
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          Rules & Guidelines
        </h1>

        <Card className="p-4 bg-primary/5 border-primary/20">
          <p className="text-sm text-foreground">
            All participants are expected to read and follow these guidelines. 
            Violation of rules may result in penalties or disqualification.
          </p>
        </Card>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {rules.map((section) => (
            <AccordionItem 
              key={section.id} 
              value={section.id}
              className="bg-card border rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <section.icon className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">{section.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <ul className="space-y-2">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="h-5 w-5 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </AppLayout>
  );
};

export default Rules;
