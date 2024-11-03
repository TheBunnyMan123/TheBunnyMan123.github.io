'use client'
import Image from "next/image";
import React from "react";
import Head from 'next/head'

export default function Home() {
  async function videoPlayerSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let videoURL = (document.getElementById("videoURL") as HTMLInputElement);
    if (videoURL != null) {
      let url = videoURL.value;
      let videoURLEncoded = encodeURIComponent(url);

      window.location.href = "/videoplayer?video=" + videoURLEncoded;
    }
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="display-fixed w-screen h-full p-3 text-text">
        <h1 className="text-4xl font-bold text-center">
          TheKillerBunny&apos;s Figura Avatar Skull Documentation
        </h1>
        <p>
          The modifier block is the block the skull is sitting on top of.
          Placing a sign on the side of the block the skull is facing can modify it&apos;s behavior.
        </p>
        <br />
        <h2 className="text-2xl font-bold">
          Block/Item Display
        </h2>
        <p>
          Placing my skull on an oak log, and typing HELP into the sign will give you the sign data layout
        </p>
      </div>
    </>
  );
}
