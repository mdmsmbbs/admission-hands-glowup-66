
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RecommendedCollegesManager from '@/components/admin/colleges/RecommendedCollegesManager';
import DeemedUniversitiesManager from '@/components/admin/colleges/DeemedUniversitiesManager';
import { GraduationCap, Shield } from 'lucide-react';

const CollegesManager: React.FC = () => {
  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Colleges Management</h1>
      </div>

      <Tabs defaultValue="recommended">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2 mb-8">
          <TabsTrigger value="recommended" className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            <span>Recommended Colleges</span>
          </TabsTrigger>
          <TabsTrigger value="universities" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>Deemed Universities</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="recommended">
          <RecommendedCollegesManager />
        </TabsContent>
        
        <TabsContent value="universities">
          <DeemedUniversitiesManager />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CollegesManager;
