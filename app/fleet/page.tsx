import Link from 'next/link'
import { ArrowUpRight, CheckCircle2, ShieldCheck, Users, Luggage, Gauge, Wind, Fuel, Wrench } from 'lucide-react'

export const metadata = {
  title: 'Our Fleet | Bir Purkha Multipurpose Pvt. Ltd.',
  description: 'Explore the Bir Purkha fleet: Toyota HiAce, Tata Ultra Deluxe Bus, and Force Trax Cruiser 4WD.',
}

export default function FleetPage() {
  const fleetData = [
    {
      id: 'hiace',
      name: 'Toyota HiAce Commuter',
      nepaliName: 'टोयोटा हाइस कम्युटर (१४ सिटर)',
      category: 'Intercity Express · High Roof',
      image: '/hiace.jpg',
      tagline: 'The Gold Standard in Highway Passenger Comfort',
      description:
        'Our silver & blue dual-tone Toyota HiAce fleet represents the pinnacle of express intercity travel in Nepal. Built for rapid, smooth, and quiet journeys along the Hetauda-Kathmandu Fast Track and the East-West Highway corridors.',
      specs: [
        { label: 'Seating Capacity', value: '14 Reclining Seats', icon: Users },
        { label: 'Luggage Setup', value: 'Heavy Roof Carrier + Rear Boot', icon: Luggage },
        { label: 'Climate Control', value: 'Dual Zone Full Air-Conditioning', icon: Wind },
        { label: 'Engine & Power', value: '3.0L D-4D Turbocharged Diesel', icon: Gauge },
        { label: 'Drive & Terrain', value: 'Rear-Wheel Drive / Highway Tuned', icon: Fuel },
        { label: 'Safety & Tech', value: 'ABS, Dual Airbags & Speed Governor', icon: ShieldCheck },
      ],
      features: [
        'High roof cabin allowing upright passenger entry and generous headroom',
        'High-density plush bucket seats with individual armrests and seatbelts',
        'Heavy-duty alloy rooftop luggage carrier secured for mountain travel',
        'Punctual hourly departures connecting Hetauda with Kathmandu and Birgunj',
        'On-board USB phone charging ports available at every row',
      ],
      routes: ['Hetauda ↔ Kathmandu (Fast Track / Kulekhani)', 'Hetauda ↔ Birgunj', 'Hetauda ↔ Narayangarh'],
    },
    {
      id: 'tata-bus',
      name: 'Tata Ultra Starbus Deluxe',
      nepaliName: 'टाटा अल्ट्रा डिलक्स बस (वीर पुर्खा यातायात सेवा समिति)',
      category: 'Deluxe Highway Coach · Long Distance',
      image: '/tata-bus.jpg',
      tagline: 'Reliable, Spacious Group Transit for Every Major Route',
      description:
        'Bearing the proud emblem "वीर पुर्खा यातायात सेवा समिति", our royal blue Tata Ultra Starbus delivers premier travel for families, touring parties, and daily intercity travelers. Featuring panoramic observation windows and high road clearance tailored for Nepal.',
      specs: [
        { label: 'Seating Capacity', value: '32 Deluxe Fabric Seats', icon: Users },
        { label: 'Luggage Setup', value: 'Deep Undercarriage Storage Bay', icon: Luggage },
        { label: 'Climate Control', value: 'Overhead Forced Air Vents', icon: Wind },
        { label: 'Engine & Power', value: 'Tata 3.8L Turbotronn High-Torque', icon: Gauge },
        { label: 'Chassis & Suspension', value: 'Parabolic Leaf Suspension + Anti-Roll', icon: Wrench },
        { label: 'Safety Standards', value: 'Full Air Brakes & Emergency Exit', icon: ShieldCheck },
      ],
      features: [
        'Expansive panoramic glass windows for breathtaking Himalayan & valley views',
        'Extra legroom seating arrangement with reclining backrests and footrests',
        'Massive under-chassis cargo storage compartment for luggage and commercial parcels',
        'Smooth highway suspension designed to minimize road bumps on the BP Highway',
        'Experienced two-driver crew with verified commercial mountain licenses',
      ],
      routes: ['Hetauda ↔ Kathmandu', 'Hetauda ↔ Sindhuli (BP Highway)', 'Hetauda ↔ Narayangarh ↔ Pokhara'],
    },
    {
      id: 'force-trax',
      name: 'Force Trax Cruiser 4WD',
      nepaliName: 'फोर्स ट्र्याक्स क्रुजर ४x४ (ना.१ ज ८२७०)',
      category: 'Mountain All-Terrain Utility · 4x4 Rugged',
      image: '/force-trax.jpg',
      tagline: 'Conquering Nepal’s Steepest Terrains & Rural Corridors',
      description:
        'Equipped with heavy-duty chrome bullbars, high ground clearance, and an indestructible 4WD drivetrain, the Force Trax Cruiser (license Na 1 Ja 8270) is built for rugged mountain trails, bad-weather detours, and rural road networks where ordinary vehicles cannot reach.',
      specs: [
        { label: 'Seating Capacity', value: '10 to 12 Passengers', icon: Users },
        { label: 'Luggage Setup', value: 'Reinforced Steel Roof Rack + Ladder', icon: Luggage },
        { label: 'Drivetrain', value: 'Mechanical 4WD High & Low Range', icon: Gauge },
        { label: 'Engine', value: 'Mercedes-Derived 2.6L FM 2.6 CR', icon: Fuel },
        { label: 'Ground Clearance', value: '210 mm High Clear Obstacle Stance', icon: Wrench },
        { label: 'Special Equipment', value: 'Steel Front Bullbar & Fog Penetration Lights', icon: ShieldCheck },
      ],
      features: [
        'Dedicated 4-Wheel Drive system handles mud, monsoon slush, and gravel inclines',
        'Reinforced ladder-frame chassis proven on Nepal’s steepest rural mountain roads',
        'Large rooftop luggage rack with tie-down rails for heavy cargo and trekking gear',
        'High-output yellow fog lights for safe passage through Daman and high-altitude mist',
        'Available for private rural charter, pilgrimage expeditions, and emergency transport',
      ],
      routes: ['Hetauda ↔ Makwanpur Rural Hill Corridors', 'Hetauda ↔ Daman / Palung', 'Sindhuli Valley Routes'],
    },
  ]

  return (
    <main>
      {/* Subpage Header */}
      <section className="subpage-hero">
        <div className="subpage-hero-inner">
          <span className="eyebrow">THE FLEET / SHOWROOM</span>
          <h1 className="subpage-hero-title">
            ENGINEERED FOR<br />NEPAL&apos;S HIGHWAYS
          </h1>
          <p className="subpage-hero-desc">
            From rapid intercity express microbuses to high-capacity highway coaches and all-terrain 4x4 mountain vehicles, every Bir Purkha machine is selected for passenger safety, comfort, and reliability.
          </p>
        </div>
      </section>

      {/* Fleet Showroom List */}
      <section className="fleet-showroom-section">
        <div className="section-wrap">
          {fleetData.map((vehicle) => (
            <article key={vehicle.id} id={vehicle.id} className="fleet-showroom-item">
              <div className="fleet-showroom-grid">
                {/* Visual Stage */}
                <div className="fleet-showroom-visual">
                  <img src={vehicle.image} alt={vehicle.name} />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '20px',
                      background: 'rgba(8, 14, 26, 0.8)',
                      backdropFilter: 'blur(12px)',
                      padding: '8px 16px',
                      borderRadius: '9999px',
                      color: '#ffffff',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    {vehicle.nepaliName}
                  </div>
                </div>

                {/* Information & Specs */}
                <div className="fleet-showroom-info">
                  <div>
                    <span className="fleet-showroom-cat">{vehicle.category}</span>
                    <h2 className="fleet-showroom-name">{vehicle.name}</h2>
                    <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)', marginBottom: '10px' }}>
                      {vehicle.tagline}
                    </p>
                    <p className="fleet-showroom-desc">{vehicle.description}</p>
                  </div>

                  {/* Specifications Grid */}
                  <div className="fleet-specs-grid">
                    {vehicle.specs.map((spec, i) => {
                      const IconComponent = spec.icon
                      return (
                        <div key={i} className="fleet-spec-cell">
                          <IconComponent size={16} color="var(--accent)" style={{ marginBottom: '4px' }} />
                          <strong>{spec.value}</strong>
                          <small>{spec.label}</small>
                        </div>
                      )
                    })}
                  </div>

                  {/* Amenities Bullets */}
                  <div style={{ marginBottom: '24px' }}>
                    <span style={{ display: 'block', fontSize: '9px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '10px' }}>
                      Vehicle Highlights
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {vehicle.features.map((feat, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px', color: 'var(--ink)' }}>
                          <CheckCircle2 size={14} color="#0066cc" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Row */}
                  <div className="fleet-action-row">
                    <Link
                      href="/contact"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: '#000000',
                        color: '#ffffff',
                        borderRadius: '9999px',
                        padding: '12px 24px',
                        fontSize: '12px',
                        fontWeight: 700,
                      }}
                    >
                      <span>Book This Vehicle</span>
                      <ArrowUpRight size={14} />
                    </Link>

                    <Link
                      href="/routes"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'var(--muted)',
                        fontSize: '12px',
                        fontWeight: 600,
                      }}
                    >
                      <span>Check Assigned Routes</span>
                      <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
