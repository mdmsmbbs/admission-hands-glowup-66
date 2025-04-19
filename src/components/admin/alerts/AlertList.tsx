
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

interface Alert {
  id: number;
  title: string;
  link: string;
  image_url?: string;
  is_active: boolean;
  order_index: number;
}

interface AlertListProps {
  alerts: Alert[];
  onToggleActive: (id: number, currentStatus: boolean) => void;
  onDelete: (id: number) => void;
}

const AlertList = ({ alerts, onToggleActive, onDelete }: AlertListProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Link</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {alerts.map((alert) => (
          <TableRow key={alert.id}>
            <TableCell>{alert.order_index}</TableCell>
            <TableCell>{alert.title}</TableCell>
            <TableCell>{alert.link}</TableCell>
            <TableCell>
              <Button
                variant={alert.is_active ? "default" : "secondary"}
                onClick={() => onToggleActive(alert.id, alert.is_active)}
              >
                {alert.is_active ? 'Active' : 'Inactive'}
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="destructive"
                onClick={() => onDelete(alert.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AlertList;
