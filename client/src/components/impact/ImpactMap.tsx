import React from 'react';
import { MapPin, CheckCircle } from 'lucide-react';

const ImpactMap: React.FC = () => {
  const counties = [
    { name: "Nairobi", projects: 12, schools: 15, trees: 2500, status: "active" },
    { name: "Garissa", projects: 8, schools: 25, trees: 5000, status: "active" },
    { name: "Mombasa", projects: 10, schools: 18, trees: 8000, status: "active" },
    { name: "Kilifi", projects: 6, schools: 12, trees: 4500, status: "active" },
    { name: "Kisumu", projects: 7, schools: 14, trees: 3200, status: "active" },
    { name: "Kiambu", projects: 5, schools: 10, trees: 1800, status: "active" },
    { name: "Nakuru", projects: 4, schools: 8, trees: 2200, status: "active" },
    { name: "Uasin Gishu", projects: 3, schools: 6, trees: 1500, status: "planned" },
    { name: "Kajiado", projects: 2, schools: 4, trees: 800, status: "planned" },
    { name: "Machakos", projects: 3, schools: 5, trees: 1200, status: "planned" }
  ];

  const totalProjects = counties.reduce((sum, county) => sum + county.projects, 0);
  const totalSchools = counties.reduce((sum, county) => sum + county.schools, 0);
  const totalTrees = counties.reduce((sum, county) => sum + county.trees, 0);

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - County List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 text-emerald-600 mr-2" />
                Our Reach Across Kenya
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Active Counties:</span>
                  <span className="font-bold text-emerald-600">{counties.filter(c => c.status === 'active').length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Projects:</span>
                  <span className="font-bold text-emerald-600">{totalProjects}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Schools Reached:</span>
                  <span className="font-bold text-emerald-600">{totalSchools}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Trees Planted:</span>
                  <span className="font-bold text-emerald-600">{totalTrees.toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
                {counties.map((county, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      county.status === 'active' 
                        ? 'bg-emerald-50 border-emerald-200' 
                        : 'bg-gray-50 border-gray-200 opacity-60'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 flex items-center">
                          {county.name}
                          {county.status === 'active' && (
                            <CheckCircle size={14} className="text-emerald-600 ml-2" />
                          )}
                        </h4>
                        <div className="text-xs text-gray-600 mt-1">
                          <span>{county.projects} projects • {county.schools} schools</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-medium text-emerald-700">
                          {county.trees.toLocaleString()} trees
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Map Visualization */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Impact Distribution</h3>
              
              {/* Map Placeholder - In production, replace with actual map */}
              <div className="relative bg-gradient-to-br from-emerald-100 to-blue-100 rounded-lg h-96 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Kenya Map"
                  className="w-full h-full object-cover opacity-50"
                />
                
                {/* Map Overlay with County Markers */}
                <div className="absolute inset-0">
                  {/* Nairobi */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group">
                    <div className="relative">
                      <div className="w-4 h-4 bg-emerald-600 rounded-full animate-ping absolute"></div>
                      <div className="w-4 h-4 bg-emerald-600 rounded-full relative"></div>
                      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        Nairobi: 15 schools
                      </div>
                    </div>
                  </div>
                  
                  {/* Mombasa */}
                  <div className="absolute bottom-1/4 right-1/4">
                    <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                  </div>
                  
                  {/* Kisumu */}
                  <div className="absolute top-1/3 left-1/4">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  
                  {/* Garissa */}
                  <div className="absolute top-1/3 right-1/3">
                    <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
                  </div>
                </div>

                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-xs">
                  <h4 className="font-semibold mb-2">Legend</h4>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-emerald-600 rounded-full mr-2"></div>
                      <span>Active Counties (8)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
                      <span>Planned (4)</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                * Interactive map showing our presence across Kenyan counties
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMap;