// This file contains all the personal data for the bio website
// Replace all values with actual personal information
import profilePhoto from "@assets/IMG_20220826_165143_835_1749135163637.jpg";
import newPortrait from "@assets/Snapchat-1037974668_Original_1749744538149.jpg";

export const PROFILE_DATA = {
  name: "Kranthi Kiran",
  tagline: "Where Revolution Meets Light",
  
  // Hero section image - Your professional headshot
  profileImage: profilePhoto,
  
  // About section
  aboutDescription: "Every engineer has a story that shaped their code. Mine began in the coastal city of Vizag and wound through moments of loss, growth, and discovery. Explore the chapters below to see how personal experiences forged my approach to building technology that matters.",
  aboutImage: "/attached_assets/IMG_5243_1749135607534.JPG",
  
  personalStory: [
    {
      title: "Foundation",
      description: "I was born and raised in Visakhapatnam (Vizag), a coastal city that gave me a strong sense of belonging and direction. I studied at St. Aloysius High School (ICSE), where supportive teachers helped nurture my curiosity and love for learning. Those early school years shaped my discipline, taught me to think independently, and laid the foundation for everything that followed."
    },
    {
      title: "Resilience", 
      description: "In 2015, we faced a difficult chapter with the loss of my father. It was a time of change, filled with quiet challenges. Through it all, my mother stood strong — balancing responsibilities while making sure my education stayed on track. Her steady support and silent strength continue to inspire me, and they've shaped much of who I am today."
    },
    {
      title: "Growth",
      description: "With focus and gratitude, I completed my 12th grade with 98%, and later pursued Computer Science Engineering at GVPCOE (JNTUK) in Vizag. Those years were filled with learning — not just technical knowledge, but teamwork, self-discipline, and the small wins that come from persistence."
    },
    {
      title: "Professional Journey",
      description: "My first opportunity came with Amazon in Hyderabad, where I grew in both depth and responsibility. Wanting to explore more challenging roles, I later moved to Bangalore. Currently, I'm working at Couchbase, focusing on scalable backend engineering — building systems that are reliable, efficient, and designed to scale with confidence."
    },
    {
      title: "Life Philosophy",
      description: "Outside of engineering, I enjoy traveling, exploring new cultures, and spending time with people who matter. I'm passionate about technology, but also deeply value the relationships and moments that make life meaningful. I believe that growth — whether personal or professional — comes from staying curious, staying kind, and being open to learning, always."
    }
  ],

  // Education & Experience
  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "GVPCOE, Vizag",
      period: "2017 - 2021",
      gpa: "First Class",
      specialization: "Computer Science and Engineering"
    }
  ],

  experience: [
    {
      position: "Software Engineer",
      company: "Couchbase",
      period: "April 2024 - Present",
      description: "Currently working on database and cloud technologies in Bangalore"
    },
    {
      position: "Software Engineer",
      company: "Amazon",
      period: "2022 - March 2024",
      description: "Developed and maintained large-scale distributed systems and cloud solutions"
    },
    {
      position: "Software Engineer",
      company: "Groww",
      period: "2021 - 2022",
      description: "Worked on fintech solutions and trading platforms"
    }
  ],

  skills: {
    technical: "Software Development, Database Technologies, Cloud Computing, Distributed Systems",
    certifications: "Computer Science Engineering Graduate",
    leadership: "4+ years industry experience, Cross-functional collaboration"
  },

  // Interests & Hobbies
  interests: [
    {
      title: "Tamil Culture (தமிழ் கலாச்சாரம்)",
      description: "Learning Tamil language, appreciating classical music, and understanding traditions",
      icon: "Heart"
    },
    {
      title: "Technology & Innovation",
      description: "Staying updated with latest tech trends and building innovative solutions",
      icon: "Code"
    },
    {
      title: "Family Time",
      description: "Spending quality time with family and building meaningful relationships",
      icon: "Users"
    },
    {
      title: "Travel & Culture",
      description: "Exploring different cultures, especially South Indian traditions and heritage",
      icon: "MapPin"
    }
  ],

  // Photo Gallery - Replace with actual personal photos
  galleryImages: [
    {
      url: "@assets/IMG_5243_1749135607534.JPG",
      alt: "Personal lifestyle photo"
    },
    {
      url: newPortrait,
      alt: "Candid moment"
    },
    {
      url: "@assets/Snapchat-1445693840.jpg",
      alt: "Travel memory"
    },
    {
      url: "@assets/Snapchat-240699289.jpg",
      alt: "Life experience"
    }
  ],

  // Memory Years Grid for About Section
  memoryYears: [
    {
      year: "2022",
      photo: "/attached_assets/Snapchat-1059745354.jpg",
      title: "New Beginnings",
      description: "Starting fresh with new opportunities"
    },
    {
      year: "2023", 
      photo: "/attached_assets/Snapchat-240699289.jpg",
      title: "Growth Journey",
      description: "Expanding horizons and experiences"
    },
    {
      year: "2024",
      photo: "/attached_assets/Snapchat-1445693840.jpg", 
      title: "Adventures",
      description: "Exploring new places and cultures"
    },
    {
      year: "2025",
      photo: "/attached_assets/IMG_5243_1749135607534.JPG",
      title: "Looking Forward",
      description: "Excited for what's ahead"
    }
  ],



  // Contact Information - Replace with actual contact details
  contact: {
    email: "kranthikiranakkumahanthi@gmail.com",
    phone: "+91 9398857319",
    location: "Bangalore",
    linkedin: "https://www.linkedin.com/in/akkiran003/",
    instagram: "https://www.instagram.com/kranthi.kirannn/"
  }
};
