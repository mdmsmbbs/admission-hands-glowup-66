
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles, ExternalLink } from 'lucide-react';

// Colleges data with real uploaded images
const colleges = [
  {
    name: "KMC Manipal",
    image: "/lovable-uploads/2fa573b3-b1be-4761-8ace-77b266504f41.png",
    location: "Karnataka",
    fees: "₹22L - ₹30L per year",
    seats: 250
  },
  {
    name: "Mahatma Gandhi Mission",
    image: "/lovable-uploads/42abd921-8756-460b-9e00-6a93cd48fc80.png",
    location: "Maharashtra",
    fees: "₹19L - ₹26L per year",
    seats: 150
  },
  {
    name: "MGM Aurangabad",
    image: "/lovable-uploads/00e46c61-063a-489e-9054-45966912bd22.png",
    location: "Maharashtra",
    fees: "₹17L - ₹24L per year",
    seats: 100
  },
  {
    name: "MM University",
    image: "/lovable-uploads/857bce0f-3d82-40da-8733-f98b3c4695ec.png",
    location: "Haryana",
    fees: "₹14.5L - ₹20L per year",
    seats: 150
  },
  {
    name: "PIMS Loni",
    image: "/lovable-uploads/69823834-0515-4f12-9d2a-a54a8518ae6d.png",
    location: "Maharashtra",
    fees: "₹16L - ₹22L per year",
    seats: 150
  },
  {
    name: "MAHE",
    image: "/lovable-uploads/972a5fd6-1385-4aa1-b319-ad437d0d4b10.png",
    location: "Karnataka",
    fees: "₹19.5L - ₹26L per year",
    seats: 150
  },
  {
    name: "Santosh Medical College",
    image: "/lovable-uploads/382f4ba3-76f4-43d3-81c5-8598af90ea9f.png",
    location: "Uttar Pradesh",
    fees: "₹15L - ₹21L per year",
    seats: 100
  },
  {
    name: "IMS & SUM Bhubaneshwar",
    image: "/lovable-uploads/6561afac-8521-41b4-9850-8de6b993c976.png",
    location: "Odisha",
    fees: "₹16.5L - ₹23L per year",
    seats: 100
  },
  {
    name: "Kalinga Bhubaneshwar",
    image: "/lovable-uploads/c4a7d3fd-7ea7-46df-877b-43375ec21f84.png",
    location: "Odisha",
    fees: "₹15.5L - ₹21.5L per year",
    seats: 100
  },
  {
    name: "Amrita Hospital",
    image: "/lovable-uploads/791b44b2-076a-4070-9e57-1150e72a50a4.png",
    location: "Kerala",
    fees: "₹17L - ₹24L per year",
    seats: 150
  },
  {
    name: "Bharti Vidyapeeth",
    image: "/lovable-uploads/4de1b7a3-8174-4f37-94f3-1fb131fb4bc2.png",
    location: "Maharashtra",
    fees: "₹18L - ₹24L per year",
    seats: 150
  },
  {
    name: "DY Patil University",
    image: "/lovable-uploads/fac8243f-e8dc-4677-8d5b-ef4d6538aa26.png",
    location: "Maharashtra",
    fees: "₹20L - ₹27L per year",
    seats: 250
  },
  {
    name: "JNMC",
    image: "/lovable-uploads/7bb7ed7a-811e-4335-9b53-30a1931cee6c.png",
    location: "Karnataka",
    fees: "₹18.5L - ₹25L per year",
    seats: 200
  },
  {
    name: "BLDE University",
    image: "/lovable-uploads/e13ca263-679e-493c-8934-45719f58dc85.png",
    location: "Karnataka",
    fees: "₹17L - ₹23L per year",
    seats: 150
  },
  {
    name: "JSS University",
    image: "/lovable-uploads/92dd88a2-26de-4e09-aff6-522b822759fa.png",
    location: "Karnataka",
    fees: "₹19L - ₹25L per year",
    seats: 150
  },
  {
    name: "KLE University",
    image: "/lovable-uploads/835e3c42-0e9b-4b74-99eb-c6596b7438e3.png",
    location: "Karnataka",
    fees: "₹18L - ₹24L per year",
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
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Fees:</span> {college.fees}
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
