"use client";
import React from "react";
import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/ui/Button";
import SectionTitle from "../components/ui/SectionTitle";
import { experiences } from "../data/mockData";
import DiveProcess from "../components/DiveProcess";
import "./globals.css";
import scubaDiverAnimation from "../components/Animations/Scuba Diver Animation.json";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-20">
        <div className="hidden md:block absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-sky-700 animate-ripple"></div>
        <div className="hidden md:block absolute inset-0 z-0 opacity-30 bg-underwater-mesh"></div>

        <div className="absolute inset-0 z-0 opacity-100 md:opacity-20 md:mix-blend-overlay">
          <Image
            src="https://picsum.photos/id/16/1600/900"
            alt="Underwater Texture"
            fill
            className="hidden md:block object-cover"
          />
          <Image
            src="https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/Diver.webp"
            alt="Underwater Img"
            fill
            className="md:hidden object-cover"
          />
        </div>

        <div className="hidden md:block">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-white/10 blur-[1px] animate-float"></div>
          <div className="absolute top-1/2 left-3/4 w-8 h-8 rounded-full bg-white/10 blur-[2px] animate-float-delayed"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-6 h-6 rounded-full bg-white/15 blur-[1.5px] animate-float-slow"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-3/4 left-1/2 w-3 h-3 rounded-full bg-white/5 blur-[0.5px] animate-float-fast"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-1/2 right-1/2 w-5 h-5 rounded-full bg-white/20 blur-[1px] animate-float-delayed"
            style={{ animationDelay: "2.5s" }}
          ></div>

          <div
            className="absolute top-1/3 right-1/3 w-7 h-7 rounded-full bg-white/8 blur-[1.8px] animate-float-slow"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute top-1/7 right-1/5 w-7 h-7 rounded-full bg-white/8 blur-[1.8px] animate-float-slow"
            style={{ animationDelay: "3.5s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/9 w-7 h-7 rounded-full bg-white/8 blur-[1.8px] animate-float-slow"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="container relative z-10 px-4 text-center flex flex-col items-center">
          <div className="mb-8 badge-float bg-blue-00  rounded-full">
            <a
              href="https://www.google.com/maps/place/Netrani+Island"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel px-6 py-2 rounded-full flex items-center gap-3 border border-ocean-400/30 shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:bg-white/10 transition-colors group cursor-pointer"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ocean-400 opacity-75 "></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-ocean-500"></span>
              </span>
              <span className="text-white font-semibold tracking-wide text-sm uppercase group-hover:text-ocean-300 transition-colors">
                Live from Netrani Island
                <span className="ml-2 text-xs opacity-70">↗</span>
              </span>
            </a>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold font-display tracking-tight text-white mb-8 drop-shadow-2xl leading-none">
            BREATH{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-400">
              DEEP
            </span>
            <br />
            DIVE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-ocean-300">
              BEYOND
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            India's premier scuba destination. Crystal clear waters, vibrant
            coral reefs, and certified PADI professionals waiting for you.
          </p>

          {/* Key Info Chips */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="glass-panel px-6 py-3 rounded-xl text-left min-w-[140px] border border-white/10 hover:border-ocean-400/50 transition-colors">
              <span className="block text-slate-400 text-xs uppercase tracking-wider mb-1">
                Visibility
              </span>
              <span className="block text-white font-bold text-lg">15-30m</span>
            </div>
            <div className="glass-panel px-6 py-3 rounded-xl text-left min-w-[140px] border border-white/10 hover:border-ocean-400/50 transition-colors">
              <span className="block text-slate-400 text-xs uppercase tracking-wider mb-1">
                Water Temp
              </span>
              <span className="block text-white font-bold text-lg">28°C</span>
            </div>
            <div className="glass-panel px-6 py-3 rounded-xl text-left min-w-[140px] border border-white/10 hover:border-ocean-400/50 transition-colors">
              <span className="block text-slate-400 text-xs uppercase tracking-wider mb-1">
                Depth
              </span>
              <span className="block text-white font-bold text-lg">6-30m</span>
            </div>
          </div>

          <div className="flex gap-4 mb-4 cursor-pointer">
            <Link href="/book">
              <Button
                variant="primary"
                className="px-8 py-3 text-lg"
                type="button"
              >
                Book Dive
              </Button>
            </Link>
            <Link href="/packages">
              <Button
                variant="outline"
                className="px-8 py-3 text-lg"
                type="button"
              >
                Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="py-15 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative md:mt-[150px] mt-[70px]">
            <img
              src="https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/waterviews.webp"
              alt="deepsea"
              className="absolute inset-0 object-cover z--30 rounded-[200px]"
            />
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] mt-[-140px] mb-[-70px] md:mt-[-240px] md:mb-[-160px] z-10">
              <Lottie
                animationData={scubaDiverAnimation}
                loop={true}
                autoplay={true}
                className="object-cover hover:scale-105 transition-transform duration-700"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                title="Diver at Netrani Island"
              />
            </div>
          </div>
          <div>
            <SectionTitle
              align="left"
              title="Why Dive With Scuba Boss?"
              subtitle="We are the Netrani Island specialists."
            />

            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed md:mt-[-60px] mt-[-60px]">
              Scuba Boss was born from a passion to showcase the hidden
              underwater gem of India: Netrani Island. Located off Murudeshwar,
              this heart-shaped island offers the clearest waters in mainland
              India.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "PADI Certified Instructors & Dive Masters",
                "Dedicated High-Speed Dive Boat",
                "Small Groups (Max 4:1 Ratio)",
                "Top-tier Scubapro Equipment",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-800 dark:text-slate-200 font-medium"
                >
                  <span className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400 text-xs font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about">
              <Button variant="secondary" type="button">
                Know More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <DiveProcess />

      {/* EXPERIENCES */}
      <section className="py-0 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 transition-colors duration-300">
        <div className="container relative z-10 px-4 mx-auto">
          <SectionTitle
            title="Popular Services"
            subtitle="Explore our most requested room stays, and cab services."
          />

          <div className="grid md:grid-cols-2 gap-5 justify-center items-center">
            {experiences.slice(0, 3).map((exp, index) => {
              const icons: { [key: string]: string } = {
                "Rooms Available": "🏨",
                "Cab Services Available": "🚕",
              };
              const icon = icons[exp.title] || "✨";

              return (
                <a
                  key={exp.slug}
                  href="tel:+919740662365"
                  className="block animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="group rounded-2xl overflow-hidden glass-panel border border-slate-200 dark:border-white/10 hover:border-blue-400/50 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transform">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={exp.image}
                        alt={exp.title}
                        fill
                        className="object-cover group-hover:scale-125 transition-transform duration-700"
                      />
                      {/* Overlay gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {/* Icon badge */}
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-blue-600/90 backdrop-blur-sm flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        {icon}
                      </div>
                    </div>
                    <div className="p-6 relative">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                        <span className="text-2xl">{icon}</span>
                        {exp.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                        {exp.shortDescription}
                      </p>
                      {/* Animated button */}
                      <div className="mt-4">
                        <span className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                          Learn More
                          <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                            →
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
