
import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const NRIEligibility = () => {
  return (
    <section id="eligibility" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">NRI Quota Eligibility Criteria</h2>
          <p className="text-gray-600 text-lg">
            Understanding who qualifies for NRI quota seats is crucial for a successful application process
          </p>
        </div>

        <Tabs defaultValue="nri" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="nri">NRI</TabsTrigger>
            <TabsTrigger value="nri-sponsored">NRI Sponsored</TabsTrigger>
            <TabsTrigger value="oci-pio">OCI/PIO</TabsTrigger>
            <TabsTrigger value="foreign">Foreign Nationals</TabsTrigger>
          </TabsList>
          
          <TabsContent value="nri" className="mt-6 p-6 bg-white rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Non-Resident Indians (NRI)</h3>
            <p className="mb-4 text-gray-700">
              An Indian citizen who is ordinarily residing outside India and holds an Indian Passport.
            </p>
            
            <div className="space-y-3 mt-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p>Must hold an Indian passport</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p>Should be ordinarily residing outside India</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p>NEET qualification (for most colleges)</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p>Must have completed 10+2 with Physics, Chemistry, and Biology</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-medical-800 font-medium">
                Required documents: NRI status certificate, passport copies, visa stamps, bank statements showing foreign transactions
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="nri-sponsored" className="mt-6 p-6 bg-white rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">NRI Sponsored Candidates</h3>
            <p className="mb-4 text-gray-700">
              Indian nationals who are sponsored by an NRI relative (typically blood relations only).
            </p>
            
            <div className="space-y-3 mt-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p>Student must be an Indian national</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p>Must have a blood relation with the NRI sponsor (typically up to specific relation degrees)</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p>NEET qualification required</p>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <p>Distant relatives or friends are typically not acceptable as sponsors</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-medical-800 font-medium">
                Required documents: Sponsor's NRI proof, affidavit of relationship, sponsorship letter, NEET scorecard
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="oci-pio" className="mt-6 p-6 bg-white rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">OCI/PIO Card Holders</h3>
            <p className="mb-4 text-gray-700">
              Overseas Citizen of India (OCI) or Person of Indian Origin (PIO) card holders.
            </p>
            
            <div className="space-y-3 mt-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p>Must hold a valid OCI or PIO card</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p>NEET qualification (for most colleges)</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p>Must have completed 10+2 with PCB subjects</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-medical-800 font-medium">
                Required documents: OCI/PIO card, foreign passport, 10+2 mark sheets, NEET score card (if applicable)
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="foreign" className="mt-6 p-6 bg-white rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Foreign Nationals</h3>
            <p className="mb-4 text-gray-700">
              Non-Indian citizens who wish to study medicine in India.
            </p>
            
            <div className="space-y-3 mt-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p>Must hold a foreign passport</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p>NEET qualification (for most institutions)</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p>Equivalent of 10+2 education with Physics, Chemistry, and Biology</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-medical-800 font-medium">
                Required documents: Foreign passport, visa, 10+2 equivalent mark sheets, NEET score card (if applicable)
              </p>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 bg-gray-50 p-6 rounded-xl max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-3">General Academic Requirements</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Minimum 50% marks in Physics, Chemistry, and Biology (PCB) in 10+2</li>
            <li>Qualified NEET-UG score (for most institutions)</li>
            <li>Age between 17-25 years (with relaxation for reserved categories)</li>
            <li>English language proficiency</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NRIEligibility;
