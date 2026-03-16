import { useState } from "react";
import { useNavigate } from "react-router-dom";
import paket1 from "@/assets/paket-produktif-1.jpg";
import paket2 from "@/assets/paket-produktif-2.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const services = [
  {
    title: "PAKET PRODUKTIF",
    image: paket1,
    anchor: "paket-produktif",
    description: "Paket eksklusif dengan kecepatan tinggi mulai dari 50 Mbps hingga 100 Mbps. Dilengkapi jaringan prioritas, gratis biaya pemasangan, dan layanan 24/7.",
    speeds: ["50 Mbps — Rp 456.000/bln", "100 Mbps — Rp 699.000/bln"],
  },
  {
    title: "PAKET ANDALAN",
    image: paket2,
    anchor: "paket-andalan",
    description: "Pilihan paket internet terjangkau untuk kebutuhan digital harian Anda. Tersedia dalam berbagai pilihan kecepatan dengan harga bersahabat.",
    speeds: ["5 Mbps — Rp 180.000/bln", "10 Mbps — Rp 220.000/bln", "15 Mbps — Rp 250.000/bln", "20 Mbps — Rp 300.000/bln"],
  },
];

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleClick = (index: number) => {
    setOpenIndex(index);
  };

  const handleNavigate = (anchor: string) => {
    setOpenIndex(null);
    navigate(`/layanan#${anchor}`);
  };

  return (
    <section id="layanan" className="bg-background py-16">
      <div className="container">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-[0.3em] text-center text-foreground mb-12">
          LAYANAN KAMI
        </h2>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {services.map((s, i) => (
            <div key={i} className="text-center cursor-pointer group" onClick={() => handleClick(i)}>
              <h3 className="text-lg font-extrabold text-foreground mb-1">{s.title}</h3>
              <span className="text-xs text-primary hover:underline">Selengkapnya...</span>
              <div className="mt-4 rounded-lg overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {services.map((s, i) => (
        <Dialog key={i} open={openIndex === i} onOpenChange={(open) => !open && setOpenIndex(null)}>
          <DialogContent className="bg-card border-border max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-extrabold tracking-wider text-foreground">
                {s.title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-sm mt-2">
                {s.description}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-2 mt-2">
              <p className="text-xs font-bold text-primary uppercase tracking-wider">Pilihan Kecepatan</p>
              <ul className="space-y-1.5">
                {s.speeds.map((speed) => (
                  <li key={speed} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block shrink-0" />
                    {speed}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => handleNavigate(s.anchor)}
              className="mt-4 w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg text-sm hover:bg-primary/90 transition-colors"
            >
              Lihat Detail Paket
            </button>
          </DialogContent>
        </Dialog>
      ))}
    </section>
  );
};

export default ServicesSection;
