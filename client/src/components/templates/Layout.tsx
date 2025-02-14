import Footer from "../molecules/Footer";
import NavBar from "../molecules/NavBar";
import CtaSection from "../organisms/CtaSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <NavBar />

      <main>{children}</main>

      <CtaSection />
      <Footer />
    </div>
  );
}
