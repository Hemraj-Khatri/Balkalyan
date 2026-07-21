import HeroCarousel from "../components/Carosual";
import Header from "../components/Header";
import NoticeBoard from "../components/NoticeBoard";
import Principal from "../components/Principal";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroCarousel />
      <section
        className="
max-w-7xl
mx-auto
px-5
py-16
grid
lg:grid-cols-2
gap-8
"
      >
        <NoticeBoard />
        <Principal />
      </section>
    </div>
  );
}
