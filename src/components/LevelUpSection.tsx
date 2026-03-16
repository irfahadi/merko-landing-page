import { Zap, Award } from "lucide-react";
import levelUpImg from "@/assets/level-up.jpg";

const LevelUpSection = () => {
  return (
    <section className="bg-section-dark py-16">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-lg overflow-hidden">
          <img src={levelUpImg} alt="Level Up" className="w-full h-64 md:h-80 object-cover" />
        </div>

        <div>
          <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
            TINGKATKAN
            <br />
            <span className="text-primary italic">PENGALAMAN</span>
            <br />
            <span className="text-primary italic">BERMAINMU</span>
          </h2>

          <div className="mt-6 space-y-3">
            <div className="bg-secondary rounded-lg p-4 flex items-center gap-3">
              <Zap className="text-primary" size={20} />
              <div>
                <p className="text-xs text-muted-foreground">Kecepatan sampai dengan</p>
                <p className="text-lg font-bold text-foreground">100<span className="text-sm">Mbps</span></p>
              </div>
            </div>
            <div className="bg-secondary rounded-lg p-4 flex items-center gap-3">
              <Award className="text-primary" size={20} />
              <div>
                <p className="text-xs text-muted-foreground">Lebih Cepat Lebih Stabil</p>
                <p className="text-sm font-bold text-primary">LEBIH UNGGUL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LevelUpSection;
