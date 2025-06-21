"use client";

import Header from "@/components/Dashboard/Header";
import NewVisionLearningAI from "@/components/Dashboard/NewVisionLearningAI";
import InstructionsCompanies from "@/components/Dashboard/InstructionsCompaniesList";
import CompetitiveEdge from "@/components/Dashboard/CompetitiveEdge";
import ExploreOurDynamicLearningFormats from "@/components/Dashboard/ExploreOurDynamicLearningFormats";
import EmpowerAcrossVariousDomains from "@/components/Dashboard/EmpowerAcrossVariousDomains";
import UnlockFullLearningPotential from "@/components/Dashboard/UnlockFullLearningPotential";
import BasdSwissExcellenceAIResearch from "@/components/Dashboard/BasdSwissExcellenceAIResearch";
import MeetingScholeTeam from "@/components/Dashboard/MeetingScholeTeam";
import Footer from "@/components/Dashboard/Footer";
import SummaryTextReveal from "@/components/Dashboard/SummaryTextReveal";

export default function Dashboard() {

  return (
    <>
      <div className="bg-[var(--color-primary)] text-[var(--color-text)]">
        <Header />
        <NewVisionLearningAI />
        <InstructionsCompanies />
        <SummaryTextReveal />
        <hr className="mx-auto my-8 max-w-[1200px] text-[var(--color-secondary)]"></hr>
        <CompetitiveEdge />
        <UnlockFullLearningPotential />
        <hr className="my-24 mx-auto max-w-[1000px] text-[var(--color-secondary)]"></hr>
        <ExploreOurDynamicLearningFormats />
        <EmpowerAcrossVariousDomains />
        <BasdSwissExcellenceAIResearch />
        <MeetingScholeTeam />
        <Footer />
      </div>
    </>
  );
}
