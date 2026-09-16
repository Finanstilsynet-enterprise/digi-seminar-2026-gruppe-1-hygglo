import type { BookingRequest, NewBookingRequestInput } from '../types/booking'
import { readFromStorage, writeToStorage } from './storage'

const BOOKING_REQUESTS_KEY = 'hygglo:booking-requests'

export function getBookingRequests(): BookingRequest[] {
  return readFromStorage<BookingRequest[]>(BOOKING_REQUESTS_KEY, [])
}

export function createBookingRequest(input: NewBookingRequestInput): BookingRequest {
  const request: BookingRequest = {
    ...input,
    id: crypto.randomUUID(),
    status: 'Venter',
    createdAt: new Date().toISOString(),
  }

  const requests = [...getBookingRequests(), request]
  writeToStorage(BOOKING_REQUESTS_KEY, requests)

  return request
}

export function updateBookingRequestStatus(
  id: string,
  status: BookingRequest['status'],
): BookingRequest[] {
  const requests = getBookingRequests().map((request) =>
    request.id === id ? { ...request, status } : request,
  )
  writeToStorage(BOOKING_REQUESTS_KEY, requests)

  return requests
}
