import React from 'react';
import { Leaf, Map, Laptop, Users, TreePine, BookOpen, BarChart3, Heart } from 'lucide-react';

const MissionPillars: React.FC = () => {
  const pillars = [
    {
      icon: Leaf,
      title: "Climate Resilience",
      description: "Building adaptive capacity through sustainable programs and environmental restoration.",
      color: "from-emerald-500 to-teal-500",
      initiatives: ["Ecosystem restoration", "Climate adaptation training", "Green infrastructure"]
    },
    {
      icon: Map,
      title: "GIS Technology",
      description: "Harnessing geospatial intelligence for informed decision-making and planning.",
      color: "from-blue-500 to-cyan-500",
      initiatives: ["Environmental mapping", "Resource planning", "Disaster risk reduction"]
    },
    {
      icon: Laptop,
      title: "Digital Literacy",
      description: "Equipping communities with 21st-century digital skills and tools.",
      color: "from-purple-500 to-pink-500",
      initiatives: ["Teacher training", "Student programs", "Digital resources"]
    },
    {
      icon: Users,
      title: "Youth Empowerment",
      description: "Developing the next generation of climate leaders and innovators.",
      color: "from-amber-500 to-orange-500",
      initiatives: ["Leadership programs", "Mentorship", "Innovation hubs"]
    },
    {
      icon: TreePine,
      title: "Environmental Restoration",
      description: "Rehabilitating ecosystems through community-led conservation.",
      color: "from-green-500 to-emerald-500",
      initiatives: ["Tree planting", "Mangrove restoration", "Water conservation"]
    },
    {
      icon: BookOpen,
      title: "Research & Policy",
      description: "Generating evidence-based insights for climate policy development.",
      color: "from-indigo-500 to-blue-500",
      initiatives: ["Data collection", "Policy briefs", "Academic partnerships"]
    },
    {
      icon: BarChart3,
      title: "Impact Assessment",
      description: "Measuring and optimizing our programs for maximum effectiveness.",
      color: "from-rose-500 to-pink-500",
      initiatives: ["M&E frameworks", "Impact reporting", "Performance analytics"]
    },
    {
      icon: Heart,
      title: "Social Inclusion",
      description: "Ensuring equitable access to climate action and digital opportunities.",
      color: "from-red-500 to-rose-500",
      initiatives: ["Gender equality", "Marginalized communities", "Accessibility"]
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs md:text-sm font-semibold mb-4">
            OUR MISSION PILLARS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Eight Pillars Driving
            <span className="text-emerald-600 block mt-2">Our Mission Forward</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Each pillar represents a critical area of focus in our mission to transform African communities
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${pillar.color}`}></div>
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} p-2.5 mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{pillar.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{pillar.description}</p>
                  <ul className="space-y-1.5">
                    {pillar.initiatives.map((initiative, idx) => (
                      <li key={idx} className="flex items-start text-xs text-gray-500">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${pillar.color} mt-1.5 mr-2`}></span>
                        {initiative}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionPillars;