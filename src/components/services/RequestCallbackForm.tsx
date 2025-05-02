
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  neetScore: z.string().min(1, "NEET score is required"),
  email: z.string().email("Invalid email address"),
  mobile: z.string().min(10, "Mobile number must be at least 10 digits"),
  comments: z.string().optional(),
});

export function RequestCallbackForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      neetScore: "",
      email: "",
      mobile: "",
      comments: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Format message for Email
    const message = `
<h2>New Callback Request</h2>
<hr/>
<p><strong>Name:</strong> ${values.fullName}</p>
<p><strong>NEET Score:</strong> ${values.neetScore}</p>
<p><strong>Email:</strong> ${values.email}</p>
<p><strong>Mobile:</strong> ${values.mobile}</p>
<p><strong>Comments:</strong> ${values.comments || "No comments provided"}</p>
<hr/>
<p><em>From: AdmissionHands Website</em></p>
`;
    
    // Send form data via email
    const emailData = {
      name: values.fullName,
      email: "info@admissionhands.com", // Email to send to
      fromEmail: "info@admissionhands.com", // Sender email
      subject: "New Callback Request - AdmissionHands",
      phone: values.mobile,
      message: message,
      details: {
        neetScore: values.neetScore,
        comments: values.comments || "No comments"
      }
    };
    
    // Send to Google Form as a backup
    const googleFormUrl = "https://docs.google.com/forms/d/1TQguCsFaEHUHo4CvzZsRovkkhl8kzYxE1H3RQbg4Y-M/formResponse";
    
    const formData = new FormData();
    formData.append("entry.1234567890", values.fullName);
    formData.append("entry.1234567891", values.neetScore);
    formData.append("entry.1234567892", values.email);
    formData.append("entry.1234567893", values.mobile);
    formData.append("entry.1234567894", values.comments || "");

    // Send to Google Form as backup
    fetch(googleFormUrl, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });
    
    // Simulate email sending (since we don't have a real email service set up)
    // In a real implementation, you would use a service like EmailJS, AWS SES, or similar
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Success",
        description: "Your request has been submitted. We will get back to you soon.",
      });
      form.reset();
    }, 1000);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="neetScore"
          render={({ field }) => (
            <FormItem>
              <FormLabel>NEET Score</FormLabel>
              <FormControl>
                <Input placeholder="Enter your NEET score" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="Enter your mobile number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="comments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comments Or Query</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Enter your comments or query (optional)"
                  className="min-h-[80px]" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </Button>
      </form>
    </Form>
  );
}
