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
          <div className="animate-slide-up flex justify-center">
            <div className="relative max-w-md">
              {/* 2x2 Grid of Selfies */}
              <div className="grid grid-cols-2 gap-3 w-80 h-80">
                {/* Top Left - 2022 */}
                <div className="relative">
                  <img
                    src="/attached_assets/IMG_5243_1749135607534.JPG"
                    alt="Selfie from 2022"
                    className="w-full h-full rounded-xl object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-transparent to-primary/10"></div>
                  <div className="absolute top-2 left-2 bg-gradient-to-r from-primary to-primary/80 shadow-lg rounded-lg px-3 py-1.5 border border-white/20">
                    <span className="text-white font-bold text-sm tracking-wide">2022</span>
                  </div>
                </div>
                
                {/* Top Right - 2023 */}
                <div className="relative">
                  <img
                    src="/attached_assets/IMG_5243_1749135607534.JPG"
                    alt="Selfie from 2023"
                    className="w-full h-full rounded-xl object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
                    style={{ objectPosition: 'center 20%' }}
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-transparent to-accent/10"></div>
                  <div className="absolute top-2 left-2 bg-gradient-to-r from-accent to-accent/80 shadow-lg rounded-lg px-3 py-1.5 border border-white/20">
                    <span className="text-white font-bold text-sm tracking-wide">2023</span>
                  </div>
                </div>
                
                {/* Bottom Left - 2024 */}
                <div className="relative">
                  <img
                    src="/attached_assets/IMG_5243_1749135607534.JPG"
                    alt="Selfie from 2024"
                    className="w-full h-full rounded-xl object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
                    style={{ objectPosition: 'center 10%' }}
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-transparent to-secondary/10"></div>
                  <div className="absolute top-2 left-2 bg-gradient-to-r from-secondary to-secondary/80 shadow-lg rounded-lg px-3 py-1.5 border border-white/20">
                    <span className="text-white font-bold text-sm tracking-wide">2024</span>
                  </div>
                </div>
                
                {/* Bottom Right - 2025 */}
                <div className="relative">
                  <img
                    src="/attached_assets/IMG_5243_1749135607534.JPG"
                    alt="Selfie from 2025"
                    className="w-full h-full rounded-xl object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
                    style={{ objectPosition: 'center 30%' }}
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-transparent to-yellow-400/10"></div>
                  <div className="absolute top-2 left-2 bg-gradient-to-r from-yellow-500 to-yellow-600 shadow-lg rounded-lg px-3 py-1.5 border border-white/20">
                    <span className="text-white font-bold text-sm tracking-wide">2025</span>
                  </div>
                </div>
              </div>
              

              
              {/* Additional decorative elements */}
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-primary/20 rounded-full"></div>
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-accent/30 rounded-full"></div>
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
                      <span className="text-muted-foreground">Siblings:</span>
                      <span className="font-medium">0</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Financial Background */}
              <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-l-accent shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-accent mb-6 flex items-center">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-accent/20 rounded-full"></div>
                    </div>
                    Financial Background
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Base Salary:</span>
                      <span className="font-medium">INR 28 LPA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Stock Options:</span>
                      <span className="font-medium">INR 8.3 Lakh (10K USD)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Working With:</span>
                      <span className="font-medium">Private Company</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Current Employer:</span>
                      <span className="font-medium">Couchbase</span>
                    </div>
                    <div className="border-t pt-3 mt-3">
                      <h4 className="font-semibold text-primary mb-3">Assets (Vizag)</h4>
                      <div className="overflow-hidden rounded-lg border">
                        <table className="w-full text-xs">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-1 py-2 text-left font-medium text-gray-700">Property</th>
                              <th className="px-1 py-2 text-left font-medium text-gray-700">Details</th>
                              <th className="px-1 py-2 text-left font-medium text-gray-700">Value</th>
                              <th className="px-1 py-2 text-left font-medium text-gray-700">Source</th>
                              <th className="px-1 py-2 text-left font-medium text-gray-700">Location</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            <tr>
                              <td className="px-1 py-2 text-muted-foreground">Plot 1</td>
                              <td className="px-1 py-2 font-medium">200 Sqyd</td>
                              <td className="px-1 py-2 font-medium text-green-700">₹40L</td>
                              <td className="px-1 py-2 font-medium text-green-600">Self</td>
                              <td className="px-1 py-2">
                                <a href="https://maps.app.goo.gl/FYcjGMRJYVY43MgYA" 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   className="text-blue-600 hover:text-blue-800 underline text-xs">
                                  Map
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-1 py-2 text-muted-foreground">Plot 2</td>
                              <td className="px-1 py-2 font-medium">200 Sqyd</td>
                              <td className="px-1 py-2 font-medium text-blue-700">₹50L</td>
                              <td className="px-1 py-2 font-medium text-blue-600">Inherited</td>
                              <td className="px-1 py-2">
                                <a href="https://maps.app.goo.gl/FiM7HLAqr1Xq8bSs5" 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   className="text-blue-600 hover:text-blue-800 underline text-xs">
                                  Map
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-1 py-2 text-muted-foreground">Flat</td>
                              <td className="px-1 py-2 font-medium">1000 sqft</td>
                              <td className="px-1 py-2 font-medium text-green-700">₹45L</td>
                              <td className="px-1 py-2 font-medium text-green-600">Self</td>
                              <td className="px-1 py-2">
                                <a href="https://maps.app.goo.gl/eSPeB7kyGfCrdcfE6" 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   className="text-blue-600 hover:text-blue-800 underline text-xs">
                                  Map
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
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
