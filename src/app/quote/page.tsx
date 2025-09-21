import QuoteWizard from "./QuoteWizard";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export default function Quote() { return <QuoteWizard />; }

export const generateMetadata = (): Metadata =>
  pageMeta({
    title: "Request a Heavy-Haul Transportation Quote | Arrant Solutions",
    description:
      "Share dimensions, weight, and endpoints—get a same-day plan for permits, escorts, and routing.",
    pathname: "/quote",
  });
