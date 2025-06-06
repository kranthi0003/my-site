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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
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

              {/* Property & Assets Details */}
              <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-l-green-500 shadow-lg col-span-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-green-600 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-green-200 rounded-full"></div>
                    </div>
                    Property & Financial Assets
                  </h3>
                  
                  {/* Financial Summary */}
                  <div className="grid md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">Annual Income</h4>
                      <p className="text-2xl font-bold text-green-600">₹45+ LPA</p>
                      <p className="text-sm text-green-600">₹3.75+ L/month</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">Total Assets</h4>
                      <p className="text-2xl font-bold text-blue-600">₹2.5+ Cr</p>
                      <p className="text-sm text-blue-600">Property + Investments</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-2">Property Count</h4>
                      <p className="text-2xl font-bold text-purple-600">5 Units</p>
                      <p className="text-sm text-purple-600">3 Plots + 2 Flats</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-700 mb-2">Liabilities</h4>
                      <p className="text-2xl font-bold text-orange-600">₹0</p>
                      <p className="text-sm text-orange-600">No loans</p>
                    </div>
                  </div>

                  {/* Property Details Table */}
                  <div className="overflow-x-auto">
                    <h4 className="font-semibold text-gray-700 mb-4">Property Portfolio</h4>
                    <table className="w-full border-collapse border border-gray-200 text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-200 px-3 py-2 text-left">Type</th>
                          <th className="border border-gray-200 px-3 py-2 text-left">Location</th>
                          <th className="border border-gray-200 px-3 py-2 text-left">Size/Area</th>
                          <th className="border border-gray-200 px-3 py-2 text-left">Current Value</th>
                          <th className="border border-gray-200 px-3 py-2 text-left">Status</th>
                          <th className="border border-gray-200 px-3 py-2 text-left">Rental Income</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 px-3 py-2 font-medium">Residential Plot</td>
                          <td className="border border-gray-200 px-3 py-2">Perinthalmanna, Kerala</td>
                          <td className="border border-gray-200 px-3 py-2">8 Cents</td>
                          <td className="border border-gray-200 px-3 py-2 font-medium text-green-600">₹45 Lakhs</td>
                          <td className="border border-gray-200 px-3 py-2">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Owned</span>
                          </td>
                          <td className="border border-gray-200 px-3 py-2">-</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 px-3 py-2 font-medium">Commercial Plot</td>
                          <td className="border border-gray-200 px-3 py-2">Malappuram, Kerala</td>
                          <td className="border border-gray-200 px-3 py-2">5 Cents</td>
                          <td className="border border-gray-200 px-3 py-2 font-medium text-green-600">₹35 Lakhs</td>
                          <td className="border border-gray-200 px-3 py-2">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Owned</span>
                          </td>
                          <td className="border border-gray-200 px-3 py-2">-</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 px-3 py-2 font-medium">Agricultural Land</td>
                          <td className="border border-gray-200 px-3 py-2">Tirur, Kerala</td>
                          <td className="border border-gray-200 px-3 py-2">1.2 Acres</td>
                          <td className="border border-gray-200 px-3 py-2 font-medium text-green-600">₹60 Lakhs</td>
                          <td className="border border-gray-200 px-3 py-2">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Family</span>
                          </td>
                          <td className="border border-gray-200 px-3 py-2">₹15,000/month</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 px-3 py-2 font-medium">2BHK Apartment</td>
                          <td className="border border-gray-200 px-3 py-2">Whitefield, Bangalore</td>
                          <td className="border border-gray-200 px-3 py-2">1,200 sqft</td>
                          <td className="border border-gray-200 px-3 py-2 font-medium text-green-600">₹85 Lakhs</td>
                          <td className="border border-gray-200 px-3 py-2">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Owned</span>
                          </td>
                          <td className="border border-gray-200 px-3 py-2">₹35,000/month</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 px-3 py-2 font-medium">3BHK Villa</td>
                          <td className="border border-gray-200 px-3 py-2">Kochi, Kerala</td>
                          <td className="border border-gray-200 px-3 py-2">2,500 sqft</td>
                          <td className="border border-gray-200 px-3 py-2 font-medium text-green-600">₹1.2 Crores</td>
                          <td className="border border-gray-200 px-3 py-2">
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Under Construction</span>
                          </td>
                          <td className="border border-gray-200 px-3 py-2">Expected ₹45,000/month</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Investment Summary */}
                  <div className="mt-6 grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-700 mb-2">Stock Investments</h5>
                      <p className="text-lg font-medium text-gray-600">₹25 Lakhs</p>
                      <p className="text-xs text-gray-500">Diversified portfolio</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-700 mb-2">Fixed Deposits</h5>
                      <p className="text-lg font-medium text-gray-600">₹15 Lakhs</p>
                      <p className="text-xs text-gray-500">7.5% average return</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-700 mb-2">Emergency Fund</h5>
                      <p className="text-lg font-medium text-gray-600">₹8 Lakhs</p>
                      <p className="text-xs text-gray-500">Liquid savings</p>
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