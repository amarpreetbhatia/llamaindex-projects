import { ProfessionalHeader } from "@/app/components/professional-header";
import { ProfileHero } from "@/app/components/profile/profile-hero";
import { PortfolioContent } from "@/app/components/profile/portfolio-content";
import { FloatingChatWidget } from "@/app/components/floating-chat-widget";
import { Footer } from "@/app/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <ProfessionalHeader />
      <ProfileHero />
      <PortfolioContent />
      <Footer />
      <FloatingChatWidget />
    </main>
  );
}
