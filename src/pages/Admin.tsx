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
      // We're using mock data for now since we can't access the new tables yet
      setSiteContent([
        { 
          id: '1', 
          key: 'hero', 
          content_type: 'hero', 
          title: 'Expert Consultation for Your', 
          description: 'MBBS, MD/MS Journey', 
          image_url: null, 
          order_index: 1 
        },
        { 
          id: '2', 
          key: 'hero_subtitle', 
          content_type: 'text', 
          title: null, 
          description: 'Expert guidance to secure admissions in top medical colleges.', 
          image_url: null, 
          order_index: 2 
        }
      ]);

      setServices([
        {
          id: '1',
          title: "College Selection",
          description: "Strategic guidance to choose the right medical institutions.",
          icon: 'GraduationCap',
          order_index: 1
        },
        {
          id: '2',
          title: "Application Assistance",
          description: "Comprehensive support for entrance exams and procedures.",
          icon: 'ClipboardCheck',
          order_index: 2
        }
      ]);

      setStats([
        {
          id: '1',
          value: "95%",
          label: "Success Rate",
          description: "of our students secure admissions in their preferred colleges",
          icon: 'Trophy',
          order_index: 1
        },
        {
          id: '2',
          value: "1200+",
          label: "Success Stories",
          description: "students placed in top medical colleges across the country",
          icon: 'GraduationCap',
          order_index: 2
        }
      ]);

      setTestimonials([
        {
          id: '1',
          content: "Admission Hands guided me through every step of the MBBS application process.",
          name: "Dr. Priya Sharma",
          rating: 5,
          image_url: "https://randomuser.me/api/portraits/women/67.jpg"
        },
        {
          id: '2',
          content: "I was struggling with choosing the right medical college until I found Admission Hands.",
          name: "Dr. Rahul Verma",
          rating: 5,
          image_url: "https://randomuser.me/api/portraits/men/66.jpg"
        }
      ]);
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

  // Update content item - will be implemented when we have proper database access
  const updateContent = async (table: string, id: string, data: any) => {
    try {
      toast.success('Content updated successfully (mock)');
      fetchContent(); // In real implementation, this would update the database
    } catch (error: any) {
      console.error('Update error:', error);
      toast.error(error.message || 'Failed to update content');
    }
  };

  // Delete content item - will be implemented when we have proper database access
  const deleteContent = async (table: string, id: string) => {
    try {
      toast.success('Content deleted successfully (mock)');
      fetchContent(); // In real implementation, this would delete from the database
    } catch (error: any) {
      console.error('Delete error:', error);
      toast.error(error.message || 'Failed to delete content');
    }
  };

  // Add new content item - will be implemented when we have proper database access
  const addContent = async (table: string, data: any) => {
    try {
      toast.success('Content added successfully (mock)');
      fetchContent(); // In real implementation, this would add to the database
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
                {isLoading ? (
                  <p>Loading services...</p>
                ) : (
                  <div className="grid gap-4">
                    {services.map((service) => (
                      <Card key={service.id}>
                        <CardHeader>
                          <CardTitle className="text-lg">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor={`service-desc-${service.id}`}>Description</Label>
                              <Textarea
                                id={`service-desc-${service.id}`}
                                defaultValue={service.description || ''}
                                onChange={(e) => {
                                  service.description = e.target.value;
                                }}
                              />
                            </div>
                            <div>
                              <Label htmlFor={`service-icon-${service.id}`}>Icon</Label>
                              <Input
                                id={`service-icon-${service.id}`}
                                defaultValue={service.icon || ''}
                                onChange={(e) => {
                                  service.icon = e.target.value;
                                }}
                              />
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="justify-between">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => updateContent('services', service.id, service)}
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
                                  This will permanently delete this service.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => deleteContent('services', service.id)}
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
            
            <TabsContent value="stats">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Stats</h2>
                {isLoading ? (
                  <p>Loading stats...</p>
                ) : (
                  <div className="grid gap-4">
                    {stats.map((stat) => (
                      <Card key={stat.id}>
                        <CardHeader>
                          <CardTitle className="text-lg">{stat.label}: {stat.value}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor={`stat-value-${stat.id}`}>Value</Label>
                              <Input
                                id={`stat-value-${stat.id}`}
                                defaultValue={stat.value || ''}
                                onChange={(e) => {
                                  stat.value = e.target.value;
                                }}
                              />
                            </div>
                            <div>
                              <Label htmlFor={`stat-label-${stat.id}`}>Label</Label>
                              <Input
                                id={`stat-label-${stat.id}`}
                                defaultValue={stat.label || ''}
                                onChange={(e) => {
                                  stat.label = e.target.value;
                                }}
                              />
                            </div>
                            <div>
                              <Label htmlFor={`stat-desc-${stat.id}`}>Description</Label>
                              <Textarea
                                id={`stat-desc-${stat.id}`}
                                defaultValue={stat.description || ''}
                                onChange={(e) => {
                                  stat.description = e.target.value;
                                }}
                              />
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="justify-between">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => updateContent('stats', stat.id, stat)}
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
                                  This will permanently delete this stat.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => deleteContent('stats', stat.id)}
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
            
            <TabsContent value="testimonials">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Testimonials</h2>
                {isLoading ? (
                  <p>Loading testimonials...</p>
                ) : (
                  <div className="grid gap-4">
                    {testimonials.map((testimonial) => (
                      <Card key={testimonial.id}>
                        <CardHeader>
                          <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor={`testimonial-content-${testimonial.id}`}>Content</Label>
                              <Textarea
                                id={`testimonial-content-${testimonial.id}`}
                                defaultValue={testimonial.content || ''}
                                onChange={(e) => {
                                  testimonial.content = e.target.value;
                                }}
                              />
                            </div>
                            <div>
                              <Label htmlFor={`testimonial-name-${testimonial.id}`}>Name</Label>
                              <Input
                                id={`testimonial-name-${testimonial.id}`}
                                defaultValue={testimonial.name || ''}
                                onChange={(e) => {
                                  testimonial.name = e.target.value;
                                }}
                              />
                            </div>
                            <div>
                              <Label htmlFor={`testimonial-rating-${testimonial.id}`}>Rating (1-5)</Label>
                              <Input
                                id={`testimonial-rating-${testimonial.id}`}
                                type="number"
                                min="1"
                                max="5"
                                defaultValue={testimonial.rating || 5}
                                onChange={(e) => {
                                  testimonial.rating = parseInt(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="justify-between">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => updateContent('testimonials', testimonial.id, testimonial)}
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
                                  This will permanently delete this testimonial.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => deleteContent('testimonials', testimonial.id)}
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
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
