
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const NRIFAQ = () => {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg">
            Get answers to commonly asked questions about NRI quota medical admissions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border border-gray-100">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-t-lg">
                What is NRI quota in medical colleges?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  NRI quota refers to seats reserved in medical colleges for Non-Resident Indians (NRIs), 
                  Person of Indian Origin (PIO), Overseas Citizens of India (OCI), and foreign nationals. 
                  Typically, 15% of seats in private and deemed universities are allocated under the NRI/Management quota.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm border border-gray-100">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-t-lg">
                Does every medical college have NRI quota seats?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  No, not all medical colleges offer NRI quota seats. Most private medical colleges, 
                  deemed universities, and some government medical colleges have NRI quota seats. 
                  The availability and number of seats vary by institution and are typically 
                  regulated by the respective state authorities or the institution itself.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm border border-gray-100">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-t-lg">
                Is NEET mandatory for NRI quota admissions?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Yes, as per the Supreme Court ruling, NEET qualification is mandatory for admission to 
                  medical courses in India, including through the NRI quota. However, some deemed universities 
                  may consider international qualifications like SAT, BMAT, or other equivalent exams for 
                  foreign nationals. It's important to check the specific requirements of each institution.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm border border-gray-100">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-t-lg">
                Can a student sponsored by an NRI apply under NRI quota?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Yes, many institutions accept NRI-sponsored candidates. Typically, the sponsor must be 
                  a blood relative (parent, sibling, or in some cases first cousin, uncle, or aunt). 
                  The specific relationship requirements vary by institution, so it's important to check 
                  each college's guidelines. Documentation proving the relationship and the sponsor's 
                  NRI status will be required.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="bg-white rounded-lg shadow-sm border border-gray-100">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-t-lg">
                What documents are required to prove NRI status?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Common documents required to prove NRI status include:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Valid passport with visa stamps</li>
                  <li>Overseas address proof</li>
                  <li>Employment/business proof in a foreign country</li>
                  <li>NRI bank account statements</li>
                  <li>Tax residency certificate or other tax documents from the foreign country</li>
                  <li>OCI/PIO card (if applicable)</li>
                </ul>
                <p className="mt-2 text-gray-700">
                  For NRI-sponsored candidates, additional documents like relationship proof, 
                  affidavits, and sponsorship letters will be required.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="bg-white rounded-lg shadow-sm border border-gray-100">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-t-lg">
                How much higher are NRI quota fees compared to regular fees?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  NRI quota fees are typically 2-3 times higher than regular management quota fees. 
                  The exact difference varies by institution. While regular management quota seats 
                  may cost between ₹10-15 lakhs per year, NRI quota seats often range from ₹15-40 lakhs 
                  per year depending on the institution's reputation and location.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7" className="bg-white rounded-lg shadow-sm border border-gray-100">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-t-lg">
                Is there a specific cutoff for NRI quota in NEET?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  While NRI quota candidates must qualify NEET (typically by scoring above the minimum 
                  qualifying percentile), the cutoffs for NRI quota are generally lower than regular merit 
                  seats. However, this varies by institution and state. Some prestigious private colleges 
                  may have higher cutoffs even for NRI quota due to competition. It's advisable to aim 
                  for a good NEET score to have more options.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8" className="bg-white rounded-lg shadow-sm border border-gray-100">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-t-lg">
                Are there any additional entrance exams for NRI quota?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Generally, no additional entrance exams are required for NRI quota admissions beyond NEET. 
                  However, some deemed universities may conduct their own interviews or assessment processes. 
                  Some institutions accepting foreign nationals might consider international test scores 
                  like SAT, BMAT, or MCAT, especially for candidates who haven't taken NEET.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-9" className="bg-white rounded-lg shadow-sm border border-gray-100">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-t-lg">
                Can NRI quota students transfer to regular seats later?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  No, once admitted under the NRI quota, students cannot typically transfer to regular 
                  seats. The admission category remains the same throughout the duration of the course. 
                  This also applies to the fee structure, which will continue as per the NRI quota rates 
                  for all years of study.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-10" className="bg-white rounded-lg shadow-sm border border-gray-100">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-t-lg">
                What are the advantages of NRI quota admissions?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Key advantages include:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Higher chances of securing a medical seat with relatively lower competition</li>
                  <li>Option to get into better colleges that might be out of reach through regular merit</li>
                  <li>Simpler admission process with fewer rounds of counseling</li>
                  <li>More direct access to college authorities for admission inquiries</li>
                  <li>Same quality of education and degree as regular quota students</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default NRIFAQ;
