import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import { PROFILE_DATA } from "@/lib/constants";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your message!",
      description: "I will get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 hero-gradient text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            I would be delighted to connect and discuss our potential future together. Please feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-accent p-3 rounded-full">
                <Mail className="text-primary text-xl" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="opacity-90">{PROFILE_DATA.contact.email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-accent p-3 rounded-full">
                <Phone className="text-primary text-xl" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="opacity-90">{PROFILE_DATA.contact.phone}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-accent p-3 rounded-full">
                <MapPin className="text-primary text-xl" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="opacity-90">{PROFILE_DATA.contact.location}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-accent p-3 rounded-full">
                <FaLinkedin className="text-primary text-xl" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">LinkedIn</h3>
                <p className="opacity-90">{PROFILE_DATA.contact.linkedin}</p>
              </div>
            </div>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium opacity-90 mb-2">Your Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-accent"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium opacity-90 mb-2">Email Address</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-accent"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium opacity-90 mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-accent resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent text-primary font-semibold hover:bg-accent/90"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
