"use client";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    initFlowbite();
  }, []);
  return <main className="">test</main>;
}
