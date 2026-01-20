import { Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ksrLogo from "@/assets/ksr_logo.png";
import annaLogo from "@/assets/anna_logo.png";

const menuItems = [
  { label: "About Tournament", path: "/about" },
  { label: "Match Schedule", path: "/schedule" },
  { label: "Results & Points", path: "/results" },
  { label: "Venue & Ground", path: "/venue" },
  { label: "Teams", path: "/teams" },
  { label: "Accommodation", path: "/accommodation" },
  { label: "Food & Dining", path: "/food" },
  { label: "Transport", path: "/transport" },
  { label: "Contacts", path: "/contacts" },
  { label: "Emergency", path: "/emergency" },
  { label: "Rules & Guidelines", path: "/rules" },
  { label: "Gallery", path: "/gallery" },
  { label: "Feedback", path: "/feedback" },
];

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="sticky top-0 z-40 glass w-full"
    >
      <div className="flex items-center justify-between px-2 sm:px-4 py-2 sm:py-3 max-w-7xl mx-auto backdrop-blur-md">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="group hover:bg-primary/10 text-primary shrink-0 h-12 w-12 sm:h-14 sm:w-14 rounded-full transition-all duration-300 hover:scale-110">
              <Menu className="h-8 w-8 sm:h-10 sm:w-10 transition-transform group-hover:rotate-180 duration-500" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 bg-background/95 backdrop-blur-xl p-0 border-r border-border/50">
            <div className="bg-secondary p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Menu className="w-32 h-32 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white font-serif relative z-10">
                South Zone <br /> Women's Cricket
              </h2>
              <p className="text-sm text-white/80 mt-1 relative z-10">KSRCT 2026</p>
            </div>
            <nav className="p-4 overflow-y-auto max-h-[calc(100vh-140px)]">
              {menuItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block py-3 px-4 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium"
                >
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-3 sm:gap-6 flex-1 justify-center mx-2">
          <img 
            src={ksrLogo} 
            alt="KSRCT Logo" 
            className="h-14 w-14 sm:h-20 sm:w-20 object-contain filter drop-shadow-md transition-transform hover:scale-110 duration-300" 
          />
          <Link to="/" className="text-center group shrink-0">
            <h1 className="text-xl sm:text-3xl font-bold font-serif text-primary tracking-tight leading-none drop-shadow-sm">
              South Zone
              <span className="block text-[10px] sm:text-sm font-sans font-bold text-secondary uppercase tracking-[0.2em] group-hover:text-accent transition-colors mt-0.5 sm:mt-1">
                Cricket '26
              </span>
            </h1>
          </Link>
          <img 
            src={annaLogo} 
            alt="Anna University Logo" 
            className="h-14 w-14 sm:h-20 sm:w-20 object-contain filter drop-shadow-md transition-transform hover:scale-110 duration-300" 
          />
        </div>

        <Link to="/notifications" className="shrink-0">
          <Button variant="ghost" size="icon" className="group text-primary hover:bg-primary/10 relative h-12 w-12 sm:h-14 sm:w-14 rounded-full transition-all duration-300 hover:scale-110">
            <Bell className="h-7 w-7 sm:h-9 sm:w-9 group-hover:swing" />
            <span className="absolute top-3 right-3 h-3 w-3 bg-accent rounded-full animate-pulse shadow-[0_0_10px_hsl(var(--accent))]" />
          </Button>
        </Link>
      </div>
    </motion.header>
  );
};

export default Header;
