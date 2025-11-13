import { LeadFormData } from '@/lib/validations/leadFormSchema'

export interface Course {
  id: string
  name: string
  duration: string
  degree: string
  department: string
  description: string
}

export interface FeeStructure {
  courseId: string
  courseName: string
  fees: {
    tuition: number
    hostel: number
    other: number
    total: number
  }
  scholarships: Array<{
    name: string
    amount: number
  }>
}

export interface PlacementData {
  overview: {
    placementRate: number
    averagePackage: number
    highestPackage: number
    totalCompanies: number
  }
  topRecruiters: Array<{
    name: string
    logo: string
    roles: string[]
  }>
  departmentWise: Array<{
    department: string
    placementRate: number
    averagePackage: number
  }>
}

export interface UniversityInfo {
  name: string
  established: number
  accreditation: string[]
  ranking: string
  location: {
    city: string
    state: string
    country: string
  }
  facilities: Array<{
    name: string
    description: string
    icon: string
  }>
  overview: {
    vision: string
    mission: string
    values: string[]
  }
  stats: {
    students: number
    faculty: number
    programs: number
    campusArea: string
  }
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

export type { LeadFormData }
