"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send } from 'lucide-react';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// Define form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().optional(),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Careers() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Initialize form
  const form = useForm<FormValues>({
	resolver: zodResolver(formSchema),
	defaultValues: {
	  name: '',
	  email: '',
	  phone: '',
	  subject: '',
	  message: '',
	},
  });
  
  // Form submission handler
  const onSubmit = async (data: FormValues) => {
	setIsSubmitting(true);
	
	// Simulate API call
	await new Promise(resolve => setTimeout(resolve, 1500));
	
	// Show success message
	toast({
	  title: "Message Sent Successfully",
	  description: "Thank you for contacting us. We'll get back to you shortly.",
	  className: "bg-green-50 border-green-500 text-green-800",
	});
	
	// Reset form
	form.reset();
	setIsSubmitting(false);
  };

  return (
	<section className="py-20 bg-gray-50">
	  <div className="container mx-auto">
		<div className="text-center max-w-3xl mx-auto mb-16">
		  <motion.h2 
			className="text-3xl md:text-4xl font-bold mb-6"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
		  >
			Why Join Our Team
			 <p className="text-gray-600 mb-6">We are growing fast and continuously looking to hire enterprising young engineers and management graduates to partner in our continued success
				If you are a young graduate looking for an enriching work environment in the technology domain and are excited by tremendous professional and personal growth opportunities, Canopus is the place for you </p>
		  </motion.h2>
		  <motion.p 
			className="text-gray-600"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: 0.1 }}
		  >
			Have a question or want to discuss your project? Fill out the form below, 
			and we'll get back to you as soon as possible.
		  </motion.p>
		</div>
		
		<motion.div 
		  className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8"
		  initial={{ opacity: 0, y: 20 }}
		  whileInView={{ opacity: 1, y: 0 }}
		  viewport={{ once: true }}
		  transition={{ duration: 0.5, delay: 0.2 }}
		>
		  <Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
			  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<FormField
				  control={form.control}
				  name="name"
				  render={({ field }) => (
					<FormItem>
					  <FormLabel>Name</FormLabel>
					  <FormControl>
						<Input placeholder="Your name" {...field} />
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
						<Input placeholder="Your email" {...field} />
					  </FormControl>
					  <FormMessage />
					</FormItem>
				  )}
				/>
			  </div>
			  
			  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<FormField
				  control={form.control}
				  name="phone"
				  render={({ field }) => (
					<FormItem>
					  <FormLabel>Phone (Optional)</FormLabel>
					  <FormControl>
						<Input placeholder="Your phone number" {...field} />
					  </FormControl>
					  <FormMessage />
					</FormItem>
				  )}
				/>
				
				<FormField
				  control={form.control}
				  name="subject"
				  render={({ field }) => (
					<FormItem>
					  <FormLabel>Subject</FormLabel>
					  <FormControl>
						<Input placeholder="Message subject" {...field} />
					  </FormControl>
					  <FormMessage />
					</FormItem>
				  )}
				/>
			  </div>
			  
			  <FormField
				control={form.control}
				name="message"
				render={({ field }) => (
				  <FormItem>
					<FormLabel>Message</FormLabel>
					<FormControl>
					  <Textarea 
						placeholder="Tell us about your project or question..." 
						className="min-h-[150px]"
						{...field} 
					  />
					</FormControl>
					<FormMessage />
				  </FormItem>
				)}
			  />
			  
			  <Button 
				type="submit" 
				className="bg-primary hover:bg-primary/90 w-full md:w-auto"
				disabled={isSubmitting}
			  >
				{isSubmitting ? 'Sending Message...' : (
				  <>
					Send Message <Send className="ml-2 h-4 w-4" />
				  </>
				)}
			  </Button>
			</form>
		  </Form>
		</motion.div>
	  </div>
	</section>
  );
}