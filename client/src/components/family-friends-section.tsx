import React from "react";
import { Heart, Users, Camera } from "lucide-react";
import { PROFILE_DATA } from "@/lib/constants";

export default function FamilyFriendsSection() {
  return (
    <section id="family-friends" className="py-24 bg-gradient-to-br from-rose-50 to-pink-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-pink-200/20 rounded-full blur-3xl"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-32 left-20 w-16 h-16 bg-rose-300/10 opacity-20 rounded-full"></div>
        <div className="absolute bottom-32 right-24 w-20 h-20 bg-pink-300/10 opacity-15 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-rose-400/15 opacity-25 rounded-full"></div>
        <div className="absolute top-3/4 right-1/3 w-14 h-14 bg-pink-400/15 opacity-20 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-screen-xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-rose-600 mb-6">
            Family & Friends 👨‍👩‍👧‍👦❤️
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            The amazing people who make life beautiful and meaningful
          </p>
        </div>

        {/* Family Section */}
        <div className="mb-16 animate-slide-up">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full border border-rose-200/50 shadow-lg">
              <Heart className="text-rose-500" size={24} />
              <h3 className="text-xl sm:text-2xl font-bold text-rose-600">Family 👪</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {PROFILE_DATA.familyMembers?.map((member, index) => (
              <div
                key={index}
                className="relative group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/60"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-bold text-gray-800 text-lg mb-1">{member.name}</h4>
                  <p className="text-rose-600 font-medium">{member.relation}</p>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-rose-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            )) || (
              // Placeholder when no family data
              <div className="col-span-full text-center py-12">
                <Camera className="mx-auto text-gray-400 mb-4" size={48} />
                <p className="text-gray-500">Family photos coming soon...</p>
              </div>
            )}
          </div>
        </div>

        {/* Friends Section */}
        <div className="animate-slide-up">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full border border-pink-200/50 shadow-lg">
              <Users className="text-pink-500" size={24} />
              <h3 className="text-xl sm:text-2xl font-bold text-pink-600">Friends 👫</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {PROFILE_DATA.friendsPhotos?.map((friend, index) => (
              <div
                key={index}
                className="relative group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/60"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={friend.photo}
                    alt={friend.description || "Friend photo"}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                {friend.caption && (
                  <div className="p-3 text-center">
                    <p className="text-sm text-gray-700 font-medium">{friend.caption}</p>
                  </div>
                )}
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            )) || (
              // Placeholder when no friends data
              <div className="col-span-full text-center py-12">
                <Camera className="mx-auto text-gray-400 mb-4" size={48} />
                <p className="text-gray-500">Friends photos coming soon...</p>
              </div>
            )}
          </div>
        </div>

        {/* Decorative Quote */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-rose-200/50 shadow-lg">
            <p className="text-lg sm:text-xl text-gray-700 italic font-medium mb-2">
              "Family and friends are the treasures that make life's journey worthwhile"
            </p>
            <p className="text-rose-600 font-semibold">💝</p>
          </div>
        </div>
      </div>
    </section>
  );
}