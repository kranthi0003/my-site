import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Calendar, MapPin, Award, Building } from "lucide-react";
import { PROFILE_DATA } from "@/lib/constants";

export default function BackgroundSection() {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');

  // Combine and sort all timeline items by date
  const allTimelineItems = [
    ...PROFILE_DATA.education.map(item => ({
      ...item,
      type: 'education' as const,
      icon: GraduationCap,
      color: 'from-orange-500 to-amber-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    })),
    ...PROFILE_DATA.experience.map(item => ({
      ...item,
      type: 'experience' as const,
      icon: Briefcase,
      color: 'from-red-500 to-orange-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    }))
  ].sort((a, b) => {
    // Sort by start year (extract from period)
    const getYear = (period: string) => parseInt(period.split('-')[0]);
    return getYear(b.period) - getYear(a.period);
  });

  return (
    <section id="background" className="py-24 bg-gradient-to-br from-orange-50/40 via-amber-50/60 to-red-50/40 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-amber-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-red-200/20 to-orange-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-700 to-red-600 bg-clip-text text-transparent mb-4">
            Professional Timeline
          </h2>
          <p className="text-xl text-orange-700 max-w-3xl mx-auto leading-relaxed">
            Journey through my educational milestones and professional achievements
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg border border-slate-200">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('education')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'education'
                    ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg transform scale-105'
                    : 'text-orange-700 hover:text-orange-800 hover:bg-orange-100'
                }`}
              >
                <GraduationCap size={20} />
                <span>Education</span>
              </button>
              <button
                onClick={() => setActiveTab('experience')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'experience'
                    ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white shadow-lg transform scale-105'
                    : 'text-orange-700 hover:text-orange-800 hover:bg-orange-100'
                }`}
              >
                <Briefcase size={20} />
                <span>Experience</span>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Timeline View */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-300 via-amber-300 to-red-300 rounded-full opacity-40"></div>
            
            {/* Timeline items */}
            <div className="space-y-8">
              {allTimelineItems
                .filter(item => activeTab === 'education' ? item.type === 'education' : item.type === 'experience')
                .map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="relative flex items-start group animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                      {/* Timeline dot */}
                      <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${item.color} shadow-lg transform group-hover:scale-110 transition-all duration-300`}>
                        <Icon className="text-white" size={24} />
                        <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      {/* Content card */}
                      <div className="ml-8 flex-1">
                        <Card className={`${item.bgColor} border-2 ${item.borderColor} hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 overflow-hidden`}>
                          <CardContent className="p-6">
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                              <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-800 mb-2">
                                  {item.type === 'education' ? item.degree : item.position}
                                </h3>
                                <div className="flex items-center space-x-4 text-slate-600 mb-3">
                                  <div className="flex items-center space-x-1">
                                    <Building size={16} />
                                    <span className="font-medium">
                                      {item.type === 'education' ? item.institution : item.company}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex items-center space-x-2 bg-white/70 px-3 py-1 rounded-full border border-slate-200">
                                <Calendar size={14} />
                                <span className="text-sm font-medium text-slate-600">{item.period}</span>
                              </div>
                            </div>
                            
                            {item.type === 'education' && (
                              <div className="space-y-2">
                                {item.gpa && (
                                  <div className="flex items-center space-x-2">
                                    <Award size={16} className="text-orange-500" />
                                    <span className="text-sm text-slate-600">GPA: {item.gpa}</span>
                                  </div>
                                )}
                                {item.specialization && (
                                  <p className="text-slate-600 leading-relaxed">{item.specialization}</p>
                                )}
                              </div>
                            )}
                            
                            {item.type === 'experience' && item.description && (
                              <p className="text-slate-600 leading-relaxed">{item.description}</p>
                            )}
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        {/* Combined Timeline View (Hidden on mobile) */}
        <div className="mt-16 hidden lg:block">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-orange-800 mb-2">Complete Journey</h3>
            <p className="text-orange-700">Chronological overview of all achievements</p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-300 via-amber-300 to-red-300 rounded-full opacity-40"></div>
            
            <div className="space-y-12">
              {allTimelineItems.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className="relative flex items-center group">
                    {/* Timeline dot */}
                    <div className={`absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${item.color} shadow-lg group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="text-white" size={20} />
                    </div>
                    
                    {/* Content */}
                    <div className={`w-5/12 ${isEven ? 'mr-auto pr-8 text-right' : 'ml-auto pl-8'}`}>
                      <Card className={`${item.bgColor} border-2 ${item.borderColor} hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1`}>
                        <CardContent className="p-4">
                          <h4 className="font-bold text-slate-800 mb-1">
                            {item.type === 'education' ? item.degree : item.position}
                          </h4>
                          <p className="text-sm font-medium text-slate-600 mb-2">
                            {item.type === 'education' ? item.institution : item.company}
                          </p>
                          <p className="text-xs text-slate-500">{item.period}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
