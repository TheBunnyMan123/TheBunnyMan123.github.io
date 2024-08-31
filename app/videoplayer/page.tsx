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

  async function videoTimeUpdate() {
    let video = document.getElementById("player") as HTMLMediaElement;
    let juice = document.getElementById("juice")
    if (video == null || juice == null) {
      return;
    }

    let juicePos = video.currentTime / video.duration;
    juice.style.width = (juicePos * 100) + "%";
  }

  async function updateTime(event: React.MouseEvent<HTMLDivElement>) {
    let progress = document.getElementById("progress")
    let video = document.getElementById("player") as HTMLMediaElement
    let juice = document.getElementById("juice")
    if (progress == null || video == null || juice == null) {
      return;
    }

    const pos = event.pageX / progress.offsetWidth;
    video.currentTime = pos * video.duration;
    juice.style.width = (pos * 100) + "%";
  }

  return (
    <>
      <div id="container" className="h-full w-full overflow-hidden bg-crust fixed" >
        <video onTimeUpdate={videoTimeUpdate} onEnded={playPause} id="player" src={videoUrl} className="h-full w-full" />
        <div id="controls" className="flex absolute bottom-0 transition-all w-full flex-wrap ">
          <div id="progress" onClick={updateTime} className="left-0 bottom-0 w-full h-3 bg-crust">
            <div id="juice" className="left-0 h-full bg-mauve" />
          </div>
          <div id="buttons" className="bottom-16 fixed bg-mantle">
            <button onClick={playPause} id="play" className="left-2 fixed">
              <Image src="/play.svg" alt="play" width={45} height={45} />
            </button>
            <button onClick={fullscreen} id="fullscreen" className="right-3 fixed">
              <Image src="/fullscreen.svg"alt="fullscreen" width={45} height={45} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
