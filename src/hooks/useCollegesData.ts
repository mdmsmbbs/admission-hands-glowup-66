
import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import type { RecommendedCollege, DeemedUniversity } from '@/types/colleges';

export function useRecommendedColleges() {
  const [colleges, setColleges] = useState<RecommendedCollege[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const isMounted = useRef(true);

  const fetchColleges = useCallback(async () => {
    try {
      setLoading(true);
      // Use type assertion to fix TypeScript errors with the recently created table
      const { data, error } = await supabase
        .from('recommended_colleges')
        .select('*')
        .order('name') as unknown as { data: RecommendedCollege[] | null, error: Error | null };

      if (error) throw error;
      
      // Only update state if component is still mounted
      if (isMounted.current) {
        setColleges(data || []);
      }
    } catch (err) {
      console.error('Error fetching recommended colleges:', err);
      if (isMounted.current) {
        setError(err instanceof Error ? err : new Error('Failed to fetch colleges'));
        toast.error('Failed to load recommended colleges');
      }
    } finally {
      if (isMounted.current) {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    fetchColleges();
    
    return () => {
      isMounted.current = false;
    };
  }, [fetchColleges]);

  return { colleges, loading, error, refetch: fetchColleges };
}

export function useDeemedUniversities() {
  const [universities, setUniversities] = useState<DeemedUniversity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const isMounted = useRef(true);

  const fetchUniversities = useCallback(async () => {
    try {
      setLoading(true);
      
      // Use type assertion to fix TypeScript errors with the recently created table
      const { data, error } = await supabase
        .from('deemed_universities')
        .select('*')
        .order('name') as unknown as { data: DeemedUniversity[] | null, error: Error | null };

      if (error) throw error;
      
      // Only update state if component is still mounted
      if (isMounted.current) {
        setUniversities(data || []);
      }
    } catch (err) {
      console.error('Error fetching deemed universities:', err);
      if (isMounted.current) {
        setError(err instanceof Error ? err : new Error('Failed to fetch universities'));
        toast.error('Failed to load deemed universities');
      }
    } finally {
      if (isMounted.current) {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    fetchUniversities();
    
    return () => {
      isMounted.current = false;
    };
  }, [fetchUniversities]);

  return { universities, loading, error, refetch: fetchUniversities };
}
