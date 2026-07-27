import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { useState } from 'react';

// Components
import { CustomCursor } from '@/components/CustomCursor';
import { FloatingButtons } from '@/components/FloatingButtons';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// Sections
import { Hero } from '@/sections/Hero';
import { TrustedBy } from '@/sections/TrustedBy';
import { About } from '@/sections/About';
import { Services } from '@/sections/Services';
import { WhyChoose } from '@/sections/WhyChoose';
import { TechStack } from '@/sections/TechStack';
import { Portfolio } from '@/sections/Portfolio';
import { Timeline } from '@/sections/Timeline';
import { Testimonials } from '@/sections/Testimonials';
import { Founder } from '@/sections/Founder';
import { FAQ } from '@/sections/FAQ';
import { CTA } from '@/sections/CTA';
import { Contact } from '@/sections/Contact';

const queryClient = new QueryClient();

function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/30 selection:text-white">
      <CustomCursor />
      
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <TrustedBy />
            <About />
            <Services />
            <WhyChoose />
            <TechStack />
            <Portfolio />
            <Timeline />
            <Testimonials />
            <Founder />
            <FAQ />
            <CTA />
            <Contact />
          </main>
          <Footer />
          <FloatingButtons />
        </>
      )}
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
