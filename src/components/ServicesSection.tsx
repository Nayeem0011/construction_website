import { Building2, Home, Factory, Hammer, ArrowRight, Ruler, HardHat } from "lucide-react";

const services = [
  {
    icon: <Building2 className="w-10 h-10" />,
    title: "Commercial",
    description: "Office buildings, retail centers, and hospitality projects built to elevate your business presence.",
  },
  {
    icon: <Home className="w-10 h-10" />,
    title: "Residential",
    description: "Custom homes and luxury residences crafted with precision, quality, and attention to every detail.",
  },
  {
    icon: <Factory className="w-10 h-10" />,
    title: "Industrial",
    description: "Warehouses, manufacturing facilities, and infrastructure built for maximum performance.",
  },
  {
    icon: <Hammer className="w-10 h-10" />,
    title: "Renovation",
    description: "Breathing new life into existing structures with modern upgrades and expert restorations.",
  },
  {
    icon: <Ruler className="w-10 h-10" />,
    title: "Architecture",
    description: "Innovative design solutions that blend aesthetics with functionality for lasting impressions.",
  },
  {
    icon: <HardHat className="w-10 h-10" />,
    title: "Consulting",
    description: "Expert guidance on project planning, budgeting, and construction management services.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-primary font-serif text-lg">/</span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              What We Do
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
            Our Services<span className="text-primary">/</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Comprehensive construction solutions tailored to bring your vision to life
            with uncompromising quality and dedication.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-medium transition-all duration-500"
            >
              {/* Icon */}
              <div className="mb-6 text-primary/80 group-hover:text-primary group-hover:scale-110 transition-all duration-500">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl md:text-2xl mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300 group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>

              {/* Hover accent */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500 rounded-t-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;