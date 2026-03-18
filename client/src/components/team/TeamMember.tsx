import React from 'react';
import { Linkedin, Mail, MapPin } from 'lucide-react';

interface TeamMemberProps {
  member: {
    name: string;
    title: string;
    bio: string;
    image: string;
    linkedin?: string;
    email?: string;
    location?: string;
    expertise?: string[];
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Image Container - Adjusted for passport photos */}
      <div className="relative h-80 overflow-hidden bg-gray-100">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-contain object-center bg-gray-50 p-4"
          style={{ objectPosition: 'center 30%' }} // Adjust this value to control vertical alignment
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Social Links - Appear on Hover */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-emerald-600 p-2 rounded-full hover:bg-emerald-600 hover:text-white transition-colors shadow-lg"
            >
              <Linkedin size={18} />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="bg-white text-emerald-600 p-2 rounded-full hover:bg-emerald-600 hover:text-white transition-colors shadow-lg"
            >
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
          {member.name}
        </h3>
        <p className="text-emerald-600 font-medium text-sm mb-3">{member.title}</p>
        
        {/* Location if available */}
        {member.location && (
          <div className="flex items-center text-xs text-gray-500 mb-3">
            <MapPin size={12} className="mr-1" />
            {member.location}
          </div>
        )}
        
        {/* Bio */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
          {member.bio}
        </p>

        {/* Expertise Tags */}
        {member.expertise && (
          <div className="flex flex-wrap gap-2 mt-3">
            {member.expertise.map((skill, idx) => (
              <span
                key={idx}
                className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMember;