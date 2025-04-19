
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface AlertFormData {
  title: string;
  link: string;
  image_url: string;
  is_active: boolean;
  order_index: number;
}

interface AlertFormProps {
  alert: AlertFormData;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (field: string, value: string | number | boolean) => void;
}

const AlertForm = ({ alert, onSubmit, onChange }: AlertFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={alert.title}
          onChange={(e) => onChange('title', e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="link">Link</Label>
        <Input
          id="link"
          value={alert.link}
          onChange={(e) => onChange('link', e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="image_url">Image URL</Label>
        <Input
          id="image_url"
          value={alert.image_url}
          onChange={(e) => onChange('image_url', e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="order">Order Index</Label>
        <Input
          id="order"
          type="number"
          value={alert.order_index}
          onChange={(e) => onChange('order_index', parseInt(e.target.value))}
          required
        />
      </div>
      <Button type="submit">Create Alert</Button>
    </form>
  );
};

export default AlertForm;
