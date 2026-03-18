import React from 'react';
import { MapPin, Calendar, ArrowRight, Users, TreePine, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProjects: React.FC = () => {
  const projects = [
    {
      title: "Digital Literacy Initiative",
      location: "Garissa County",
      year: "2023",
      description: "Empowered 25 schools with digital tools and comprehensive teacher training programs, reaching over 2,000 students.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      activities: ["Teacher training workshops", "Digital equipment distribution", "Curriculum integration"],
      icon: Laptop,
      color: "from-blue-400 to-cyan-400",
      stats: [
        { label: "Schools", value: "25" },
        { label: "Teachers", value: "120" }
      ]
    },
    {
      title: "Coastal Climate Resilience",
      location: "Mombasa & Kilifi",
      year: "2023-2024",
      description: "Community-based adaptation and mangrove restoration project protecting coastlines and creating sustainable livelihoods.",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      activities: ["Mangrove planting", "Community workshops", "GIS mapping"],
      icon: TreePine,
      color: "from-emerald-400 to-teal-400",
      stats: [
        { label: "Trees", value: "5,000" },
        { label: "Communities", value: "8" }
      ]
    },
    {
      title: "Nairobi Smart Schools",
      location: "Nairobi County",
      year: "2024",
      description: "Transforming classrooms with smart technology and GIS integration, preparing students for digital future.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      activities: ["Smart classrooms", "Teacher certification", "Digital resources"],
      icon: Users,
      color: "from-purple-400 to-pink-400",
      stats: [
        { label: "Schools", value: "15" },
        { label: "Students", value: "3,200" }
      ]
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
            FEATURED PROJECTS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Making a Difference
            <span className="text-emerald-600 block mt-2">Across Kenya</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Innovative initiatives driving climate action and digital transformation
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative h-48 md:h-52 lg:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 mix-blend-multiply`}></div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/90 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold text-gray-800">
                    {project.year}
                  </div>

                  {/* Icon */}
                  <div className={`absolute bottom-3 left-3 md:bottom-4 md:left-4 w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br ${project.color} p-2 flex items-center justify-center`}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-5 lg:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center space-x-3 md:space-x-4 text-xs md:text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <MapPin size={12} className="mr-1" />
                      {project.location}
                    </div>
                  </div>
                  
                  <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-2 md:gap-3 mb-3 md:mb-4">
                    {project.stats.map((stat, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-2 text-center">
                        <div className="font-bold text-gray-900 text-sm md:text-base">{stat.value}</div>
                        <div className="text-[10px] md:text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Activities */}
                  <div className="space-y-1.5 md:space-y-2 mb-3 md:mb-4">
                    {project.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-start text-xs md:text-sm text-gray-600">
                        <div className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-gradient-to-r ${project.color} mr-2 mt-1.5 md:mt-2`}></div>
                        {activity}
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  <Link
                    to="/community"
                    className={`inline-flex items-center space-x-2 text-transparent bg-clip-text bg-gradient-to-r ${project.color} font-semibold text-sm md:text-base group-hover:space-x-3 transition-all`}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 md:mt-10 lg:mt-12">
          <Link
            to="/community"
            className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold hover:bg-emerald-700 transition duration-300 group"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;