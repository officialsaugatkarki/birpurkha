import Link from 'next/link'
import { ArrowUpRight, ShieldCheck, Award, Users, MapPin, Wrench, Clock, CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: 'About Us | Bir Purkha Multipurpose Pvt. Ltd.',
  description: 'The story, Gurkha heritage emblem, and safety philosophy of Bir Purkha in Hetauda, Nepal.',
}

export default function AboutPage() {
  const values = [
    {
      title: 'Safety Without Compromise',
      desc: 'Every Bir Purkha vehicle undergoes mandatory morning mechanical inspections, tire pressure checks, and brake testing before embarking on any highway departure.',
      icon: ShieldCheck,
    },
    {
      title: 'Mountain Chauffeur Mastery',
      desc: 'Our drivers hold minimum 8+ years of mountain highway experience with clean driving records, specialized training for Nepal’s steep curves, and strict zero-alcohol policies.',
      icon: Award,
    },
    {
      title: 'Punctuality & Reliability',
      desc: 'We value our passengers’ time. Our buses and microbuses operate on tight, dependable timetables, eliminating arbitrary roadside delays.',
      icon: Clock,
    },
  ]

  return (
    <main>
      {/* Page Hero */}
      <section className="subpage-hero">
        <div className="subpage-hero-inner">
          <span className="eyebrow">ABOUT BIR PURKHA</span>
          <h1 className="subpage-hero-title">
            MOVING PEOPLE.<br />BUILDING TRUST.
          </h1>
          <p className="subpage-hero-desc">
            Bir Purkha Multipurpose Pvt. Ltd. (वीर पुर्खा यातायात) was founded in Hetauda, Makwanpur with a singular vision: to bring dignity, comfort, and uncompromising road safety to intercity passenger transit across Nepal.
          </p>
        </div>
      </section>

      {/* Main Story & Photography */}
      <section style={{ padding: '80px 0 100px' }}>
        <div className="section-wrap">
          {/* Logo Emblem Feature Card */}
          <div
            style={{
              background: '#070c16',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(36px, 4vw, 56px)',
              color: '#ffffff',
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '40px',
              alignItems: 'center',
              marginBottom: '80px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <img
              src="/logo.jpg"
              alt="Bir Purkha Official Gurkha Crest"
              style={{
                width: 'clamp(120px, 16vw, 180px)',
                height: 'clamp(120px, 16vw, 180px)',
                borderRadius: '20px',
                objectFit: 'cover',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            />
            <div>
              <span className="eyebrow light">OUR EMBLEM & VALUES</span>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '12px' }}>
                The Spirit of Bir Purkha (वीर पुर्खा)
              </h2>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.75)', maxWidth: '780px' }}>
                The name <em>Bir Purkha</em> honors our brave ancestral heritage: the resilience, bravery, and steadfast devotion symbolized by the Gurkha warrior silhouette standing tall before the snowy peaks of the Himalayas. We carry this same courage and integrity onto every road we travel, treating every passenger as our honored guest.
              </p>
            </div>
          </div>

          {/* Story Block 1 */}
          <div className="fleet-showroom-grid" style={{ marginBottom: '80px', background: '#fff', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <div className="fleet-showroom-visual">
              <img src="/tata-bus.jpg" alt="Bir Purkha Deluxe Highway Coach" />
            </div>
            <div className="fleet-showroom-info">
              <div>
                <span className="eyebrow">ROOTED IN MAKWANPUR</span>
                <h2 className="fleet-showroom-name">Born at the Crossroads of Nepal</h2>
                <p className="fleet-showroom-desc">
                  Hetauda has historically served as the vital junction where Nepal’s eastern, western, and central transportation arteries converge. Recognizing the need for modern, well-maintained, and punctual passenger vehicles, Bir Purkha Multipurpose Pvt. Ltd. established a fleet built specifically to master these roads.
                </p>
                <p className="fleet-showroom-desc">
                  Whether connecting business travelers between Hetauda and Kathmandu, reuniting families along the scenic BP Highway to Sindhuli, or traversing off-road rural valleys with our 4x4 Force Trax, our mission remains steadfast: every passenger deserves a smooth, comfortable, and protected journey.
                </p>
              </div>
            </div>
          </div>

          {/* Story Block 2 */}
          <div className="fleet-showroom-grid" style={{ marginBottom: '80px', background: '#fff', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <div className="fleet-showroom-info">
              <div>
                <span className="eyebrow">ENGINEERING & STANDARDS</span>
                <h2 className="fleet-showroom-name">Selected for Real Terrains</h2>
                <p className="fleet-showroom-desc">
                  Nepal’s highway topography presents unique challenges: steep mountain switchbacks, unpaved hill links, and monsoon cloud cover. Standard mass transit vehicles often fall short of delivering comfort under these conditions.
                </p>
                <p className="fleet-showroom-desc">
                  That is why every vehicle in the Bir Purkha fleet (from our high-roof Toyota HiAce Commuters to our reinforced Tata Ultra coaches and Force Trax 4WD) features heavy-duty suspension tuning, high ground clearance, and all-weather radial tires.
                </p>
              </div>
            </div>
            <div className="fleet-showroom-visual">
              <img src="/force-trax.jpg" alt="Force Trax 4WD Hill Utility" />
            </div>
          </div>

          {/* Values Grid */}
          <div>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <span className="eyebrow">OUR COMMITMENT</span>
              <h2 className="section-title">The Three Pillars of Bir Purkha</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {values.map((v, i) => {
                const IconComponent = v.icon
                return (
                  <div key={i} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', padding: '32px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'rgba(0, 102, 204, 0.08)',
                        display: 'grid',
                        placeItems: 'center',
                        marginBottom: '18px',
                      }}
                    >
                      <IconComponent size={24} color="#0066cc" />
                    </div>
                    <h4 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '10px' }}>{v.title}</h4>
                    <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65 }}>{v.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Call to action */}
          <div
            style={{
              marginTop: '90px',
              background: '#070c16',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(36px, 5vw, 64px)',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '20px',
            }}
          >
            <span className="eyebrow light">JOIN US ON THE HIGHWAY</span>
            <h3 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-0.04em' }}>
              Experience the Bir Purkha Standard
            </h3>
            <p style={{ maxWidth: '580px', color: 'rgba(255, 255, 255, 0.75)', fontSize: '14px', lineHeight: 1.6 }}>
              Reserve your seat online or visit one of our official depot counters in Hetauda, Kathmandu, or Sindhuli.
            </p>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#ffffff',
                color: '#000000',
                padding: '14px 32px',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '13px',
                marginTop: '10px',
              }}
            >
              <span>Book Your Ticket Today</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
