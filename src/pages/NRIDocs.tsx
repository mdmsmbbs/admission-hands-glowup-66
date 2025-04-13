
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Download, FileText, AlertTriangle } from 'lucide-react';

const NRIDocs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-medical-50 to-blue-50 py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Essential Documents for NRI Quota Admission
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Complete guide to documentation requirements for NRI, NRI-sponsored, OCI/PIO, and foreign national candidates
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container-custom max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm mb-8">
                    <h3 className="text-xl font-semibold mb-4">Document Categories</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="#essential" className="text-medical-600 hover:text-medical-800 font-medium flex items-center">
                          <span className="w-2 h-2 bg-medical-500 rounded-full mr-2"></span>
                          Essential Documents
                        </a>
                      </li>
                      <li>
                        <a href="#category-wise" className="text-medical-600 hover:text-medical-800 font-medium flex items-center">
                          <span className="w-2 h-2 bg-medical-500 rounded-full mr-2"></span>
                          Category-wise Documents
                        </a>
                      </li>
                      <li>
                        <a href="#financial" className="text-medical-600 hover:text-medical-800 font-medium flex items-center">
                          <span className="w-2 h-2 bg-medical-500 rounded-full mr-2"></span>
                          Financial Documents
                        </a>
                      </li>
                      <li>
                        <a href="#translation" className="text-medical-600 hover:text-medical-800 font-medium flex items-center">
                          <span className="w-2 h-2 bg-medical-500 rounded-full mr-2"></span>
                          Translation & Attestation
                        </a>
                      </li>
                      <li>
                        <a href="#checklists" className="text-medical-600 hover:text-medical-800 font-medium flex items-center">
                          <span className="w-2 h-2 bg-medical-500 rounded-full mr-2"></span>
                          Document Checklists
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-medical-50 p-6 rounded-xl border border-medical-100">
                    <h3 className="text-lg font-semibold mb-3">Need Help with Documentation?</h3>
                    <p className="text-gray-700 mb-4">
                      Our experts can help you prepare the right documents for your NRI quota application.
                    </p>
                    <a 
                      href="#" 
                      className="bg-medical-600 text-white px-4 py-2 rounded-lg inline-block hover:bg-medical-700 transition-colors"
                    >
                      Get Document Assistance
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2 space-y-16">
                {/* Essential Documents Section */}
                <div id="essential" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Essential Documents for All Candidates</h2>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="bg-medical-100 text-medical-600 p-2.5 rounded-lg flex-shrink-0 mt-1">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Academic Documents</h4>
                        <ul className="mt-2 space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>10th & 12th Mark Sheets and Certificates</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>NEET Score Card (for most institutions)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>School Leaving Certificate / Transfer Certificate</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>Migration Certificate (if applicable)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="bg-medical-100 text-medical-600 p-2.5 rounded-lg flex-shrink-0 mt-1">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Personal Identification</h4>
                        <ul className="mt-2 space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>Passport (all pages including blank pages)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>Birth Certificate</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>Aadhar Card (for Indian Nationals)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>Recent Passport-sized Photographs (usually 8-10)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="bg-medical-100 text-medical-600 p-2.5 rounded-lg flex-shrink-0 mt-1">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Medical Documents</h4>
                        <ul className="mt-2 space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>Medical Fitness Certificate</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>Blood Group Report</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>Vaccination Records (as required by the institution)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Category-wise Documents Section */}
                <div id="category-wise" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Category-wise Required Documents</h2>
                  
                  <div className="space-y-10">
                    {/* NRI Candidate */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                      <h3 className="text-xl font-semibold mb-4 text-medical-700">For NRI Candidates</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Valid Passport with Visa stamps</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>NRI Status Certificate / NRI Certificate from Indian Embassy</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Overseas Address Proof (Utility bills, rental agreement, etc.)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Work Permit / Residence Permit of foreign country</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Employment Certificate / Business ownership proof in foreign country</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Tax Residency Certificate of foreign country</span>
                        </li>
                      </ul>
                    </div>
                    
                    {/* NRI Sponsored */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                      <h3 className="text-xl font-semibold mb-4 text-teal-700">For NRI-Sponsored Candidates</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>All documents required for the NRI sponsor (as listed above)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Sponsorship Letter / Affidavit from the NRI relative</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Relationship Proof between candidate and sponsor (Birth certificates, marriage certificates, etc.)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Notarized affidavit declaring relationship and sponsorship</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700"><span className="font-medium">Note:</span> Some institutions have specific requirements about who can sponsor (e.g., only parents/siblings/grandparents)</span>
                        </li>
                      </ul>
                    </div>
                    
                    {/* OCI/PIO */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                      <h3 className="text-xl font-semibold mb-4 text-indigo-700">For OCI/PIO Card Holders</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Valid OCI/PIO Card</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Foreign passport</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Proof of Indian Origin (if applying as PIO)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Parent's old Indian Passport or Birth Certificate showing Indian origin (if applicable)</span>
                        </li>
                      </ul>
                    </div>
                    
                    {/* Foreign */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                      <h3 className="text-xl font-semibold mb-4 text-purple-700">For Foreign Nationals</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Foreign Passport with valid Indian Visa</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Equivalent of 10+2 certificates with marks sheets</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>English proficiency proof (if from non-English speaking country)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>NEET Score Card (if applicable) or other qualifying exam scores</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Financial Documents Section */}
                <div id="financial" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Financial Documents</h2>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="bg-medical-100 text-medical-600 p-2.5 rounded-lg flex-shrink-0 mt-1">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Bank Statements & Financial Capacity Proof</h4>
                        <ul className="mt-2 space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>NRI Bank Account Statements (usually for the last 6 months)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>Salary Slips / Income Proof of NRI/Sponsor</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>Income Tax Returns of NRI/Sponsor (if applicable)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>Fixed Deposit Receipts (if any)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>Fund Transfer Proof for Fee Payment (when applicable)</span>
                          </li>
                        </ul>
                        <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                          <p className="text-blue-800 text-sm flex gap-2">
                            <AlertTriangle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                            <span>
                              Most institutions require proof of financial capacity to cover the entire course fee. 
                              Ensure bank statements show sufficient funds or a financial guarantee letter from your bank.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Translation & Attestation */}
                <div id="translation" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Document Translation & Attestation</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                      <h3 className="text-xl font-semibold mb-4">Translation Requirements</h3>
                      <p className="mb-4 text-gray-700">
                        All documents in languages other than English must be officially translated:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Translation must be done by an authorized translator</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Both original document and translated copy must be submitted</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Translation must include translator's certification and contact information</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                      <h3 className="text-xl font-semibold mb-4">Document Attestation</h3>
                      <p className="mb-4 text-gray-700">
                        Most documents require proper attestation from authorized authorities:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Academic documents typically require attestation from the issuing institution</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Foreign documents may need Apostille or authentication from the Indian Embassy/Consulate</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Affidavits must be notarized by appropriate authorities</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Self-attestation required on photocopies of original documents</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Document Checklists */}
                <div id="checklists" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Document Checklists</h2>
                  
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      To help you prepare for your NRI quota application, we've created comprehensive checklists 
                      that you can download and use to ensure you have all required documents ready.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <a 
                        href="#" 
                        className="flex items-center justify-between bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="bg-medical-100 text-medical-600 p-3 rounded-lg group-hover:bg-medical-200 transition-colors">
                            <FileText size={24} />
                          </div>
                          <div>
                            <h4 className="font-semibold">NRI Candidate Checklist</h4>
                            <p className="text-gray-500 text-sm">PDF, 2 pages</p>
                          </div>
                        </div>
                        <Download className="text-gray-400 group-hover:text-medical-600 transition-colors" />
                      </a>
                      
                      <a 
                        href="#" 
                        className="flex items-center justify-between bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="bg-teal-100 text-teal-600 p-3 rounded-lg group-hover:bg-teal-200 transition-colors">
                            <FileText size={24} />
                          </div>
                          <div>
                            <h4 className="font-semibold">NRI-Sponsored Checklist</h4>
                            <p className="text-gray-500 text-sm">PDF, 3 pages</p>
                          </div>
                        </div>
                        <Download className="text-gray-400 group-hover:text-teal-600 transition-colors" />
                      </a>
                      
                      <a 
                        href="#" 
                        className="flex items-center justify-between bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg group-hover:bg-indigo-200 transition-colors">
                            <FileText size={24} />
                          </div>
                          <div>
                            <h4 className="font-semibold">OCI/PIO Checklist</h4>
                            <p className="text-gray-500 text-sm">PDF, 2 pages</p>
                          </div>
                        </div>
                        <Download className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
                      </a>
                      
                      <a 
                        href="#" 
                        className="flex items-center justify-between bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="bg-purple-100 text-purple-600 p-3 rounded-lg group-hover:bg-purple-200 transition-colors">
                            <FileText size={24} />
                          </div>
                          <div>
                            <h4 className="font-semibold">Foreign Nationals Checklist</h4>
                            <p className="text-gray-500 text-sm">PDF, 2 pages</p>
                          </div>
                        </div>
                        <Download className="text-gray-400 group-hover:text-purple-600 transition-colors" />
                      </a>
                    </div>
                    
                    <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 mt-8">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-amber-800 mb-2">Important Note</h4>
                          <p className="text-amber-700 text-sm">
                            Document requirements can vary significantly between different medical colleges and universities. 
                            Always check the specific requirements published by the institution you are applying to. 
                            Our checklists provide a comprehensive overview, but individual institutions may have additional requirements.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NRIDocs;
