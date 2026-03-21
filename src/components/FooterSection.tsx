import merkoLogo from "@/assets/merko-logo.png";
import qrFinance from "@/assets/qr-finance.png";
import qrAdmin from "@/assets/qr-admin.png";
import gctLogo from "@/assets/gct-logo.png";

const FooterSection = () => {
  return (
    <footer id="kontak" className="bg-section-dark border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Left: Logo + Address */}
          <div className="space-y-6">
            <img src={merkoLogo} alt="PT. Merko" className="h-14 w-auto" />
            <div className="text-sm text-muted-foreground space-y-1">
              <p className="text-primary font-semibold">Alamat Kantor :</p>
              <p>Sg. Ciung Kali Reja, Kel. Fajar Bulan,</p>
              <p>Kec. Way Tenong Kab. Lampung Barat 34864</p>
              <p className="text-primary font-semibold mt-3">Alamat E-mail :</p>
              <p>merkonetworkindonesia@gmail.com</p>
            </div>
          </div>

          {/* Center: QR Codes + Button */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-8">
              <div className="text-center">
                <div className="bg-white rounded-lg p-3">
                  <img src={qrFinance} alt="QR Finance" className="w-24 h-24" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">Finance</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-3">
                  <img src={qrAdmin} alt="QR Admin" className="w-24 h-24" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">Admin</p>
              </div>
            </div>
            <div className="text-center">
              <a
                href="https://globalecitrateknologi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-2.5 border border-primary text-primary rounded-md text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Info Lain
              </a>
              <p className="text-muted-foreground text-xs mt-2">Pelajari Lebih Lanjut Disini</p>
            </div>
          </div>

          {/* Right: Mitra Kerja */}
          <div className="flex flex-col items-center text-center gap-4">
            <div>
              <p className="text-muted-foreground text-sm">Bersama</p>
              <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                Mitra Kerja<br />Jaringan Terpadu
              </h3>
              <p className="text-muted-foreground text-sm">Kami</p>
            </div>
            <img src={gctLogo} alt="Global Citra Teknologi" className="h-16 md:h-20 w-auto" />
            <p className="text-muted-foreground text-xs leading-relaxed max-w-xs">
              PT Global Citra Teknologi berdiri pada 27 Maret 2021 (akta PT) dan resmi laik operasi sejak 21 September 2022 sebagai Internet Service Provider.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
