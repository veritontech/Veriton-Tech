import { useState } from 'react';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { HomePage } from '@/app/pages/HomePage';
import { ProgramsPage } from '@/app/pages/ProgramsPage';
import { MarketNeedsPage } from '@/app/pages/MarketNeedsPage';
import { SolutionsPage } from '@/app/pages/SolutionsPage';
import { AboutPage } from '@/app/pages/AboutPage';
import { ContactPage } from '@/app/pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'programs':
        return <ProgramsPage />;
      case 'market-needs':
        return <MarketNeedsPage />;
      case 'solutions':
        return <SolutionsPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />

      <main className="min-h-screen">
        {renderPage()}
      </main>

      {/* ✅ FIX: pass props like Header */}
      <Footer onNavigate={setCurrentPage} currentPage={currentPage} />
    </div>
  );
}
