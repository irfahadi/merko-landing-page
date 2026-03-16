import { PhoneCall, Wifi, Globe } from "lucide-react";

const features = [
  { icon: PhoneCall, title: "LAYANAN PELANGGAN", subtitle: "24/7" },
  { icon: Wifi, title: "TERHUBUNG", subtitle: "DAN NIKMATI" },
  { icon: Globe, title: "KONEKSI", subtitle: "FIBER OPTIK" },
];

const WhyUsSection = () => {
  return (
    <section className="bg-section-light py-16">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-4">
          KEUNGGULAN KAMI
        </h2>
        <p className="text-muted-foreground text-sm md:text-base mb-12 max-w-2xl">
          Dengan teknologi terkini dan dukungan teknis profesional, kami memastikan setiap pengguna menikmati pengalaman online tanpa gangguan.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center">
                <f.icon size={24} className="text-foreground" />
              </div>
              <div>
                <p className="font-extrabold text-foreground text-sm">{f.title}</p>
                <p className="text-xs text-muted-foreground">{f.subtitle}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
