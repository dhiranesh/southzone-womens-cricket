import { Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

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
    <header className="sticky top-0 z-40 bg-primary text-primary-foreground shadow-md">
      <div className="flex items-center justify-between px-4 py-3">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 bg-card p-0">
            <div className="bg-primary p-6">
              <h2 className="text-lg font-bold text-primary-foreground">
                South Zone Women's Cricket
              </h2>
              <p className="text-sm text-primary-foreground/80">KSRCT 2026</p>
            </div>
            <nav className="p-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block py-3 px-4 text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <div className="text-center">
          <h1 className="text-sm font-bold">South Zone Women's Cricket</h1>
          <p className="text-xs text-primary-foreground/80">KSRCT 2026</p>
        </div>

        <Link to="/notifications">
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80 relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-secondary rounded-full" />
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
