import { NextResponse } from 'next/server'
import type { ApiResponse, Course } from '@/types'

export async function GET() {
  const courses: Course[] = [
    {
      id: '1',
      name: 'Computer Science Engineering',
      duration: '4 Years',
      degree: 'B.Tech',
      department: 'Engineering',
      description: 'Learn cutting-edge technologies in AI, ML, Cloud Computing, and Software Development',
    },
    {
      id: '2',
      name: 'Electronics and Communication Engineering',
      duration: '4 Years',
      degree: 'B.Tech',
      department: 'Engineering',
      description: 'Master VLSI, Embedded Systems, IoT, and Communication Technologies',
    },
    {
      id: '3',
      name: 'Mechanical Engineering',
      duration: '4 Years',
      degree: 'B.Tech',
      department: 'Engineering',
      description: 'Specialize in Robotics, Automotive, Manufacturing, and Design Engineering',
    },
    {
      id: '4',
      name: 'Civil Engineering',
      duration: '4 Years',
      degree: 'B.Tech',
      department: 'Engineering',
      description: 'Focus on Structural Design, Smart Cities, Sustainable Construction',
    },
    {
      id: '5',
      name: 'Master of Business Administration',
      duration: '2 Years',
      degree: 'MBA',
      department: 'Management',
      description: 'Specializations in Finance, Marketing, HR, Operations, and Entrepreneurship',
    },
    {
      id: '6',
      name: 'Bachelor of Business Administration',
      duration: '3 Years',
      degree: 'BBA',
      department: 'Management',
      description: 'Build strong foundation in Business Management and Leadership',
    },
    {
      id: '7',
      name: 'Product Design',
      duration: '4 Years',
      degree: 'B.Des',
      department: 'Design',
      description: 'Create innovative products with focus on UX/UI, Industrial Design',
    },
    {
      id: '8',
      name: 'Data Science',
      duration: '3 Years',
      degree: 'B.Sc',
      department: 'Sciences',
      description: 'Master Big Data Analytics, Machine Learning, Statistical Modeling',
    },
    {
      id: '9',
      name: 'Artificial Intelligence & Machine Learning',
      duration: '4 Years',
      degree: 'B.Tech',
      department: 'Engineering',
      description: 'Deep dive into Neural Networks, Deep Learning, Computer Vision, NLP',
    },
    {
      id: '10',
      name: 'Cyber Security',
      duration: '4 Years',
      degree: 'B.Tech',
      department: 'Engineering',
      description: 'Protect digital assets with Ethical Hacking, Network Security, Cryptography',
    },
  ]

  const response: ApiResponse<Course[]> = {
    success: true,
    data: courses,
  }

  return NextResponse.json(response, { 
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
