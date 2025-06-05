import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Code, Award, Users } from "lucide-react";
import { PROFILE_DATA } from "@/lib/constants";

export default function BackgroundSection() {
  return (
    <section id="background" className="pt-24 pb-20 bg-gradient-to-r from-muted to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Professional & Educational Background
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my educational journey and professional achievements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <Card className="bg-white p-8 shadow-lg card-hover">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <div className="bg-secondary/10 p-3 rounded-full mr-4">
                  <GraduationCap className="text-secondary text-2xl" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-primary">Education</h3>
              </div>
              
              <div className="space-y-6">
                {PROFILE_DATA.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-accent pl-6">
                    <h4 className="text-lg font-semibold text-primary">{edu.degree}</h4>
                    <p className="text-secondary font-medium">{edu.institution}</p>
                    <p className="text-muted-foreground">{edu.period} | {edu.gpa}</p>
                    <p className="text-sm text-muted-foreground mt-2">{edu.specialization}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Professional Experience */}
          <Card className="bg-white p-8 shadow-lg card-hover">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <div className="bg-accent/10 p-3 rounded-full mr-4">
                  <Briefcase className="text-accent text-2xl" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-primary">Professional Experience</h3>
              </div>
              
              <div className="space-y-6">
                {PROFILE_DATA.experience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-secondary pl-6">
                    <h4 className="text-lg font-semibold text-primary">{exp.position}</h4>
                    <p className="text-secondary font-medium">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.period}</p>
                    <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills & Achievements */}
        <Card className="mt-12 bg-white p-8 shadow-lg">
          <CardContent className="p-0">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Skills & Achievements</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Code className="text-primary text-xl" size={24} />
                </div>
                <h4 className="font-semibold text-primary mb-2">Technical Skills</h4>
                <p className="text-muted-foreground text-sm">{PROFILE_DATA.skills.technical}</p>
              </div>
              
              <div className="text-center">
                <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-secondary text-xl" size={24} />
                </div>
                <h4 className="font-semibold text-primary mb-2">Certifications</h4>
                <p className="text-muted-foreground text-sm">{PROFILE_DATA.skills.certifications}</p>
              </div>
              
              <div className="text-center">
                <div className="bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-accent text-xl" size={24} />
                </div>
                <h4 className="font-semibold text-primary mb-2">Leadership</h4>
                <p className="text-muted-foreground text-sm">{PROFILE_DATA.skills.leadership}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
