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

        <p className="text-center">
          To prevent errors, base64 encode the texture twice instead of the normal once
          <br />
          All my skulls, if the block below them has a power property of greater than 0, will uncache and not run any functions
        </p>
        
        <hr className="hr-primary mx-10" />
        <br />

        <h2 className="text-2xl font-bold">
          Mini Blocks
        </h2>
        <p>
          To get a mini block, just set my skull&quot;s texture to &quot;mini_block;[BLOCKSTATE STRING]&quot;<br />
          The blockstate string is what you would use in /setblock
        </p>
    
        <br />
          
        <h2 className="text-2xl font-bold">
          OGG Jukebox (don&apos;t double encode)
        </h2>
        <p>
          To get a head that will play an ogg (vorbis), set my skull&quot;s texture to &quot;jukebox;[OGG FILE (BASE64 ENCODED)]&quot;
        </p>
      </div>
    </>
  );
}
