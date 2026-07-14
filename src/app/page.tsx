import NavBar from '@/components/NavBar'
import HeroSection from '@/components/HeroSection'
import MarathonRoute from '@/components/MarathonRoute'
import VerhaalSection from '@/components/VerhaalSection'
import KikaSection from '@/components/KikaSection'
import ImpactDashboard from '@/components/ImpactDashboard'
import PhotoGallery from '@/components/PhotoGallery'
import SponsorSection from '@/components/SponsorSection'
import SponsorsSection from '@/components/SponsorsSection'
import MobileNav from '@/components/MobileNav'
import ScrollToTop from '@/components/ScrollToTop'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pb-16 md:pb-0">
        <HeroSection />
        <MarathonRoute />
        <VerhaalSection />
        <KikaSection />
        <ImpactDashboard />
        <PhotoGallery />
        <SponsorsSection />
        <SponsorSection />
        <Footer />
      </main>
      <MobileNav />
      <ScrollToTop />
    </>
  )
}
