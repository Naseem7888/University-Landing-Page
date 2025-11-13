import { NextResponse } from 'next/server'
import type { ApiResponse, PlacementData } from '@/types'

export async function GET() {
  const placementData: PlacementData = {
    overview: {
      placementRate: 94.5,
      averagePackage: 1200000,
      highestPackage: 5400000,
      totalCompanies: 250,
    },
    topRecruiters: [
      {
        name: 'Google',
        logo: '/images/recruiters/google.svg',
        roles: ['Software Engineer', 'Data Scientist', 'Product Manager'],
      },
      {
        name: 'Microsoft',
        logo: '/images/recruiters/microsoft.svg',
        roles: ['Software Developer', 'Cloud Engineer', 'ML Engineer'],
      },
      {
        name: 'Amazon',
        logo: '/images/recruiters/amazon.svg',
        roles: ['SDE', 'DevOps Engineer', 'Business Analyst'],
      },
      {
        name: 'Infosys',
        logo: '/images/recruiters/infosys.svg',
        roles: ['System Engineer', 'Technology Analyst'],
      },
      {
        name: 'TCS',
        logo: '/images/recruiters/tcs.svg',
        roles: ['Assistant System Engineer', 'Digital Analyst'],
      },
      {
        name: 'Wipro',
        logo: '/images/recruiters/wipro.svg',
        roles: ['Project Engineer', 'Data Engineer'],
      },
      {
        name: 'Accenture',
        logo: '/images/recruiters/accenture.svg',
        roles: ['Technology Consultant', 'Application Developer'],
      },
      {
        name: 'Deloitte',
        logo: '/images/recruiters/deloitte.svg',
        roles: ['Consultant', 'Business Analyst'],
      },
    ],
    departmentWise: [
      {
        department: 'Computer Science Engineering',
        placementRate: 98.2,
        averagePackage: 1450000,
      },
      {
        department: 'AI & Machine Learning',
        placementRate: 97.5,
        averagePackage: 1620000,
      },
      {
        department: 'Cyber Security',
        placementRate: 96.8,
        averagePackage: 1380000,
      },
      {
        department: 'Electronics & Communication',
        placementRate: 93.5,
        averagePackage: 1100000,
      },
      {
        department: 'Mechanical Engineering',
        placementRate: 91.2,
        averagePackage: 950000,
      },
      {
        department: 'Civil Engineering',
        placementRate: 89.5,
        averagePackage: 880000,
      },
      {
        department: 'MBA',
        placementRate: 95.0,
        averagePackage: 1350000,
      },
      {
        department: 'BBA',
        placementRate: 88.0,
        averagePackage: 750000,
      },
    ],
  }

  const response: ApiResponse<PlacementData> = {
    success: true,
    data: placementData,
  }

  return NextResponse.json(response, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
