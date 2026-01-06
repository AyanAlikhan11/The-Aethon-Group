// components/sections/Testimonials.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const testimonials = [
  {
    id: 1,
    quote:
      "The Aethon Group transformed our business strategy completely. Their insights were invaluable.",
    author: "Sarah Mitchell",
    role: "CEO",
    company: "TechVentures Inc.",
    image: "/images/testimonials/sarah.jpg",
    logo: "/images/logos/techventures.svg",
  },
  {
    id: 2,
    quote:
      "Working with The Aethon Group was a game-changer. Their strategic depth helped us scale faster.",
    author: "Michael Chen",
    role: "Managing Director",
    company: "Global Finance Corp",
    image: "/images/testimonials/michael.jpg",
    logo: "/images/logos/globalfinance.svg",
  },
  {
    id: 3,
    quote:
      "Aethon brought clarity, confidence, and execution excellence.",
    author: "Emily Rodriguez",
    role: "President",
    company: "Innovation Labs",
    image: "/images/testimonials/emily.jpg",
    logo: "/images/logos/innovationlabs.svg",
  },
];

const logos = [
  "/logos/1.jpg",
  "/logos/2.jpg",
  "/logos/3.jpg",
  "/logos/4.jpg",
  "/logos/5.jpg",
  "/logos/6.jpg",
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 250 : -250,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -250 : 250,
      opacity: 0,
    }),
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">

        <SectionHeading
          tagline="Client Success"
          title="Trusted by Industry Leaders"
          description="Hear from executives who partnered with The Aethon Group."
          centered
        />

        {/* ================= TESTIMONIAL CARD ================= */}
        <div className="mt-20 relative max-w-4xl mx-auto">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A24D] to-[#E8C97A] flex items-center justify-center shadow-lg">
              <Quote className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-[0_40px_90px_-30px_rgba(201,162,77,0.35)] p-10 pt-16">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <blockquote className="text-xl lg:text-2xl text-neutral-700 text-center mb-10">
                  “{testimonials[currentIndex].quote}”
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].author}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">
                        {testimonials[currentIndex].author}
                      </div>
                      <div className="text-sm text-neutral-500">
                        {testimonials[currentIndex].role},{" "}
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>

                  <Image
                    src={testimonials[currentIndex].logo}
                    alt="logo"
                    width={120}
                    height={40}
                    className="hidden md:block object-contain"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ================= GOLD MARQUEE STRAP ================= */}
        <div className="mt-28 relative overflow-hidden">
          <p className="text-center text-neutral-600 mb-6">
            Trusted by leading organizations worldwide
          </p>

          <div className="relative overflow-hidden rounded-xl shadow-md">

            {/* Gold gradient base */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#E8C97A] via-[#FFC21A] to-[#E8C97A]" />

            {/* Subtle luxury texture */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 10px)",
              }}
            />

            {/* Highlight lines */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/40" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/10" />

            {/* Marquee */}
            <div className="relative py-2">
              <motion.div
                className="flex items-center gap-15 w-max"
                animate={{ x: ["0%", "-90%"] }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[...logos, ...logos].map((logo, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg px-2 py-1 shadow-sm flex items-center justify-center hover:scale-105 transition-transform"
                  >
                    <Image
                      src={logo}
                      alt="Client logo"
                      width={100}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


// components/sections/Testimonials.tsx
// "use client";

// import { useState, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { Quote } from "lucide-react";
// import SectionHeading from "@/components/common/SectionHeading";

// const testimonials = [
//   {
//     id: 1,
//     quote:
//       "The Aethon Group transformed our business strategy completely. Their insights were invaluable.",
//     author: "Sarah Mitchell",
//     role: "CEO",
//     company: "TechVentures Inc.",
//     image: "/images/testimonials/sarah.jpg",
//     logo: "/images/logos/techventures.svg",
//   },
//   {
//     id: 2,
//     quote:
//       "Working with The Aethon Group was a game-changer. Their strategic depth helped us scale faster.",
//     author: "Michael Chen",
//     role: "Managing Director",
//     company: "Global Finance Corp",
//     image: "/images/testimonials/michael.jpg",
//     logo: "/images/logos/globalfinance.svg",
//   },
//   {
//     id: 3,
//     quote: "Aethon brought clarity, confidence, and execution excellence.",
//     author: "Emily Rodriguez",
//     role: "President",
//     company: "Innovation Labs",
//     image: "/images/testimonials/emily.jpg",
//     logo: "/images/logos/innovationlabs.svg",
//   },
// ];

// const logos = [
//   "/logos/1.jpg",
//   "/logos/2.jpg",
//   "/logos/3.jpg",
//   "/logos/4.jpg",
//   "/logos/5.jpg",
//   "/logos/6.jpg",
//   "/logos/ncb.png",
//   "/logos/satguru.png",
//   "/logos/shipzip.png",
//   "/logos/tarsons.png",
//   "/logos/homelite.png",
//   "/logos/medhavi.png",
//   "/logos/upl.png",
//   "/logos/shanghai.png",
//   "/logos/sunrise.png",
// ];

// export default function Testimonials() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   const next = useCallback(() => {
//     setDirection(1);
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   }, []);

//   const prev = () => {
//     setDirection(-1);
//     setCurrentIndex(
//       (prev) => (prev - 1 + testimonials.length) % testimonials.length
//     );
//   };

//   useEffect(() => {
//     const timer = setInterval(next, 6000);
//     return () => clearInterval(timer);
//   }, [next]);

//   const variants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 250 : -250,
//       opacity: 0,
//     }),
//     center: { x: 0, opacity: 1 },
//     exit: (direction: number) => ({
//       x: direction > 0 ? -250 : 250,
//       opacity: 0,
//     }),
//   };

//   return (
//     <section className="relative py-24 bg-white overflow-hidden">
//       <div className="container mx-auto px-4 lg:px-8">

//         <SectionHeading
//           tagline="Client Success"
//           title="Trusted by Industry Leaders"
//           description="Hear from executives who partnered with The Aethon Group."
//           centered
//         />

//         {/* ================= TESTIMONIAL CARD ================= */}
//         <div className="mt-20 relative max-w-4xl mx-auto">
//           <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
//             <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A24D] to-[#E8C97A] flex items-center justify-center shadow-lg">
//               <Quote className="w-8 h-8 text-white" />
//             </div>
//           </div>

//           <div className="bg-white rounded-3xl shadow-[0_40px_90px_-30px_rgba(201,162,77,0.35)] p-10 pt-16">
//             <AnimatePresence mode="wait" custom={direction}>
//               <motion.div
//                 key={currentIndex}
//                 custom={direction}
//                 variants={variants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{ duration: 0.5 }}
//               >
//                 <blockquote className="text-xl lg:text-2xl text-neutral-700 text-center mb-10">
//                   “{testimonials[currentIndex].quote}”
//                 </blockquote>

//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-4">
//                     <div className="relative w-14 h-14 rounded-full overflow-hidden">
//                       <Image
//                         src={testimonials[currentIndex].image}
//                         alt={testimonials[currentIndex].author}
//                         fill
//                         className="object-cover object-top"
//                       />
//                     </div>
//                     <div>
//                       <div className="font-semibold text-neutral-900">
//                         {testimonials[currentIndex].author}
//                       </div>
//                       <div className="text-sm text-neutral-500">
//                         {testimonials[currentIndex].role},{" "}
//                         {testimonials[currentIndex].company}
//                       </div>
//                     </div>
//                   </div>

//                   <Image
//                     src={testimonials[currentIndex].logo}
//                     alt="logo"
//                     width={120}
//                     height={40}
//                     className="hidden md:block object-contain"
//                   />
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* ================= CLIENT LOGOS GRID ================= */}
//         <div className="mt-28">
//           <p className="text-center text-neutral-600 mb-8">
//             Trusted by leading organizations worldwide
//           </p>

//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-8 items-center justify-items-center">
//             {logos.map((logo, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-lg px-4 py-3 shadow-sm flex items-center justify-center hover:scale-105 transition-transform duration-300"
//               >
//                 <Image
//                   src={logo}
//                   alt={`Client ${i + 1}`}
//                   width={120}
//                   height={40}
//                   className="object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
