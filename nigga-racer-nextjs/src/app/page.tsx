'use client';
import About from "@/components/About/About";
import Contacts from "@/components/Contacts/Contacts";
import Hero from "@/components/Hero/Hero";
import Project from "@/components/Projects/Project";
import Service from "@/components/Services/Service";
import useServices from "@/hooks/useServices";

export default function Home() {
  


  const getServices = useServices();

  return (
    <>
      <Hero />
      <About />
      <Project />
      <Service getServices={getServices} />
      <Contacts />
    </>
  );
}
