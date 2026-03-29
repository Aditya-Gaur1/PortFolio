import React from "react";
import { Code2, Rocket, Users, Lightbulb } from "lucide-react";
const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Buliding the future,
              <span className="font-serif italic font-normal text-white">
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt aut porro assumenda tenetur sed? Velit deserunt
                necessitatibus, consequuntur tempore dolor quidem saepe dolorem
                amet blanditiis? Ullam voluptatem minus laboriosam iure earum
                quam iusto non, explicabo odit perspiciatis, porro distinctio
                eaque quo officia delectus?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                rerum sit minima dolore error, quam praesentium? Accusantium
                veritatis possimus, saepe illum deserunt tenetur ducimus enim
                eaque! Voluptate eligendi exercitationem reiciendis eaque!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                asperiores minima impedit vitae dignissimos quos necessitatibus
                iure animi, aliquam recusandae iste soluta quam.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam esse repellat nihil pariatur maiores, illum quibusdam
                odit corrupti, doloribus ab, officia ex excepturi consequatur
                totam sint.
              </p>
            </div>
          </div>
          {/* Right Column - Highlights*/}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{
                  animationDelay: `${(idx + 1) * 100}ms`,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
