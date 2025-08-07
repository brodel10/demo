"use client";

import { Section, Block, Link } from "@/devlink/_Builtin";
import { Footer } from "@/devlink/Footer";
import { Navigation } from "@/devlink";
import Checkout from "@/app/components/checkout";

export default function Home() {
  return (
    <>
      <Navigation />
      <Section
        tag="section"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Checkout />
      </Section>
      <Footer />
    </>
  );
}
