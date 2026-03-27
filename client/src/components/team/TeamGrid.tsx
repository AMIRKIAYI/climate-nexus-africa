import React from 'react';
import TeamMember from './TeamMember';

const TeamGrid: React.FC = () => {
  const teamMembers = [
    {
      name: "Joseph Kamanu",
      title: "Founder & Executive Director",
      bio: "Joseph Kamanu is the visionary founder of Climate Nexus Africa. With a deep passion for climate action and community development, he established the organization to bridge the gap between technology, education, and environmental sustainability. His leadership has been instrumental in establishing programs across 8 counties in Kenya, impacting thousands of students and teachers.",
      image: "/images/team/kamanu.png",
      linkedin: "https://linkedin.com/in/josephkamanu",
      email: "joseph.kamanu@climatenexusafrica.org",
      location: "Nairobi, Kenya",
      expertise: ["Strategic Leadership", "Climate Policy", "Community Development"]
    },
    {
      name: "Amir Osman",
      title: "Head of Software Development",
      bio: "Amir Osman leads the software development team at Climate Nexus Africa, driving digital innovation and technology solutions. With extensive experience in full-stack development and software architecture, he oversees the development of digital platforms, learning management systems, and GIS applications that power the organization's educational and environmental monitoring initiatives.",
      image: "/images/team/amir osman.png",
      linkedin: "https://linkedin.com/in/amirosman",
      email: "amir.osman@climatenexusafrica.org",
      location: "Nairobi, Kenya",
      expertise: ["Software Architecture", "Full-Stack Development", "Digital Innovation"]
    },
    {
      name: "Owen Muriuki",
      title: "Lead GIS Expert",
      bio: "Owen Muriuki is our lead Geographic Information Systems (GIS) expert, specializing in geospatial analysis and environmental mapping. He manages all GIS projects, including the creation of detailed environmental maps, resource planning tools, and disaster risk reduction systems. His work has been crucial in mapping climate vulnerability across Kenyan counties.",
      image: "/images/team/owen.png",
      linkedin: "https://linkedin.com/in/owenmuriuki",
      email: "owen.muriuki@climatenexusafrica.org",
      location: "Nairobi, Kenya",
      expertise: ["GIS Mapping", "Spatial Analysis", "Environmental Data"]
    },
    {
      name: "Joseph Kiio",
      title: "Communications Director & Media Manager",
      bio: "Joseph Kiio oversees all communications, media relations, and public engagement strategies for Climate Nexus Africa. He manages the organization's brand presence, stakeholder communications, and media partnerships. His expertise in strategic communications ensures that the organization's message reaches diverse audiences across Kenya and internationally.",
      image: "/images/team/joseph.png",
      linkedin: "https://linkedin.com/in/josephkiio",
      email: "joseph.kiio@climatenexusafrica.org",
      location: "Nairobi, Kenya",
      expertise: ["Strategic Communications", "Media Relations", "Brand Management"]
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs md:text-sm font-semibold mb-4">
            OUR TEAM
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet the Experts Driving
            <span className="text-emerald-600 block mt-2">Climate Innovation</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            A dedicated team of professionals committed to building a sustainable future for Africa
          </p>
        </div>

        {/* Team Grid - 4 members in 2x2 grid on desktop */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;