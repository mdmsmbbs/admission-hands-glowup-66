
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ContactFormData {
  id?: number;
  email: string;
  phone_number: string;
  whatsapp_number: string;
}

interface ContactFormProps {
  contact: ContactFormData;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (field: string, value: string) => void;
}

const ContactForm = ({ contact, onSubmit, onChange }: ContactFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          value={contact.email}
          onChange={(e) => onChange('email', e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="phone_number">Phone Number</Label>
        <Input
          id="phone_number"
          value={contact.phone_number}
          onChange={(e) => onChange('phone_number', e.target.value)}
          required
        />
        <p className="text-xs text-gray-500 mt-1">Format: +919873133846</p>
      </div>
      <div>
        <Label htmlFor="whatsapp_number">WhatsApp Number</Label>
        <Input
          id="whatsapp_number"
          value={contact.whatsapp_number}
          onChange={(e) => onChange('whatsapp_number', e.target.value)}
          required
        />
        <p className="text-xs text-gray-500 mt-1">Format: +919873133846</p>
      </div>
      <Button type="submit">Update Contact Information</Button>
    </form>
  );
};

export default ContactForm;
