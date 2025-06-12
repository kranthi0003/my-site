// This file contains all the personal data for the bio website
// Replace all values with actual personal information
import profilePhoto from "@assets/IMG_20220826_165143_835_1749135163637.jpg";

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
      period: "2025 Apr - Present",
      description: "Currently working on database and cloud technologies in Bangalore"
    },
    {
      position: "Software Engineer",
      company: "Groww",
      period: "2025 Jan - 2025 Mar",
      description: "Worked on fintech solutions and trading platforms"
    },
    {
      position: "Software Engineer",
      company: "Amazon",
      period: "2021 Mar - 2024 Dec",
      description: "Developed and maintained large-scale distributed systems and cloud solutions"
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
      title: "Cooking",
      description: "Experimenting with traditional South Indian recipes and modern cuisine",
      link: {
        text: "Follow my culinary journey @chips2nuts",
        url: "https://www.instagram.com/chips2nuts"
      },
      icon: "ChefHat",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Cricket",
      description: "Passionate follower of cricket matches and love playing with friends",
      icon: "Trophy",
      color: "from-green-500 to-blue-600"
    },
    {
      title: "Formula 1",
      description: "Avid F1 fan, following races and analyzing driver performances",
      icon: "Car",
      color: "from-red-500 to-orange-600"
    },
    {
      title: "Music",
      description: "Listening to diverse genres from Tamil classical to contemporary hits",
      icon: "Music",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Travelling",
      description: "Exploring new destinations, cultures, and creating memorable experiences",
      icon: "MapPin",
      color: "from-blue-500 to-teal-600"
    },
    {
      title: "Technology",
      description: "Staying updated with latest tech trends and building innovative solutions",
      icon: "Code",
      color: "from-indigo-500 to-purple-600"
    }
  ],

  // Photo Gallery - Replace with actual personal photos
  galleryImages: [
    {
      url: "/attached_assets/IMG_20230124_204423_794 Copy_1749745799360.JPG",
      alt: "Casual car selfie with a smile"
    },
    {
      url: "/attached_assets/Picsart_22-12-05_16-41-50-162_Original_1749745827086.jpg",
      alt: "Traditional celebration with family"
    },
    {
      url: "/attached_assets/Picsart_23-07-09_22-20-43-676_Original_1749745830750.jpg",
      alt: "Group photo with friends at event"
    },
    {
      url: "/attached_assets/IMG-20220403-WA0002_Original_1749745835900.jpg",
      alt: "Friends dining out together"
    },
    {
      url: "/attached_assets/Picsart_23-09-16_10-02-55-398_Original_1749745844004.jpg",
      alt: "Professional portrait with vintage filter"
    },
    {
      url: "/attached_assets/Snapchat-306668410_Original_1749745850482.jpg",
      alt: "Evening hangout with friends"
    },
    {
      url: "/attached_assets/Snapchat-666691257_Original_1749745856367.jpg",
      alt: "Working late night coding session"
    },
    {
      url: "/attached_assets/SAVE_20201222_081837_Original_1749745896358.jpg",
      alt: "College friends group photo"
    },
    {
      url: "/attached_assets/20220711_190719_Original_1749746316517.jpg",
      alt: "Stylish pose in blue striped shirt"
    },
    {
      url: "/attached_assets/IMG_0741_Original_1749746320027.jpg",
      alt: "Sweet moment with mother"
    },
    {
      url: "/attached_assets/Snapchat-1037974668_Original_1749746345804.jpg",
      alt: "Artistic black and white portrait"
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
