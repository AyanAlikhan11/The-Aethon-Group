// components/sections/About.tsx
"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/common/SectionHeading";

const values = [
  "Client-centric approach to every engagement",
  "Data-driven insights and recommendations",
  "Collaborative partnerships for lasting impact",
  "Commitment to sustainable excellence",
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-white"
    >
      {/* White → Gold Ambient Background */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-white
          via-[#FFF6E5]
          to-[#C9A24D]/30
          pointer-events-none
        "
      />

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div style={{ y: imageY }} className="relative z-10">
  <div className="relative h-[520px] w-full rounded-2xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)]">
    <Image
      src="/images/about-main.png"
      alt="The Aethon Group team"
      fill
      priority
      className="object-cover"
    />
  </div>
</motion.div>


            {/* Floating Experience Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="
                absolute -bottom-8 -right-8
                bg-white
                rounded-xl
                shadow-[0_20px_60px_-15px_rgba(201,162,77,0.35)]
                p-6
                z-20
              "
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E6C36A] to-[#B8913D] flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3+</span>
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Years of</p>
                  <p className="font-semibold text-neutral-900">Excellence</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Gold Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[#C9A24D]/20 -z-10" />
            <div className="absolute -bottom-8 -right-10 w-36 h-36 rounded-full bg-[#C9A24D]/15 -z-10" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SectionHeading
              tagline="About Us"
              title="Building Legacies of Success"
              description="For the past three years, The Aethon Group has partnered with ambitious businesses to deliver strategic, results-driven solutions."
              className="text-neutral-900"
            />

            <div className="mt-8 space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#C9A24D] flex-shrink-0 mt-0.5" />
                  <p className="text-neutral-700 text-lg">{value}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10"
            >
              <Button variant="accent" size="lg">
                Discover Our Story
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
