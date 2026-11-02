'use client'

import { useState } from 'react'
import { ArrowUpRight, CheckCircle2, Phone, MapPin, Mail, MessageCircle, Calendar, Users, Car, Clock } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    route: 'Hetauda to Kathmandu',
    vehicle: 'Toyota HiAce (14-Seater AC)',
    date: '2026-11-03',
    passengers: '1 Passenger',
    notes: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      {/* Page Hero */}
      <section className="subpage-hero">
        <div className="subpage-hero-inner">
          <span className="eyebrow">RESERVATIONS & DEPOT NETWORK</span>
          <h1 className="subpage-hero-title">
            BOOK YOUR JOURNEY.<br />CONNECT WITH US.
          </h1>
          <p className="subpage-hero-desc">
            Reserve individual highway tickets or request private group charter rates for our Toyota HiAce, Tata Deluxe Bus, or Force Trax 4WD. Our operations team confirms all inquiries promptly.
          </p>
        </div>
      </section>

      {/* Main Booking & Contact Grid */}
      <section className="contact-hub-section">
        <div className="section-wrap">
          <div className="contact-hub-grid">
            {/* Left Column: Depot Offices & Instant Contact */}
            <div>
              <span className="eyebrow">OFFICIAL DEPOTS & COUNTERS</span>
              <h2 style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: '24px' }}>
                Where to Find Us
              </h2>

              {/* Depot 1: Hetauda */}
              <div className="contact-office-card">
                <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0066cc' }}>
                  CENTRAL HEADQUARTERS
                </span>
                <h4>Hetauda Main Hub & Ticket Counter</h4>
                <p>Kantirajpath, Buddha Chowk (Near Old Bus Park), Hetauda-4, Makwanpur, Nepal</p>
                <strong>Phone: +977 057-520000 / +977 9855000001</strong>
                <small style={{ color: 'var(--muted)', display: 'block', marginTop: '4px' }}>
                  Hours: 05:00 AM – 08:00 PM Daily
                </small>
              </div>

              {/* Depot 2: Kathmandu */}
              <div className="contact-office-card">
                <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0066cc' }}>
                  CAPITAL CORRIDOR
                </span>
                <h4>Kathmandu Booking Office</h4>
                <p>Gongabu New Bus Park (Counter No. 18) & Kalanki Highway Passenger Terminal</p>
                <strong>Phone: +977 01-4350000 / +977 9851000002</strong>
                <small style={{ color: 'var(--muted)', display: 'block', marginTop: '4px' }}>
                  Hours: 05:30 AM – 07:30 PM Daily
                </small>
              </div>

              {/* Depot 3: Sindhuli */}
              <div className="contact-office-card">
                <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0066cc' }}>
                  BP HIGHWAY TERMINAL
                </span>
                <h4>Sindhuli (Kamalamai) Stand</h4>
                <p>Zero Mile Highway Counter, Kamalamai Municipality, Sindhuli</p>
                <strong>Phone: +977 9844000003</strong>
              </div>

              {/* WhatsApp Quick Link */}
              <div
                style={{
                  background: '#0a0e17',
                  color: '#ffffff',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '20px',
                }}
              >
                <div>
                  <strong style={{ display: 'block', fontSize: '14px', fontWeight: 800 }}>
                    Instant WhatsApp Support
                  </strong>
                  <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.6)' }}>
                    Seat availability & parcel updates
                  </span>
                </div>
                <a
                  href="https://wa.me/9779855000000"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: '#25D366',
                    color: '#ffffff',
                    padding: '10px 18px',
                    borderRadius: '9999px',
                    fontSize: '12px',
                    fontWeight: 700,
                  }}
                >
                  <MessageCircle size={14} />
                  <span>Chat Now</span>
                </a>
              </div>
            </div>

            {/* Right Column: Online Journey Reservation Form */}
            <div className="booking-form-box">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'rgba(0, 102, 204, 0.1)',
                      color: '#0066cc',
                      display: 'grid',
                      placeItems: 'center',
                      margin: '0 auto 20px',
                    }}
                  >
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '26px', fontWeight: 800, marginBottom: '8px' }}>
                    Reservation Received!
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', maxWidth: '420px', margin: '0 auto 24px' }}>
                    Thank you, <strong>{formData.name}</strong>. Our dispatcher has recorded your booking for{' '}
                    <strong>{formData.route}</strong> on <strong>{formData.date}</strong>. You will receive an SMS and WhatsApp confirmation on{' '}
                    <strong>{formData.phone}</strong> with seat number and reporting time shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    style={{
                      background: '#000000',
                      color: '#ffffff',
                      padding: '12px 24px',
                      borderRadius: '9999px',
                      fontSize: '12px',
                      fontWeight: 700,
                    }}
                  >
                    Book Another Journey
                  </button>
                </div>
              ) : (
                <>
                  <h3>Online Journey Reservation</h3>
                  <p>
                    Reserve scheduled seats or request private charter quotation with Bir Purkha.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="booking-grid">
                      <div className="booking-field">
                        <label>Your Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Aaryan Karki"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>

                      <div className="booking-field">
                        <label>Mobile Number (For SMS/WhatsApp) *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+977 98XXXXXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="booking-grid">
                      <div className="booking-field">
                        <label>Route *</label>
                        <select
                          value={formData.route}
                          onChange={(e) => setFormData({ ...formData, route: e.target.value })}
                        >
                          <option value="Hetauda to Kathmandu">Hetauda ↔ Kathmandu (Fast Track / Kulekhani)</option>
                          <option value="Hetauda to Sindhuli">Hetauda ↔ Sindhuli (BP Highway)</option>
                          <option value="Hetauda to Birgunj">Hetauda ↔ Birgunj (Express)</option>
                          <option value="Hetauda to Narayangarh">Hetauda ↔ Narayangarh (Chitwan)</option>
                          <option value="Daman & Palung Mountain Charter">Daman & Palung Mountain Charter</option>
                          <option value="Custom Private Tour Rental">Custom Nepal-Wide Private Tour Rental</option>
                        </select>
                      </div>

                      <div className="booking-field">
                        <label>Vehicle Preference *</label>
                        <select
                          value={formData.vehicle}
                          onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                        >
                          <option value="Toyota HiAce (14-Seater AC)">Toyota HiAce Commuter (14-Seater AC)</option>
                          <option value="Tata Ultra Bus (32-Seater Deluxe)">Tata Ultra Starbus (32-Seater Deluxe Coach)</option>
                          <option value="Force Trax 4WD (Mountain Carrier)">Force Trax Cruiser 4WD (12-Seater All-Terrain)</option>
                        </select>
                      </div>
                    </div>

                    <div className="booking-grid">
                      <div className="booking-field">
                        <label>Travel Date *</label>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                      </div>

                      <div className="booking-field">
                        <label>Number of Passengers *</label>
                        <select
                          value={formData.passengers}
                          onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                        >
                          <option value="1 Passenger">1 Passenger</option>
                          <option value="2 Passengers">2 Passengers</option>
                          <option value="3-5 Passengers">3 – 5 Passengers</option>
                          <option value="6-10 Passengers">6 – 10 Passengers</option>
                          <option value="Full Vehicle Private Charter">Full Vehicle Private Charter</option>
                        </select>
                      </div>
                    </div>

                    <div className="booking-field" style={{ marginBottom: '24px' }}>
                      <label>Luggage Details or Special Requests (Optional)</label>
                      <textarea
                        rows={3}
                        placeholder="e.g. 2 large luggage bags, morning departure preferred, pickup at Buddha Chowk..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      style={{
                        width: '100%',
                        background: '#000000',
                        color: '#ffffff',
                        padding: '16px',
                        borderRadius: '9999px',
                        fontWeight: 700,
                        fontSize: '13px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)',
                      }}
                    >
                      <span>Confirm & Send Booking Request</span>
                      <ArrowUpRight size={16} />
                    </button>

                    <p style={{ textAlign: 'center', fontSize: '10px', color: 'var(--muted)', marginTop: '14px' }}>
                      No advance card payment required online. Pay securely at the terminal counter before departure.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
