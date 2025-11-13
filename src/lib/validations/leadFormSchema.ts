import { z } from 'zod'
import { INDIAN_STATES } from '@/lib/constants'

export const leadFormSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name must contain only letters and spaces'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required'),
  
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number')
    .min(10, 'Phone number must be 10 digits')
    .max(10, 'Phone number must be 10 digits'),
  
  state: z
    .enum(INDIAN_STATES as unknown as [string, ...string[]], {
      errorMap: () => ({ message: 'Please select your state' })
    }),
  
  courseInterested: z
    .string()
    .min(1, 'Please select a course'),
  
  intakeYear: z
    .enum(['2025', '2026', '2027', '2028'], {
      errorMap: () => ({ message: 'Please select an intake year' }),
    }),
  
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: 'You must agree to receive information from WHY Q University',
    }),
})

export type LeadFormData = z.infer<typeof leadFormSchema>
