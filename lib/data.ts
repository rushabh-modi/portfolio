import React from 'react';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import { MdPending } from 'react-icons/md';
import wordanalyticsImg from '@/public/wordanalytics.png';
import EchoImg from '@/public/echo.png';
import mlrImg from '@/public/mlr.png';
import blogImg from '@/public/blog.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'BE in Information Technology - LDCE',
    location: 'Ahmedabad, GJ',
    description:
      'I graduated after 4 years of studying computer science eq. degree course. Coursework includes Software Engineering, Problem solving.',
    icon: React.createElement(LuGraduationCap),
    date: '2023',
  },
  {
    title: 'React-JS Intern',
    location: 'Ahmedabad, GJ',
    description:
      'I worked as a intern for 4 months , Was trained on Frontend Stack extensively.',
    icon: React.createElement(FaReact),
    date: "02'23 - 05'23",
  },
  {
    title: 'Self Learning',
    location: '',
    description:
      "Currently I'm learning full-stack developement. My stack includes React, Next.js, TypeScript, Tailwind, NodeJS and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(MdPending),
    date: 'Present',
  },
] as const;

export const projectsData = [
  {
    title: 'EchoEcommerce',
    description:
      'This Application is made using React, Redux Toolkit for state management, Styled components for styling, Context API for Authentication.',
    tags: ['React', 'Redux Toolkit', 'Styled-components'],
    imageUrl: EchoImg,
  },
  {
    title: 'MERN Login-Register',
    description:
      'Fullstack application for users to login and register themselves. Role-based access for accessing information',
    tags: ['React', 'Node', 'MongoDB', 'Express', 'JWTs'],
    imageUrl: mlrImg,
  },
  {
    title: 'Blog',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['NodeJS', 'Express', 'MongoDB'],
    imageUrl: blogImg,
  },
] as const;

export const skillsData = [
  'Python',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Next.js',
  'Node.js',
  'Express',
  'Git',
  'Tailwind',
  'MongoDB',
  'Framer Motion',
] as const;
