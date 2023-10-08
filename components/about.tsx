'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I’m a <span className="font-medium">IT Engineering</span> graduate and
        Web Development aficionado. I am pursuing my journey in{' '}
        <span className="font-medium">full stack development</span> particularly
        using the MERN stack. I’ve worked on projects where I built the backend,
        frontend. I have also spent considerable time as an undergraduate honing
        my problem solving skills working on{' '}
        <span className="underline">problem solving techniques</span>.
      </p>
      <p>
        Please let me know if I can add value to your company or brand. I’d love
        to discuss my projects, previous work and educational training in
        greater detail so you can make sure I’m capable of delivering the high
        standards of quality you expect.{' '}
        <span className="italic">Cheers :)</span>
      </p>
    </motion.section>
  );
}
