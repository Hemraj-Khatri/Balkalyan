import { useEffect, useState } from "react";

import school1 from "../assets/school1.jpeg";
import school2 from "../assets/school2.jpeg";
import school3 from "../assets/school3.jpg";

const slides = [
  {
    image: school1,
    badge: "Admission Open 2026",
    title: "Shaping Future Leaders Through Quality Education",
    description:
      "A place where students discover knowledge, creativity, confidence and excellence.",
  },

  {
    image: school2,
    badge: "Modern Learning Environment",
    title: "Where Innovation Meets Education",
    description:
      "Advanced classrooms, experienced teachers and student-centered learning.",
  },

  {
    image: school3,
    badge: "20+ Years Of Excellence",
    title: "Building Character Beyond Classrooms",
    description:
      "Developing responsible, creative and successful individuals for tomorrow.",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setActive(active === slides.length - 1 ? 0 : active + 1);
  };

  const previous = () => {
    setActive(active === 0 ? slides.length - 1 : active - 1);
  };

  return (
    <section
      className="
    relative 
    h-[65vh]
    md:h-[70vh]
    lg:h-[75vh]
    overflow-hidden
  "
    >
      {/* Background Image */}

      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          className={`
absolute inset-0 w-full h-full object-cover
transition-all duration-[1500ms]
${active === index ? "opacity-100 scale-110" : "opacity-0 scale-100"}
`}
        />
      ))}

      {/* Dark Overlay */}

      <div
        className="
absolute inset-0
bg-gradient-to-r
from-black/80
via-black/50
to-black/20
"
      ></div>

      {/* Content */}

      <div
        className="
relative z-10
max-w-7xl mx-auto
h-full px-6
flex items-center
"
      >
        <div className="max-w-3xl text-white">
          {/* Badge */}

          <span
            className="
inline-block
bg-yellow-500
text-black
font-semibold
px-5 py-2
rounded-full
mb-6
shadow-lg
"
          >
            🎓 {slides[active].badge}
          </span>

          <h1
            className="
text-3xl md:text-5xl lg:text-6xl

"
          >
            {slides[active].title}
          </h1>

          <p
            className="
text-lg
md:text-xl
text-gray-200
max-w-2xl
mb-8
"
          >
            {slides[active].description}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              className="
btn
btn-warning
px-8
rounded-full
text-black
font-bold
"
            >
              Apply Now
            </button>

            <button
              className="
btn
btn-outline
text-white
border-white
hover:bg-white
hover:text-black
rounded-full
px-8
"
            >
              Explore School
            </button>
          </div>

          {/* Statistics */}

          <div
            className="
mt-12
grid
grid-cols-3
gap-4
max-w-xl
"
          >
            <div
              className="
bg-white/20
backdrop-blur-md
rounded-xl
p-4
text-center
"
            >
              <h2 className="text-2xl font-bold">2700+</h2>

              <p className="text-sm">Students</p>
            </div>

            <div
              className="
bg-white/20
backdrop-blur-md
rounded-xl
p-4
text-center
"
            >
              <h2 className="text-2xl font-bold">100+</h2>

              <p className="text-sm">Teachers</p>
            </div>

            <div
              className="
bg-white/20
backdrop-blur-md
rounded-xl
p-4
text-center
"
            >
              <h2 className="text-2xl font-bold">60+</h2>

              <p className="text-sm">Years</p>
            </div>
          </div>
        </div>
      </div>

      {/* Previous */}

      <button
        onClick={previous}
        className="
absolute
left-5
top-1/2
btn
btn-circle
bg-white/20
border-none
text-white
hover:bg-yellow-500
"
      >
        ❮
      </button>

      {/* Next */}

      <button
        onClick={next}
        className="
absolute
right-5
top-1/2
btn
btn-circle
bg-white/20
border-none
text-white
hover:bg-yellow-500
"
      >
        ❯
      </button>

      {/* Indicators */}

      <div
        className="
absolute
bottom-8
left-1/2
-translate-x-1/2
flex
gap-3
"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`
h-3 rounded-full transition-all
${active === index ? "w-10 bg-yellow-400" : "w-3 bg-white"}
`}
          ></button>
        ))}
      </div>
    </section>
  );
}
