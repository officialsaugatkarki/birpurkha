'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowUpRight,
  MoveRight,
  Shield,
  Clock,
  MapPin,
  Calendar,
  Users,
  Compass,
  CheckCircle2,
  Car,
  ChevronRight,
  Sparkles,
} from 'lucide-react'

export default function HomePage() {
  const [activePin, setActivePin] = useState<'wheels' | 'engine' | 'cabin' | 'roof'>('wheels')
  const [activeCollectionTab, setActiveCollectionTab] = useState(0)

  const pinData = {
    wheels: {
      tag: 'BUILT TO PERFORM',
      title: 'High-Traction Mountain Radials',
      desc: 'Engineered for maximum grip, control, and stability across wet mountain passes and unpaved hill highways in Nepal.',
      img: '/hiace.jpg',
    },
    engine: {
      tag: 'POWER & RELIABILITY',
      title: 'Torque-Tuned Turbo Diesel',
      desc: 'Proven powertrains calibrated for sustained high-altitude climbs through Kulekhani, Bhimphedi, and BP Highway.',
      img: '/tata-bus.jpg',
    },
    cabin: {
      tag: 'PASSENGER COMFORT',
      title: 'Ergonomic Reclining Interiors',
      desc: 'Full passenger air-conditioning, individual headrests, high-legroom layout, and noise-dampened soundproofing.',
      img: '/hiace.jpg',
    },
    roof: {
      tag: 'CARGO CAPACITY',
      title: 'Reinforced Rooftop Carrier',
      desc: 'Secure heavy-duty racks fitted with weather-proof luggage tarps for passenger luggage, parcel logistics, and gear.',
      img: '/force-trax.jpg',
    },
  }

  return (
    <main>
      {/* ────────────────────────────────────────────────────────
          HERO SECTION (Matches Ampora Image 2 Top Section)
      ──────────────────────────────────────────────────────── */}
      <section className="ampora-hero-section">
        <div className="section-wrap">
          {/* Top Headline + Concept Card */}
          <div className="ampora-hero-top">
            <div className="ampora-hero-heading-block">
              <span className="eyebrow">HETAUDA · NEPAL · TRANSIT REIMAGINED</span>
              <h1 className="ampora-hero-title">
                DESIGNED TO<br />DEFY LIMITS
              </h1>
              <p className="ampora-hero-subtitle">
                Exploring the future of passenger transport, comfort, and dependable connectivity across Nepal.
              </p>
            </div>

            {/* 01 / FEATURED CONCEPT CARD (Top Right) */}
            <Link href="/fleet#hiace" className="ampora-featured-card">
              <img
                src="/hiace.jpg"
                alt="Toyota HiAce Commuter"
                className="ampora-featured-card-img"
              />
              <div className="ampora-featured-card-overlay" />
              <div className="ampora-featured-card-content">
                <span className="ampora-featured-tag">01 / FEATURED FLEET</span>
                <span className="ampora-featured-name">HIACE EXPRESS</span>
              </div>
              <div className="ampora-featured-arrow">
                <ArrowUpRight size={14} />
              </div>
            </Link>
          </div>

          {/* Main Hero Automotive Stage */}
          <div className="ampora-hero-stage">
            <img
              src="/hiace.jpg"
              alt="Bir Purkha Toyota HiAce Express"
              className="ampora-hero-stage-img"
            />
            <div className="ampora-hero-stage-overlay" />

            {/* Bottom Left Pill Button */}
            <Link href="/fleet" className="ampora-hero-pill-cta">
              <span>Discover the Fleet</span>
              <div className="ampora-hero-pill-circle">
                <ArrowUpRight size={18} />
              </div>
            </Link>

            {/* Bottom Right 360 View Badge */}
            <div className="ampora-hero-360-badge">
              <div className="ampora-360-icon">
                <Car size={20} />
              </div>
              <div className="ampora-360-details">
                <strong>360° FLEET VIEW</strong>
                <small>Explore every detail of our passenger fleet</small>
              </div>
              <ArrowUpRight size={16} opacity={0.6} />
            </div>
          </div>

          {/* Quick Booking Search Banner */}
          <div className="ampora-search-banner">
            <form
              className="ampora-search-form"
              onSubmit={(e) => {
                e.preventDefault()
                window.location.href = '/contact'
              }}
            >
              <div className="ampora-search-field">
                <label>Origin</label>
                <select defaultValue="Hetauda">
                  <option value="Hetauda">Hetauda (Main Hub)</option>
                  <option value="Kathmandu">Kathmandu (Gongabu / Kalanki)</option>
                  <option value="Sindhuli">Sindhuli (Kamalamai)</option>
                  <option value="Birgunj">Birgunj (Clock Tower)</option>
                  <option value="Narayangarh">Narayangarh (Chitwan)</option>
                </select>
              </div>

              <div className="ampora-search-field">
                <label>Destination</label>
                <select defaultValue="Kathmandu">
                  <option value="Kathmandu">Kathmandu (Capital Corridor)</option>
                  <option value="Hetauda">Hetauda (Makwanpur)</option>
                  <option value="Sindhuli">Sindhuli (BP Highway)</option>
                  <option value="Birgunj">Birgunj (Border Express)</option>
                  <option value="Narayangarh">Narayangarh (East-West Highway)</option>
                </select>
              </div>

              <div className="ampora-search-field">
                <label>Departure Date</label>
                <input type="date" defaultValue="2026-11-03" />
              </div>

              <div className="ampora-search-field">
                <label>Preferred Vehicle</label>
                <select defaultValue="hiace">
                  <option value="hiace">Toyota HiAce (14-Seater AC)</option>
                  <option value="tata">Tata Ultra Bus (32-Seater Deluxe)</option>
                  <option value="trax">Force Trax 4WD (Mountain Carrier)</option>
                </select>
              </div>

              <button type="submit" className="ampora-search-submit">
                <span>Check Departure</span>
                <MoveRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          COLLECTION SECTION (Matches Ampora Image 2 Dark Section)
      ──────────────────────────────────────────────────────── */}
      <section className="ampora-collection-section">
        <div className="section-wrap">
          <div className="ampora-collection-header">
            <span className="eyebrow">THE BIR PURKHA COLLECTION / 01</span>
            <h2>Find your next journey</h2>
          </div>

          <div className="ampora-collection-grid">
            {/* Card 1: Toyota HiAce Commuter */}
            <Link href="/fleet#hiace" className="ampora-vehicle-card">
              <div className="ampora-card-img-wrap">
                <img
                  src="/hiace.jpg"
                  alt="Toyota HiAce Commuter"
                  className="ampora-card-img"
                />
                <div className="ampora-card-arrow-btn">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <div className="ampora-card-info">
                <h3 className="ampora-card-title">Toyota HiAce Commuter</h3>
                <p className="ampora-card-cat">Category: Intercity Express · 14 Reclining Seats · Full AC</p>
              </div>
            </Link>

            {/* Card 2: Tata Ultra Deluxe Coach */}
            <Link href="/fleet#tata-bus" className="ampora-vehicle-card">
              <div className="ampora-card-img-wrap">
                <img
                  src="/tata-bus.jpg"
                  alt="Tata Ultra Starbus Deluxe"
                  className="ampora-card-img"
                />
                <div className="ampora-card-arrow-btn">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <div className="ampora-card-info">
                <h3 className="ampora-card-title">Tata Ultra Starbus Deluxe</h3>
                <p className="ampora-card-cat">Category: Long-Distance Highway Coach · 32 Seats · Panoramic View</p>
              </div>
            </Link>

            {/* Card 3: Force Trax Cruiser 4WD */}
            <Link href="/fleet#force-trax" className="ampora-vehicle-card">
              <div className="ampora-card-img-wrap">
                <img
                  src="/force-trax.jpg"
                  alt="Force Trax Cruiser 4WD"
                  className="ampora-card-img"
                />
                <div className="ampora-card-arrow-btn">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <div className="ampora-card-info">
                <h3 className="ampora-card-title">Force Trax Cruiser 4WD</h3>
                <p className="ampora-card-cat">Category: All-Terrain Mountain Utility · 12 Seats · High Clearance</p>
              </div>
            </Link>

            {/* Card 4: Explore All Vehicles */}
            <Link href="/fleet" className="ampora-explore-card">
              <div className="ampora-explore-icon">
                <ArrowUpRight size={22} />
              </div>
              <span className="ampora-explore-text">
                Explore All<br />Vehicles
              </span>
            </Link>
          </div>

          {/* Carousel Indicator Dots */}
          <div className="ampora-carousel-dots">
            {[0, 1, 2, 3, 4, 5].map((idx) => (
              <span
                key={idx}
                className={`ampora-dot ${activeCollectionTab === idx ? 'active' : ''}`}
                onClick={() => setActiveCollectionTab(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          STANDARD SECTION (Matches Ampora Image 1 Top Section)
      ──────────────────────────────────────────────────────── */}
      <section className="ampora-standard-section">
        <div className="section-wrap">
          <div className="ampora-standard-header">
            <span className="eyebrow">THE BIR PURKHA STANDARD / 02</span>
            <h2>More than just the journey.</h2>
          </div>

          <div className="ampora-standard-grid">
            {/* Module 1: Moody Image Showcase */}
            <div className="ampora-std-image-card">
              <img
                src="/hiace.jpg"
                alt="Bir Purkha Vehicle on Stage"
              />
            </div>

            {/* Module 2: Light Curated Collection Card */}
            <div className="ampora-std-card-col">
              <div className="ampora-std-box light">
                <div className="ampora-std-thumb-row">
                  <div className="ampora-std-thumb">
                    <img src="/tata-bus.jpg" alt="Tata Deluxe Coach detail" />
                  </div>
                  <Link href="/fleet" className="ampora-std-arrow-circle">
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
                <div>
                  <h3>Curated fleet</h3>
                  <p>Exceptional passenger vehicles selected for every road, incline, and highway condition across Nepal.</p>
                </div>
                <div className="ampora-std-tag-bottom">01 / SELECTION</div>
              </div>

              {/* Pill beneath card */}
              <div className="ampora-std-subpill">
                <strong>03+</strong>
                <span>Signature vehicle classes in service</span>
              </div>
            </div>

            {/* Module 3: Dark Effortless Discovery Card */}
            <div className="ampora-std-card-col">
              <div className="ampora-std-box dark">
                <div className="ampora-std-thumb-row">
                  <div className="ampora-std-thumb">
                    <img src="/force-trax.jpg" alt="Force Trax 4WD Jeep" />
                  </div>
                  <Link href="/contact" className="ampora-std-arrow-circle">
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
                <div>
                  <h3>Effortless discovery</h3>
                  <p>Check real-time routes, reserve preferred seats, and travel with guaranteed on-time departure.</p>
                </div>
                <div className="ampora-std-tag-bottom">02 / EXPERIENCE</div>
              </div>

              {/* Pill with Avatar stack beneath card */}
              <div className="ampora-std-subpill">
                <div className="ampora-avatar-group">
                  <div className="ampora-avatar">
                    <img src="/hiace.jpg" alt="Fleet icon 1" />
                  </div>
                  <div className="ampora-avatar">
                    <img src="/tata-bus.jpg" alt="Fleet icon 2" />
                  </div>
                  <div className="ampora-avatar">
                    <img src="/force-trax.jpg" alt="Fleet icon 3" />
                  </div>
                </div>
                <span>Exceptional vehicles. Unforgettable routes.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          CHASSIS & PERFORMANCE SPOTLIGHT (Matches Ampora Image 1 Ferrari Showcase)
      ──────────────────────────────────────────────────────── */}
      <section className="ampora-spotlight-section">
        <div className="section-wrap">
          <div className="ampora-spotlight-stage">
            {/* Side-profile Vehicle Studio Image */}
            <img
              src="/hiace.jpg"
              alt="Toyota HiAce Side Profile Showcase"
              className="ampora-spotlight-hero-img"
            />

            {/* Floating Glassmorphic Spec Card (Pinned to vehicle) */}
            <div className="ampora-hotspot-card">
              <img
                src={pinData[activePin].img}
                alt={pinData[activePin].title}
                className="ampora-hotspot-img"
              />
              <h4>{pinData[activePin].tag}</h4>
              <strong style={{ display: 'block', fontSize: '13px', marginBottom: '6px' }}>
                {pinData[activePin].title}
              </strong>
              <p>{pinData[activePin].desc}</p>
            </div>

            {/* Hotspot Circles on Body */}
            <button
              className="ampora-hotspot-pin pin-wheels"
              onClick={() => setActivePin('wheels')}
              title="Click to view Wheel & Suspension specs"
            >
              +
            </button>
            <button
              className="ampora-hotspot-pin pin-engine"
              onClick={() => setActivePin('engine')}
              title="Click to view Engine specs"
            >
              +
            </button>
            <button
              className="ampora-hotspot-pin pin-cabin"
              onClick={() => setActivePin('cabin')}
              title="Click to view Cabin specs"
            >
              +
            </button>
            <button
              className="ampora-hotspot-pin pin-rear"
              onClick={() => setActivePin('roof')}
              title="Click to view Cargo & Luggage specs"
            >
              +
            </button>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          MANIFESTO & TEAM (Matches Ampora Image 1 Bottom Quote)
      ──────────────────────────────────────────────────────── */}
      <section className="ampora-manifesto-section">
        <div className="section-wrap">
          <div className="ampora-manifesto-grid">
            {/* Left Card: Portrait Photography */}
            <div className="ampora-manifesto-portrait">
              <img
                src="/tata-bus.jpg"
                alt="Bir Purkha Deluxe Transit on Duty"
              />
            </div>

            {/* Right Card: Dark Quote Card */}
            <div className="ampora-manifesto-card">
              <blockquote>
                “We believe travel should be about more than simply getting from one place to another.
                It’s about the feeling behind the wheel, the comfort and safety of every passenger,
                and the moments that make every journey across Nepal memorable.”
              </blockquote>

              <div className="ampora-manifesto-footer">
                <div className="ampora-manifesto-team">The Bir Purkha Team</div>
                <div className="ampora-manifesto-motto">
                  Hetauda, Nepal · Driven by experience. Defined by the journey.
                </div>
              </div>
            </div>
          </div>

          {/* Dots pagination */}
          <div className="ampora-carousel-dots" style={{ marginTop: '36px' }}>
            <span className="ampora-dot active" />
            <span className="ampora-dot" />
            <span className="ampora-dot" />
            <span className="ampora-dot" />
            <span className="ampora-dot" />
            <span className="ampora-dot" />
          </div>
        </div>
      </section>
    </main>
  )
}
