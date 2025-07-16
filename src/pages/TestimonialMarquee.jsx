import React from 'react';

const TestimonialMarquee = () => {
  const testimonials = [
    {
      name: "Cody Fisher",
      handle: "@john",
      text: "I'm at a loss for words. This is amazing. I love it.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format"
    },
    {
      name: "Esther Howard",
      handle: "@john",
      text: "I'm at a loss for words. This is amazing. I love it.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b69d55b2?w=40&h=40&fit=crop&crop=face&auto=format"
    },
    {
      name: "Wade Warren",
      handle: "@john",
      text: "I'm at a loss for words. This is amazing. I love it.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format"
    },
    {
      name: "Robert Fox",
      handle: "@john",
      text: "I'm at a loss for words. This is amazing. I love it.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face&auto=format"
    },
    {
      name: "Bessie Cooper",
      handle: "@john",
      text: "I'm at a loss for words. This is amazing. I love it.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&auto=format"
    },
    {
      name: "Brooklyn Simmons",
      handle: "@john",
      text: "I'm at a loss for words. This is amazing. I love it.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face&auto=format"
    },
    {
      name: "Devon Lane",
      handle: "@john",
      text: "I'm at a loss for words. This is amazing. I love it.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face&auto=format"
    },
    {
      name: "Cameron Williamson",
      handle: "@john",
      text: "I'm at a loss for words. This is amazing. I love it.",
      avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=40&h=40&fit=crop&crop=face&auto=format"
    }
  ];

  const TestimonialCard = ({ testimonial }) => (
    <div className="bg-black rounded-lg p-4 w-80 flex-shrink-0 mx-3">
      <div className="flex items-center mb-3">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <div className="text-white font-medium text-sm">{testimonial.name}</div>
          <div className="text-gray-500 text-xs">{testimonial.handle}</div>
        </div>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">{testimonial.text}</p>
    </div>
  );

  return (
    <div className=" py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl  text-gray-900 mb-2">Trusted by Innovators<span className='text-orange-500'>.</span></h1>
      </div>
      
      <div className="relative overflow-hidden">
        {/* First row - moving left */}
        <div className="flex animate-marquee mb-6">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
          ))}
        </div>
        
        {/* Second row - moving right */}
        <div className="flex animate-marquee-reverse">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TestimonialMarquee;