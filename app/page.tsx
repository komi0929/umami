import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import ProductLines from "@/app/components/ProductLines";
import BusinessValue from "@/app/components/BusinessValue";
import ConversionCTA from "@/app/components/ConversionCTA";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductLines />
        <div className="section-divider max-w-4xl mx-auto" />
        <BusinessValue />
        <div className="section-divider max-w-4xl mx-auto" />
        <ConversionCTA />
      </main>
      <Footer />
    </>
  );
}
