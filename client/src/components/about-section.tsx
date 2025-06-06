import { Card, CardContent } from "@/components/ui/card";
import { PROFILE_DATA } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {PROFILE_DATA.aboutDescription}
          </p>
        </div>
        
        {/* 4 Panel Side by Side Selfies */}
        <div className="animate-slide-up flex justify-center mb-16">
          <div className="relative w-full max-w-4xl">
            <div className="flex gap-3 w-full justify-center">
                {/* 2022 */}
                <div className="relative flex-1 aspect-[3/4]">
                  <img
                    src="/attached_assets/Snapchat-1059745354.jpg"
                    alt="2022 Selfie"
                    className="w-full h-full object-cover rounded-lg shadow-lg filter sepia-[0.1] contrast-[0.95] brightness-[1.05]"
                  />
                  <div className="absolute top-1.5 left-1.5 bg-gradient-to-r from-primary to-primary/80 shadow-md rounded-md px-2 py-1 border border-white/20">
                    <span className="text-white font-semibold text-xs">2022</span>
                  </div>
                </div>

                {/* 2023 */}
                <div className="relative flex-1 aspect-[3/4]">
                  <img
                    src="/attached_assets/Snapchat-1445693840.jpg"
                    alt="2023 Selfie"
                    className="w-full h-full object-cover rounded-lg shadow-lg filter sepia-[0.1] contrast-[0.95] brightness-[1.05]"
                  />
                  <div className="absolute top-1.5 left-1.5 bg-gradient-to-r from-primary to-primary/80 shadow-md rounded-md px-2 py-1 border border-white/20">
                    <span className="text-white font-semibold text-xs">2023</span>
                  </div>
                </div>

                {/* 2024 */}
                <div className="relative flex-1 aspect-[3/4]">
                  <img
                    src="/attached_assets/Snapchat-240699289.jpg"
                    alt="2024 Selfie"
                    className="w-full h-full object-cover rounded-lg shadow-lg filter sepia-[0.05] contrast-[0.98] brightness-[1.02]"
                  />
                  <div className="absolute top-1.5 left-1.5 bg-gradient-to-r from-primary to-primary/80 shadow-md rounded-md px-2 py-1 border border-white/20">
                    <span className="text-white font-semibold text-xs">2024</span>
                  </div>
                </div>

                {/* 2025 */}
                <div className="relative flex-1 aspect-[3/4]">
                  <img
                    src="/attached_assets/Snapchat-520859973.jpg"
                    alt="2025 Selfie"
                    className="w-full h-full object-cover rounded-lg shadow-lg filter contrast-[0.95] brightness-[1.05]"
                  />
                  <div className="absolute top-1.5 left-1.5 bg-gradient-to-r from-primary to-primary/80 shadow-md rounded-md px-2 py-1 border border-white/20">
                    <span className="text-white font-semibold text-xs">2025</span>
                  </div>
                </div>
            </div>
            
            {/* Additional decorative elements */}
            <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-primary/20 rounded-full"></div>
            <div className="absolute top-1/2 -right-6 w-4 h-4 bg-accent/30 rounded-full"></div>
          </div>
        </div>
        
        {/* Personal Details Grid */}
        <div className="animate-fade-in">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Basics & Lifestyle */}
              <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-l-primary shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-6 flex items-center">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-primary/20 rounded-full"></div>
                    </div>
                    Basics & Lifestyle
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Age:</span>
                      <span className="font-medium">25</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date of Birth:</span>
                      <span className="font-medium">03-Sep-1999</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Height:</span>
                      <span className="font-medium">5' 10" (177cm)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Weight:</span>
                      <span className="font-medium">65kg (143 lbs)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Work:</span>
                      <span className="font-medium">Software Engineer</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Languages:</span>
                      <span className="font-medium">English, Malayalam</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Diet:</span>
                      <span className="font-medium">Non-vegetarian</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Smoking:</span>
                      <span className="font-medium">No</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Drinking:</span>
                      <span className="font-medium">Social</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Personal & Family */}
              <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-l-secondary shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-6 flex items-center">
                    <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-secondary/20 rounded-full"></div>
                    </div>
                    Personal & Family
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Caste:</span>
                      <span className="font-medium">Brahmin</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sub Caste:</span>
                      <span className="font-medium">Namboodiri</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Gothram:</span>
                      <span className="font-medium">Bharadwaja</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Star:</span>
                      <span className="font-medium">Ardra</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rasi:</span>
                      <span className="font-medium">Mithuna</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Father's Name:</span>
                      <span className="font-medium">Rajesh T</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Mother's Name:</span>
                      <span className="font-medium">Leela Rajesh</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Father's Occupation:</span>
                      <span className="font-medium">Accountant</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Mother's Occupation:</span>
                      <span className="font-medium">Teacher</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Native Place:</span>
                      <span className="font-medium">Perinthalmanna</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Education & Career */}
              <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-l-accent shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-accent mb-6 flex items-center">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-accent/20 rounded-full"></div>
                    </div>
                    Education & Career
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Qualification:</span>
                      <span className="font-medium">B.Tech in CSE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">College:</span>
                      <span className="font-medium">Cochin University</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Year of Passing:</span>
                      <span className="font-medium">2021</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Current Company:</span>
                      <span className="font-medium">Amazon</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Previous Company:</span>
                      <span className="font-medium">Couchbase</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Experience:</span>
                      <span className="font-medium">3+ years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Annual Income:</span>
                      <span className="font-medium">₹45+ LPA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Work Location:</span>
                      <span className="font-medium">Bangalore</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Astrology & Preferences */}
              <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-l-muted shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-muted-foreground/20 rounded-full"></div>
                    </div>
                    Astrology & Preferences
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Dosham:</span>
                      <span className="font-medium">No</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Horoscope:</span>
                      <span className="font-medium">Available</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Partner Age:</span>
                      <span className="font-medium">22-28 years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Partner Height:</span>
                      <span className="font-medium">5'2" - 5'8"</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Partner Education:</span>
                      <span className="font-medium">Graduate/Post-Graduate</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Preferred Location:</span>
                      <span className="font-medium">Kerala/Bangalore</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Star Preference:</span>
                      <span className="font-medium">Ardra</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}