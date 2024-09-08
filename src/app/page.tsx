import HeroSection from "@/modules/LandingPage/HeroSection";
import MissionVisionLayout from "@/modules/LandingPage/MissionAndVissionLayout";
import WhyChooseUs from "@/modules/LandingPage/WhyChooseUs";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <WhyChooseUs />
      <MissionVisionLayout />
    </Box>
  );
}
