'use client'

import useSWR from 'swr'
import axios from 'axios'
import type { FeeStructure, ApiResponse } from '@/types'

const fetcher = async (url: string) => {
  const response = await axios.get<ApiResponse<{ courses: FeeStructure[] }>>(url)
  if (response.data.success && response.data.data) {
    return response.data.data.courses
  }
  throw new Error(response.data.error || 'Failed to fetch fees')
}

export function useFees() {
  const { data, error, isLoading, mutate } = useSWR('/api/fees', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
  })

  return {
    fees: data || [],
    loading: isLoading,
    error: error?.message || null,
    refetch: mutate,
  }
}
