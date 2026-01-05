// // components/sections/Hero.tsx
// 'use client'

// import { useRef } from 'react'
// import { motion, useScroll, useTransform } from 'framer-motion'
// import Image from 'next/image'
// import Button from '@/components/ui/Button'
// import { ArrowRight, Play } from 'lucide-react'

// export default function Hero() {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ['start start', 'end start']
//   })

//   const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

//   return (
//    <section
//   ref={containerRef}
//   className="relative min-h-screen overflow-hidden  bg-[#FFF7E6]"
// >
//   {/* Gold Light */}
//   <div className="absolute -top-[30%] left-1/2 -translate-x-1/2
//                   w-[900px] h-[900px] rounded-full
//                   bg-[#C9A24D]/25 blur-[180px]" />

//   {/* Soft Fade */}
//   <div className="absolute inset-0
//                   bg-gradient-to-b
//                   from-[#FFF7E6] via-[#F6E6C3] to-[#FFF9EF]" />
//       {/* Background Image with Parallax */}
//       <motion.div
//         style={{ y }}
//         className="absolute inset-0 z-0"
//       >
//         <Image
//           src="/"
//           alt="Corporate excellence"
//           fill
//           priority
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/80 to-primary-900/60" />
//       </motion.div>

//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             rotate: [0, 180, 360],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: 'linear',
//           }}
//           className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full border border-white/5"
//         />
//         <motion.div
//           animate={{
//             scale: [1.2, 1, 1.2],
//             rotate: [360, 180, 0],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: 'linear',
//           }}
//           className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full border border-accent-gold/10"
//         />
//       </div>

//       {/* Content */}
//       <motion.div
//         style={{ opacity }}
//         className="container mx-auto px-4 lg:px-8 relative z-10"
//       >
//         <div className="max-w-4xl">
//           {/* Tagline */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="mb-10"
//           >
//             <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-accent-gold text-sm font-medium mb-5">
//               <span className="w-2 h-2 bg-accent-gold rounded-full animate-pulse" />
//               Excellence in Strategic Consulting
//             </span>
//           </motion.div>

//           {/* Main Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="font-heading text-display-lg lg:text-display-xl text-white mb-6"
//           >
//             Transforming Vision
//             <br />
//             <span className="text-accent-gold">Into Reality</span>
//           </motion.h1>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-xl lg:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed"
//           >
//             We partner with ambitious organizations to unlock their full potential
//             through strategic insight and operational excellence.
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="flex flex-wrap gap-4"
//           >
//             <Button
//               variant="accent"
//               size="lg"
//               icon={<ArrowRight className="w-5 h-5" />}
//               iconPosition="right"
//             >
//               Start Your Journey
//             </Button>
//             <Button
//               variant="outline"
//               size="lg"
//               icon={<Play className="w-5 h-5" />}
//               className="text-white border-white/30 hover:bg-white/10"
//             >
//               Watch Our Story
//             </Button>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="mt-16 grid grid-cols-3 gap-8 max-w-lg"
//           >
//             {[
//               { value: '500+', label: 'Projects Delivered' },
//               { value: '98%', label: 'Client Satisfaction' },
//               { value: '25+', label: 'Years Experience' },
//             ].map((stat, index) => (
//               <div key={index} className="text-center lg:text-left">
//                 <div className="text-3xl lg:text-4xl font-heading font-bold text-white">
//                   {stat.value}
//                 </div>
//                 <div className="text-sm text-white/60 mt-1">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2"
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//           className="flex flex-col items-center gap-2 text-white/60"
//         >
//           <span className="text-sm">Scroll to explore</span>
//           <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
//             <motion.div
//               animate={{ y: [0, 12, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//               className="w-1.5 h-1.5 bg-accent-gold rounded-full"
//             />
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   )
// }
"use client";

import { motion, animate, useMotionValue } from "framer-motion";
import { ArrowRight, Play, X } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

/* ---------------- COUNT UP COMPONENT ---------------- */
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const controls = animate(motionValue, to, {
      duration: 2.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        setDisplay(Math.round(latest).toLocaleString());
      },
    });

    return controls.stop;
  }, [to, motionValue]);

  return (
    <span className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

/* ---------------- HERO SECTION ---------------- */
export default function Hero() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handleWatchStory = async () => {
    try {
      const response = await fetch("/videos/story.mp4"); // Path to your video
      if (!response.ok) throw new Error("Video not found");

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setVideoUrl(url);
    } catch (err) {
      console.error("Error fetching video:", err);
    }
  };

  const handleCloseModal = () => {
    setVideoUrl(null);
  };

  return (
    <section className="relative min-h-[85vh] bg-white overflow-hidden">
      {/* Ambient Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FFF6E5] to-[#C9A24D]/40 pointer-events-none" />

      {/* Decorative Circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute -left-56 top-[45%] w-[680px] h-[680px] rounded-full border border-[#C9A24D]/50 shadow-[0_0_120px_rgba(201,162,77,0.25)]"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute -right-72 -top-32 w-[880px] h-[880px] rounded-full border border-[#E6C36A]/40 shadow-[0_0_160px_rgba(201,162,77,0.18)]"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-28">
        <div className="max-w-4xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#C9A24D]/50 bg-[#FFF7E6] text-xs tracking-widest uppercase text-[#B8913D]">
              <span className="w-2 h-2 rounded-full bg-[#C9A24D]" />
              Excellence in Strategic Consulting
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-medium text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-neutral-900 mb-6"
          >
            Transforming Vision
            <br />
            <span className="text-[#C9A24D]">Into Reality</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-base sm:text-lg leading-relaxed tracking-wide text-neutral-600 max-w-2xl mb-12"
          >
            We partner with ambitious organizations to unlock their full
            potential through strategic insight and operational excellence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-24"
          >
            <Button
              variant="accent"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start Your Journey
            </Button>

            <Button
              variant="outline"
              size="md"
              icon={<Play className="w-4 h-4" />}
              onClick={handleWatchStory}
            >
              Watch Our Story
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-14 max-w-xl"
          >
            {[
              { value: 500, suffix: "+", label: "Projects Delivered" },
              { value: 98, suffix: "%", label: "Client Satisfaction" },
              { value: 25, suffix: "+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35 }}
              >
                <div className="font-heading text-[2.6rem] lg:text-[2.8rem] text-neutral-900 tracking-tight">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 mb-3 h-[1px] w-10 bg-gradient-to-r from-[#C9A24D] to-transparent" />
                <div className="font-body text-[11px] tracking-[0.25em] uppercase text-neutral-500">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ---------------- VIDEO MODAL ---------------- */}
      {videoUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative w-full max-w-3xl p-4">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-white p-2 rounded-full hover:bg-white/20 transition"
            >
              <X className="w-6 h-6" />
            </button>
            <video
              src={videoUrl}
              controls
              autoPlay
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
