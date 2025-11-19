import Navigation from '@/components/Navigation';
import WaterDropletsBackground from '@/components/ui/water-droplets';
import ContactSection from '@/Features/Contact';
import ExperienceSection from '@/Features/Experience';
import HeroSection from '@/Features/Hero';
import ProjectsHighlight from '@/Features/ProjectsHighlight';
import SkillsSection from '@/Features/Skills';

export default function Home() {
  return (
    <main className='min-h-screen relative'>
      {/* Fixed water droplets background across entire page */}
      <WaterDropletsBackground />
      <Navigation />

      <div className='pt-[80px] relative z-10'>
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsHighlight />
        <ContactSection />
      </div>
    </main>
  );
}
