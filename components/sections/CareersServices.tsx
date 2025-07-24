"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,DialogClose } from "@/components/ui/dialog";
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Briefcase, MapPin, Clock, X } from 'lucide-react';

export function CareersServices() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    message: '',
    position: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const { toast } = useToast();
   const [open, setOpen] = useState(false);

  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      experience: "2-5 years",
      description: "We're looking for a passionate Frontend Developer proficient in React, Next.js, and TypeScript to join our team.",
      responsibilities: [
        "Build responsive and performant web applications",
        "Collaborate with designers and backend developers",
        "Write clean, maintainable code",
        "Participate in code reviews"
      ]
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      type: "Full-time",
      location: "Hybrid",
      experience: "3-6 years",
      description: "Join our design team to create beautiful and intuitive user experiences for our products.",
      responsibilities: [
        "Create user-centered designs",
        "Develop UI mockups and prototypes",
        "Conduct user research",
        "Create design systems"
      ]
    },
    {
      id: 3,
      title: "Backend Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      experience: "2-4 years",
      description: "Looking for a Backend Developer with strong Node.js and database skills.",
      responsibilities: [
        "Design and implement APIs",
        "Optimize database performance",
        "Implement security measures",
        "Write technical documentation"
      ]
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

   const handleApply = () => {
    console.log("Application submitted");
    setOpen(false);
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent, closeDialog: () => void) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('position', formData.position);
      if (formData.resume) {
        formDataToSend.append('resume', formData.resume);
      }

      const response = await fetch('https://formsubmit.co/hr@kvstechflow.com', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        toast({
          title: "Application Submitted Successfully",
          description: "Thank you for your application. We'll get back to you shortly.",
          className: "bg-green-50 border-green-500 text-green-800",
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          resume: null,
          message: '',
          position: ''
        });
        closeDialog();
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again later.",
        className: "bg-red-50 border-red-500 text-red-800",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[400px] mb-16 rounded-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0">
          <img
            src="/images/career.jpg"
            alt="Careers at KVS"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center px-8 text-white">
          <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl max-w-2xl">
            Be part of something special. We're building the future of technology together.
          </p>
        </div>
      </motion.div>

      {/* Job Listings */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
      >
        {jobOpenings.map((job) => (
          <motion.div
            key={job.id}
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3">{job.title}</h3>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="flex items-center text-sm text-gray-600">
                <Briefcase className="w-4 h-4 mr-1" />
                {job.department}
              </span>
              <span className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-1" />
                {job.location}
              </span>
              <span className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                {job.type}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{job.description}</p>
            <ul className="list-disc list-inside mb-6 text-gray-600">
              {job.responsibilities.map((resp, index) => (
                <li key={index} className="mb-1">{resp}</li>
              ))}
            </ul>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  onClick={() => setSelectedJob(job.title)}
          
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  Apply Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Apply for {selectedJob}</DialogTitle>
                </DialogHeader>
                <form 
                  onSubmit={(e) => handleSubmit(e, () => document.querySelector<HTMLButtonElement>('[data-dialog-close]')?.click())}
                  className="space-y-4"
                  action="https://formsubmit.co/hr@kvstechflow.com"
                  method="POST"
                  encType="multipart/form-data"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_subject" value={`New Application for ${selectedJob}`} />
                  <input type="hidden" name="position" value={selectedJob || ''} />

                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border rounded-md"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border rounded-md"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border rounded-md"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Resume</label>
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                      className="w-full p-2 border rounded-md"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Cover Letter</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full p-2 border rounded-md"
                    />
                  </div>

                  <div className="flex justify-end gap-3 mt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.querySelector<HTMLButtonElement>('[data-dialog-close]')?.click()}
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                       onClick={handleApply}
                      className="bg-primary hover:bg-primary/90"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </motion.div>

      {/* Why Join Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gray-50 rounded-xl p-8 mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          Why Join Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast-Paced Growth</h3>
            <p className="text-gray-600">Accelerate your career with rapid learning opportunities and quick advancement.</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
            <p className="text-gray-600">Work with cutting-edge technologies and shape the future of digital solutions.</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Great Culture</h3>
            <p className="text-gray-600">Join a collaborative team that values work-life balance and personal growth.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CareersServices;