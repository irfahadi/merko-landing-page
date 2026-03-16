import merkoLogo from "@/assets/merko-logo.png";
import qrFinance from "@/assets/qr-finance.png";
import qrAdmin from "@/assets/qr-admin.png";

const FooterSection = () => {
  return (
    <footer id="kontak" className="bg-section-dark border-t border-border py-10">
      <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex items-center">
          <img src={merkoLogo} alt="PT. Merko" className="h-12 w-auto" />
        </div>

        <div className="flex gap-6 items-center">
          <div className="text-center">
            <img src={qrFinance} alt="QR Finance" className="w-24 h-24 rounded-md" />
            <p className="text-xs text-muted-foreground mt-1">Finance</p>
          </div>
          <div className="text-center">
            <img src={qrAdmin} alt="QR Admin" className="w-24 h-24 rounded-md" />
            <p className="text-xs text-muted-foreground mt-1">Admin</p>
          </div>
        </div>

        <div className="text-xs text-muted-foreground space-y-1 max-w-sm">
          <p className="text-primary font-semibold">Alamat Kantor :</p>
          <p>Sg. Ciung Kali Reja, Kel. Fajar Bulan,</p>
          <p>Kec. Way Tenong Kab. Lampung Barat 34864</p>
          <p className="text-primary font-semibold mt-3">Alamat E-mail :</p>
          <p>merkonetworkindonesia@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
