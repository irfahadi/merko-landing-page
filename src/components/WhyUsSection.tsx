import { Clock, Users, Zap, Layers, Wifi } from "lucide-react";

const features = [
  { icon: Clock, title: "10 Tahun", subtitle: "Berpengalaman" },
  { icon: Users, title: "2000+", subtitle: "Pelanggan Aktif" },
  { icon: Zap, title: "INSTALASI", subtitle: "CEPAT" },
  { icon: Layers, title: "LAYANAN", subtitle: "VARIATIF" },
  { icon: Wifi, title: "INTERNET", subtitle: "STABIL" },
];

const WhyUsSection = () => {
  return (
    <section className="bg-section-light py-16">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-12">
          KENAPA MEMILIH KAMI ?
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center">
                <f.icon size={24} className="text-foreground" />
              </div>
              <div>
                <p className="font-extrabold text-foreground text-sm">{f.title}</p>
                <p className="text-xs text-muted-foreground">{f.subtitle}</p>
              </div>
              <a href="#" className="text-xs text-primary hover:underline">Selengkapnya</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
