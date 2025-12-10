import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "../components/ui/button";

const projects = [
  {
    id: 1,
    title: "Azure Tower Complex",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    location: "Downtown Metro",
    year: "2024",
  },
  {
    id: 2,
    title: "Lakeside Villa Estate",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    location: "Coastal Heights",
    year: "2023",
  },
  {
    id: 3,
    title: "Industrial Park Hub",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80",
    location: "Tech District",
    year: "2024",
  },
  {
    id: 4,
    title: "Heritage Restoration",
    category: "Renovation",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    location: "Historic Quarter",
    year: "2023",
  },
];

const ProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary font-serif text-lg">/</span>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Our Portfolio
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
              Featured Projects<span className="text-primary">/</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Explore our latest work and see how we transform visions into reality.
            </p>
          </div>
          <Button variant="outline" size="lg" className="self-start md:self-auto">
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-primary text-sm font-medium uppercase tracking-widest mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl lg:text-3xl text-background mb-2">
                      {project.title}
                    </h3>
                    <p className="text-background/70 text-sm">
                      {project.location} • {project.year}
                    </p>
                  </div>
                  <div className={`p-3 bg-primary rounded-full transition-all duration-300 ${
                    hoveredId === project.id ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}>
                    <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;