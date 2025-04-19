
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

// Define a type for valid table names based on what's in the database
type ValidTableName = "live_alerts" | "mbbs_states" | "videos";

interface CrudInterfaceProps {
  data: any[];
  tableName: ValidTableName; // Now tableName must be one of these values
  columns: string[];
  onEdit: (record: any) => void;
  onDelete: (id: number) => void; // Changed to only accept number type
  refreshData: () => void;
}

const CrudInterface: React.FC<CrudInterfaceProps> = ({
  data,
  tableName,
  columns,
  onEdit,
  onDelete,
  refreshData
}) => {
  const handleDelete = async (id: number) => {
    try {
      const { error } = await supabase
        .from(tableName)
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast.success('Record deleted successfully');
      refreshData();
    } catch (error) {
      console.error('Error deleting record:', error);
      toast.error('Failed to delete record');
    }
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column} className="capitalize">
                {column.replace(/_/g, ' ')}
              </TableHead>
            ))}
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((record) => (
            <TableRow key={record.id}>
              {columns.map((column) => (
                <TableCell key={`${record.id}-${column}`}>
                  {typeof record[column] === 'boolean' 
                    ? record[column] ? 'Yes' : 'No'
                    : String(record[column]).substring(0, 100)}
                </TableCell>
              ))}
              <TableCell className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => onEdit(record)}
                  className="h-8 w-8"
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => handleDelete(record.id)}
                  className="h-8 w-8"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CrudInterface;
