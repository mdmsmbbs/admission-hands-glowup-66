import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Loader2, Save, Trash } from 'lucide-react';

const Admin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [siteContent, setSiteContent] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [stats, setStats] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  
  // Check if user is already authenticated
  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      if (data?.session) {
        setIsAuthenticated(true);
      }
    };
    
    checkAuth();
  }, []);

  // Login function
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) {
        throw error;
      }
      
      if (data?.user) {
        setIsAuthenticated(true);
        toast.success('Login successful');
      }
    } catch (error: any) {
      console.error('Login error:', error);
      toast.error(error.message || 'Login failed');
    } finally {
      setIsAuthLoading(false);
    }
  };

  // Logout function
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
    toast.success('Logged out successfully');
  };

  // Fetch content data
  const fetchContent = async () => {
    setIsLoading(true);
    
    try {
      // Fetch site content
      const { data: contentData, error: contentError } = await supabase
        .from('site_content')
        .select('*')
        .order('order_index');
        
      if (contentError) throw contentError;
      setSiteContent(contentData || []);

      // Fetch services
      const { data: servicesData, error: servicesError } = await supabase
        .from('services')
        .select('*')
        .order('order_index');
        
      if (servicesError) throw servicesError;
      setServices(servicesData || []);

      // Fetch stats
      const { data: statsData, error: statsError } = await supabase
        .from('stats')
        .select('*')
        .order('order_index');
        
      if (statsError) throw statsError;
      setStats(statsData || []);

      // Fetch testimonials
      const { data: testimonialsData, error: testimonialsError } = await supabase
        .from('testimonials')
        .select('*');
        
      if (testimonialsError) throw testimonialsError;
      setTestimonials(testimonialsData || []);
    } catch (error: any) {
      console.error('Error fetching content:', error);
      toast.error('Failed to load content');
    } finally {
      setIsLoading(false);
    }
  };

  // Load content when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchContent();
    }
  }, [isAuthenticated]);

  // Update content item
  const updateContent = async (table: string, id: string, data: any) => {
    try {
      const { error } = await supabase
        .from(table)
        .update(data)
        .eq('id', id);
        
      if (error) throw error;
      
      toast.success('Content updated successfully');
      fetchContent();
    } catch (error: any) {
      console.error('Update error:', error);
      toast.error(error.message || 'Failed to update content');
    }
  };

  // Delete content item
  const deleteContent = async (table: string, id: string) => {
    try {
      const { error } = await supabase
        .from(table)
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      
      toast.success('Content deleted successfully');
      fetchContent();
    } catch (error: any) {
      console.error('Delete error:', error);
      toast.error(error.message || 'Failed to delete content');
    }
  };

  // Add new content item
  const addContent = async (table: string, data: any) => {
    try {
      const { error } = await supabase
        .from(table)
        .insert([data]);
        
      if (error) throw error;
      
      toast.success('Content added successfully');
      fetchContent();
    } catch (error: any) {
      console.error('Add error:', error);
      toast.error(error.message || 'Failed to add content');
    }
  };

  // Login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <Helmet>
          <title>Admin Login - AdmissionHands</title>
        </Helmet>
        <Header />
        <main className="flex-grow flex items-center justify-center bg-gray-50 py-12">
          <Card className="w-full max-w-md mx-4">
            <CardHeader>
              <CardTitle>Admin Login</CardTitle>
              <CardDescription>
                Sign in to access the admin dashboard.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleLogin}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={isAuthLoading}>
                  {isAuthLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Logging in...
                    </>
                  ) : (
                    'Login'
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  // Admin dashboard
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Admin Dashboard - AdmissionHands</title>
      </Helmet>
      <Header />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <Button variant="outline" onClick={handleLogout}>Logout</Button>
          </div>
          
          <Tabs defaultValue="site_content">
            <TabsList className="mb-6">
              <TabsTrigger value="site_content">Site Content</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="stats">Stats</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            </TabsList>
            
            {/* Site Content Tab */}
            <TabsContent value="site_content">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Site Content</h2>
                  <Button 
                    onClick={() => {
                      // Simple implementation - expand with a modal form in production
                      const key = window.prompt('Enter content key (e.g., hero_title):');
                      if (key) {
                        addContent('site_content', {
                          key,
                          content_type: 'text',
                          title: '',
                          description: '',
                          order_index: siteContent.length
                        });
                      }
                    }}
                  >
                    Add Content
                  </Button>
                </div>
                
                {isLoading ? (
                  <p>Loading content...</p>
                ) : (
                  <div className="grid gap-4">
                    {siteContent.map((item) => (
                      <Card key={item.id}>
                        <CardHeader>
                          <CardTitle className="text-lg">{item.key}</CardTitle>
                          <CardDescription>Type: {item.content_type}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor={`title-${item.id}`}>Title</Label>
                              <Input
                                id={`title-${item.id}`}
                                defaultValue={item.title || ''}
                                onChange={(e) => {
                                  item.title = e.target.value;
                                }}
                              />
                            </div>
                            <div>
                              <Label htmlFor={`desc-${item.id}`}>Description</Label>
                              <Textarea
                                id={`desc-${item.id}`}
                                defaultValue={item.description || ''}
                                onChange={(e) => {
                                  item.description = e.target.value;
                                }}
                              />
                            </div>
                            {item.content_type === 'image' && (
                              <div>
                                <Label htmlFor={`image-${item.id}`}>Image URL</Label>
                                <Input
                                  id={`image-${item.id}`}
                                  defaultValue={item.image_url || ''}
                                  onChange={(e) => {
                                    item.image_url = e.target.value;
                                  }}
                                />
                                {item.image_url && (
                                  <div className="mt-2">
                                    <img 
                                      src={item.image_url} 
                                      alt="Content preview" 
                                      className="max-h-40 rounded-md"
                                    />
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </CardContent>
                        <CardFooter className="justify-between">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => updateContent('site_content', item.id, item)}
                          >
                            <Save className="mr-2 h-4 w-4" />
                            Save
                          </Button>
                          
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="destructive" size="sm">
                                <Trash className="mr-2 h-4 w-4" />
                                Delete
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  This will permanently delete this content item.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => deleteContent('site_content', item.id)}
                                >
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>
            
            {/* Other tabs would be similar but customized for each content type */}
            <TabsContent value="services">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Services</h2>
                <p>Service content editor will be implemented here.</p>
                {/* Similar structure to site_content tab */}
              </div>
            </TabsContent>
            
            <TabsContent value="stats">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Stats</h2>
                <p>Stats content editor will be implemented here.</p>
                {/* Similar structure to site_content tab */}
              </div>
            </TabsContent>
            
            <TabsContent value="testimonials">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Testimonials</h2>
                <p>Testimonials content editor will be implemented here.</p>
                {/* Similar structure to site_content tab */}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
