'use client'
import Image from "next/image";
import React from "react";
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="display-fixed w-screen h-full p-3 text-text">
        <h1 className="text-4xl font-bold text-center">
          Sherman&apos;s Gallifreyan Images
        </h1>
        <p className="text-center">
          These images are licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-SA 4.0</a>
        </p>
        
        <hr className="hr-primary mx-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
          <div className="grid-1-div">
            <Image 
              src="/assets/OpticalMediaIsPeak.svg"
              width={500}
              height={500}
              className="mx-auto width-fit rounded-full bg-white"
              alt="Optical Media is Peak in Sherman's Gallifreyan"
            />
            <p className="text-center">
              Optical Media is Peak
            </p>
          </div>
          <div className="grid-1-div">
            <Image 
              src="/assets/TheKillerBunny.svg"
              width={500}
              height={500}
              className="mx-auto width-fit rounded-full bg-white"
              alt="Optical Media is Peak in Sherman's Gallifreyan"
            />
            <p className="text-center">
              TheKillerBunny
            </p>
          </div>
          <div className="grid-1-div">
            <Image 
              src="/assets/Tick%2C Tock%2C Goes the Clock.svg"
              width={500}
              height={500}
              className="mx-auto width-fit rounded-full bg-white"
              alt="Optical Media is Peak in Sherman's Gallifreyan"
            />
            <p className="text-center">
              Tick, Tock, Goes the Clock
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
