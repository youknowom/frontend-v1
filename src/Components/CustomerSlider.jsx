import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Build Fast React Apps",
    desc: "Reusable components, clean UI, smooth animations.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Modern Web Design",
    desc: "Responsive, accessible and performance focused.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "Scale with Confidence",
    desc: "Production ready architecture for real projects.",
    image: "https://images.unsplash.com/photo-1526378722484-cc5c5107f0b0",
  },
];

export default function HeroSlider() {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    sliderRef.current.scrollBy({
      left: dir === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => scroll("right"), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black text-white py-16">
      <h1 className="text-4xl font-bold text-center mb-10">Explore Our Features</h1>

      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-10 no-scrollbar"
      >
        {slides.map((slide, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="min-w-[320px] md:min-w-[420px] bg-zinc-900 rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={slide.image}
              className="h-56 w-full object-cover"
              alt="slide"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold">{slide.title}</h2>
              <p className="text-zinc-400 mt-2">{slide.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
    