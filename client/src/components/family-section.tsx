import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Users, Heart } from "lucide-react";
import { PROFILE_DATA } from "@/lib/constants";

export default function FamilySection() {
  const iconMap = {
    Home,
    Users,
    Heart
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Family Background</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I come from a loving and supportive family that has shaped my values and character.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {PROFILE_DATA.familyBackground.map((item, index) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap];
              
              return (
                <Card key={index} className="bg-muted p-6">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <IconComponent className="text-primary" size={20} />
                      </div>
                      <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <img
              src={PROFILE_DATA.familyImage}
              alt="Family portrait"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
