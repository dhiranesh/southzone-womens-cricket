import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const targetDate = new Date("2026-02-15T09:00:00");
  
  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <Card className="bg-primary text-primary-foreground p-4 mx-4 -mt-8 relative z-10 shadow-lg">
      <p className="text-center text-sm mb-3 text-primary-foreground/80">Tournament Starts In</p>
      <div className="grid grid-cols-4 gap-2">
        {timeUnits.map((unit) => (
          <div key={unit.label} className="text-center">
            <div className="bg-primary-foreground/10 rounded-lg py-2 px-1">
              <span className="text-2xl font-bold">{String(unit.value).padStart(2, "0")}</span>
            </div>
            <span className="text-xs mt-1 block text-primary-foreground/80">{unit.label}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CountdownTimer;
