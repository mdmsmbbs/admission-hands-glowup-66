
import React from 'react';
import { motion } from 'framer-motion';
import TermsSection from './TermsSection';
import { 
  Info, 
  FileCheck, 
  Library, 
  File, 
  AlertTriangle, 
  Shield, 
  FileText 
} from 'lucide-react';

interface TermsOfServiceProps {
  currentDate: string;
}

const TermsOfService = ({ currentDate }: TermsOfServiceProps) => {
  return (
    <div className="space-y-4">
      <motion.div 
        className="text-center mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <span className="block text-xs text-gray-500 mb-1">Effective Date</span>
        <span className="text-medical-600 font-semibold">{currentDate}</span>
      </motion.div>
      
      <div className="prose prose-sm max-w-none">
        <p className="text-base text-center text-gray-700 mb-4 max-w-2xl mx-auto">
          Welcome to Admission Hands. By accessing or using our website and services, 
          you agree to comply with and be bound by the following Terms and Conditions. 
          Please read them carefully.
        </p>
      </div>
      
      <div className="grid gap-4">
        <TermsSection id="introduction" title="Introduction" icon={Info} index={1}>
          <p className="text-sm">
            Admission Hands ("we", "our", or "us") provides consultancy services for MBBS 
            admissions in India. These terms govern your use of our website 
            (www.admissionhands.com) and all associated services provided.
          </p>
        </TermsSection>
        
        <TermsSection id="eligibility" title="Eligibility" icon={FileCheck} index={2}>
          <p className="text-sm">
            You must be at least 18 years old or have parental/guardian consent to use our services. 
            By using our site, you represent and warrant that you meet all eligibility requirements.
          </p>
        </TermsSection>
        
        <TermsSection id="services" title="Services Provided" icon={Library} index={3}>
          <p className="text-sm">We assist students and parents with:</p>
          <ul className="list-disc pl-4 space-y-0.5 mt-1">
            <li className="text-sm">MBBS admissions guidance in India</li>
            <li className="text-sm">College selection support</li>
            <li className="text-sm">Counseling and application processing</li>
            <li className="text-sm">Documentation and admission updates</li>
          </ul>
          <p className="bg-gray-50 p-3 rounded-lg mt-2 text-xs italic">
            Note: We are not affiliated with any government or private medical college. 
            We do not guarantee admission but offer expert consultancy to improve your 
            chances based on eligibility and merit.
          </p>
        </TermsSection>
        
        <TermsSection id="fees" title="Fees and Payments" icon={File} index={4}>
          <p className="text-sm">
            All fees for our services will be clearly communicated before engagement. 
            Once services have commenced, fees are non-refundable, unless otherwise agreed in writing.
          </p>
        </TermsSection>
        
        <TermsSection id="accuracy" title="Accuracy of Information" icon={Info} index={5}>
          <p className="text-sm">
            While we strive to provide accurate and updated information, Admission Hands 
            is not responsible for any changes in admission criteria, college regulations, 
            or government policies. Clients are encouraged to verify critical information independently.
          </p>
        </TermsSection>
        
        <TermsSection id="responsibility" title="Client Responsibility" icon={AlertTriangle} index={6}>
          <p className="text-sm">Clients are responsible for:</p>
          <ul className="list-disc pl-4 space-y-0.5 mt-1">
            <li className="text-sm">Providing accurate personal and academic information</li>
            <li className="text-sm">Following timelines for applications and documentation</li>
            <li className="text-sm">Complying with the rules of colleges and regulatory authorities (e.g., NMC, MCC, etc.)</li>
          </ul>
        </TermsSection>
        
        <TermsSection id="liability" title="Limitation of Liability" icon={Shield} index={7}>
          <p className="text-sm">
            We are not liable for any loss, damage, or delay caused by third parties, 
            institutions, or regulatory changes beyond our control. Admission Hands is 
            a consulting service only and does not promise or ensure admission.
          </p>
        </TermsSection>
        
        <TermsSection id="privacy-summary" title="Privacy Policy" icon={Shield} index={8}>
          <p className="text-sm">
            We respect your privacy. Any personal information collected will be used solely 
            for consultancy purposes and will not be shared with third parties without your consent. 
            Please review our full Privacy Policy for more details.
          </p>
        </TermsSection>
        
        <TermsSection id="intellectual" title="Intellectual Property" icon={FileText} index={9}>
          <p className="text-sm">
            All content on this site, including text, graphics, logos, and images, 
            is the property of Admission Hands and may not be reused or republished 
            without written permission.
          </p>
        </TermsSection>
        
        <TermsSection id="modifications" title="Modifications" icon={FileText} index={10}>
          <p className="text-sm">
            We reserve the right to update these Terms at any time. Continued use of our 
            website and services after changes implies acceptance of the new terms.
          </p>
        </TermsSection>
      </div>
    </div>
  );
};

export default TermsOfService;
