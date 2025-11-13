import { NextResponse } from 'next/server'
import type { ApiResponse, UniversityInfo } from '@/types'

export async function GET() {
  const universityInfo: UniversityInfo = {
    name: 'WHY Q University',
    established: 2005,
    accreditation: ['NAAC A++', 'NBA Accredited', 'UGC Recognized', 'AICTE Approved'],
    ranking: 'Ranked among Top 50 Universities in India',
    location: {
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India',
    },
    facilities: [
      {
        name: 'Central Library',
        description: '50,000+ books, digital library, research journals',
        icon: 'library',
      },
      {
        name: 'Advanced Labs',
        description: 'State-of-the-art labs for all engineering disciplines',
        icon: 'lab',
      },
      {
        name: 'Sports Complex',
        description: 'Olympic-size pool, indoor stadium, outdoor courts',
        icon: 'sports',
      },
      {
        name: 'Modern Hostels',
        description: 'Separate boys & girls hostels with 24/7 security',
        icon: 'hostel',
      },
      {
        name: 'Multi-Cuisine Cafeteria',
        description: 'Hygienic food courts with diverse menu options',
        icon: 'cafeteria',
      },
      {
        name: 'Medical Center',
        description: '24/7 healthcare with experienced doctors',
        icon: 'medical',
      },
      {
        name: 'Innovation Hub',
        description: 'Startup incubation, maker space, prototyping lab',
        icon: 'innovation',
      },
      {
        name: 'Auditorium',
        description: '2000-seater with modern AV facilities',
        icon: 'auditorium',
      },
    ],
    overview: {
      vision: 'To be a globally recognized institution fostering innovation, excellence, and holistic development.',
      mission: 'Empowering students with world-class education, cutting-edge research, and industry-ready skills to become future leaders and changemakers.',
      values: [
        'Excellence in Education',
        'Innovation & Research',
        'Integrity & Ethics',
        'Inclusivity & Diversity',
        'Social Responsibility',
      ],
    },
    stats: {
      students: 15000,
      faculty: 800,
      programs: 50,
      campusArea: '200 Acres',
    },
  }

  const response: ApiResponse<UniversityInfo> = {
    success: true,
    data: universityInfo,
  }

  return NextResponse.json(response, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
