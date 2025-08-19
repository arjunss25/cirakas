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
      linkedin: "http://www.linkedin.com/in/reachhkn",
      twitter: "#",
      email: "harish@cirakas.com"
    },
    {
      id: 3,
      name: "Dr. Rajalekshmi S",
      role: "Head of Projects & Operations",
      image: "/raji.svg",
      linkedin: "https://www.linkedin.com/in/raji-harish-60bb4a151?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "#",
      email: "rajalekshmi@cirakas.com"
    },
    {
      id: 4,
      name: "Samir Sirajudeen",
      role: "Office Admin",
      image: "/samir.svg",
      linkedin: "https://www.linkedin.com/in/samir-sirajudeen-8773b51b0/",
      twitter: "#",
      email: "samir@cirakas.com"
    },
    {
      id: 5,
      name: "Usman N",
      role: "Secretary to the Director",
      image: "/usman.svg",
      linkedin: "https://www.linkedin.com/in/usman-nazir-895050226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "#",
      email: ""
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
      linkedin: "https://www.linkedin.com/in/minu-s-142a45350/",
      twitter: "#",
      email: "minu@cirakas.com"
    },
    {
      id: 8,
      name: "Naina Sayed",
      role: "Senior Software Engineer",
      image: "/naina.svg",
      linkedin: "https://in.linkedin.com/in/naina-sayed?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile",
      twitter: "#",
      email: "naina@cirakas.com"
    },
    {
      id: 9,
      name: "Amal Babu",
      role: "Mobile Developer",
      image: "/amal.svg",
      linkedin: "https://www.linkedin.com/in/amal-babu-b75537212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "#",
      email: "amal@cirakas.com"
    },
    {
      id: 10,
      name: "Gokul Suresh",
      role: "Software Developer",
      image: "/gokul.svg",
      linkedin: "https://www.linkedin.com/in/gokul-dev1/",
      twitter: "#",
      email: "gokul@cirakas.com"
    },
    {
      id: 11,
      name: "Tibu Padmakumar",
      role: "Technical Project Manager",
      image: "/tibu.svg",
      linkedin: "https://www.linkedin.com/in/tibu-padmakumar-50370393?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "#",
      email: "tibu@cirakas.com"
    },
    {
      id: 12,
      name: "Aravind A Sajeev",
      role: "UI/UX Designer",
      image: "/aravind.svg",
      linkedin: "https://www.linkedin.com/in/aravindasajeev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "#",
      email: "aravind@cirakas.com"
    },
    {
      id: 13,
      name: "Arjun S S",
      role: "Front-End Developer",
      image: "/arjun.svg",
      linkedin: "https://www.linkedin.com/in/arjun-s-s-85b610261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      twitter: "#",
      email: "arjun@cirakas.com"
    },
    {
      id: 14,
      name: "Rohith Gomez",
      role: "Python Developer",
      image: "/rohith.svg",
      linkedin: "https://www.linkedin.com/in/rohithjoseph11?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      twitter: "#",
      email: "rohith@cirakas.com"
    },
    {  id: 15,
      name: "TSERING CHOSPAL",
      role: "Employee Welfare Officer",
      image: "/tsering.svg",
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

  // LinkedIn redirect handler
  const handleLinkedInClick = useCallback((linkedinUrl) => {
    if (linkedinUrl && linkedinUrl !== "#") {
      window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
    }
  }, []);

  // Memoized team member card component
  const TeamMemberCard = useCallback(({ member, setId }) => {
    // Check if member should have LinkedIn functionality
    const hasLinkedIn = member.linkedin && member.linkedin !== "#";
    const isSreejithOrTsering = member.name === "Sreejith K J" || member.name === "TSERING CHOSPAL";
    
    return (
      <div
        className={`group relative flex-shrink-0 team-card ${hasLinkedIn && !isSreejithOrTsering ? 'cursor-pointer' : ''}`}
        style={{ width: '320px' }}
        onClick={hasLinkedIn && !isSreejithOrTsering ? () => handleLinkedInClick(member.linkedin) : undefined}
        title={hasLinkedIn && !isSreejithOrTsering ? `View ${member.name}'s LinkedIn profile` : undefined}
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
            {/* LinkedIn indicator - only show for members with LinkedIn profiles */}
            <div className="mt-3 flex items-center text-blue-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {hasLinkedIn && !isSreejithOrTsering ? (
                <>
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                  View LinkedIn Profile
                </>
              ) : (
                <div className="h-6"></div> // Invisible spacer to maintain consistent height
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }, [handleImageLoad, handleImageError, handleLinkedInClick]);

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
