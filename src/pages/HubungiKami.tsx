import { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Nama wajib diisi")
    .max(100, "Nama maksimal 100 karakter"),
  email: z
    .string()
    .trim()
    .email("Format email tidak valid")
    .max(255, "Email maksimal 255 karakter"),
  phone: z
    .string()
    .trim()
    .min(1, "Nomor telepon wajib diisi")
    .max(20, "Nomor telepon maksimal 20 karakter")
    .regex(/^[0-9+\-\s()]+$/, "Format nomor telepon tidak valid"),
  subject: z
    .string()
    .trim()
    .min(1, "Subjek wajib diisi")
    .max(200, "Subjek maksimal 200 karakter"),
  message: z
    .string()
    .trim()
    .min(1, "Pesan wajib diisi")
    .max(1000, "Pesan maksimal 1000 karakter"),
});

type ContactForm = z.infer<typeof contactSchema>;

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

const HubungiKami = () => {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactForm;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSending(true);
    // Simulate sending
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      toast.success("Pesan berhasil dikirim! Kami akan segera menghubungi Anda.");
    }, 1500);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Halo PT. Merko, saya ingin bertanya tentang layanan internet Anda."
    );
    window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Hubungi Kami
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              KAMI SIAP{" "}
              <span className="text-gradient-green">MEMBANTU</span> ANDA
            </h1>
            <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg">
              Punya pertanyaan atau butuh bantuan? Tim kami siap melayani Anda 24/7.
              Hubungi kami melalui form, WhatsApp, atau kunjungi kantor kami.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-16">
        <div className="container">
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
                <p className="text-sm font-bold text-foreground mt-1">{item.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="bg-section-dark py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-extrabold text-foreground mb-1">
                Kirim Pesan
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Isi form di bawah dan kami akan segera merespon
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Pesan Terkirim!
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                    Terima kasih telah menghubungi kami. Tim kami akan segera
                    merespon pesan Anda.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
                    }}
                    className="mt-6 text-primary text-sm font-semibold hover:underline"
                  >
                    Kirim pesan lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Nama Lengkap *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={`mt-1 w-full bg-background border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${
                          errors.name ? "border-destructive" : "border-border"
                        }`}
                        placeholder="Masukkan nama"
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className={`mt-1 w-full bg-background border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${
                          errors.email ? "border-destructive" : "border-border"
                        }`}
                        placeholder="email@contoh.com"
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        No. Telepon *
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className={`mt-1 w-full bg-background border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${
                          errors.phone ? "border-destructive" : "border-border"
                        }`}
                        placeholder="0812 3456 7890"
                      />
                      {errors.phone && (
                        <p className="text-xs text-destructive mt-1">{errors.phone}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Subjek *
                      </label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className={`mt-1 w-full bg-background border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${
                          errors.subject ? "border-destructive" : "border-border"
                        } ${!form.subject ? "text-muted-foreground/50" : ""}`}
                      >
                        <option value="">Pilih subjek</option>
                        <option value="Berlangganan Baru">Berlangganan Baru</option>
                        <option value="Gangguan Layanan">Gangguan Layanan</option>
                        <option value="Upgrade Paket">Upgrade Paket</option>
                        <option value="Pembayaran">Pembayaran</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                      {errors.subject && (
                        <p className="text-xs text-destructive mt-1">{errors.subject}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Pesan *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className={`mt-1 w-full bg-background border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none ${
                        errors.message ? "border-destructive" : "border-border"
                      }`}
                      placeholder="Tulis pesan Anda di sini..."
                    />
                    <div className="flex justify-between">
                      {errors.message && (
                        <p className="text-xs text-destructive mt-1">{errors.message}</p>
                      )}
                      <p className="text-xs text-muted-foreground mt-1 ml-auto">
                        {form.message.length}/1000
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-60"
                  >
                    {sending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Kirim Pesan
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map + WhatsApp */}
            <div className="flex flex-col gap-6">
              {/* Map */}
              <div className="flex-1 bg-card border border-border rounded-2xl overflow-hidden min-h-[300px]">
                <iframe
                  title="Lokasi PT. Merko Network Indonesia"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31838.26!2d104.4!3d-5.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40db3b2a1a1a1%3A0x1!2sFajar%20Bulan%2C%20Way%20Tenong%2C%20Lampung%20Barat!5e0!3m2!1sid!2sid!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 300 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* WhatsApp CTA */}
              <button
                onClick={openWhatsApp}
                className="group bg-[hsl(145_70%_45%)] hover:bg-[hsl(145_70%_40%)] text-primary-foreground rounded-2xl p-6 flex items-center gap-5 transition-all duration-300 hover:shadow-[0_0_40px_hsl(145_70%_45%/0.3)]"
              >
                <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle size={28} />
                </div>
                <div className="text-left">
                  <p className="font-extrabold text-lg">Chat via WhatsApp</p>
                  <p className="text-sm opacity-80">
                    Respon cepat — langsung terhubung dengan tim support kami
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default HubungiKami;
