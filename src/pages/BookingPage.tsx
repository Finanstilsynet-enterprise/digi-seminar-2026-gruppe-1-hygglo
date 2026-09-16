import { Link, useParams } from 'react-router-dom'

// Placeholder for issue #10 "Bygg bookingflyten" — replace with full booking form.
export function BookingPage() {
  const { id } = useParams<{ id: string }>()

  return (
    <main className="equipment-page">
      <Link to={`/utstyr/${id}`}>Tilbake til utstyret</Link>
      <h1>Book utstyr</h1>
      <p>Bookingskjema kommer snart. Se issue #10.</p>
    </main>
  )
}
