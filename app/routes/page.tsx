import Link from 'next/link'
import { ArrowUpRight, Clock, MapPin, Bus, ShieldCheck, Phone, AlertCircle } from 'lucide-react'

export const metadata = {
  title: 'Routes & Timetables | Bir Purkha Multipurpose Pvt. Ltd.',
  description: 'Daily bus and microbus timetables, departure terminals, and ticket fares across Nepal.',
}

export default function RoutesPage() {
  const routes = [
    {
      id: 'het-ktm',
      from: 'Hetauda',
      to: 'Kathmandu',
      via: 'Fast Track / Kulekhani & Sisneri',
      distance: '86 KM',
      duration: '3.5 - 4 Hours',
      frequency: 'Every 45 Minutes (05:30 AM – 05:00 PM)',
      vehicle: 'Toyota HiAce (14-Seater AC) & Tata Ultra Bus',
      fare: 'NPR 650 – 850',
      boarding: 'Buddha Chowk / Hetauda Bus Park ↔ Kalanki / Gongabu Terminal',
      status: 'High Frequency Active',
    },
    {
      id: 'het-sin',
      from: 'Hetauda',
      to: 'Sindhuli',
      via: 'BP Highway & Kamalamai Corridor',
      distance: '135 KM',
      duration: '4.5 Hours',
      frequency: '3 Daily Scheduled Departures (06:00 AM, 10:30 AM, 02:00 PM)',
      vehicle: 'Tata Ultra Deluxe Coach & Force Trax 4WD',
      fare: 'NPR 700 – 900',
      boarding: 'Kantirajpath Stand ↔ Zero Mile Sindhuli Counter',
      status: 'Daily Scheduled',
    },
    {
      id: 'het-bir',
      from: 'Hetauda',
      to: 'Birgunj',
      via: 'Tribhuvan Highway (Direct)',
      distance: '52 KM',
      duration: '1.5 Hours',
      frequency: 'Hourly Departures (06:00 AM – 06:30 PM)',
      vehicle: 'Toyota HiAce Commuter Express',
      fare: 'NPR 300 – 400',
      boarding: 'Buddha Chowk Stand ↔ Ghantaghar Birgunj',
      status: 'High Frequency Active',
    },
    {
      id: 'het-nar',
      from: 'Hetauda',
      to: 'Narayangarh (Chitwan)',
      via: 'East-West Highway (Mahendra Rajmarg)',
      distance: '78 KM',
      duration: '2 Hours',
      frequency: 'Regular Highway Service',
      vehicle: 'Tata Ultra Starbus & Toyota HiAce',
      fare: 'NPR 450 – 550',
      boarding: 'Hetauda Bypass Stand ↔ Pulchowk Narayangarh',
      status: 'Daily Scheduled',
    },
    {
      id: 'het-dam',
      from: 'Hetauda',
      to: 'Daman & Palung Mountain Hill Stations',
      via: 'Tribhuvan Rajpath Hill Pass',
      distance: '65 KM',
      duration: '3 Hours',
      frequency: 'Morning Express & On-Demand Charter',
      vehicle: 'Force Trax Cruiser 4WD (4x4 High Stance)',
      fare: 'NPR 600 / Charter Rate',
      boarding: 'Hetauda Main Depot ↔ Daman View Tower Stand',
      status: 'Special Mountain Route',
    },
  ]

  return (
    <main>
      {/* Page Hero */}
      <section className="subpage-hero">
        <div className="subpage-hero-inner">
          <span className="eyebrow">HIGHWAY NETWORK & SCHEDULES</span>
          <h1 className="subpage-hero-title">
            DEPENDABLE ROUTES.<br />GUARANTEED TIMINGS.
          </h1>
          <p className="subpage-hero-desc">
            Bir Purkha operates daily scheduled passenger services between Hetauda, Kathmandu, Sindhuli, Birgunj, and the central highway network. Book your seat in advance to secure priority boarding.
          </p>
        </div>
      </section>

      {/* Routes Table */}
      <section className="routes-catalog-section">
        <div className="section-wrap">
          <div className="routes-table-card">
            <div className="routes-table-header">
              <div>
                <h3>Official Daily Corridors & Fares</h3>
                <p style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>
                  Fares and timings are regulated in accordance with Bagmati Provincial Transport Guidelines.
                </p>
              </div>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#000000',
                  color: '#ffffff',
                  padding: '9px 18px',
                  borderRadius: '9999px',
                  fontSize: '11px',
                  fontWeight: 700,
                }}
              >
                <span>Reserve Seat</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>

            <div>
              {routes.map((r) => (
                <div key={r.id} className="route-row">
                  {/* Destination */}
                  <div className="route-destination">
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: '9px',
                        fontWeight: 800,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#0066cc',
                        marginBottom: '4px',
                      }}
                    >
                      {r.status}
                    </span>
                    <h4>
                      {r.from} ↔ {r.to}
                    </h4>
                    <p>Via: {r.via}</p>
                    <small style={{ color: 'var(--muted)', fontSize: '10px' }}>
                      Terminal: {r.boarding}
                    </small>
                  </div>

                  {/* Timing & Distance */}
                  <div>
                    <span className="route-cell-title">Time & Distance</span>
                    <span className="route-cell-val">{r.duration}</span>
                    <p style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>{r.distance}</p>
                  </div>

                  {/* Frequency */}
                  <div>
                    <span className="route-cell-title">Frequency</span>
                    <span className="route-cell-val" style={{ fontSize: '12px' }}>
                      {r.frequency}
                    </span>
                  </div>

                  {/* Assigned Vehicle */}
                  <div>
                    <span className="route-cell-title">Fleet Assigned</span>
                    <span className="route-cell-val" style={{ fontSize: '12px' }}>
                      {r.vehicle}
                    </span>
                    <p style={{ fontSize: '11px', color: '#0066cc', fontWeight: 700, marginTop: '2px' }}>
                      Fare: {r.fare}
                    </p>
                  </div>

                  {/* Action */}
                  <div style={{ textAlign: 'right' }}>
                    <Link
                      href="/contact"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: '#f4f5f8',
                        border: '1px solid var(--line)',
                        color: 'var(--ink)',
                        padding: '10px 16px',
                        borderRadius: '8px',
                        fontSize: '11px',
                        fontWeight: 700,
                      }}
                    >
                      <span>Book</span>
                      <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Travel Notice Box */}
          <div
            style={{
              marginTop: '40px',
              background: '#ffffff',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius-md)',
              padding: '24px 32px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
            }}
          >
            <AlertCircle size={22} color="#0066cc" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ fontSize: '14px', fontWeight: 800, display: 'block', marginBottom: '4px' }}>
                Highway Weather & Monsoon Advisory
              </strong>
              <p style={{ fontSize: '12px', lineHeight: 1.6, color: 'var(--muted)' }}>
                During monsoon conditions along the Sisneri / Kulekhani corridor, our operations team coordinates with the Highway Police. In cases of road maintenance, vehicles are rerouted via Tribhuvan Highway or Kanti Lokpath to ensure passenger safety at all times.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
