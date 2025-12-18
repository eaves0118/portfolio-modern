import Button from "./button";
import ImgBanner from "../assets/images/header-img.svg";
import { ArrowRight } from "lucide-react";
import { Facebook, GitHub, Mail } from "./common/icons";
import GlassCard from "./glass-card";
const Hero = () => {
  const slogan = "Hieu.Tran";
  const splitSlogan = slogan.split("");

  return (
    <section
      id="hero"
      className="flex text-white justify-center items-center gap-5 flex-col md:flex-row mt-20"
    >
      <div className="w-1/2 w-full">
        <div className="max-w-[700px] mx-auto flex flex-col gap-5 ">
          <span className="text-4xl md:text-6xl font-bold text-foreground">
            Hi I'm
          </span>
          <h2
            className="text-6xl md:text-8xl font-bold flex relative after:content-['']
          after:absolute after:left-0 after:bottom-0 after:h-[8px]
          after:w-full after:bg-gradient-to-r after:from-indigo-400
          after:to-pink-400 after:origin-left after:transition-transform
          after:duration-300 w-100 py-3 after:rounded-[18px]"
          >
            {splitSlogan.map((char, index) => (
              <span
                key={index}
                className="inline-block animate-bounce duration-700 w-full"
                style={{
                  animationDelay: `${index * 0.5}s`,
                  animationDuration: "2.5s",
                }}
              >
                <span className="text-gradient inline-block ">{char}</span>
              </span>
            ))}
          </h2>
          <p className="text-foreground/80 text-[14px] md:text-[16px]">
            I am a programming enthusiast on a journey of personal growth and
            continuous learning, always seeking to improve my skills and build
            meaningful digital experiences.
          </p>
          <div className="max-w-[200px]">
            <Button
              content="Let's connect"
              icon={<ArrowRight />}
              className="cosmic-button border px-4 py-2 text-white rounded-[32px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            />
          </div>
          <div className="flex gap-4">
            <GlassCard className="p-2 rounded-full text-foreground/80 hover:text-white transition-colors duration-300 cursor-pointer">
              <Facebook />
            </GlassCard>

            <GlassCard className="p-2 rounded-full text-foreground/80 hover:text-white transition-colors duration-300 cursor-pointer">
              <GitHub />
            </GlassCard>

            <GlassCard className="p-2 rounded-full text-foreground/80 hover:text-white transition-colors duration-300 cursor-pointer">
              <Mail />
            </GlassCard>
          </div>
        </div>
      </div>
      <div className="w-1/2 w-full">
        <img
          className="astronaut max-w-[400px] md:max-w-[650px] h-auto object-cover mx-auto cursor-pointer"
          style={{
            animationDuration: "4s",
          }}
          src={ImgBanner}
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
