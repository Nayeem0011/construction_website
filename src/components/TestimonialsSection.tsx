import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO, TechVentures",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    content: "BuildCraft exceeded our expectations in every way. Their attention to detail and commitment to quality resulted in a stunning office complex that perfectly reflects our brand.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Chen",
    role: "Property Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    content: "Working with BuildCraft has been a game-changer for our development projects. Their professionalism and expertise are unmatched in the industry.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Roberts",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    content: "Our dream home became a reality thanks to BuildCraft. From design to completion, they guided us through every step with patience and expertise.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-charcoal text-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-primary font-serif text-lg">/</span>
            <span className="text-sm font-medium text-background/60 uppercase tracking-widest">
              Testimonials
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
            Client Stories<span className="text-primary">/</span>
          </h2>
          <p className="text-background/70 text-lg leading-relaxed">
            Hear what our clients have to say about their experience working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background/5 backdrop-blur-sm border border-background/10 rounded-2xl p-8 hover:bg-background/10 transition-colors duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary mb-6" />

              {/* Content */}
              <p className="text-background/80 leading-relaxed mb-8">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-background">{testimonial.name}</h4>
                  <p className="text-sm text-background/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;