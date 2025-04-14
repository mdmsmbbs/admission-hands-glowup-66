
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ExternalLink, MapPin, Phone, Mail, GraduationCap, Users, Building, CalendarClock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const colleges = [
  {
    id: 1,
    name: "Grant Medical College and Sir JJ Hospital",
    location: "Mumbai",
    established: 1845,
    seats: 250,
    type: "Government",
    fees: "₹25,000 per year",
    neetCutoff: "650-680",
    image: "https://images.unsplash.com/photo-1551601651-09492b5830d6?q=80&w=1974&auto=format&fit=crop",
    website: "https://www.gmcjjh.org",
    description: "Grant Medical College is one of the oldest and most prestigious medical institutions in India, established in 1845. It offers excellent clinical exposure with attached Sir JJ Hospital.",
    facilities: ["Multi-specialty hospital", "Advanced laboratories", "Digital library", "Sports complex", "Hostels with modern amenities"],
    contacts: {
      phone: "+91-22-23735555",
      email: "info@gmcjjh.org",
      address: "J.J. Marg, Nagpada-Mumbai Central, Off Jijabhoy Road, Mumbai, Maharashtra 400008"
    }
  },
  {
    id: 2,
    name: "Seth GS Medical College and KEM Hospital",
    location: "Mumbai",
    established: 1926,
    seats: 220,
    type: "Government",
    fees: "₹30,000 per year",
    neetCutoff: "660-685",
    image: "https://images.unsplash.com/photo-1516549655669-d41113f45462?q=80&w=1470&auto=format&fit=crop",
    website: "https://www.kem.edu",
    description: "Seth GS Medical College is known for its excellent academic program and is attached to the renowned King Edward Memorial Hospital, providing students with extensive clinical experience.",
    facilities: ["Advanced research centers", "State-of-the-art laboratories", "Comprehensive library", "Sports facilities", "Separate hostels for boys and girls"],
    contacts: {
      phone: "+91-22-24107000",
      email: "dean.gsmc@mcgm.gov.in",
      address: "Acharya Donde Marg, Parel, Mumbai, Maharashtra 400012"
    }
  },
  {
    id: 3,
    name: "BJ Government Medical College",
    location: "Pune",
    established: 1946,
    seats: 200,
    type: "Government",
    fees: "₹20,000 per year",
    neetCutoff: "620-650",
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=1471&auto=format&fit=crop",
    website: "https://www.bjmcpune.org",
    description: "BJ Government Medical College is one of the top medical colleges in Pune, known for its excellent faculty and clinical training at Sassoon General Hospital.",
    facilities: ["Fully equipped laboratories", "Comprehensive library", "Hostels with modern amenities", "Sports ground", "WiFi campus"],
    contacts: {
      phone: "+91-20-26128000",
      email: "bjmcpune@gmail.com",
      address: "Jai Prakash Narayan Road, Near Pune Railway Station, Pune, Maharashtra 411001"
    }
  },
  {
    id: 4,
    name: "Government Medical College",
    location: "Nagpur",
    established: 1947,
    seats: 200,
    type: "Government",
    fees: "₹20,000 per year",
    neetCutoff: "610-640",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1470&auto=format&fit=crop",
    website: "https://www.gmcnagpur.gov.in",
    description: "Government Medical College Nagpur is one of the oldest medical colleges in Maharashtra with a rich tradition of excellence in medical education.",
    facilities: ["Well-equipped laboratories", "Digital library", "Separate hostels for boys and girls", "Sports complex", "Auditorium"],
    contacts: {
      phone: "+91-712-2701642",
      email: "dean@gmcnagpur.gov.in",
      address: "Medical Square, Nagpur, Maharashtra 440003"
    }
  },
  {
    id: 5,
    name: "DY Patil Medical College",
    location: "Navi Mumbai",
    established: 1989,
    seats: 250,
    type: "Private",
    fees: "₹15,00,000 per year",
    neetCutoff: "550-600",
    image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=1476&auto=format&fit=crop",
    website: "https://www.dypatil.edu",
    description: "DY Patil Medical College is a premier private medical institution known for its modern infrastructure and quality medical education.",
    facilities: ["Modern hospital complex", "Advanced research laboratories", "International standard library", "Indoor and outdoor sports facilities", "AC hostels"],
    contacts: {
      phone: "+91-22-27709500",
      email: "info@dypatil.edu",
      address: "Sector 7, Nerul, Navi Mumbai, Maharashtra 400706"
    }
  },
  {
    id: 6,
    name: "Krishna Institute of Medical Sciences",
    location: "Karad",
    established: 1984,
    seats: 200,
    type: "Private",
    fees: "₹14,00,000 per year",
    neetCutoff: "530-580",
    image: "https://images.unsplash.com/photo-1581360742512-021d5b2157d8?q=80&w=1471&auto=format&fit=crop",
    website: "https://www.kimskarad.in",
    description: "KIMS Karad offers quality medical education with modern teaching methodologies and excellent clinical exposure in rural and urban settings.",
    facilities: ["Modern teaching hospital", "Digital library", "Research centers", "Indoor and outdoor sports facilities", "Comfortable hostels"],
    contacts: {
      phone: "+91-2164-241555",
      email: "info@kimskarad.in",
      address: "NH 4, Near Dhebewadi Road, Malkapur, Karad, Maharashtra 415539"
    }
  },
];

const MBBSMaharashtra: React.FC = () => {
  const phoneNumber = "+919873133846";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>MBBS in Maharashtra - Medical Colleges, Fees & Cutoffs | AdmissionHands</title>
        <meta name="description" content="Comprehensive information about MBBS colleges in Maharashtra. Details on government and private medical colleges, fee structure, NEET cutoffs, and admission process." />
        <meta name="keywords" content="MBBS Maharashtra, medical colleges in Maharashtra, MBBS admission Maharashtra, NEET cutoff Maharashtra" />
      </Helmet>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-medical-50 to-blue-50 py-16">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2 animate-fade-in">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  MBBS in Maharashtra
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-6">
                  Comprehensive guide to medical colleges, fee structure, cutoffs, and admission process for MBBS in Maharashtra.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-white shadow-md rounded-lg px-4 py-3 flex items-center">
                    <Building className="text-medical-600 w-5 h-5 mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">Total Colleges</p>
                      <p className="font-semibold">51</p>
                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg px-4 py-3 flex items-center">
                    <Users className="text-medical-600 w-5 h-5 mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">Annual Seats</p>
                      <p className="font-semibold">8,000+</p>
                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg px-4 py-3 flex items-center">
                    <GraduationCap className="text-medical-600 w-5 h-5 mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">Min. NEET Score</p>
                      <p className="font-semibold">520+</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={`tel:${phoneNumber}`} className="btn-primary text-center">
                    Get Expert Guidance
                  </a>
                  <Link to="/mbbs-india" className="btn-outline text-center">
                    Explore Other States
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1606788076664-e3151d76b049?q=80&w=1287&auto=format&fit=crop" 
                  alt="Medical college in Maharashtra" 
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Overview of Medical Education in Maharashtra
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Maharashtra is a leading state for medical education in India with prestigious institutions across major cities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-medical-700">Government Medical Colleges</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-medical-600 mr-2"></div>
                    <span>23 government medical colleges</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-medical-600 mr-2"></div>
                    <span>Highly subsidized fee structure</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-medical-600 mr-2"></div>
                    <span>Higher NEET cutoffs for admission</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-medical-600 mr-2"></div>
                    <span>Excellent clinical exposure</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-medical-700">Private Medical Colleges</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-medical-600 mr-2"></div>
                    <span>28 private medical colleges</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-medical-600 mr-2"></div>
                    <span>Higher fee structure</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-medical-600 mr-2"></div>
                    <span>Modern infrastructure</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-medical-600 mr-2"></div>
                    <span>Multiple admission quotas</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-medical-700">Admission Process</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-medical-600 mr-2"></div>
                    <span>Based on NEET scores</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-medical-600 mr-2"></div>
                    <span>State quota: 85% seats</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-medical-600 mr-2"></div>
                    <span>All India Quota: 15% seats</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-medical-600 mr-2"></div>
                    <span>Management & NRI quotas in private colleges</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Medical Colleges Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Top Medical Colleges in Maharashtra
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Explore detailed information about the leading medical institutions in Maharashtra.
              </p>
            </div>
            
            {/* College Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {colleges.map(college => (
                <div key={college.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={college.image} 
                      alt={college.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-900 flex-1">{college.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${college.type === "Government" ? "bg-blue-100 text-blue-800" : "bg-emerald-100 text-emerald-800"}`}>
                        {college.type}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{college.location}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="text-sm">
                        <span className="text-gray-500">Annual Fees:</span>
                        <p className="font-semibold">{college.fees}</p>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-500">MBBS Seats:</span>
                        <p className="font-semibold">{college.seats}</p>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-500">Founded:</span>
                        <p className="font-semibold">{college.established}</p>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-500">NEET Cutoff:</span>
                        <p className="font-semibold">{college.neetCutoff}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <a href="#" className="text-medical-600 hover:text-medical-700 text-sm font-medium flex items-center">
                        View Details <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                      <a href={college.website} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 text-sm">
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* View More Button */}
            <div className="text-center">
              <button className="btn-outline">
                View All 51 Colleges
              </button>
            </div>
          </div>
        </section>
        
        {/* Featured College */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Medical College
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Detailed overview of one of Maharashtra's premier medical institutions.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1551601651-09492b5830d6?q=80&w=1974&auto=format&fit=crop" 
                    alt="Grant Medical College" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">Grant Medical College and Sir JJ Hospital</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Government</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    Grant Medical College is one of the oldest and most prestigious medical institutions in India, established in 1845. It offers excellent clinical exposure with attached Sir JJ Hospital.
                  </p>
                  
                  <Tabs defaultValue="overview">
                    <TabsList className="mb-4">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="facilities">Facilities</TabsTrigger>
                      <TabsTrigger value="contacts">Contacts</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="overview">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm text-gray-500">Location</h4>
                          <p className="font-medium">Mumbai</p>
                        </div>
                        <div>
                          <h4 className="text-sm text-gray-500">Established</h4>
                          <p className="font-medium">1845</p>
                        </div>
                        <div>
                          <h4 className="text-sm text-gray-500">MBBS Seats</h4>
                          <p className="font-medium">250</p>
                        </div>
                        <div>
                          <h4 className="text-sm text-gray-500">NEET Cutoff</h4>
                          <p className="font-medium">650-680</p>
                        </div>
                        <div>
                          <h4 className="text-sm text-gray-500">Annual Fees</h4>
                          <p className="font-medium">₹25,000</p>
                        </div>
                        <div>
                          <h4 className="text-sm text-gray-500">Website</h4>
                          <a href="https://www.gmcjjh.org" target="_blank" rel="noopener noreferrer" className="text-medical-600 hover:text-medical-700 font-medium">
                            gmcjjh.org
                          </a>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="facilities">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-medical-600 mr-2"></div>
                          <span>Multi-specialty hospital with 1,352 beds</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-medical-600 mr-2"></div>
                          <span>Advanced laboratories and research facilities</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-medical-600 mr-2"></div>
                          <span>Digital library with extensive medical journals</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-medical-600 mr-2"></div>
                          <span>Sports complex and recreational facilities</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-medical-600 mr-2"></div>
                          <span>Separate hostels for boys and girls</span>
                        </li>
                      </ul>
                    </TabsContent>
                    
                    <TabsContent value="contacts">
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <Phone className="w-4 h-4 text-medical-600 mr-2" />
                          <span>+91-22-23735555</span>
                        </li>
                        <li className="flex items-center">
                          <Mail className="w-4 h-4 text-medical-600 mr-2" />
                          <span>info@gmcjjh.org</span>
                        </li>
                        <li className="flex items-start">
                          <MapPin className="w-4 h-4 text-medical-600 mr-2 mt-1" />
                          <span>J.J. Marg, Nagpada-Mumbai Central, Off Jijabhoy Road, Mumbai, Maharashtra 400008</span>
                        </li>
                      </ul>
                    </TabsContent>
                  </Tabs>
                  
                  <div className="mt-6 flex justify-between">
                    <a href="#" className="btn-primary text-sm">Get Admission Assistance</a>
                    <a href="https://www.gmcjjh.org" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">Visit Website</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Fee Structure Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                MBBS Fee Structure in Maharashtra
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Comparison of fees across different types of medical colleges in Maharashtra.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>College Type</TableHead>
                    <TableHead>Tuition Fee (Annual)</TableHead>
                    <TableHead>Hostel & Mess Fee (Annual)</TableHead>
                    <TableHead>Other Charges</TableHead>
                    <TableHead>Total (First Year)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Government Medical Colleges</TableCell>
                    <TableCell>₹20,000 - ₹30,000</TableCell>
                    <TableCell>₹50,000 - ₹80,000</TableCell>
                    <TableCell>₹10,000 - ₹20,000</TableCell>
                    <TableCell>₹80,000 - ₹1,30,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Private Medical Colleges (Merit Quota)</TableCell>
                    <TableCell>₹5,00,000 - ₹10,00,000</TableCell>
                    <TableCell>₹1,00,000 - ₹1,50,000</TableCell>
                    <TableCell>₹50,000 - ₹1,00,000</TableCell>
                    <TableCell>₹6,50,000 - ₹12,50,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Private Medical Colleges (Management Quota)</TableCell>
                    <TableCell>₹12,00,000 - ₹20,00,000</TableCell>
                    <TableCell>₹1,00,000 - ₹1,50,000</TableCell>
                    <TableCell>₹1,00,000 - ₹2,00,000</TableCell>
                    <TableCell>₹14,00,000 - ₹23,50,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Deemed Universities</TableCell>
                    <TableCell>₹15,00,000 - ₹25,00,000</TableCell>
                    <TableCell>₹1,50,000 - ₹2,50,000</TableCell>
                    <TableCell>₹1,00,000 - ₹2,50,000</TableCell>
                    <TableCell>₹17,50,000 - ₹30,00,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">NRI Quota</TableCell>
                    <TableCell>$40,000 - $60,000</TableCell>
                    <TableCell>₹1,50,000 - ₹2,50,000</TableCell>
                    <TableCell>₹2,00,000 - ₹3,00,000</TableCell>
                    <TableCell>$40,000 + ₹3,50,000 - $60,000 + ₹5,50,000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-4 text-sm text-gray-500 text-center">
              <p>* Fees mentioned are approximate and may vary from college to college</p>
            </div>
          </div>
        </section>
        
        {/* NEET Cutoff Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                NEET Cutoff Trends for Maharashtra
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Historical NEET cutoff scores for medical colleges in Maharashtra.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">2023</TableHead>
                    <TableHead className="text-right">2022</TableHead>
                    <TableHead className="text-right">2021</TableHead>
                    <TableHead className="text-right">2020</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Open Category</TableCell>
                    <TableCell className="text-right">620-670</TableCell>
                    <TableCell className="text-right">600-650</TableCell>
                    <TableCell className="text-right">550-600</TableCell>
                    <TableCell className="text-right">540-590</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">SC</TableCell>
                    <TableCell className="text-right">520-550</TableCell>
                    <TableCell className="text-right">500-530</TableCell>
                    <TableCell className="text-right">480-510</TableCell>
                    <TableCell className="text-right">470-500</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">ST</TableCell>
                    <TableCell className="text-right">500-530</TableCell>
                    <TableCell className="text-right">480-510</TableCell>
                    <TableCell className="text-right">460-490</TableCell>
                    <TableCell className="text-right">450-480</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">OBC</TableCell>
                    <TableCell className="text-right">550-600</TableCell>
                    <TableCell className="text-right">530-580</TableCell>
                    <TableCell className="text-right">510-560</TableCell>
                    <TableCell className="text-right">500-550</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PH</TableCell>
                    <TableCell className="text-right">450-500</TableCell>
                    <TableCell className="text-right">430-480</TableCell>
                    <TableCell className="text-right">420-470</TableCell>
                    <TableCell className="text-right">410-460</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>
        
        {/* Admission Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Admission Process for MBBS in Maharashtra
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Step-by-step guide to securing admission in medical colleges in Maharashtra.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-medical-100 rounded-full w-10 h-10 flex items-center justify-center text-medical-700 font-bold">1</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">NEET Qualification</h3>
                    <p className="text-gray-600">Appear and qualify in the National Eligibility cum Entrance Test (NEET) with a valid score.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-medical-100 rounded-full w-10 h-10 flex items-center justify-center text-medical-700 font-bold">2</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Registration for State Counseling</h3>
                    <p className="text-gray-600">Register for the state counseling process conducted by Maharashtra CET Cell.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-medical-100 rounded-full w-10 h-10 flex items-center justify-center text-medical-700 font-bold">3</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Document Verification</h3>
                    <p className="text-gray-600">Submit and verify all required documents including domicile certificate, NEET scorecard, etc.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-medical-100 rounded-full w-10 h-10 flex items-center justify-center text-medical-700 font-bold">4</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Choice Filling</h3>
                    <p className="text-gray-600">Fill and lock your college preferences in order of priority during the choice filling period.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-medical-100 rounded-full w-10 h-10 flex items-center justify-center text-medical-700 font-bold">5</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Seat Allotment</h3>
                    <p className="text-gray-600">Seats are allotted based on NEET ranks, category, and preferences. Check the allotment status online.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-medical-100 rounded-full w-10 h-10 flex items-center justify-center text-medical-700 font-bold">6</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Fee Payment</h3>
                    <p className="text-gray-600">Pay the required tuition and admission fees as per the schedule to confirm your seat.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-medical-100 rounded-full w-10 h-10 flex items-center justify-center text-medical-700 font-bold">7</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Reporting to College</h3>
                    <p className="text-gray-600">Report to the allotted college with original documents within the specified timeframe.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-medical-100 rounded-full w-10 h-10 flex items-center justify-center text-medical-700 font-bold">8</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Medical Examination</h3>
                    <p className="text-gray-600">Undergo medical examination at the allotted college as part of the admission process.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Required Documents for Admission</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
                  <span>NEET Score Card</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
                  <span>10th & 12th Mark Sheets</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
                  <span>Domicile Certificate</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
                  <span>Category Certificate (if applicable)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
                  <span>ID Proof (Aadhaar Card)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
                  <span>Passport Size Photographs</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
                  <span>Transfer Certificate</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
                  <span>Migration Certificate</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-medical-600 to-medical-800 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Need Expert Guidance for MBBS in Maharashtra?
                </h2>
                <p className="text-lg opacity-90 mb-6">
                  Our counselors can help you navigate the complex admission process, choose the right college, and maximize your chances of securing a seat in Maharashtra's top medical colleges.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={`tel:${phoneNumber}`} className="bg-white text-medical-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition-all shadow-md hover:shadow-lg text-center">
                    Call Our Experts
                  </a>
                  <Link to="/about-contact" className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-md transition-all text-center">
                    Send Enquiry
                  </Link>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-xl text-gray-800">
                <h3 className="text-xl font-bold mb-4">Our Admission Assistance Services</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-medical-50 p-1 rounded-full">
                      <CalendarClock className="w-5 h-5 text-medical-600" />
                    </div>
                    <div>
                      <span className="font-semibold">College Selection Guidance</span>
                      <p className="text-sm text-gray-600">Get personalized recommendations based on your NEET score and preferences</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-medical-50 p-1 rounded-full">
                      <FileText className="w-5 h-5 text-medical-600" />
                    </div>
                    <div>
                      <span className="font-semibold">Documentation Support</span>
                      <p className="text-sm text-gray-600">Complete assistance with preparation and verification of required documents</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-medical-50 p-1 rounded-full">
                      <Users className="w-5 h-5 text-medical-600" />
                    </div>
                    <div>
                      <span className="font-semibold">Counseling Registration</span>
                      <p className="text-sm text-gray-600">Step-by-step guidance for state and All India counseling processes</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MBBSMaharashtra;
