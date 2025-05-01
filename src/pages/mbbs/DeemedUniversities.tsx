import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { University, GraduationCap, Book, MapPin, Users, FileText, Award, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const DeemedUniversities: React.FC = () => {
  const phoneNumber = "+919873133846";
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  // List of top deemed universities with real images
  const topDeemedUniversities = [
    { 
      name: "Manipal Academy of Higher Education", 
      location: "Karnataka", 
      seats: 250, 
      feesRange: "₹16,00,000 - ₹25,00,000",
      ranking: "Top 10",
      imageUrl: "https://images.shiksha.com/mediadata/images/1584606420phpapihnt.jpeg"
    },
    { 
      name: "KMC Manipal", 
      location: "Karnataka", 
      seats: 250, 
      feesRange: "₹22,00,000 - ₹30,00,000",
      ranking: "Top 5",
      imageUrl: "https://www.eduvidya.com/admin/Upload/Institutes/635383202261095546_KMC%20Manipal.jpg"
    },
    { 
      name: "KMC Mangalore", 
      location: "Karnataka", 
      seats: 250, 
      feesRange: "₹20,00,000 - ₹28,00,000",
      ranking: "Top 5",
      imageUrl: "https://www.kmcmangalore.com/wp-content/uploads/2021/08/kmc-campus.jpg"
    },
    { 
      name: "DY Patil University Mumbai", 
      location: "Maharashtra", 
      seats: 250, 
      feesRange: "₹20,00,000 - ₹27,00,000",
      ranking: "Top 15",
      imageUrl: "https://dypatil.edu/wp-content/uploads/2019/09/dypu-medical-college-mumbai.jpg"
    },
    { 
      name: "DY Patil University Pune", 
      location: "Maharashtra", 
      seats: 150, 
      feesRange: "₹19,50,000 - ₹26,00,000",
      ranking: "Top 15",
      imageUrl: "https://images.shiksha.ws/mediadata/images/1588147413phpjyuLvQ.jpeg"
    },
    { 
      name: "JNMC (KLE) Belgaum", 
      location: "Karnataka", 
      seats: 200, 
      feesRange: "₹18,50,000 - ₹25,00,000",
      ranking: "Top 20",
      imageUrl: "https://cdn.shortpixel.ai/spai/q_lossy+w_963+to_webp+ret_img/https://collegepsychology.org/wp-content/uploads/2021/10/Jawaharlal-Nehru-medical-college-campus-min-1024x388.jpg"
    },
    { 
      name: "MGM Mumbai", 
      location: "Maharashtra", 
      seats: 150, 
      feesRange: "₹19,00,000 - ₹26,00,000",
      ranking: "Top 20",
      imageUrl: "https://www.mgmmumbai.ac.in/images/mgmmcn.jpg"
    },
    { 
      name: "MGM Aurangabad", 
      location: "Maharashtra", 
      seats: 100, 
      feesRange: "₹17,00,000 - ₹24,00,000",
      ranking: "Top 25",
      imageUrl: "https://www.mgmocsaurangabad.ac.in/wp-content/uploads/2022/09/mgm-dental-college-building.jpg"
    },
    { 
      name: "Bharti Vidyapeeth Mumbai", 
      location: "Maharashtra", 
      seats: 100, 
      feesRange: "₹19,00,000 - ₹25,00,000",
      ranking: "Top 25",
      imageUrl: "https://www.bhavans.info/files/gallery/1596621281bharati-vidyapeeth-university-pune-maharashtra-140179.jpg"
    },
    { 
      name: "Bharti Vidyapeeth Pune", 
      location: "Maharashtra", 
      seats: 150, 
      feesRange: "₹18,00,000 - ₹24,00,000",
      ranking: "Top 20",
      imageUrl: "https://content.jdmagicbox.com/comp/pune/78/020p3003278/catalogue/bharati-vidyapeeth-pune-wut8a.jpg"
    },
    { 
      name: "PIMS Loni", 
      location: "Maharashtra", 
      seats: 150, 
      feesRange: "₹16,00,000 - ₹22,00,000",
      ranking: "Top 30",
      imageUrl: "https://www.pravara.com/pmsins/images/Kjj.jpg"
    },
    { 
      name: "Santosh Ghaziabad", 
      location: "Uttar Pradesh", 
      seats: 100, 
      feesRange: "₹15,00,000 - ₹21,00,000",
      ranking: "Top 40",
      imageUrl: "https://www.santosh.ac.in/wp-content/uploads/2019/05/college-building.jpg"
    },
    { 
      name: "MMU Ambala", 
      location: "Haryana", 
      seats: 150, 
      feesRange: "₹14,50,000 - ₹20,00,000",
      ranking: "Top 35",
      imageUrl: "https://www.mmumullana.org/wp-content/uploads/2022/06/campus-slider-10-1-scaled.jpg"
    },
    { 
      name: "IMS & SUM Bhubaneshwar", 
      location: "Odisha", 
      seats: 100, 
      feesRange: "₹16,50,000 - ₹23,00,000",
      ranking: "Top 35",
      imageUrl: "https://d2cyt36b7wnvt9.cloudfront.net/exams/wp-content/uploads/2018/09/27185054/IMS-and-SUM-Hospital-e1538055665929.jpg"
    },
    { 
      name: "Kalinga Bhubaneshwar", 
      location: "Odisha", 
      seats: 100, 
      feesRange: "₹15,50,000 - ₹21,50,000",
      ranking: "Top 40",
      imageUrl: "https://www.kims.ac.in/wp-content/uploads/2016/03/about-kims.jpg"
    },
    { 
      name: "Amrita Faridabad", 
      location: "Haryana", 
      seats: 150, 
      feesRange: "₹17,00,000 - ₹24,00,000",
      ranking: "Top 30",
      imageUrl: "https://amrita.edu/wp-content/uploads/2021/06/About-Amrita-Hospital-Faridabad-edited-1.jpg"
    },
    { 
      name: "Graphic Era Dehradun", 
      location: "Uttarakhand", 
      seats: 100, 
      feesRange: "₹16,00,000 - ₹22,00,000",
      ranking: "Top 40",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Graphic_Era_Hill_University%2C_Dehradun.jpg"
    },
    { 
      name: "Krishna Institute of Medical Sciences", 
      location: "Maharashtra", 
      seats: 200, 
      feesRange: "₹15,00,000 - ₹22,00,000",
      ranking: "Top 20",
      imageUrl: "https://kimskarad.in/wp-content/uploads/2018/08/KIMS-Front-View-1.png"
    },
    { 
      name: "KLE University", 
      location: "Karnataka", 
      seats: 150, 
      feesRange: "₹17,00,000 - ₹24,00,000",
      ranking: "Top 25",
      imageUrl: "https://www.careers360.com/uploads/previewimg/900-361/2019/10/14/kleu.jpg"
    },
    { 
      name: "Amrita Vishwa Vidyapeetham", 
      location: "Kerala & Tamil Nadu", 
      seats: 200, 
      feesRange: "₹16,00,000 - ₹23,00,000",
      ranking: "Top 10",
      imageUrl: "https://www.amrita.edu/wp-content/uploads/2023/05/Amrita-Vishwa-Vidyapeetham-Health-Sciences.jpg"
    },
    { 
      name: "Sri Ramachandra Medical College", 
      location: "Tamil Nadu", 
      seats: 150, 
      feesRange: "₹20,00,000 - ₹25,00,000",
      ranking: "Top 15",
      imageUrl: "https://www.sriramachandra.edu.in/medical/images/building1.jpg"
    },
    { 
      name: "Yenepoya University", 
      location: "Karnataka", 
      seats: 150, 
      feesRange: "₹15,00,000 - ₹20,00,000",
      ranking: "Top 30",
      imageUrl: "https://www.yenepoya.edu.in/sites/default/files/inline-images/yenepoya-deemed-to-be-university.jpg"
    },
    { 
      name: "Saveetha University", 
      location: "Tamil Nadu", 
      seats: 150, 
      feesRange: "₹18,00,000 - ₹23,00,000",
      ranking: "Top 30",
      imageUrl: "https://www.saveetha.com/images/2022/12/26/saveetha-medical-college-hospital.jpg"
    },
    { 
      name: "SRM Institute of Science and Technology", 
      location: "Tamil Nadu", 
      seats: 150, 
      feesRange: "₹20,00,000 - ₹25,00,000",
      ranking: "Top 20",
      imageUrl: "https://www.srmist.edu.in/wp-content/uploads/2022/02/campus-bg.webp"
    },
    { 
      name: "Dr. D.Y. Patil Vidyapeeth", 
      location: "Maharashtra", 
      seats: 250, 
      feesRange: "₹20,00,000 - ₹25,00,000",
      ranking: "Top 15",
      imageUrl: "https://www.dpu.edu.in/img/1-right.jpg"
    },
    { 
      name: "JSS Academy of Higher Education & Research", 
      location: "Karnataka", 
      seats: 200, 
      feesRange: "₹15,00,000 - ₹22,00,000",
      ranking: "Top 20",
      imageUrl: "https://jssuni.edu.in/JSSWeb/WebShowImage.aspx?MID=0&PID=10000&PicName=2.jpg"
    },
    { 
      name: "Vinayaka Mission's Research Foundation", 
      location: "Tamil Nadu", 
      seats: 150, 
      feesRange: "₹15,00,000 - ₹20,00,000",
      ranking: "Top 40",
      imageUrl: "https://vmrfdu.edu.in/wp-content/uploads/2023/02/VMRFDU-Medical-.jpg"
    }
  ];

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Deemed Universities for MBBS in India - AdmissionHands",
    "description": "Information about top deemed universities offering MBBS in India. Find details on fees, admissions, seats and NEET cutoffs.",
    "publisher": {
      "@type": "Organization",
      "name": "AdmissionHands",
      "logo": "https://lovable.dev/opengraph-image-p98pqg.png"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": topDeemedUniversities.map((uni, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": uni.name,
        "description": `MBBS at ${uni.name} located in ${uni.location} with approximately ${uni.seats} seats.`
      }))
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Deemed Universities for MBBS in India - AdmissionHands</title>
        <meta name="description" content="Find detailed information about MBBS in Deemed Universities across India. Complete guide to fees, seats, admission process, and NEET cutoffs for deemed universities." />
        <meta name="keywords" content="deemed universities, MBBS India, medical colleges, NEET cutoff, deemed university admission" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-medical-50 to-blue-100">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="max-w-2xl"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  MBBS in <span className="text-medical-600">Deemed Universities</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-6">
                  Comprehensive information about medical education in top deemed universities across India. Find details about fees, seats, and admission processes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={`tel:${phoneNumber}`} className="btn-primary text-center">
                    Get Expert Guidance
                  </a>
                  <a href="#top-universities" className="btn-outline text-center">
                    View Top Universities
                  </a>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-xl overflow-hidden shadow-xl"
              >
                <img 
                  src="https://images.shiksha.com/mediadata/images/1584606420phpapihnt.jpeg" 
                  alt="Deemed University Campus" 
                  className="w-full h-80 object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Key Information Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Understanding Deemed Universities
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Deemed universities possess academic, administrative, and financial autonomy, enabling them to design and implement their own curriculum independently.
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <div className="rounded-full bg-blue-50 w-16 h-16 flex items-center justify-center mb-4">
                  <University className="w-8 h-8 text-medical-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Autonomous Status</h3>
                <p className="text-gray-600">
                  Deemed universities have academic, administrative, and financial autonomy, allowing them to establish their own curriculum and admission criteria.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <div className="rounded-full bg-blue-50 w-16 h-16 flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 text-medical-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">All-India Quota</h3>
                <p className="text-gray-600">
                  Admissions to deemed universities for MBBS are conducted through All India Quota counseling, based on NEET scores.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <div className="rounded-full bg-blue-50 w-16 h-16 flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-medical-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence in Education</h3>
                <p className="text-gray-600">
                  Many deemed universities are known for their state-of-the-art infrastructure, quality education, and strong emphasis on research.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Top Universities */}
        <section id="top-universities" className="py-16 bg-gray-50">
          <div className="container-custom">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Top Deemed Universities for MBBS
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                These institutions are renowned for their medical education, infrastructure, and placement records.
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {topDeemedUniversities.map((university, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all h-full"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={university.imageUrl} 
                      alt={university.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2 text-medical-700">{university.name}</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-medical-500" />
                        <span>{university.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-medical-500" />
                        <span>Approx. {university.seats} seats</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-medical-500" />
                        <span>Fees: {university.feesRange} per year</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-medical-500" />
                        <span>Ranking: {university.ranking}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Admission Process */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Admission Process for Deemed Universities
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Understanding the step-by-step process for securing admission in deemed universities for MBBS.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1374&auto=format&fit=crop" 
                  alt="Deemed University Admission Process" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-6"
              >
                <motion.div variants={fadeIn} className="flex gap-4">
                  <div className="flex-shrink-0 bg-medical-100 rounded-full w-10 h-10 flex items-center justify-center text-medical-700 font-bold">1</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">NEET Qualification</h3>
                    <p className="text-gray-600">Qualify in NEET with a good score. The higher your rank, the better your chances of admission to top universities.</p>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="flex gap-4">
                  <div className="flex-shrink-0 bg-medical-100 rounded-full w-10 h-10 flex items-center justify-center text-medical-700 font-bold">2</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">DGHS Registration</h3>
                    <p className="text-gray-600">Register for counseling conducted by Directorate General of Health Services (DGHS) on the Medical Counseling Committee (MCC) website.</p>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="flex gap-4">
                  <div className="flex-shrink-0 bg-medical-100 rounded-full w-10 h-10 flex items-center justify-center text-medical-700 font-bold">3</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Choice Filling</h3>
                    <p className="text-gray-600">Fill your preferred deemed universities and courses in order of preference during the counseling rounds.</p>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="flex gap-4">
                  <div className="flex-shrink-0 bg-medical-100 rounded-full w-10 h-10 flex items-center justify-center text-medical-700 font-bold">4</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Seat Allotment</h3>
                    <p className="text-gray-600">Seats are allotted based on NEET rank, choices filled, and availability through multiple rounds of counseling.</p>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="flex gap-4">
                  <div className="flex-shrink-0 bg-medical-100 rounded-full w-10 h-10 flex items-center justify-center text-medical-700 font-bold">5</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Fee Payment & Reporting</h3>
                    <p className="text-gray-600">Upon seat allotment, pay the required fees and report to the university with all necessary documents for final admission.</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Advantages & Features */}
        <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container-custom">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advantages of Studying in Deemed Universities
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Deemed universities offer several unique benefits for aspiring medical professionals.
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <motion.div variants={fadeIn} className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="rounded-full bg-medical-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-medical-600" />
                </div>
                <h3 className="font-bold mb-2">International Exposure</h3>
                <p className="text-gray-600 text-sm">
                  Many deemed universities have international collaborations, providing students with global exposure and opportunities.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="rounded-full bg-medical-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Book className="w-6 h-6 text-medical-600" />
                </div>
                <h3 className="font-bold mb-2">Research Opportunities</h3>
                <p className="text-gray-600 text-sm">
                  Strong emphasis on research with dedicated centers, projects, and funding for student researchers.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="rounded-full bg-medical-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-medical-600" />
                </div>
                <h3 className="font-bold mb-2">Diverse Student Body</h3>
                <p className="text-gray-600 text-sm">
                  Students from across India and sometimes internationally, creating a culturally rich learning environment.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="rounded-full bg-medical-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-medical-600" />
                </div>
                <h3 className="font-bold mb-2">Quality Infrastructure</h3>
                <p className="text-gray-600 text-sm">
                  State-of-the-art facilities including advanced labs, libraries, and specialized training centers.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Common queries about MBBS admissions in deemed universities
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-3xl mx-auto space-y-4"
            >
              <motion.div variants={fadeIn} className="bg-white rounded-lg border border-gray-200">
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800">How are seats allocated in deemed universities?</h3>
                  <p className="mt-2 text-gray-600">
                    Seats are allocated based on NEET scores through centralized counseling conducted by DGHS. The higher your rank, the better your chances of getting your preferred university.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="bg-white rounded-lg border border-gray-200">
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800">What is the fee structure in deemed universities?</h3>
                  <p className="mt-2 text-gray-600">
                    Fees vary widely but typically range from ₹15 lakhs to ₹30 lakhs per annum. This includes tuition, hostel, and other charges. Some universities might offer scholarships based on merit or other criteria.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="bg-white rounded-lg border border-gray-200">
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800">Do deemed universities have management quota seats?</h3>
                  <p className="mt-2 text-gray-600">
                    No, deemed universities do not have a separate management quota. All admissions are based on NEET scores through centralized counseling conducted by DGHS.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="bg-white rounded-lg border border-gray-200">
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800">Can I get admission to a deemed university through state quotas?</h3>
                  <p className="mt-2 text-gray-600">
                    No, deemed universities do not have state quotas. All seats are filled through the All India Quota counseling conducted by DGHS.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-medical-600 to-medical-800 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Need Help with Deemed University Admissions?
                </h2>
                <p className="text-lg opacity-90 mb-6">
                  Our experts can guide you through the entire process, from university selection to final admission. Let us help you secure a seat in your dream medical college.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={`tel:${phoneNumber}`} className="bg-white text-medical-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition-all shadow-md hover:shadow-lg text-center">
                    Call For Expert Guidance
                  </a>
                  <a href="#top-universities" className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-md transition-all text-center">
                    Explore Universities
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-xl text-gray-800"
              >
                <h3 className="text-xl font-bold mb-4">Our Admission Support Services</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-medical-50 p-1 rounded-full">
                      <University className="w-5 h-5 text-medical-600" />
                    </div>
                    <div>
                      <span className="font-semibold">University Selection</span>
                      <p className="text-sm text-gray-600">Personalized recommendation based on your NEET score and preferences</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-medical-50 p-1 rounded-full">
                      <FileText className="w-5 h-5 text-medical-600" />
                    </div>
                    <div>
                      <span className="font-semibold">Documentation Support</span>
                      <p className="text-sm text-gray-600">Guidance for preparing all required documents for admission</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-medical-50 p-1 rounded-full">
                      <GraduationCap className="w-5 h-5 text-medical-600" />
                    </div>
                    <div>
                      <span className="font-semibold">Counseling Assistance</span>
                      <p className="text-sm text-gray-600">Step-by-step support during the counseling and admission process</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DeemedUniversities;
