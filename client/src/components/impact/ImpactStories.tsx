import React, { useState } from 'react';
import { Play, Calendar, MapPin, ArrowRight, X } from 'lucide-react';

const ImpactStories: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<number | null>(null);

  const stories = [
    {
      id: 1,
      title: "From Desert to Classroom: Digital Transformation in Garissa",
      location: "Garissa County",
      date: "March 2024",
      excerpt: "How 25 schools in arid northern Kenya embraced digital learning and GIS technology, transforming education for 2,000+ students.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      video: "https://example.com/video1.mp4",
      impact: {
        schools: 25,
        teachers: 120,
        students: 2100,
        trees: 500
      },
      quotes: [
        {
          text: "Before this program, our students had never used a computer. Now they're creating digital maps of their own community.",
          author: "Mohamed Ali",
          role: "Head Teacher, Garissa Primary"
        }
      ]
    },
    {
      id: 2,
      title: "Mangrove Warriors: Restoring Kenya's Coastline",
      location: "Mombasa & Kilifi",
      date: "January 2024",
      excerpt: "Community-led mangrove restoration project plants 5,000 trees and creates sustainable livelihoods for coastal communities.",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      video: "https://example.com/video2.mp4",
      impact: {
        trees: 5000,
        communities: 8,
        jobs: 45,
        coastline: 12
      },
      quotes: [
        {
          text: "Our grandmothers used to tell us about the mangroves. Now we're bringing them back, one seedling at a time.",
          author: "Fatima Hassan",
          role: "Community Leader, Mombasa"
        }
      ]
    },
    {
      id: 3,
      title: "Smart Classrooms, Bright Futures",
      location: "Nairobi",
      date: "February 2024",
      excerpt: "Urban schools embrace smart technology and GIS curriculum, preparing students for careers in climate science and technology.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      video: "https://example.com/video3.mp4",
      impact: {
        schools: 15,
        students: 3200,
        teachers: 85,
        labs: 15
      },
      quotes: [
        {
          text: "My students can now track weather patterns and analyze climate data. They're not just learning science—they're doing it.",
          author: "Grace Wanjiku",
          role: "Science Teacher, Nairobi School"
        }
      ]
    },
    {
      id: 4,
      title: "Women Leading Climate Action",
      location: "Kisumu",
      date: "December 2023",
      excerpt: "Empowering women farmers with climate-smart agriculture techniques and clean energy solutions.",
      image: "https://images.unsplash.com/photo-1590680701039-63f1e73e6b6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      video: "https://example.com/video4.mp4",
      impact: {
        women: 350,
        farms: 180,
        solar: 120,
        training: 15
      },
      quotes: [
        {
          text: "I used to walk 5km for water. Now I have solar-powered irrigation and my farm thrives even during drought.",
          author: "Akinyi Otieno",
          role: "Farmer, Kisumu County"
        }
      ]
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs md:text-sm font-semibold mb-4">
            IMPACT STORIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Stories of
            <span className="text-emerald-600 block mt-2">Transformation</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the communities and individuals whose lives have been changed through our programs
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {stories.map((story) => (
            <div
              key={story.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {/* Play Button */}
                <button
                  onClick={() => setSelectedStory(story.id)}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 rounded-full flex items-center justify-center group/play hover:bg-emerald-600 transition-colors"
                >
                  <Play className="w-6 h-6 text-emerald-600 group-hover/play:text-white ml-1" />
                </button>

                {/* Location & Date */}
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 text-xs mb-1">
                    <MapPin size={12} />
                    <span>{story.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <Calendar size={12} />
                    <span>{story.date}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {story.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{story.excerpt}</p>

                {/* Quick Impact Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(story.impact).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-2 text-center">
                      <div className="font-bold text-gray-900 text-sm">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="bg-emerald-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700 italic">"{story.quotes[0].text}"</p>
                  <p className="text-xs font-semibold text-emerald-700 mt-2">
                    — {story.quotes[0].author}, {story.quotes[0].role}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedStory(story.id)}
                  className="inline-flex items-center space-x-2 text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors"
                >
                  <span>Read Full Story</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Story Modal */}
        {selectedStory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
            <div className="bg-white rounded-2xl max-w-3xl max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900">Story Details</h3>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6">
                {/* Full story content would go here */}
                <p className="text-gray-700">Full story content loading...</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImpactStories;