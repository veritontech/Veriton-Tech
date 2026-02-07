import { HeroSection } from '@/app/components/home/HeroSection';
import { ProgramsOverview } from '@/app/components/home/ProgramsOverview';
import { TeachingPlatforms } from '@/app/components/home/TeachingPlatforms';
import { MarketNeedsPreview } from '@/app/components/home/MarketNeedsPreview';
import { ProblemSolutionPreview } from '@/app/components/home/ProblemSolutionPreview';
import { WhyVeriton } from '@/app/components/home/WhyVeriton';
import { FeedBack } from '@/app/components/home/FeedBack';
// import { PartnershipForm } from '@/app/components/home/PartnershipForm';
// import { CTASection } from '@/app/components/home/CTASection';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      <HeroSection />
      <ProgramsOverview />
      <MarketNeedsPreview />
      <ProblemSolutionPreview />
      <WhyVeriton />
      <TeachingPlatforms onNavigate={onNavigate} />
      <FeedBack/>
      {/* <PartnershipForm /> */}
      {/* <CTASection /> */}
    </div>
  );
}