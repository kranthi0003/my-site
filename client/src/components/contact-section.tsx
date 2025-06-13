import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { PROFILE_DATA } from "@/lib/constants";

export default function ContactSection() {

  return (
    <section id="contact" className="pt-24 pb-20 hero-gradient text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            I would be delighted to connect and discuss our potential future together. Please feel free to reach out.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Email Card */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-accent p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Mail className="text-primary text-2xl" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="opacity-90 text-lg break-all">{PROFILE_DATA.contact.email}</p>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-accent p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Phone className="text-primary text-2xl" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="opacity-90 text-lg">{PROFILE_DATA.contact.phone}</p>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-accent p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <MapPin className="text-primary text-2xl" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="opacity-90 text-lg">{PROFILE_DATA.contact.location}</p>
              </CardContent>
            </Card>
          </div>

          {/* Social Media Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Connect on Social Media</h3>
            <div className="flex justify-center gap-8">
              {/* LinkedIn Card */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="bg-accent p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                    <FaLinkedin className="text-primary text-2xl" size={28} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">LinkedIn</h4>
                  <a href={PROFILE_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="opacity-90 hover:text-accent underline text-lg">
                    akkiran003
                  </a>
                </CardContent>
              </Card>

              {/* Instagram Card */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="bg-accent p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                    <FaInstagram className="text-primary text-2xl" size={28} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Instagram</h4>
                  <a href={PROFILE_DATA.contact.instagram} target="_blank" rel="noopener noreferrer" className="opacity-90 hover:text-accent underline text-lg">
                    kranthi.kirannn
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
