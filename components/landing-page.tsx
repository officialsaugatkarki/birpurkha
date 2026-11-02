'use client'

import { useState } from 'react'
import { ArrowUpRight, Menu, MoveRight, X } from 'lucide-react'

const vehicleHero = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7320a04f-bc2f-4769-8fda-86efc8f14f49-3kRKPqjtZ2Z39Rg5PtDiWJa5sf6MVL.jpeg'
const fleetImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aad206ca-70ff-4959-ab19-0b2f939fd907-awiphR0Nx96JZnAhzl48vLV5VJNLj1.jpeg'
const portraitImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-29%20at%201.11.15%20PM-VpCTqR3OASNM06GdaSuqhKspizCDaB.jpeg'

function Mark() {
  return <div className="brand-mark" aria-label="Bir Purkha home"><span>BP</span></div>
}

function Header() {
  const [open, setOpen] = useState(false)
  const links = ['Home', 'Book a Journey', 'Routes', 'Our Fleet', 'About Us', 'Contact']
  return (
    <header className="site-header">
      <a className="brand" href="#top"><Mark /><span>Bir Purkha<small>Multipurpose Pvt. Ltd.</small></span></a>
      <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Primary navigation">
        {links.map((link) => <a key={link} href={link === 'Home' ? '#top' : `#${link.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setOpen(false)}>{link}</a>)}
        <a className="nav-book" href="#book" onClick={() => setOpen(false)}>Book your journey <ArrowUpRight size={14} /></a>
      </nav>
      <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </header>
  )
}

function SearchPanel() {
  return <section className="search-panel" id="book" aria-label="Journey search">
    <div className="search-intro"><span className="eyebrow">PLAN YOUR JOURNEY</span><h2>Where are you headed?</h2><p>Simple, dependable travel across Nepal.</p></div>
    <form className="search-form" onSubmit={(event) => event.preventDefault()}>
      <label><span>From</span><select defaultValue="Hetauda"><option>Hetauda</option><option>Kathmandu</option><option>Sindhuli</option></select></label>
      <label><span>To</span><select defaultValue="Kathmandu"><option>Kathmandu</option><option>Hetauda</option><option>Sindhuli</option></select></label>
      <label><span>Travel date</span><input type="date" /></label>
      <label><span>Passengers</span><select defaultValue="1 passenger"><option>1 passenger</option><option>2 passengers</option><option>3 passengers</option><option>4 passengers</option></select></label>
      <button className="button button-dark" type="submit">Search journeys <MoveRight size={16} /></button>
    </form>
  </section>
}

function Hero() {
  return <section className="hero" id="top">
    <img src={vehicleHero} alt="Electric passenger vehicle in the Bir Purkha fleet" />
    <div className="hero-shade" />
    <div className="hero-content"><span className="eyebrow light">HETAUDA · NEPAL</span><h1>Your journey.<br /><em>Our responsibility.</em></h1><p>Discover a more convenient way to travel across Nepal with Bir Purkha&apos;s passenger transportation services.</p><div className="hero-actions"><a className="button button-light" href="#book">Find your journey <ArrowUpRight size={16} /></a><a className="text-link light-link" href="#routes">Explore our routes <MoveRight size={16} /></a></div></div>
    <div className="hero-caption"><span>01 / OUR FLEET</span><strong>Real vehicles. Real routes.</strong><small>Passenger transport made for the people and places of Nepal.</small></div>
  </section>
}

function Routes() {
  return <section className="routes-section section-wrap" id="routes"><div className="section-heading"><div><span className="eyebrow">THE ROUTES / 01</span><h2>Go further, <em>comfortably.</em></h2></div><a className="text-link" href="#book">View all routes <MoveRight size={16} /></a></div><div className="route-grid"><article className="route-card route-main"><div><span className="route-number">01</span><h3>Hetauda <span>↔</span> Kathmandu</h3><p>Our first corridor connects home with the capital.</p></div><a href="#book" aria-label="Book Hetauda to Kathmandu"><ArrowUpRight /></a></article><article className="route-card route-secondary"><div><span className="route-number">02</span><h3>Hetauda <span>↔</span> Sindhuli</h3><p>Thoughtful travel through the heart of Nepal.</p></div><a href="#book" aria-label="Book Hetauda to Sindhuli"><ArrowUpRight /></a></article></div></section>
}

function Fleet() {
  return <section className="fleet-section" id="our-fleet"><div className="section-wrap fleet-inner"><div className="section-heading light-heading"><div><span className="eyebrow light">THE FLEET / 02</span><h2>Made for <em>real journeys.</em></h2></div><p>From city buses to dependable utility vehicles, our fleet is selected for Nepal&apos;s roads, routes, and everyday passengers.</p></div><div className="fleet-image"><img src={fleetImage} alt="Bir Purkha passenger coach outside its depot" /><div className="fleet-label"><span>FLEET / 01</span><strong>Passenger coach</strong><small>Bir Purkha vehicle · Built for Nepal</small></div></div></div></section>
}

function About() {
  return <section className="about-section section-wrap" id="about-us"><div className="about-grid"><div className="portrait"><img src={portraitImage} alt="Bir Purkha passenger van parked at the depot" /></div><div className="manifesto"><span className="eyebrow light">WHY BIR PURKHA</span><h2>Moving people.<br /><em>Building trust.</em></h2><p>We believe transportation should be about more than simply getting from one place to another. It&apos;s about the feeling behind the wheel, the freedom to explore, and the moments that make every journey memorable.</p><div className="signature">The Bir Purkha Team<small>Hetauda, Nepal · Since the journey begins</small></div></div></div></section>
}

function Footer() {
  return <footer className="footer" id="contact"><div className="footer-top"><div className="footer-brand"><Mark /><p>Exceptional journeys.<br />Thoughtfully made for Nepal.</p></div><div className="footer-links"><div><span>Explore</span><a href="#book">Book a journey</a><a href="#routes">Our routes</a><a href="#our-fleet">Our fleet</a><a href="#about-us">About us</a></div><div><span>Company</span><a href="#about-us">Our approach</a><a href="#about-us">Our responsibility</a><a href="#contact">Contact</a></div><div><span>Connect</span><a href="#contact">Instagram</a><a href="#contact">LinkedIn</a><a href="#contact">Facebook</a></div></div></div><div className="footer-bottom"><span>© 2026 Bir Purkha Multipurpose Pvt. Ltd.</span><span>Privacy · Terms</span></div></footer>
}

export function LandingPage() {
  return <div className="site-shell"><Header /><main><Hero /><SearchPanel /><Routes /><Fleet /><About /></main><Footer /></div>
}
