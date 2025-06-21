"use client";

import Footer from "@/components/Dashboard/Footer";
import Header from "@/components/Dashboard/Header";

export default function Philosophy() {

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen bg-[var(--primary-color)] text-[var(--text-color)]  text-3xl">
        Welcome to philosophy!
      </div>
      <Footer />
    </>
  );
}
