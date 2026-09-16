export type BookingStatus = 'Venter' | 'Godkjent' | 'Avslått'

export interface BookingRequest {
  id: string
  equipmentId: string
  requesterName: string
  startDate: string
  endDate: string
  totalPrice: number
  status: BookingStatus
  createdAt: string
}

export type NewBookingRequestInput = Pick<
  BookingRequest,
  'equipmentId' | 'requesterName' | 'startDate' | 'endDate' | 'totalPrice'
>
