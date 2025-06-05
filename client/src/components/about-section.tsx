import { Card, CardContent } from "@/components/ui/card";
import { PROFILE_DATA } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {PROFILE_DATA.aboutDescription}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={PROFILE_DATA.aboutImage}
              alt="Personal lifestyle photo"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            {PROFILE_DATA.personalValues.map((value, index) => (
              <Card key={index} className="bg-muted p-6 card-hover">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
