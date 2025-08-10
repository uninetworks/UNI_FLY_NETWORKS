import Image from "next/image";
import Hero from "../components/landingpage/Hero"
import About from '../components/landingpage/About'
import InteractiveSelector from "../components/landingpage/InteractiveSelector"
import WhyChooseSection from "../components/landingpage/WhychooseSection"
import ContactForm from "../components/landingpage/ContactForm"
import { Header1 } from "@/components/ui/header"

export default function Home() {
  return (
    <>
    <Header1 />
    <Hero />
    <InteractiveSelector />
    <About />
    <WhyChooseSection />
    <ContactForm />
    </>
  );
}
