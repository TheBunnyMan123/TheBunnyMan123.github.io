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
          TheKillerBunny&apos;s Website
        </h1>
        <h3 className="text-2xl font-medium text-center">
          Welcome to my corner of the internet!
        </h3>
        
        <hr className="hr-primary mx-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
          <div className="grid-1-div">
            <h2 className="grid-1-h2">
              The Roblox Era
            </h2>
            <hr className="hr-primary" />
            <p>
              Starting in 2017, and ending in 2022 I would create various games on the platform &quot;Roblox&quot;. These games would never get many visits, and weren&apos;t that great, but I had fun making them. All of these games were coded in Lua since that is what Roblox supports. This was my first experience with developing any kind of software.
            </p>
          </div>
          <div className="grid-1-div">
            <h2 className="grid-1-h2">
              The Figura Mod
            </h2>
            <hr className="hr-primary" />
            <p>
              In late 2023/early 2024 I would discover the &quot;Figura&quot; mod for the game &quot;Minecraft&quot;. This mod allowed you to make your own avatars in 3D modeling software called &quot;BlockBench&quot;, and code them in Lua. To this day I still occasionally add on to my avatar for this mod, obtainable on my <a href="https://codeberg.org/TheBunnyMan123">CodeBerg Account</a> under the repo <a href="https://codeberg.org/TheBunnyMan123/Bunnys-Figura-Avatar-V2">Bunny&apos;s Avatar V2</a> (V1 is on my <a href="https://github.com/TheBunnyMan123">GitHub</a> <a href="https://github.com/TheBunnyMan123/Small-Bunny-Avatar/">here</a>)
            </p>
          </div>
          <div className="grid-1-div">
            <h2 className="grid-1-h2">
              Figura Goofballs
            </h2>
            <hr className="hr-primary" />
            <p>
              In 2024 I started a group of hobbyists called &quot;Figura Goofballs&quot;. At first we thought we would only do stuff related to Figura, but we quickly expanded to programming in general.

              <br /><br />
              Projects:
            </p>
            <ul className="list-disc pl-5">
              <li>
                <a href="https://github.com/Figura-Goofballs/GoofyPlugin">GoofyPlugin for Figura</a>
              </li>
              <li>
                <a href="https://github.com/Figura-Goofballs/GoofballOS">GoofballOS for ComputerCraft: Tweaked</a>
              </li>
            </ul>
          </div>
          <div className="grid-1-div">
            <h2 className="grid-1-h2">
              Starting Java
            </h2>
            <hr className="hr-primary" />
            <p>
              A little after I started developing I got into Java. This would prove to be a useful skill for when I got into modding the game &quot;Minecraft&quot;. Until developing Minecraft mods, I never really made anything worthwhile in Java, so all of the projects are lost to time.
            </p>
          </div>
          <div className="grid-1-div">
            <h2 className="grid-1-h2">
              Modding Minecraft
            </h2>
            <hr className="hr-primary" />
            <p>
              In 2023, I started making mods for the game &quot;Minecraft&quot;. My first mod was a clone of &quot;WorldEdit&quot; designed to work completely on the client by sending commands to the server called <a href="https://github.com/TheBunnyMan123/WorldBender">&quot;WorldBender&quot;</a>. This is a mod I used for a bit, but later stopped using it due to me always having &wuot;WorldEdit&quot; available. My second mod was made with the other &quot;Figura Goofballs&quot;, and it is an addon for the &quot;Figura&quot; mod that adds various Lua functions based on what people want and what we feel like adding. This mod is called <a href="https://github.com/Figura-Goofballs/GoofyPlugin/">GoofyPlugin</a>.
            </p>
          </div>
          <div className="grid-1-div">
            <h2 className="grid-1-h2">
              Starting C#
            </h2>
            <hr className="hr-primary" />
            <p>
              A year or two after I started Java, I got into C#. I would make various trinkets with it, but none of those would stand the test of time. My finished projects include a <a href="https://codeberg.org/TheBunnyMan123/Calculator">calculator</a> and a <a href="https://codeberg.org/TheBunnyMan123/Timer">timer</a>.
            </p>
          </div>
        </div>

        <a href="/skulldocs">
          <p>
            Skull Docs
          </p>
        </a>
        <a href="/gallifreyan">
          <p>
            Gallifreyan Text
          </p>
        </a>
        
        <form onSubmit={videoPlayerSubmit}>
          <label htmlFor="videoURL">Video Player URL:&nbsp;&nbsp;</label>
          <input type="text" id="videoURL" className="text-base" />
          <input type="Submit" value="Load" className="rounded-md border border-mauve bg-surface0 ml-3 p-1" />
        </form>
      </div>
    </>
  );
}
