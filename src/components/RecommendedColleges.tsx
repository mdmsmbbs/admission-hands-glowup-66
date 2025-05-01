
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles, ExternalLink } from 'lucide-react';

// Colleges data
const colleges = [
  {
    name: "JNMC (KLE) Belgaum",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1486&auto=format&fit=crop",
    location: "Karnataka",
    fees: "₹18.5L - ₹25L per year",
    seats: 200
  },
  {
    name: "MGM Mumbai",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1480&auto=format&fit=crop",
    location: "Maharashtra",
    fees: "₹19L - ₹26L per year",
    seats: 150
  },
  {
    name: "MGM Aurangabad",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1374&auto=format&fit=crop",
    location: "Maharashtra",
    fees: "₹17L - ₹24L per year",
    seats: 100
  },
  {
    name: "DY Patil (DYPU) Mumbai",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1374&auto=format&fit=crop",
    location: "Maharashtra",
    fees: "₹20L - ₹27L per year",
    seats: 250
  },
  {
    name: "DY Patil (DYPU) Pune",
    image: "https://images.unsplash.com/photo-1494883759339-0b042055a4ee?q=80&w=1374&auto=format&fit=crop",
    location: "Maharashtra",
    fees: "₹19.5L - ₹26L per year",
    seats: 150
  },
  {
    name: "Bharti Vidyapeeth Mumbai",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1470&auto=format&fit=crop",
    location: "Maharashtra",
    fees: "₹19L - ₹25L per year",
    seats: 100
  },
  {
    name: "Bharti Vidyapeeth Pune",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=1374&auto=format&fit=crop",
    location: "Maharashtra",
    fees: "₹18L - ₹24L per year",
    seats: 150
  },
  {
    name: "KMC Manipal",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1374&auto=format&fit=crop",
    location: "Karnataka",
    fees: "₹22L - ₹30L per year",
    seats: 250
  },
  {
    name: "KMC Mangalore",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1486&auto=format&fit=crop",
    location: "Karnataka",
    fees: "₹20L - ₹28L per year",
    seats: 250
  },
  {
    name: "PIMS Loni",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1480&auto=format&fit=crop",
    location: "Maharashtra",
    fees: "₹16L - ₹22L per year",
    seats: 150
  },
  {
    name: "Santosh Ghaziabad",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1374&auto=format&fit=crop",
    location: "Uttar Pradesh",
    fees: "₹15L - ₹21L per year",
    seats: 100
  },
  {
    name: "MMU Ambala",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1374&auto=format&fit=crop",
    location: "Haryana",
    fees: "₹14.5L - ₹20L per year",
    seats: 150
  },
  {
    name: "IMS & SUM Bhubaneshwar",
    image: "https://images.unsplash.com/photo-1494883759339-0b042055a4ee?q=80&w=1374&auto=format&fit=crop",
    location: "Odisha",
    fees: "₹16.5L - ₹23L per year",
    seats: 100
  },
  {
    name: "Kalinga Bhubaneshwar",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1470&auto=format&fit=crop",
    location: "Odisha",
    fees: "₹15.5L - ₹21.5L per year",
    seats: 100
  },
  {
    name: "Amrita Faridabad",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=1374&auto=format&fit=crop",
    location: "Haryana",
    fees: "₹17L - ₹24L per year",
    seats: 150
  },
  {
    name: "Graphic Era Dehradun",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1374&auto=format&fit=crop",
    location: "Uttarakhand",
    fees: "₹16L - ₹22L per year",
    seats: 100
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
