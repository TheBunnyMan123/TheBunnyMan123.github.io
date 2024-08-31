'use client'
import Image from "next/image";
import React from "react";
import Head from 'next/head'
import { useSearchParams } from 'next/navigation'

export default function Player() {
  let searchParams = useSearchParams();
  let videoUrl = searchParams.get('video') ?? "";
  let paused = true;

  async function playPause() {
    let playButton = document.getElementById('play');
    if (playButton == null) {
      return;
    }
    let img = playButton.querySelector('img')
    if (img == null) {
      return;
    }
    let video = document.getElementById("player") as HTMLMediaElement;
    if (video == null) {
      return;
    }

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
    if (container == null) {
      return;
    }

    if (document.fullscreen) {
      document.exitFullscreen();
    }else {
      container.requestFullscreen();
    }
  }

  return (
    <>
      <div id="container" className="h-full overflow-hidden bg-crust fixed" >
        <video onEnded={playPause} id="player" src={videoUrl} className="h-full" />
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
