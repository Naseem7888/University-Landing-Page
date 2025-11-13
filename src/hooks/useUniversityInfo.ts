'use client'

import useSWR from 'swr'
import axios from 'axios'
import type { UniversityInfo, ApiResponse } from '@/types'

const fetcher = async (url: string) => {
  const response = await axios.get<ApiResponse<UniversityInfo>>(url)
  if (response.data.success && response.data.data) {
    return response.data.data
  }
  throw new Error(response.data.error || 'Failed to fetch university info')
}

export function useUniversityInfo() {
  const { data, error, isLoading, mutate } = useSWR('/api/university-info', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
  })

  return {
    universityInfo: data || null,
    loading: isLoading,
    error: error?.message || null,
    refetch: mutate,
  }
}
