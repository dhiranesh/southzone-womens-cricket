import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <div className="relative h-48 overflow-hidden">
      <img 
        src={heroBanner} 
        alt="South Zone Women's Cricket Tournament" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <h2 className="text-xl font-bold text-primary-foreground drop-shadow-lg">
          South Zone Women's Cricket Tournament
        </h2>
        <p className="text-sm text-primary-foreground/90 drop-shadow">
          February 15-22, 2026 • KSRCT, Tiruchengode
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
