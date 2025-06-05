import { Card, CardContent } from "@/components/ui/card";
import { PROFILE_DATA } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-muted/30 relative">
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {PROFILE_DATA.aboutDescription}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
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
          
          <div className="space-y-6 animate-fade-in">
            {PROFILE_DATA.personalValues.map((value, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm p-6 card-hover border-l-4 border-l-accent shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <div className="w-6 h-6 bg-primary/20 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Additional highlight */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
              <h4 className="text-lg font-semibold text-primary mb-2">Looking Forward</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I believe that the right partnership is built on mutual respect, shared values, and genuine care for each other's happiness and growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
