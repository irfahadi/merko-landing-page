import { DollarSign, Globe, Headphones } from "lucide-react";
import heroTower from "@/assets/hero-tower.jpg";

const highlights = [
  { icon: DollarSign, label: "Harga Mulai", value: "Rp.150 000,-" },
  { icon: Globe, label: "Up to", value: "300 Mbps" },
  { icon: Headphones, label: "Layanan Mudah", value: "24 Jam" },
];

const HeroSection = () => {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center pt-16"
      style={{
        backgroundImage: `linear-gradient(to bottom, hsl(160 30% 8% / 0.7), hsl(160 20% 4% / 0.95)), url(${heroTower})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl">
          MULAILAH <em className="text-primary italic font-extrabold">BERGABUNG.</em>
          <br />
          NIKMATI LAYANAN JARINGAN TERPADU
          <br />
          YANG <em className="text-primary italic font-extrabold">CEPAT, HANDAL, TERPERCAYA.</em>
        </h1>

        <p className="mt-8 text-muted-foreground text-sm">Nikmati Keunggulan dari Kami :</p>

        <div className="mt-4 flex flex-wrap gap-8">
          {highlights.map((item) => (
            <div key={item.value} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary">
                <item.icon size={18} />
              </div>
              <div>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{item.label}</span>
                <p className="text-sm font-bold text-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
