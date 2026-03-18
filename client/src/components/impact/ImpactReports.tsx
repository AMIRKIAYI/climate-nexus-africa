import React from 'react';
import { FileText, Download, Eye, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ImpactReports: React.FC = () => {
  const reports = [
    {
      title: "Annual Impact Report 2024",
      description: "Comprehensive overview of our programs, metrics, and success stories from the past year.",
      date: "January 2025",
      pages: 48,
      size: "4.2 MB",
      type: "Annual",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "GIS in Education: Pilot Study",
      description: "Research findings on the impact of GIS technology in Kenyan secondary schools.",
      date: "October 2024",
      pages: 32,
      size: "2.8 MB",
      type: "Research",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Tree Planting Initiative: 5-Year Report",
      description: "Results and learnings from our community-led reforestation programs.",
      date: "August 2024",
      pages: 56,
      size: "5.1 MB",
      type: "Program Report",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Teacher Training Impact Assessment",
      description: "Measuring the effectiveness of our digital literacy programs for educators.",
      date: "June 2024",
      pages: 28,
      size: "3.3 MB",
      type: "Assessment",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs md:text-sm font-semibold mb-4">
            IMPACT REPORTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Data-Driven
            <span className="text-emerald-600 block mt-2">Insights</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Download our comprehensive reports to understand the depth of our impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reports.map((report, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
            >
              <div className="md:w-1/3 h-32 md:h-auto">
                <img
                  src={report.image}
                  alt={report.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="md:w-2/3 p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{report.title}</h3>
                  <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                    {report.type}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-3">{report.description}</p>
                
                <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar size={12} className="mr-1" />
                    {report.date}
                  </div>
                  <div>{report.pages} pages</div>
                  <div>{report.size}</div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button className="flex items-center space-x-1 bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-emerald-700 transition-colors">
                    <Download size={12} />
                    <span>Download</span>
                  </button>
                  <button className="flex items-center space-x-1 border border-gray-300 px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-gray-50 transition-colors">
                    <Eye size={12} />
                    <span>Preview</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/resources"
            className="inline-flex items-center space-x-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
          >
            <span>View All Reports</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImpactReports;