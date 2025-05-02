
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles, ExternalLink } from 'lucide-react';

// Colleges data with updated images matching college names
const colleges = [
  {
    name: "KMC Manipal",
    image: "/lovable-uploads/514defd8-e518-455c-80b1-2df67f25571a.png",
    location: "Karnataka",
    fees: "Starts From ₹22.5L per year",
    seats: 250
  },
  {
    name: "Mahatma Gandhi Mission",
    image: "/lovable-uploads/75147e27-59e0-490c-be20-219b267161e5.png",
    location: "Maharashtra",
    fees: "Starts From ₹19L per year",
    seats: 150
  },
  {
    name: "MGM Aurangabad",
    image: "/lovable-uploads/75147e27-59e0-490c-be20-219b267161e5.png",
    location: "Maharashtra",
    fees: "Starts From ₹17L per year",
    seats: 100
  },
  {
    name: "MM University",
    image: "/lovable-uploads/42a22463-7a92-4aa5-9c11-7a1d7f50dead.png",
    location: "Haryana",
    fees: "Starts From ₹14.5L per year",
    seats: 150
  },
  {
    name: "PIMS Loni",
    image: "/lovable-uploads/a47f0363-3ecc-4868-bdf2-1f7327c60287.png",
    location: "Maharashtra",
    fees: "Starts From ₹16L per year",
    seats: 150
  },
  {
    name: "MAHE",
    image: "/lovable-uploads/6265f852-db1b-4cf9-8619-96e210d10306.png",
    location: "Karnataka",
    fees: "Starts From ₹22L per year",
    seats: 150
  },
  {
    name: "Santosh Medical College",
    image: "/lovable-uploads/bc3bae11-cba7-46f6-9a21-a4e7e2380371.png",
    location: "Uttar Pradesh",
    fees: "Starts From ₹15L per year",
    seats: 100
  },
  {
    name: "IMS & SUM Bhubaneshwar",
    image: "/lovable-uploads/75275211-1788-4798-ba86-b42bc5aaba6c.png",
    location: "Odisha",
    fees: "Starts From ₹16.5L per year",
    seats: 100
  },
  {
    name: "Kalinga Bhubaneshwar",
    image: "/lovable-uploads/cf60ea3c-007a-46ef-b2d2-47e1c225e720.png",
    location: "Odisha",
    fees: "Starts From ₹15.5L per year",
    seats: 100
  },
  {
    name: "Amrita Hospital",
    image: "/lovable-uploads/d00b8c1f-0ed9-4747-a712-6e590f6e8ef2.png",
    location: "Kerala",
    fees: "Starts From ₹17L per year",
    seats: 150
  },
  {
    name: "Bharti Vidyapeeth",
    image: "/lovable-uploads/1f0fdeda-8c77-4d3b-befe-d8399983b1e5.png",
    location: "Maharashtra",
    fees: "Starts From ₹18L per year",
    seats: 150
  },
  {
    name: "DY Patil University",
    image: "/lovable-uploads/963f0c55-9bb5-40a9-b681-d9645c85dde1.png",
    location: "Maharashtra",
    fees: "Starts From ₹20L per year",
    seats: 250
  },
  {
    name: "JNMC",
    image: "/lovable-uploads/553d506f-746c-4ac3-812e-8a23fb64956c.png",
    location: "Karnataka",
    fees: "Starts From ₹18L per year",
    seats: 200
  },
  {
    name: "BLDE University",
    image: "/lovable-uploads/e13ca263-679e-493c-8934-45719f58dc85.png",
    location: "Karnataka",
    fees: "Starts From ₹16L per year",
    seats: 150
  },
  {
    name: "JSS University",
    image: "/lovable-uploads/92dd88a2-26de-4e09-aff6-522b822759fa.png",
    location: "Karnataka",
    fees: "Starts From ₹19L per year",
    seats: 150
  },
  {
    name: "KLE University",
    image: "/lovable-uploads/553d506f-746c-4ac3-812e-8a23fb64956c.png",
    location: "Karnataka",
    fees: "Starts From ₹18L per year",
    seats: 150
  }
];

const RecommendedColleges: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px bg-medical-300 w-8"></div>
            <span className="text-medical-600 font-medium uppercase tracking-wider text-sm flex items-center">
              <Sparkles className="h-4 w-4 mr-1" /> Educational Affiliates
            </span>
            <div className="h-px bg-medical-300 w-8"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Top Recommended Colleges</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Prestigious medical institutions with excellent faculty, infrastructure, and placement records
          </p>
        </div>
        
        <div className="relative">
          {/* Scroll buttons */}
          <button 
            onClick={scrollLeft} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          
          <button 
            onClick={scrollRight} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
          
          {/* Scrollable container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-5 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent scroll-smooth"
            style={{ scrollbarWidth: 'thin', msOverflowStyle: 'none' }}
          >
            {colleges.map((college, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[280px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={college.image} 
                    alt={college.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{college.name}</h3>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Location:</span> {college.location}
                    </p>
                    <p className="text-sm text-emerald-600 font-medium">
                      {college.fees}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Seats:</span> Approx. {college.seats}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/mbbs-india/deemed-universities" 
            className="inline-flex items-center gap-2 px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-medical-500 to-teal-500 rounded-lg hover:from-medical-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Deemed Universities
            <ExternalLink className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecommendedColleges;
