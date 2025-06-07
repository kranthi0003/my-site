import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface PersonalDetailsTabsProps {}

export default function PersonalDetailsTabs({}: PersonalDetailsTabsProps) {
  const [activeTab, setActiveTab] = useState('basics');

  const tabData = [
    { 
      id: 'basics', 
      label: 'Basics & Lifestyle', 
      icon: '👤', 
      gradient: 'from-orange-500 to-orange-600',
      accentColor: 'orange'
    },
    { 
      id: 'family', 
      label: 'Personal & Family', 
      icon: '👥', 
      gradient: 'from-blue-500 to-blue-600',
      accentColor: 'blue'
    },
    { 
      id: 'education', 
      label: 'Education & Career', 
      icon: '🎓', 
      gradient: 'from-green-500 to-green-600',
      accentColor: 'green'
    },
    { 
      id: 'astrology', 
      label: 'Astrology Details', 
      icon: '⭐', 
      gradient: 'from-purple-500 to-purple-600',
      accentColor: 'purple'
    },
    { 
      id: 'assets', 
      label: 'Assets & Income', 
      icon: '🏠', 
      gradient: 'from-emerald-500 to-emerald-600',
      accentColor: 'emerald'
    }
  ];

  const currentTab = tabData.find(tab => tab.id === activeTab);

  const renderBasicsContent = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-6">
        <div className="group/item hover:bg-orange-50/50 p-4 rounded-xl transition-colors duration-300">
          <span className="text-orange-600 text-sm font-semibold uppercase tracking-wide">Age</span>
          <p className="font-bold text-gray-900 text-xl mt-2">25</p>
        </div>
        <div className="group/item hover:bg-orange-50/50 p-4 rounded-xl transition-colors duration-300">
          <span className="text-orange-600 text-sm font-semibold uppercase tracking-wide">Date of Birth</span>
          <p className="font-bold text-gray-900 text-xl mt-2">03-Sep-1999</p>
        </div>
        <div className="group/item hover:bg-orange-50/50 p-4 rounded-xl transition-colors duration-300">
          <span className="text-orange-600 text-sm font-semibold uppercase tracking-wide">Height</span>
          <p className="font-bold text-gray-900 text-xl mt-2">5' 10" (177cm)</p>
        </div>
        <div className="group/item hover:bg-orange-50/50 p-4 rounded-xl transition-colors duration-300">
          <span className="text-orange-600 text-sm font-semibold uppercase tracking-wide">Weight</span>
          <p className="font-bold text-gray-900 text-xl mt-2">75kg</p>
        </div>
        <div className="group/item hover:bg-orange-50/50 p-4 rounded-xl transition-colors duration-300">
          <span className="text-orange-600 text-sm font-semibold uppercase tracking-wide">Work</span>
          <p className="font-bold text-gray-900 text-xl mt-2">Software Engineer</p>
        </div>
        <div className="group/item hover:bg-orange-50/50 p-4 rounded-xl transition-colors duration-300">
          <span className="text-orange-600 text-sm font-semibold uppercase tracking-wide">Diet</span>
          <p className="font-bold text-gray-900 text-xl mt-2">Non-vegetarian</p>
        </div>
      </div>
      
      <div className="pt-6 border-t border-orange-200/50">
        <div className="group/item hover:bg-orange-50/50 p-4 rounded-xl transition-colors duration-300">
          <span className="text-orange-600 text-sm font-semibold uppercase tracking-wide">Languages</span>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 text-sm font-semibold rounded-full">Telugu</span>
            <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 text-sm font-semibold rounded-full">Hindi</span>
            <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 text-sm font-semibold rounded-full">English</span>
            <span className="px-4 py-2 bg-gradient-to-r from-orange-300 to-orange-400 text-white text-sm font-semibold rounded-full">Tamil (learning)</span>
          </div>
        </div>
      </div>
      
      <div className="group/item hover:bg-orange-50/50 p-4 rounded-xl transition-colors duration-300">
        <span className="text-orange-600 text-sm font-semibold uppercase tracking-wide">Smoking/Drinking</span>
        <p className="font-bold text-gray-900 text-xl mt-2">No</p>
      </div>
    </div>
  );

  const renderFamilyContent = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-6">
        <div className="group/item hover:bg-blue-50/50 p-4 rounded-xl transition-colors duration-300">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-wide">Caste</span>
          <p className="font-bold text-gray-900 text-xl mt-2">Patnaik (OC)</p>
        </div>
        <div className="group/item hover:bg-blue-50/50 p-4 rounded-xl transition-colors duration-300">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-wide">Native</span>
          <p className="font-bold text-gray-900 text-xl mt-2">Visakhapatnam</p>
        </div>
        <div className="group/item hover:bg-blue-50/50 p-4 rounded-xl transition-colors duration-300">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-wide">Siblings</span>
          <p className="font-bold text-gray-900 text-xl mt-2">0</p>
        </div>
      </div>
      
      <div className="pt-6 border-t border-blue-200/50">
        <div className="grid grid-cols-2 gap-6">
          <div className="group/item hover:bg-blue-50/50 p-4 rounded-xl transition-colors duration-300">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wide">Father's Occupation</span>
            <p className="font-bold text-gray-900 text-xl mt-2">Passed away</p>
          </div>
          <div className="group/item hover:bg-blue-50/50 p-4 rounded-xl transition-colors duration-300">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wide">Mother's Occupation</span>
            <p className="font-bold text-gray-900 text-xl mt-2">Homemaker</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEducationContent = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-6">
        <div className="group/item hover:bg-green-50/50 p-4 rounded-xl transition-colors duration-300">
          <span className="text-green-600 text-sm font-semibold uppercase tracking-wide">Qualification</span>
          <p className="font-bold text-gray-900 text-xl mt-2">B.Tech (CSE)</p>
        </div>
        <div className="group/item hover:bg-green-50/50 p-4 rounded-xl transition-colors duration-300">
          <span className="text-green-600 text-sm font-semibold uppercase tracking-wide">College</span>
          <p className="font-bold text-gray-900 text-xl mt-2">GVPCOE, Vizag</p>
        </div>
        <div className="group/item hover:bg-green-50/50 p-4 rounded-xl transition-colors duration-300">
          <span className="text-green-600 text-sm font-semibold uppercase tracking-wide">Year of Passing</span>
          <p className="font-bold text-gray-900 text-xl mt-2">2021</p>
        </div>
        <div className="group/item hover:bg-green-50/50 p-4 rounded-xl transition-colors duration-300">
          <span className="text-green-600 text-sm font-semibold uppercase tracking-wide">Experience</span>
          <p className="font-bold text-gray-900 text-xl mt-2">4+ years</p>
        </div>
        <div className="group/item hover:bg-green-50/50 p-4 rounded-xl transition-colors duration-300">
          <span className="text-green-600 text-sm font-semibold uppercase tracking-wide">Salary</span>
          <p className="font-bold text-gray-900 text-xl mt-2">₹30+ LPA</p>
        </div>
        <div className="group/item hover:bg-green-50/50 p-4 rounded-xl transition-colors duration-300">
          <span className="text-green-600 text-sm font-semibold uppercase tracking-wide">Work Location</span>
          <p className="font-bold text-gray-900 text-xl mt-2">Bangalore</p>
        </div>
      </div>
      
      <div className="pt-6 border-t border-green-200/50">
        <div className="grid grid-cols-2 gap-6">
          <div className="group/item hover:bg-green-50/50 p-4 rounded-xl transition-colors duration-300">
            <span className="text-green-600 text-sm font-semibold uppercase tracking-wide">Current Company</span>
            <p className="font-bold text-gray-900 text-xl mt-2">Couchbase</p>
          </div>
          <div className="group/item hover:bg-green-50/50 p-4 rounded-xl transition-colors duration-300">
            <span className="text-green-600 text-sm font-semibold uppercase tracking-wide">Previous Companies</span>
            <p className="font-bold text-gray-900 text-xl mt-2">Amazon, Groww</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAstrologyContent = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-6">
        <div className="group/item hover:bg-purple-50/50 p-4 rounded-xl transition-colors duration-300">
          <span className="text-purple-600 text-sm font-semibold uppercase tracking-wide">Gothram</span>
          <p className="font-bold text-gray-900 text-xl mt-2">Bharadwaja</p>
        </div>
        <div className="group/item hover:bg-purple-50/50 p-4 rounded-xl transition-colors duration-300">
          <span className="text-purple-600 text-sm font-semibold uppercase tracking-wide">Star</span>
          <p className="font-bold text-gray-900 text-xl mt-2">Ardra</p>
        </div>
        <div className="group/item hover:bg-purple-50/50 p-4 rounded-xl transition-colors duration-300">
          <span className="text-purple-600 text-sm font-semibold uppercase tracking-wide">Rasi</span>
          <p className="font-bold text-gray-900 text-xl mt-2">Mithuna (Gemini)</p>
        </div>
        <div className="group/item hover:bg-purple-50/50 p-4 rounded-xl transition-colors duration-300">
          <span className="text-purple-600 text-sm font-semibold uppercase tracking-wide">Time of Birth</span>
          <p className="font-bold text-gray-900 text-xl mt-2">10:20 PM</p>
        </div>
      </div>
    </div>
  );

  const renderAssetsContent = () => (
    <div className="space-y-8">
      {/* Financial Summary */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200">
          <h4 className="font-bold text-emerald-700 mb-3 text-lg">Monthly Salary</h4>
          <p className="text-3xl font-bold text-emerald-600">₹2L+</p>
          <p className="text-sm text-emerald-600 mt-1">₹30+ LPA</p>
        </div>
        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200">
          <h4 className="font-bold text-emerald-700 mb-3 text-lg">Property Portfolio</h4>
          <p className="text-3xl font-bold text-emerald-600">3 Units</p>
          <p className="text-sm text-emerald-600 mt-1">2 Plots + 1 Flat</p>
        </div>
      </div>

      {/* Property Details */}
      <div>
        <h4 className="font-bold text-gray-700 mb-6 text-lg">Property Details</h4>
        <div className="space-y-4">
          {/* Property 1 */}
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium">Plot</span>
                  <span className="bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-sm font-medium">Self</span>
                </div>
                <h5 className="font-bold text-gray-900 text-xl mb-2">Tagarapuvalasa, Vizag</h5>
                <p className="text-gray-600 text-lg">200 Square Yards</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-emerald-600">₹40L</p>
              </div>
            </div>
          </div>

          {/* Property 2 */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Plot</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">Inherited</span>
                </div>
                <h5 className="font-bold text-gray-900 text-xl mb-2">Simhachalam, Vizag</h5>
                <p className="text-gray-600 text-lg">250 Square Yards</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-blue-600">₹50L</p>
              </div>
            </div>
          </div>

          {/* Property 3 */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">Flat</span>
                  <span className="bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium">Inherited</span>
                </div>
                <h5 className="font-bold text-gray-900 text-xl mb-2">Gajuwaka, Vizag</h5>
                <p className="text-gray-600 text-lg">2BHK (1200 sq ft)</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-purple-600">₹30L</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'basics': return renderBasicsContent();
      case 'family': return renderFamilyContent();
      case 'education': return renderEducationContent();
      case 'astrology': return renderAstrologyContent();
      case 'assets': return renderAssetsContent();
      default: return renderBasicsContent();
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="container mx-auto px-4">
        {/* Interactive Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-3 shadow-2xl border border-orange-200/50">
            <div className="flex flex-wrap gap-3 justify-center">
              {tabData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative px-6 py-4 rounded-2xl font-semibold text-sm transition-all duration-500 flex items-center gap-3 ${
                    activeTab === tab.id 
                      ? `bg-gradient-to-r ${tab.gradient} text-white shadow-xl scale-105 transform` 
                      : 'text-gray-600 hover:bg-gray-50 hover:scale-102'
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span className="font-bold">{tab.label}</span>
                  {activeTab === tab.id && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Dynamic Card Content */}
        <div className="max-w-5xl mx-auto">
          <Card className={`group relative w-full bg-gradient-to-br from-white via-${currentTab?.accentColor}-50/20 to-white backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.01] rounded-3xl overflow-hidden`}>
            {/* Gradient border effect */}
            <div className={`absolute inset-0 bg-gradient-to-r from-${currentTab?.accentColor}-200/40 via-${currentTab?.accentColor}-300/30 to-${currentTab?.accentColor}-200/40 rounded-3xl p-[1px] group-hover:p-[2px] transition-all duration-500`}>
              <div className="h-full w-full bg-white rounded-3xl"></div>
            </div>
            
            {/* Modern accent bar */}
            <div className={`absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-${currentTab?.accentColor}-400 to-${currentTab?.accentColor}-600 rounded-r-full`}></div>
            
            <CardContent className="p-12 relative z-10">
              <div className="flex items-center mb-10">
                <div className={`w-16 h-16 bg-gradient-to-br from-${currentTab?.accentColor}-100 to-${currentTab?.accentColor}-200 rounded-3xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <span className="text-2xl">{currentTab?.icon}</span>
                </div>
                <h3 className={`text-3xl font-bold bg-gradient-to-r from-${currentTab?.accentColor}-600 to-${currentTab?.accentColor}-700 bg-clip-text text-transparent`}>
                  {currentTab?.label}
                </h3>
              </div>
              
              <div className={`transition-all duration-700 ${activeTab ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
                {renderContent()}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}