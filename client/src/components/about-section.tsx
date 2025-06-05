import { Card, CardContent } from "@/components/ui/card";
import { PROFILE_DATA } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section id="about" className="pt-24 pb-20 bg-gradient-to-br from-white to-muted/30 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
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
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <div className="relative">
              <img
                src="/attached_assets/IMG_5243_1749135607534.JPG"
                alt="Personal lifestyle photo"
                className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/10 via-transparent to-accent/10"></div>
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-white shadow-lg rounded-full px-4 py-2">
                <span className="text-primary font-semibold text-sm">Family Oriented</span>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in">
            {/* Personal Details Grid */}
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
                      <span className="text-muted-foreground">Marital Status:</span>
                      <span className="font-medium">Never Married</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Diet:</span>
                      <span className="font-medium">Non-Veg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Grew up in:</span>
                      <span className="font-medium">India</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Religious Background */}
              <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-l-secondary shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-6 flex items-center">
                    <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-secondary/20 rounded-full"></div>
                    </div>
                    Religious Background
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Religion:</span>
                      <span className="font-medium">Hindu</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Community:</span>
                      <span className="font-medium">Patnaick</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Gothra:</span>
                      <span className="font-medium">Bharadwaj</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Mother Tongue:</span>
                      <span className="font-medium">Telugu (learning Tamil)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Family Details */}
              <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-l-accent shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-accent mb-6 flex items-center">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-accent/20 rounded-full"></div>
                    </div>
                    Family Details
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Mother's Details:</span>
                      <span className="font-medium">Homemaker</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Father's Details:</span>
                      <span className="font-medium">Passed Away</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">No. of Sisters:</span>
                      <span className="font-medium">0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">No. of Brothers:</span>
                      <span className="font-medium">0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Family Financial Status:</span>
                      <span className="font-medium">High</span>
                    </div>
                  </div>
                </CardContent>
              </Card>



              {/* Astro Details */}
              <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-l-secondary shadow-lg md:col-span-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-6 flex items-center">
                    <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-secondary/20 rounded-full"></div>
                    </div>
                    Astro Details
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date of Birth:</span>
                      <span className="font-medium">03-Sep-1999</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Time of Birth:</span>
                      <span className="font-medium">22:20 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">City of Birth:</span>
                      <span className="font-medium">Visakhapatnam, India</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rashi:</span>
                      <span className="font-medium">Gemini</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Star:</span>
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
