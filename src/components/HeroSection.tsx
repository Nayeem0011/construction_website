import { useState } from "react";
import { Button } from "../components/ui/button";
import { Play, ArrowRight, X } from "lucide-react";
import { useCountUp } from "../hooks/useCountUp";

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  
  const stat1 = useCountUp({ end: 25 });
  const stat2 = useCountUp({ end: 500 });
  const stat3 = useCountUp({ end: 98 });
  const stat4 = useCountUp({ end: 2 });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-secondary">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source
            src="https://videos.pexels.com/video-files/2835997/2835997-uhd_2560_1440_24fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 mb-8">
              <span className="text-primary font-serif text-lg">/</span>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Since 1998
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="animate-fade-up font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
              Building
              <br />
              <span className="text-primary">Modern</span> Spaces
              <span className="text-primary">/</span>
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-up-delay text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
              Premium construction services designed for efficiency, comfort, and timeless aesthetics. Your vision, our expertise.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => scrollToSection("#contact")}
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="heroOutline" 
                size="xl" 
                className="group"
                onClick={() => setShowVideo(true)}
              >
                <Play className="w-4 h-4" />
                Watch Our Story
              </Button>
            </div>
          </div>

          {/* Stats Card */}
          <div className="animate-fade-up-delay-3 hidden lg:block">
            <div className="bg-background/80 backdrop-blur-md rounded-3xl p-8 shadow-medium">
              <div className="grid grid-cols-2 gap-8">
                <div ref={stat1.ref} className="text-center p-4">
                  <span className="font-serif text-5xl text-foreground">{stat1.count}+</span>
                  <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wide">Years Experience</p>
                </div>
                <div ref={stat2.ref} className="text-center p-4">
                  <span className="font-serif text-5xl text-foreground">{stat2.count}+</span>
                  <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wide">Projects Done</p>
                </div>
                <div ref={stat3.ref} className="text-center p-4">
                  <span className="font-serif text-5xl text-foreground">{stat3.count}%</span>
                  <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wide">Client Satisfaction</p>
                </div>
                <div ref={stat4.ref} className="text-center p-4">
                  <span className="font-serif text-5xl text-foreground">${stat4.count}B+</span>
                  <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wide">Project Value</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Stats */}
        <div className="lg:hidden mt-12 grid grid-cols-2 gap-4">
          <div ref={stat1.ref} className="bg-background/80 backdrop-blur-md rounded-2xl p-6 text-center">
            <span className="font-serif text-3xl text-foreground">{stat1.count}+</span>
            <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">Years</p>
          </div>
          <div ref={stat2.ref} className="bg-background/80 backdrop-blur-md rounded-2xl p-6 text-center">
            <span className="font-serif text-3xl text-foreground">{stat2.count}+</span>
            <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">Projects</p>
          </div>
          <div ref={stat3.ref} className="bg-background/80 backdrop-blur-md rounded-2xl p-6 text-center">
            <span className="font-serif text-3xl text-foreground">{stat3.count}%</span>
            <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">Satisfaction</p>
          </div>
          <div ref={stat4.ref} className="bg-background/80 backdrop-blur-md rounded-2xl p-6 text-center">
            <span className="font-serif text-3xl text-foreground">${stat4.count}B+</span>
            <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">Value</p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4" onClick={() => setShowVideo(false)}>
          <button 
            className="absolute top-6 right-6 text-background hover:text-primary transition-colors"
            onClick={() => setShowVideo(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              className="w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Our Story"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;