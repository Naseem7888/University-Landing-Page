'use client'

import useSWR from 'swr'
import axios from 'axios'
import type { Course, ApiResponse } from '@/types'

const fetcher = async (url: string) => {
  const response = await axios.get<ApiResponse<Course[]>>(url)
  if (response.data.success && response.data.data) {
    return response.data.data
  }
  throw new Error(response.data.error || 'Failed to fetch courses')
}

export function useCourses() {
  const { data, error, isLoading, mutate } = useSWR('/api/courses', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
  })

  return {
    courses: data || [],
    loading: isLoading,
    error: error?.message || null,
    refetch: mutate,
  }
}
