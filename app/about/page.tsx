import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TeamSection } from "@/components/team-section"
import { CompanyStory } from "@/components/company-story"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <CompanyStory />
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}
