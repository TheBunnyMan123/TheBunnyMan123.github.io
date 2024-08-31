'use client'
import Image from "next/image";
import React from "react";
import Head from 'next/head'
import { useSearchParams } from 'next/navigation'

export default function Player() {
  let searchParams = useSearchParams();
  let videoUrl = searchParams.get('video');
  let paused = true;

  async function playPause() {
    let playButton = document.getElementById('play');
    let img = playButton.querySelector('img')
    let video = document.getElementById("player");

    paused = !paused

    if (paused) {
      img.src = "/play.svg";
      video.pause();
    }else {
      img.src = "/pause.svg";
      video.play();
    }
  }

  async function fullscreen() {
    let container = document.getElementById("container");

    if (document.fullscreen) {
      document.exitFullscreen();
    }else {
      container.requestFullscreen();
    }
  }

  return (
    <>
      <div id="container" className="w-full overflow-hidden bg-crust fixed" >
        <video onEnded={playPause} id="player" src={videoUrl} className="w-full" />
        <div id="controls" className="flex absolute bottom-0 w-full flex-wrap ">
          <div id="buttons" className="-translate-y-12 transition-all bg-mantle w-full">
            <button onClick={playPause} id="play" className="left-2 fixed">
              <Image src="/play.svg" alt="play" width={45} height={45} />
            </button>
            <button onClick={fullscreen} id="fullscreen" className="right-2 fixed">
              <Image src="/fullscreen.svg"alt="fullscreen" width={45} height={45} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
