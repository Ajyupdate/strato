import Coding from "@/modules/LandingPage/Coding";
import HeroSection from "@/modules/LandingPage/HeroSection";
import HowWeMake from "@/modules/LandingPage/HowWeMake";
import MissionVisionLayout from "@/modules/LandingPage/MissionAndVissionLayout";
import Subjects from "@/modules/LandingPage/Subjects";
import UnlockSection from "@/modules/LandingPage/UnlockSection";
import WhyChooseUs from "@/modules/LandingPage/WhyChooseUs";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <WhyChooseUs />
      <MissionVisionLayout />
      <HowWeMake />
      <UnlockSection />
      <Subjects />
      <Coding />
    </Box>
  );
}
