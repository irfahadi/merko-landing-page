import { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import {
  Phone,
  Users,
  Building2,
  MapPin,
  ShieldCheck,
  CreditCard,
  AlertTriangle,
  Clock,
  CheckCircle,
  Banknote,
  Mail,
} from "lucide-react";
import heroTower from "@/assets/hero-tower.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const stats = [
  {
    icon: Users,
    value: "20.000+",
    label: "Pelanggan Aktif",
    desc: "Pelanggan setia yang tersebar di berbagai wilayah",
  },
  {
    icon: Building2,
    value: "50+",
    label: "Mitra Usaha",
    desc: "Dipercaya Mitra dari Berbagai Industri",
  },
  {
    icon: MapPin,
    value: "20+",
    label: "Area Layanan",
    desc: "Kami Hadir di Berbagai Wilayah",
  },
];

const kebijakanItems = [
  {
    icon: ShieldCheck,
    title: "SERVICE LEVEL AGREEMENT (SLA)",
    points: [
      "Jaminan Uptime Layanan Internet",
      "Waktu Respon Support Pelanggan",
      "Kompensasi Atas Gangguan",
      "Indikator Peforma Layanan",
    ],
    dialogContent: {
      description:
        "Service Level Agreement (SLA) adalah komitmen kami dalam menjaga kualitas layanan internet yang Anda gunakan. Berikut detail kebijakan SLA kami:",
      sections: [
        {
          icon: CheckCircle,
          title: "Jaminan Uptime 99.5%",
          desc: "Kami menjamin ketersediaan layanan internet minimal 99.5% setiap bulannya. Jika uptime di bawah standar, pelanggan berhak mendapatkan kompensasi.",
        },
        {
          icon: Clock,
          title: "Waktu Respon Support",
          desc: "Laporan gangguan akan direspon maksimal 1×24 jam. Tim teknis kami siap melayani 24/7 melalui WhatsApp, telepon, dan email.",
        },
        {
          icon: Banknote,
          title: "Kompensasi Gangguan",
          desc: "Gangguan lebih dari 24 jam akan diberikan potongan tagihan proporsional sesuai durasi gangguan yang dialami pelanggan.",
        },
        {
          icon: AlertTriangle,
          title: "Pengecualian SLA",
          desc: "Gangguan akibat bencana alam, pemeliharaan terjadwal (dengan pemberitahuan min. 24 jam sebelumnya), atau kerusakan perangkat milik pelanggan tidak termasuk dalam cakupan SLA.",
        },
      ],
    },
  },
  {
    icon: CreditCard,
    title: "PEMBAYARAN TAGIHAN",
    points: [
      "Metode Pembayaran",
      "Jadwal & Tenggat Pembayaran",
      "Kebijakan Denda Keterlambatan",
      "Cara Konfirmasi Pembayaran",
    ],
    dialogContent: {
      description:
        "Berikut informasi lengkap terkait pembayaran tagihan layanan internet kami agar Anda dapat melakukan pembayaran dengan mudah dan tepat waktu:",
      sections: [
        {
          icon: CreditCard,
          title: "Metode Pembayaran",
          desc: "Transfer Bank (BCA, BRI, Mandiri, BNI), E-Wallet (GoPay, OVO, DANA, ShopeePay), QRIS, atau pembayaran langsung di kantor kami.",
        },
        {
          icon: Clock,
          title: "Jadwal & Tenggat Pembayaran",
          desc: "Tagihan diterbitkan setiap tanggal 1 bulan berjalan. Batas pembayaran maksimal tanggal 15 setiap bulannya. Lewat tanggal tersebut dianggap telat bayar.",
        },
        {
          icon: AlertTriangle,
          title: "Kebijakan Denda Keterlambatan",
          desc: "Keterlambatan lebih dari 7 hari dikenakan denda Rp 10.000. Jika melebihi 30 hari, layanan akan di-suspend hingga pembayaran diselesaikan.",
        },
        {
          icon: CheckCircle,
          title: "Cara Konfirmasi Pembayaran",
          desc: "Kirim bukti transfer via WhatsApp ke nomor CS kami beserta nama pelanggan dan ID pelanggan. Konfirmasi akan diproses dalam 1×24 jam kerja.",
        },
      ],
    },
  },
];

const contactInfo = [
  {
    icon: Phone,
    title: "Telepon / WhatsApp",
    value: "+62 812 3456 7890",
    desc: "Senin - Sabtu, 08.00 - 21.00 WIB",
  },
  {
    icon: Mail,
    title: "Email",
    value: "merkonetworkindonesia@gmail.com",
    desc: "Respon dalam 1x24 jam",
  },
  {
    icon: MapPin,
    title: "Alamat Kantor",
    value: "Sg. Ciung Kali Reja, Kel. Fajar Bulan",
    desc: "Kec. Way Tenong, Kab. Lampung Barat 34864",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    value: "Senin - Sabtu",
    desc: "08.00 - 21.00 WIB",
  },
];

const RuangInformasi = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-end pt-16"
        style={{
          backgroundImage: `linear-gradient(160deg, hsl(160 30% 8% / 0.85) 40%, hsl(145 70% 45% / 0.15) 100%), url(${heroTower})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="container relative z-10 pb-24 pt-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-2xl">
            <span className="text-gradient-green">RUANG</span> INFORMASI
          </h1>
          <p className="mt-4 text-muted-foreground text-sm md:text-base max-w-lg leading-relaxed">
            Dipercaya oleh ratusan pelanggan rumah dan mitra di berbagai
            wilayah, hadir pengalaman online yang aman, cepat, dan tanpa
            hambatan.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-20 pb-16">
        <div className="container">
          <div className="grid sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="group relative bg-card/80 backdrop-blur-md border border-border rounded-xl p-6 flex items-start gap-4 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(145_70%_45%/0.1)]"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <stat.icon size={22} className="text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm font-bold text-foreground mt-0.5">
                    {stat.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kebijakan Kami Section */}
      <section className="bg-section-dark py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                KEBIJAKAN KAMI
              </h2>
              <p className="mt-2 text-muted-foreground text-sm max-w-md leading-relaxed">
                Informasi penting terkait penggunaan layanan Internet Kami
              </p>
            </div>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-foreground text-foreground font-bold px-6 py-3 rounded-lg text-sm hover:bg-foreground hover:text-background transition-all duration-300"
            >
              <Phone size={18} />
              HUBUNGI KAMI
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {kebijakanItems.map((item, index) => (
              <div
                key={item.title}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-300 cursor-pointer"
                onClick={() => setOpenIndex(index)}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-sm font-extrabold text-foreground tracking-wide">
                    {item.title}
                  </h3>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="text-sm text-muted-foreground flex items-center gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                <span className="text-primary text-sm font-semibold italic hover:underline transition-colors">
                  Selengkapnya..
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Dialogs */}
      {kebijakanItems.map((item, index) => (
        <Dialog
          key={index}
          open={openIndex === index}
          onOpenChange={(open) => !open && setOpenIndex(null)}
        >
          <DialogContent className="bg-card border-border max-w-lg max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <item.icon size={20} className="text-primary" />
                </div>
                <DialogTitle className="text-lg font-extrabold tracking-wide text-foreground">
                  {item.title}
                </DialogTitle>
              </div>
              <DialogDescription className="text-muted-foreground text-sm leading-relaxed">
                {item.dialogContent.description}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 mt-3">
              {item.dialogContent.sections.map((section) => (
                <div
                  key={section.title}
                  className="bg-background/50 border border-border rounded-lg p-4"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <section.icon size={16} className="text-primary shrink-0" />
                    <h4 className="text-sm font-bold text-foreground">
                      {section.title}
                    </h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed pl-[26px]">
                    {section.desc}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-3 rounded-lg text-sm hover:bg-primary/90 transition-colors"
            >
              <Phone size={16} />
              Hubungi Kami untuk Info Lebih Lanjut
            </a>
          </DialogContent>
        </Dialog>
      ))}

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                KAMI SIAP MEMBANTU ANDA
              </h2>
              <p className="mt-2 text-muted-foreground text-sm max-w-md leading-relaxed">
                Punya pertanyaan atau butuh bantuan? Tim kami siap melayani Anda
                24/7. Hubungi kami melalui form, WhatsApp, atau kunjungi kantor
                kami.
              </p>
            </div>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-foreground text-foreground font-bold px-6 py-3 rounded-lg text-sm hover:bg-foreground hover:text-background transition-all duration-300"
            >
              <Phone size={18} />
              HUBUNGI KAMI
            </a>
          </div>
          {/* <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(135deg, hsl(145 70% 45% / 0.08) 0%, hsl(160 20% 4% / 0.95) 60%), url(${heroTower})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(2px)",
          }}
        />
        <div className="absolute inset-0 bg-background/80" />

        <div className="container relative z-10">
          <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
              ADA PERTANYAAN LEBIH LANJUT ?
            </h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed max-w-md">
              Hubungi Customer Support kami yang Siap Melayani Anda 24/7 untuk
              Membantu Anda
            </p>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-lg text-sm hover:bg-primary/90 transition-colors"
            >
              <Phone size={18} />
              HUBUNGI KAMI
            </a>
          </div>
        </div> */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="group bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_hsl(145_70%_45%/0.08)]"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon size={20} className="text-primary" />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                  {item.title}
                </p>
                <p className="text-sm font-bold text-foreground mt-1">
                  {item.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default RuangInformasi;
