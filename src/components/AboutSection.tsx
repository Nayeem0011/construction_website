import { Check } from "lucide-react";
import { Button } from "../components/ui/button";

const features = [
  "25+ years of industry experience",
  "Licensed and fully insured",
  "Award-winning designs",
  "On-time project delivery",
  "Transparent pricing",
  "Dedicated project managers",
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80"
                  alt="Construction site"
                  className="w-full h-48 md:h-64 object-cover rounded-2xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80"
                  alt="Building project"
                  className="w-full h-32 md:h-40 object-cover rounded-2xl"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80"
                  alt="Architecture"
                  className="w-full h-32 md:h-40 object-cover rounded-2xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1590474481420-71aa282cb444?w=600&q=80"
                  alt="Construction workers"
                  className="w-full h-48 md:h-64 object-cover rounded-2xl"
                />
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl shadow-medium">
              <div className="text-center">
                <span className="font-serif text-4xl block">25+</span>
                <span className="text-sm uppercase tracking-wider">Years</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary font-serif text-lg">/</span>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                About Us
              </span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
              Building Excellence<span className="text-primary">/</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Since 1998, BuildCraft has been at the forefront of the construction industry, 
              delivering exceptional projects that stand the test of time. Our commitment to 
              quality, innovation, and client satisfaction has made us a trusted partner for 
              businesses and homeowners alike.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              We believe in building more than structures – we build relationships, trust, 
              and lasting value. Every project is approached with meticulous attention to 
              detail and a dedication to exceeding expectations.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="dark" size="lg">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;