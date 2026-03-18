
import React from 'react';
import TeamMember from './TeamMember';

const TeamGrid: React.FC = () => {
  const teamMembers = [
    // Core Leadership
    {
      name: "Dr. James Omondi",
      title: "Founder & Executive Director",
      bio: "With over 15 years of experience in climate policy and education, Dr. Omondi leads Climate Nexus Africa's strategic vision. He holds a PhD in Environmental Science from the University of Nairobi and has advised multiple governments on climate adaptation strategies. His work has been instrumental in establishing GIS programs in over 50 schools across Kenya.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkedin: "https://linkedin.com/in/jamesomondi",
      email: "james.omondi@climatenexusafrica.org",
      location: "Nairobi, Kenya",
      expertise: ["Climate Policy", "Strategic Leadership", "Environmental Science"]
    },
    {
      name: "Eng. Sarah Wanjiku",
      title: "Head of Technology",
      bio: "Sarah is a GIS expert and software engineer leading our digital transformation initiatives. She specializes in geospatial analysis and has developed innovative mapping solutions for environmental monitoring across East Africa. She holds a Master's in Geospatial Information Systems from the University of Twente.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkedin: "https://linkedin.com/in/sarahwanjiku",
      email: "sarah.wanjiku@climatenexusafrica.org",
      location: "Nairobi, Kenya",
      expertise: ["GIS", "Software Development", "Data Analytics"]
    },
    {
      name: "Michael Kipchoge",
      title: "Director of Communications",
      bio: "Michael brings 10 years of experience in strategic communications and stakeholder engagement. He manages partnerships with media, government agencies, and international organizations to amplify our impact. He previously worked with UNDP Kenya as a communications specialist.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkedin: "https://linkedin.com/in/michaelkipchoge",
      email: "michael.kipchoge@climatenexusafrica.org",
      location: "Nairobi, Kenya",
      expertise: ["Strategic Communications", "Media Relations", "Partnerships"]
    },
    {
      name: "Dr. Amina Hassan",
      title: "Gender Equality & Social Inclusion Advocate",
      bio: "Dr. Hassan ensures all programs are inclusive and equitable. With a background in gender studies and community development, she leads initiatives empowering women and marginalized groups in climate action. She holds a PhD in Gender and Development from the University of Cape Town.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkedin: "https://linkedin.com/in/aminahassan",
      email: "amina.hassan@climatenexusafrica.org",
      location: "Mombasa, Kenya",
      expertise: ["Gender Equality", "Social Inclusion", "Community Development"]
    },
    
    // Additional Leadership
    {
      name: "Peter Mwangi",
      title: "Programs & Projects Manager",
      bio: "Peter coordinates all community outreach and training programs. His expertise in project management ensures efficient delivery of our initiatives across Kenya. He has managed over 20 community development projects in the last 8 years.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkedin: "https://linkedin.com/in/petermwangi",
      email: "peter.mwangi@climatenexusafrica.org",
      location: "Nairobi, Kenya",
      expertise: ["Project Management", "Community Outreach", "Program Coordination"]
    },
    {
      name: "Dr. Lucy Achieng",
      title: "Research & Data Analyst",
      bio: "Lucy leads our GIS mapping and environmental data analysis. Her research informs policy recommendations and helps measure our environmental impact. She has published several papers on climate adaptation in East Africa.",
      image: "https://images.unsplash.com/photo-1551836022-deb4980cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkedin: "https://linkedin.com/in/lucyachieng",
      email: "lucy.achieng@climatenexusafrica.org",
      location: "Kisumu, Kenya",
      expertise: ["Data Analysis", "GIS Research", "Climate Science"]
    },
    {
      name: "Daniel Kimani",
      title: "Monitoring & Evaluation Officer",
      bio: "Daniel tracks program impact and performance metrics, ensuring accountability and continuous improvement across all our initiatives. He has developed M&E frameworks for multiple international NGOs.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkedin: "https://linkedin.com/in/danielkimani",
      email: "daniel.kimani@climatenexusafrica.org",
      location: "Nairobi, Kenya",
      expertise: ["M&E", "Impact Assessment", "Data Collection"]
    },
    {
      name: "Grace Njeri",
      title: "Finance & Administration Officer",
      bio: "Grace manages budgeting, grants, and compliance, ensuring financial sustainability and transparency in all operations. She is a Certified Public Accountant with over 12 years of experience in the non-profit sector.",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkedin: "https://linkedin.com/in/gracenjeri",
      email: "grace.njeri@climatenexusafrica.org",
      location: "Nairobi, Kenya",
      expertise: ["Financial Management", "Grant Administration", "Compliance"]
    },
    {
      name: "David Ochieng",
      title: "Partnerships & Resource Mobilization Officer",
      bio: "David develops strategic collaborations with NGOs, government agencies, and donors to expand our reach and impact. He has successfully secured funding for multiple climate resilience projects.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkedin: "https://linkedin.com/in/davidochieng",
      email: "david.ochieng@climatenexusafrica.org",
      location: "Nairobi, Kenya",
      expertise: ["Partnership Development", "Fundraising", "Donor Relations"]
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
            A diverse team of dedicated professionals committed to building a sustainable future for Africa
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;