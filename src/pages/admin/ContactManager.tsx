
import { useEffect } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import AdminLayout from '@/components/admin/AdminLayout';
import ContactForm from '@/components/admin/contacts/ContactForm';
import { useContactInfo } from '@/hooks/useContactInfo';
import { Loader2 } from 'lucide-react';

const ContactManager = () => {
  const {
    contactInfo,
    isLoading,
    error,
    handleFormChange,
    handleSubmit,
    fetchContactInfo
  } = useContactInfo();

  useEffect(() => {
    fetchContactInfo();
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Contact Information</h1>
          <Button onClick={fetchContactInfo} variant="outline" size="sm">
            Refresh
          </Button>
        </div>
        
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {isLoading ? (
          <div className="flex justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin text-medical-600" />
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <ContactForm
              contact={contactInfo}
              onSubmit={handleSubmit}
              onChange={handleFormChange}
            />
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default ContactManager;
