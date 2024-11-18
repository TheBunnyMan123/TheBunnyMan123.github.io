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
          Placing a sign on the side of the block the skull is facing can modify it&apos;s behavior. Signs are stackable, and you can also put signs on the back side for some modes.
        </p>
        <br />
        <h2 className="text-2xl font-bold">
          Block/Item Display
        </h2>
        <p>
          Placing my skull on a bamboo block will display the text on the sign. <br />Typing HELP into the back sign will give you the display options layout.
        </p>
        <br />
        <h2 className="text-2xl font-bold">
          Block/Item Display
        </h2>
        <p>
          Placing my skull on an oak log, and typing HELP into the sign will give you the sign data layout
        </p>
        <br />
        <h2 className="text-2xl font-bold">
          Brainfuck Interpreter
        </h2>
        <p>
          Placing my skull on a dead brain coral block will interpret the sign data as brainfuck and display the output. The back signs are used for the input.
        </p>
        <br />
        <h2 className="text-2xl font-bold">
          Piano Player
        </h2>
        <p>
          On top of a loom and with a <a href="https://github.com/ChloeSpacedOut/figura-piano/">piano</a> 2 blocks above, it will play a song using the sign data as follows:

          B1;B2;B3,B4
        </p>
      </div>
    </>
  );
}
