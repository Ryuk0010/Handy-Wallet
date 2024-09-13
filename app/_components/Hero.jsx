'use client';
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

function Hero() {
  return (
    <section className="bg-slate-950 flex items-center flex-col overflow-hidden"> {/* Add overflow-hidden here */}
      <div className="flex flex-col overflow-hidden"> {/* Add overflow-hidden here */}

        <div className="w-screen h-screen">
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
              Don't Overspend <br /> Make Every Penny Count with Us
            </motion.h1>
          </LampContainer>
        </div>

        <div className="flex justify-between -mt-40"> 
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold text-white dark:text-white">
                  Manage your Money with AI-Driven Personal <br />
                  <span className="text-4xl md:text-[6rem] text-cyan-500 font-bold mt-1 leading-none">
                    Finance Advisor
                  </span>
                </h1>
              </>
            }
          >
            <Image
              src={`/dashboard.png`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>

          <div className="mt-96 pt-56">
            <>
              <h1 className="text-xl md:text-[2.5rem] text-slate-300 font-bold mt-1 leading-none">
                “Beware of little expenses. A small leak will sink a great ship.”<br />
                <span className="text-2xl font-semibold text-white dark:text-white">
                  – Benjamin Franklin 
                </span>
              </h1>
            </>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Hero;
