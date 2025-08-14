import React, { useState, useCallback, useMemo } from 'react';

const TestimonialMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set());

  const teamMembers = useMemo(() => [
    {
      id: 1,
      name: "Harish Nair",
      role: "Director",
      image: "/harish.svg",
      linkedin: "#",
      twitter: "#",
      email: "harish@cirakas.com"
    },
    {
      id: 3,
      name: "Dr. Rajalekshmi S",
      role: "Head of Projects & Operations",
      image: "/raji.svg",
      linkedin: "#",
      twitter: "#",
      email: "rajalekshmi@cirakas.com"
    },
    {
      id: 4,
      name: "Samir Sirajudeen",
      role: "Office Admin",
      image: "/samir.svg",
      linkedin: "#",
      twitter: "#",
      email: "samir@cirakas.com"
    },
    {
      id: 5,
      name: "Usman N",
      role: "Secretary to the Director",
      image: "/usman.svg",
      linkedin: "#",
      twitter: "#",
      email: "usman@cirakas.com"
    },
    {
      id: 6,
      name: "Sreejith K J",
      role: "Secretary to the Director",
      image: "/sreejth.svg",
      linkedin: "#",
      twitter: "#",
      email: "sreejith@cirakas.com"
    },
    {
      id: 7,
      name: "Minu S",
      role: "Test Engineer",
      image: "/minu.svg",
      linkedin: "#",
      twitter: "#",
      email: "minu@cirakas.com"
    },
    {
      id: 8,
      name: "Naina Sayed",
      role: "Senior Software Engineer",
      image: "/naina.svg",
      linkedin: "#",
      twitter: "#",
      email: "naina@cirakas.com"
    },
    {
      id: 9,
      name: "Amal Babu",
      role: "Mobile Developer",
      image: "/amal.svg",
      linkedin: "#",
      twitter: "#",
      email: "amal@cirakas.com"
    },
    {
      id: 10,
      name: "Gokul Suresh",
      role: "Software Developer",
      image: "/gokul.svg",
      linkedin: "#",
      twitter: "#",
      email: "gokul@cirakas.com"
    },
    {
      id: 11,
      name: "Tibu Padmakumar",
      role: "Technical Project Manager",
      image: "/tibu.svg",
      linkedin: "#",
      twitter: "#",
      email: "tibu@cirakas.com"
    },
    {
      id: 12,
      name: "Aravind A Sajeev",
      role: "UI/UX Designer",
      image: "/aravind.svg",
      linkedin: "#",
      twitter: "#",
      email: "aravind@cirakas.com"
    },
    {
      id: 13,
      name: "Arjun S S",
      role: "Front-End Developer",
      image: "/arjun.svg",
      linkedin: "#",
      twitter: "#",
      email: "arjun@cirakas.com"
    },
    {
      id: 14,
      name: "Rohith Gomez",
      role: "Python Developer",
      image: "/rohith.svg",
      linkedin: "#",
      twitter: "#",
      email: "rohith@cirakas.com"
    }
  ], []);

  // Optimized handlers with useCallback
  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  // Optimized image loading handler
  const handleImageLoad = useCallback((id) => {
    setLoadedImages(prev => new Set(prev).add(id));
  }, []);

  // Optimized error handler
  const handleImageError = useCallback((e) => {
    e.target.style.display = 'none';
    const fallback = e.target.nextElementSibling;
    if (fallback) {
      fallback.style.display = 'flex';
    }
  }, []);

  // Memoized team member card component
  const TeamMemberCard = useCallback(({ member, setId }) => (
    <div
      className="group relative flex-shrink-0 team-card"
      style={{ width: '320px' }}
    >
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden flex items-center justify-center">
          <img 
            src={member.image} 
            alt={member.name}
            className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
            onLoad={() => handleImageLoad(member.id)}
            onError={handleImageError}
            loading="lazy"
          />
          <div className="hidden absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 items-center justify-center text-white text-6xl font-bold">
            {member.name.charAt(0)}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 bg-white">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {member.name}
          </h3>
          <p className="text-gray-600 text-sm font-medium">
            • {member.role}
          </p>
        </div>
      </div>
    </div>
  ), [handleImageLoad, handleImageError]);

  return (
    <section className="py-12 overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 sec-font">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're a passionate team of innovators, designers, and developers dedicated to creating exceptional digital experiences that drive business growth.
          </p>
        </div>

        {/* Infinite Marquee Container */}
        <div 
          className="marquee-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`marquee-track ${isPaused ? 'paused' : ''}`}>
            {/* First set of team members */}
            <div className="marquee-set">
              {teamMembers.map((member) => (
                <TeamMemberCard key={`set1-${member.id}`} member={member} setId="set1" />
              ))}
            </div>
            
            {/* Gap between sets */}
            <div className="marquee-gap"></div>
            
            {/* Duplicate set for seamless loop */}
            <div className="marquee-set">
              {teamMembers.map((member) => (
                <TeamMemberCard key={`set2-${member.id}`} member={member} setId="set2" />
              ))}
            </div>
          </div>
        </div>

        {/* Optimized CSS */}
        <style>{`
          .marquee-container {
            width: 100%;
            overflow: hidden;
            position: relative;
            padding-bottom: 2rem;
          }

          .marquee-track {
            display: flex;
            width: fit-content;
            animation: seamless-marquee 80s linear infinite;
            will-change: transform;
            transform: translateZ(0);
          }

          .marquee-track.paused {
            animation-play-state: paused;
          }

          .marquee-set {
            display: flex;
            gap: 2rem;
            flex-shrink: 0;
          }

          .marquee-gap {
            width: 2rem;
            flex-shrink: 0;
          }

          .team-card {
            will-change: transform;
            transform: translateZ(0);
          }

          @keyframes seamless-marquee {
            from {
              transform: translateX(0) translateZ(0);
            }
            to {
              transform: translateX(calc(-50% - 2rem)) translateZ(0);
            }
          }

          /* Optimize for reduced motion */
          @media (prefers-reduced-motion: reduce) {
            .marquee-track {
              animation: none;
            }
            
            .team-card:hover {
              transform: none;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default TestimonialMarquee;
