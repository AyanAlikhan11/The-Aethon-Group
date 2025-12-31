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




'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden group">
      
      {/* White → Gold Ambient Layer */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-white
          via-[#FFF6E5]
          to-[#C9A24D]/40
          opacity-100
          pointer-events-none
        "
      />

      {/* GOLD DECORATIVE CIRCLES */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="
          absolute -left-56 top-[45%]
          w-[680px] h-[680px] rounded-full
          border border-[#C9A24D]/50
          shadow-[0_0_120px_rgba(201,162,77,0.25)]
        "
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="
          absolute -right-72 -top-32
          w-[880px] h-[880px] rounded-full
          border border-[#E6C36A]/40
          shadow-[0_0_160px_rgba(201,162,77,0.18)]
        "
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-28">
        {/* ⬆️ pt-40 → pt-28 (navbar gap reduced) */}

        <div className="max-w-4xl">

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="
              inline-flex items-center gap-3
              px-5 py-2 rounded-full
              border border-[#C9A24D]/50
              text-[#B8913D]
              bg-[#FFF7E6]
              text-sm font-medium
            ">
              <span className="w-2 h-2 rounded-full bg-[#C9A24D]" />
              Excellence in Strategic Consulting
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              font-heading text-5xl lg:text-6xl
              text-neutral-900
              leading-tight mb-3
            "
          >
            Transforming Vision
            <br />
            <span className="text-[#C9A24D] drop-shadow-sm">
              Into Reality
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              text-lg lg:text-xl
              text-neutral-600
              max-w-2xl mb-10
            "
          >
            We partner with ambitious organizations to unlock their full potential
            through strategic insight and operational excellence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-20"
          >
            <Button
              variant="accent"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
            >
              Start Your Journey
            </Button>

            <Button
              variant="outline"
              size="lg"
              icon={<Play className="w-5 h-5" />}
              className="
                border-neutral-400
                text-neutral-700
                hover:bg-neutral-100
              "
            >
              Watch Our Story
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-10 max-w-lg"
          >
            {[
              { value: '500+', label: 'Projects Delivered' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '25+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-heading font-bold text-neutral-900">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-500 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-400 text-sm"
      >
        Scroll to explore
      </motion.div>
    </section>
  )
}
