'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { leadFormSchema, type LeadFormData } from '@/lib/validations/leadFormSchema'
import { INDIAN_STATES, INTAKE_YEARS } from '@/lib/constants'
import { useCourses } from '@/hooks/useCourses'
import Button from './Button'

interface LeadFormProps {
  onSuccess?: () => void
  triggerSource?: string
}

export default function LeadForm({ onSuccess, triggerSource }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const { courses, loading: coursesLoading } = useCourses()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
  })

  const onSubmit = async (data: LeadFormData) => {
    try {
      setIsSubmitting(true)
      setSubmitStatus('idle')
      setErrorMessage('')

      const webhookUrl = process.env.NEXT_PUBLIC_PIPEDREAM_WEBHOOK_URL

      if (!webhookUrl || webhookUrl.includes('your-pipedream-endpoint')) {
        throw new Error('Pipedream webhook URL not configured. Please check your environment variables.')
      }

      const payload = {
        ...data,
        triggerSource,
        timestamp: new Date().toISOString(),
      }

      await axios.post(webhookUrl, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      setSubmitStatus('success')
      reset()

      // Auto-close after 3 seconds
      setTimeout(() => {
        onSuccess?.()
      }, 3000)
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'Failed to submit form. Please try again.'
      )
      console.error('Lead form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle className="w-16 h-16 text-cyber-green mb-4 animate-pulse" />
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-gray-300">
          Your application has been submitted successfully. Our team will contact you soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
          Full Name <span className="text-cyber-pink">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          {...register('fullName')}
          className="w-full px-4 py-3 bg-dark-800 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyber-blue focus:border-transparent transition"
          placeholder="Enter your full name"
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-cyber-pink">{errors.fullName.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
          Email Address <span className="text-cyber-pink">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full px-4 py-3 bg-dark-800 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyber-blue focus:border-transparent transition"
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-cyber-pink">{errors.email.message}</p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
          Phone Number <span className="text-cyber-pink">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          className="w-full px-4 py-3 bg-dark-800 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyber-blue focus:border-transparent transition"
          placeholder="10-digit mobile number"
          maxLength={10}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-cyber-pink">{errors.phone.message}</p>
        )}
      </div>

      {/* State */}
      <div>
        <label htmlFor="state" className="block text-sm font-medium text-white mb-2">
          State <span className="text-cyber-pink">*</span>
        </label>
        <select
          id="state"
          {...register('state')}
          className="w-full px-4 py-3 bg-dark-800 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyber-blue focus:border-transparent transition"
        >
          <option value="">Select your state</option>
          {INDIAN_STATES.map((state) => (
            <option key={state} value={state} className="bg-dark-800">
              {state}
            </option>
          ))}
        </select>
        {errors.state && (
          <p className="mt-1 text-sm text-cyber-pink">{errors.state.message}</p>
        )}
      </div>

      {/* Course Interested */}
      <div>
        <label htmlFor="courseInterested" className="block text-sm font-medium text-white mb-2">
          Course Interested <span className="text-cyber-pink">*</span>
        </label>
        <select
          id="courseInterested"
          {...register('courseInterested')}
          disabled={coursesLoading}
          className="w-full px-4 py-3 bg-dark-800 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyber-blue focus:border-transparent transition disabled:opacity-50"
        >
          <option value="">Select a course</option>
          {courses.map((course) => (
            <option key={course.id} value={course.name} className="bg-dark-800">
              {course.name} ({course.degree})
            </option>
          ))}
        </select>
        {errors.courseInterested && (
          <p className="mt-1 text-sm text-cyber-pink">{errors.courseInterested.message}</p>
        )}
      </div>

      {/* Intake Year */}
      <div>
        <label htmlFor="intakeYear" className="block text-sm font-medium text-white mb-2">
          Intake Year <span className="text-cyber-pink">*</span>
        </label>
        <select
          id="intakeYear"
          {...register('intakeYear')}
          className="w-full px-4 py-3 bg-dark-800 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyber-blue focus:border-transparent transition"
        >
          <option value="">Select intake year</option>
          {INTAKE_YEARS.map((year) => (
            <option key={year} value={year} className="bg-dark-800">
              {year}
            </option>
          ))}
        </select>
        {errors.intakeYear && (
          <p className="mt-1 text-sm text-cyber-pink">{errors.intakeYear.message}</p>
        )}
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start">
        <input
          id="consent"
          type="checkbox"
          {...register('consent')}
          className="mt-1 h-4 w-4 rounded border-white/20 bg-dark-800 text-cyber-blue focus:ring-2 focus:ring-cyber-blue focus:ring-offset-dark-900"
        />
        <label htmlFor="consent" className="ml-3 text-sm text-gray-300">
          I agree to receive information from WHY Q University <span className="text-cyber-pink">*</span>
        </label>
      </div>
      {errors.consent && (
        <p className="text-sm text-cyber-pink">{errors.consent.message}</p>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="flex items-center gap-2 p-4 bg-cyber-pink/10 border border-cyber-pink rounded-lg">
          <AlertCircle className="w-5 h-5 text-cyber-pink flex-shrink-0" />
          <p className="text-sm text-cyber-pink">{errorMessage}</p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={isSubmitting}
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Application'
        )}
      </Button>
    </form>
  )
}
