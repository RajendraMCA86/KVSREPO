"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
}

export default function Hero({ title, subtitle, imageUrl }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={ref}
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0" 
        // style={{ y, opacity }}
      >
        <Image
          src={imageUrl || "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600"}
          alt="Digital Technology Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </motion.div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl text-white">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {title}
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                Get Started
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}