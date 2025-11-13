import { NextResponse } from 'next/server'
import type { ApiResponse, FeeStructure } from '@/types'

export async function GET() {
  const feeStructures: FeeStructure[] = [
    {
      courseId: '1',
      courseName: 'Computer Science Engineering',
      fees: {
        tuition: 250000,
        hostel: 80000,
        other: 30000,
        total: 360000,
      },
      scholarships: [
        { name: 'Merit Scholarship', amount: 100000 },
        { name: 'Sports Scholarship', amount: 50000 },
      ],
    },
    {
      courseId: '2',
      courseName: 'Electronics and Communication Engineering',
      fees: {
        tuition: 240000,
        hostel: 80000,
        other: 30000,
        total: 350000,
      },
      scholarships: [
        { name: 'Merit Scholarship', amount: 100000 },
        { name: 'Girls Excellence Scholarship', amount: 60000 },
      ],
    },
    {
      courseId: '3',
      courseName: 'Mechanical Engineering',
      fees: {
        tuition: 230000,
        hostel: 80000,
        other: 30000,
        total: 340000,
      },
      scholarships: [
        { name: 'Merit Scholarship', amount: 100000 },
      ],
    },
    {
      courseId: '4',
      courseName: 'Civil Engineering',
      fees: {
        tuition: 220000,
        hostel: 80000,
        other: 30000,
        total: 330000,
      },
      scholarships: [
        { name: 'Merit Scholarship', amount: 100000 },
      ],
    },
    {
      courseId: '5',
      courseName: 'Master of Business Administration',
      fees: {
        tuition: 450000,
        hostel: 90000,
        other: 40000,
        total: 580000,
      },
      scholarships: [
        { name: 'CAT/GMAT Excellence', amount: 200000 },
        { name: 'Entrepreneurship Scholarship', amount: 150000 },
      ],
    },
    {
      courseId: '6',
      courseName: 'Bachelor of Business Administration',
      fees: {
        tuition: 180000,
        hostel: 80000,
        other: 30000,
        total: 290000,
      },
      scholarships: [
        { name: 'Merit Scholarship', amount: 80000 },
      ],
    },
    {
      courseId: '7',
      courseName: 'Product Design',
      fees: {
        tuition: 280000,
        hostel: 85000,
        other: 35000,
        total: 400000,
      },
      scholarships: [
        { name: 'Design Excellence Award', amount: 120000 },
      ],
    },
    {
      courseId: '8',
      courseName: 'Data Science',
      fees: {
        tuition: 200000,
        hostel: 75000,
        other: 25000,
        total: 300000,
      },
      scholarships: [
        { name: 'Merit Scholarship', amount: 90000 },
      ],
    },
    {
      courseId: '9',
      courseName: 'Artificial Intelligence & Machine Learning',
      fees: {
        tuition: 270000,
        hostel: 80000,
        other: 30000,
        total: 380000,
      },
      scholarships: [
        { name: 'Tech Innovation Scholarship', amount: 130000 },
        { name: 'Merit Scholarship', amount: 100000 },
      ],
    },
    {
      courseId: '10',
      courseName: 'Cyber Security',
      fees: {
        tuition: 260000,
        hostel: 80000,
        other: 30000,
        total: 370000,
      },
      scholarships: [
        { name: 'Cyber Defense Scholarship', amount: 110000 },
      ],
    },
  ]

  const response: ApiResponse<{ courses: FeeStructure[] }> = {
    success: true,
    data: { courses: feeStructures },
  }

  return NextResponse.json(response, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
