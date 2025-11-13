'use client'

import useSWR from 'swr'
import axios from 'axios'
import type { PlacementData, ApiResponse } from '@/types'

const fetcher = async (url: string) => {
  const response = await axios.get<ApiResponse<PlacementData>>(url)
  if (response.data.success && response.data.data) {
    return response.data.data
  }
  throw new Error(response.data.error || 'Failed to fetch placements')
}

export function usePlacements() {
  const { data, error, isLoading, mutate } = useSWR('/api/placements', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
  })

  return {
    placements: data || null,
    loading: isLoading,
    error: error?.message || null,
    refetch: mutate,
  }
}
