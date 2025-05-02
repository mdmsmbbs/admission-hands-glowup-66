
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import type { RecommendedCollege, DeemedUniversity } from '@/types/colleges';

export function useRecommendedColleges() {
  const [colleges, setColleges] = useState<RecommendedCollege[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchColleges() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('recommended_colleges')
          .select('*')
          .order('name');

        if (error) throw error;
        setColleges(data || []);
      } catch (err) {
        console.error('Error fetching recommended colleges:', err);
        setError(err instanceof Error ? err : new Error('Failed to fetch colleges'));
        toast.error('Failed to load recommended colleges');
      } finally {
        setLoading(false);
      }
    }

    fetchColleges();
  }, []);

  return { colleges, loading, error };
}

export function useDeemedUniversities() {
  const [universities, setUniversities] = useState<DeemedUniversity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchUniversities() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('deemed_universities')
          .select('*')
          .order('name');

        if (error) throw error;
        setUniversities(data || []);
      } catch (err) {
        console.error('Error fetching deemed universities:', err);
        setError(err instanceof Error ? err : new Error('Failed to fetch universities'));
        toast.error('Failed to load deemed universities');
      } finally {
        setLoading(false);
      }
    }

    fetchUniversities();
  }, []);

  return { universities, loading, error };
}
