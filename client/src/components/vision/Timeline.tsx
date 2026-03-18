import React from 'react';
import { Calendar, CheckCircle, Circle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Timeline: React.FC = () => {
  const milestones = [
    {
      year: "2023",
      title: "Foundation Laid",
      description: "Climate Nexus Africa established with core team and initial programs.",
      achievements: [
        "Team of 5 core members assembled",
        "First 10 partner schools onboarded",
        "GIS pilot program launched in Garissa"
      ],
      status: "completed"
    },
    {
      year: "2024",
      title: "Program Expansion",
      description: "Scaling programs to new counties and deepening community engagement.",
      achievements: [
        "Expand to 5 new counties",
        "Train 200 teachers in digital literacy",
        "Plant 10,000 trees",
        "Launch youth climate leadership program"
      ],
      status: "in-progress"
    },
    {
      year: "2025",
      title: "Regional Impact",
      description: "Establish regional hubs and influence policy at county level.",
      achievements: [
        "Open 3 regional offices",
        "Partner with 50 additional schools",
        "Complete GIS mapping for 10 counties",
        "Influence 2 county climate policies"
      ],
      status: "upcoming"
    },
    {
      year: "2027",
      title: "National Recognition",
      description: "Become a leading voice in climate education and technology.",
      achievements: [
        "Present in all 47 counties",
        "1,000 teachers trained",
        "10,000 students impacted annually",
        "National climate education framework adopted"
      ],
      status: "upcoming"
    },
    {
      year: "2030",
      title: "Vision Realized",
      description: "Africa's leading climate innovation hub with continental reach.",
      achievements: [
        "Presence in 10 African countries",
        "1 million trees planted",
        "50,000 youth trained",
        "Climate-smart policies across East Africa"
      ],
      status: "upcoming"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs md:text-sm font-semibold mb-4">
            OUR JOURNEY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Roadmap to 2030
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Key milestones on our path to transforming Africa's climate future
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-teal-500 transform -translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-emerald-500 z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        milestone.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                        milestone.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {milestone.status === 'completed' ? '✓ Completed' :
                         milestone.status === 'in-progress' ? '● In Progress' :
                         '○ Upcoming'}
                      </div>
                      <span className="text-sm font-bold text-emerald-600">{milestone.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{milestone.description}</p>
                    
                    <ul className="space-y-2">
                      {milestone.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          {milestone.status === 'completed' ? (
                            <CheckCircle size={16} className="text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          ) : milestone.status === 'in-progress' ? (
                            <Circle size={16} className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          ) : (
                            <Circle size={16} className="text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                          )}
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all group"
          >
            <span>Join Us on This Journey</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Timeline;