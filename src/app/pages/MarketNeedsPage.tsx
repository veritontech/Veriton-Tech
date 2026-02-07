import { IndustryTrends } from '@/app/components/market-needs/IndustryTrends';
import { SkillsGap } from '@/app/components/market-needs/SkillsGap';

export function MarketNeedsPage() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Understanding Market Needs
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the skills employers are looking for and how Veriton prepares you for success in the modern tech industry
          </p>
        </div>

        <IndustryTrends />
        <SkillsGap />
      </div>
    </div>
  );
}
