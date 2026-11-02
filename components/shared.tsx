'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, X, User, Phone, MapPin } from 'lucide-react'

export function BrandMark() {
  return (
    <img
      src="/logo.jpg"
      alt="Bir Purkha Official Emblem"
      className="ampora-brand-logo-img"
    />
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const links = [
    { label: 'Home',     href: '/' },
    { label: 'Fleet',    href: '/fleet' },
    { label: 'Routes',   href: '/routes' },
    { label: 'About',    href: '/about' },
    { label: 'Contact',  href: '/contact' },
  ]

  return (
    <header className={`ampora-header-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="ampora-header-inner">
        {/* Brand with Official Crest */}
        <Link className="ampora-brand" href="/">
          <BrandMark />
          <div className="ampora-brand-text">
            <span className="ampora-brand-name">Bir Purkha</span>
            <span className="ampora-brand-sub">Multipurpose Pvt. Ltd.</span>
          </div>
        </Link>

        {/* Center Capsule Nav (Ampora style) */}
        <nav className="ampora-nav-capsule" aria-label="Main Navigation">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`ampora-nav-item ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Right CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link href="/contact" className="ampora-header-cta">
            <span>Book a Ride</span>
            <div className="ampora-cta-icon">
              <User size={13} />
            </div>
          </Link>

          <button
            className="ampora-menu-toggle"
            aria-label={open ? 'Close Menu' : 'Open Menu'}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div
          style={{
            position: 'fixed',
            inset: '68px 0 0 0',
            background: 'rgba(8, 12, 20, 0.98)',
            backdropFilter: 'blur(22px)',
            zIndex: 99,
            padding: '30px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                color: pathname === link.href ? '#ffffff' : 'rgba(255, 255, 255, 0.75)',
                fontSize: '18px',
                fontWeight: 700,
                padding: '16px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>{link.label}</span>
              <ArrowUpRight size={18} opacity={0.6} />
            </Link>
          ))}
          <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                background: '#ffffff',
                color: '#000000',
                borderRadius: '9999px',
                padding: '16px',
                fontWeight: 700,
                fontSize: '14px',
              }}
            >
              Book Your Seat Now
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export function Footer() {
  return (
    <footer className="ampora-footer">
      <div className="section-wrap">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '48px',
            paddingBottom: '70px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
          }}
        >
          {/* Brand Info with Official Logo */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
              <img
                src="/logo.jpg"
                alt="Bir Purkha Official Logo"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  objectFit: 'cover',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              />
              <div>
                <strong style={{ fontSize: '17px', fontWeight: 900, letterSpacing: '-0.02em', display: 'block', color: '#fff' }}>
                  Bir Purkha
                </strong>
                <span style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.55)' }}>
                  Multipurpose Pvt. Ltd.
                </span>
              </div>
            </div>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.65)', maxWidth: '320px', marginBottom: '22px' }}>
              Redefining highway passenger transportation across Nepal with certified mountain safety, dependable schedules, and a premier vehicle fleet.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '12px', color: 'rgba(255, 255, 255, 0.75)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={14} color="#0066cc" /> Hetauda-4, Kantirajpath, Makwanpur, Nepal
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={14} color="#0066cc" /> +977 057-520000 / +977 9855000000
              </span>
            </div>
          </div>

          {/* Fleet Links */}
          <div>
            <span style={{ display: 'block', fontSize: '9px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.45)', marginBottom: '18px' }}>
              Our Fleet
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
              <Link href="/fleet#hiace" style={{ color: 'rgba(255, 255, 255, 0.78)', transition: 'color 0.2s' }}>
                Toyota HiAce Commuter (14-Seater AC)
              </Link>
              <Link href="/fleet#tata-bus" style={{ color: 'rgba(255, 255, 255, 0.78)', transition: 'color 0.2s' }}>
                Tata Ultra Deluxe Coach (32-Seater)
              </Link>
              <Link href="/fleet#force-trax" style={{ color: 'rgba(255, 255, 255, 0.78)', transition: 'color 0.2s' }}>
                Force Trax Cruiser 4WD (12-Seater)
              </Link>
              <Link href="/fleet" style={{ color: '#ffffff', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '6px' }}>
                View Full Fleet Showroom <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>

          {/* Quick Routes */}
          <div>
            <span style={{ display: 'block', fontSize: '9px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.45)', marginBottom: '18px' }}>
              Highway Network
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
              <Link href="/routes" style={{ color: 'rgba(255, 255, 255, 0.78)' }}>
                Hetauda ↔ Kathmandu (Fast Track / Kulekhani)
              </Link>
              <Link href="/routes" style={{ color: 'rgba(255, 255, 255, 0.78)' }}>
                Hetauda ↔ Sindhuli (BP Highway)
              </Link>
              <Link href="/routes" style={{ color: 'rgba(255, 255, 255, 0.78)' }}>
                Hetauda ↔ Birgunj / Border Corridor
              </Link>
              <Link href="/routes" style={{ color: 'rgba(255, 255, 255, 0.78)' }}>
                Hetauda ↔ Narayangarh (East-West Highway)
              </Link>
              <Link href="/routes" style={{ color: 'rgba(255, 255, 255, 0.78)' }}>
                Daman & Palung Mountain Pass Charter
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <span style={{ display: 'block', fontSize: '9px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.45)', marginBottom: '18px' }}>
              Bir Purkha Company
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
              <Link href="/about" style={{ color: 'rgba(255, 255, 255, 0.78)' }}>
                About Our Heritage
              </Link>
              <Link href="/about#safety" style={{ color: 'rgba(255, 255, 255, 0.78)' }}>
                Safety & Chauffeur Standards
              </Link>
              <Link href="/contact" style={{ color: 'rgba(255, 255, 255, 0.78)' }}>
                Book Tickets & Private Hire
              </Link>
              <Link href="/contact#depots" style={{ color: 'rgba(255, 255, 255, 0.78)' }}>
                Official Depot Counters
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '28px',
            fontSize: '11px',
            color: 'rgba(255, 255, 255, 0.45)',
            gap: '16px',
          }}
        >
          <span>© 2026 Bir Purkha Multipurpose Pvt. Ltd. (वीर पुर्खा यातायात). All Rights Reserved.</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            <span>Hetauda, Makwanpur</span>
            <span>Bagmati Province, Nepal</span>
            <span>Terms of Service</span>
            <span>Passenger Rights</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
