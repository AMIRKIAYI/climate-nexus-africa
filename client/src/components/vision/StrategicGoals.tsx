import React from 'react';
import { Target, Calendar, CheckCircle } from 'lucide-react';

const StrategicGoals: React.FC = () => {
  const goals = [
    {
      title: "Education Transformation",
      description: "Integrate climate education and digital literacy into 500 schools across Kenya by 2027.",
      progress: 25,
      target: "500 schools",
      timeline: "2024-2027",
      milestones: [
        "Pilot program in 50 schools (2024)",
        "Teacher training in 200 schools (2025)",
        "Full rollout in 500 schools (2027)"
      ]
    },
    {
      title: "GIS Mapping Coverage",
      description: "Complete high-resolution environmental mapping for 20 counties to support climate adaptation planning.",
      progress: 40,
      target: "20 counties",
      timeline: "2024-2026",
      milestones: [
        "5 counties mapped (2024)",
        "10 counties mapped (2025)",
        "20 counties mapped (2026)"
      ]
    },
    {
      title: "Youth Climate Leadership",
      description: "Train 10,000 youth in climate action and green skills, creating a network of young climate advocates.",
      progress: 15,
      target: "10,000 youth",
      timeline: "2024-2028",
      milestones: [
        "2,000 youth trained (2025)",
        "5,000 youth trained (2026)",
        "10,000 youth trained (2028)"
      ]
    },
    {
      title: "Forest Restoration",
      description: "Plant and nurture 1 million trees through community-led reforestation programs.",
      progress: 10,
      target: "1 million trees",
      timeline: "2024-2030",
      milestones: [
        "100,000 trees planted (2025)",
        "500,000 trees planted (2028)",
        "1 million trees planted (2030)"
      ]
    },
    {
      title: "Policy Influence",
      description: "Develop and advocate for climate-smart policies at county and national levels.",
      progress: 30,
      target: "5 policies",
      timeline: "2024-2026",
      milestones: [
        "2 county policies adopted (2025)",
        "3 national policies influenced (2026)"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs md:text-sm font-semibold mb-4">
            STRATEGIC GOALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Roadmap to
            <span className="text-emerald-600 block mt-2">2030 Impact</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Clear, measurable targets guiding our work across Kenya
          </p>
        </div>

        {/* Goals List */}
        <div className="space-y-6">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-emerald-500"
            >
              <div className="grid md:grid-cols-4 gap-6">
                {/* Left Column - Goal Info */}
                <div className="md:col-span-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    <h3 className="text-lg font-bold text-gray-900">{goal.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{goal.description}</p>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Calendar size={12} />
                    <span>Timeline: {goal.timeline}</span>
                  </div>
                </div>

                {/* Middle Column - Progress Bar */}
                <div className="md:col-span-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-semibold text-emerald-600">{goal.progress}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500"
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Target: {goal.target}</span>
                    <span>{goal.progress}% complete</span>
                  </div>
                </div>

                {/* Right Column - Milestones */}
                <div className="md:col-span-1">
                  <h4 className="text-xs font-semibold text-gray-700 mb-2 flex items-center">
                    <CheckCircle size={12} className="mr-1 text-emerald-600" />
                    Key Milestones
                  </h4>
                  <ul className="space-y-1">
                    {goal.milestones.map((milestone, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start">
                        <span className="w-1 h-1 bg-emerald-500 rounded-full mt-1.5 mr-2"></span>
                        {milestone}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SDG Alignment */}
        <div className="mt-12 bg-emerald-50 rounded-xl p-6 md:p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
            Aligned with UN Sustainable Development Goals
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["SDG 4: Quality Education", "SDG 13: Climate Action", "SDG 15: Life on Land", "SDG 5: Gender Equality", "SDG 17: Partnerships"].map((sdg, index) => (
              <span key={index} className="bg-white text-emerald-700 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">
                {sdg}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicGoals;