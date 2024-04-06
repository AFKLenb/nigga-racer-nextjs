'use client';
import Contacts from "@/components/Contacts/Contacts";
import Project from "@/components/Projects/Project";
import Service from "@/components/Services/Service";
import useServices from "@/hooks/useServices";

export default function Home() {
  


  const getServices = useServices();

  return (
    <>
      <Project />
      <Service getServices={getServices} />
      <Contacts />
    </>
  );
}
