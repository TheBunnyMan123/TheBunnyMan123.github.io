'use client'
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="macchiato bg-base display-fixed w-screen h-screen p-3 text-text">
        <h1 className="text-4xl font-bold text-center">
          TheKillerBunny&apos;s Website
        </h1>
        <h3 className="text-2xl font-medium text-center">
          A passionate developer from Texas that started in 2017!
        </h3>
        
        <hr className="hr-primary mx-10" />

        <div className="grid grid-cols-3 gap-4 p-10">
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
              In 2024 I started a group of hobbyists called &quot;Figura Goofballs&quot;. At first we thought we would only do stuff related to Figura, but we quickly expanded to Lua in general.

              <br /><br />
              Projects:
            </p>
            <ul class="list-disc pl-5">
              <li>
                <a href="https://github.com/Figura-Goofballs/GoofyPlugin">GoofyPlugin for Figura</a>
              </li>
              <li>
                <a href="https://github.com/Figura-Goofballs/GoofballOS">GoofballOS for ComputerCraft: Tweaked</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}