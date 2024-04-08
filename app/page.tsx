'use client';

import {useState, useEffect} from "react"
import Image from "next/image";

import dayjs from "dayjs"
import duration from "dayjs/plugin/duration"
dayjs.extend(duration)
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)

import bgStars from "@/public/images/bg-stars.svg"
import patternHills from "@/public/images/pattern-hills.svg"

type SVGProps = { className: string }

function FacebookSVG({className}: SVGProps) {
  return <svg xmlns="https://www.w3.org/2000/svg" width={24} height={24} className={className}>
    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
  </svg>
}

function InstagramSVG({className}: SVGProps) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
}

function PintrestSVG({className}: SVGProps) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className={className}>
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
  </svg>
}

function Hills() {
  return <div className="absolute bottom-0 min-w-full">
    <Image
      alt="background layer: hills"
      src={patternHills}
      className="min-w-full"
    />
    <nav className="absolute min-w-full flex gap-20 justify-center bottom-16">
      <FacebookSVG className="transition duration-[500ms] fill-[#8385A9] hover:fill-cd-top-text" />
      <InstagramSVG className="transition duration-[500ms] fill-[#8385A9] hover:fill-cd-top-text" />
      <PintrestSVG className="transition duration-[500ms] fill-[#8385A9] hover:fill-cd-top-text" />
    </nav>
  </div>
}

function Stars() {
  return <div className="min-w-full min-h-full">
    <Image
      alt="background layer: stars"
      src={bgStars}
      className="min-w-full absolute left-0 top-0"
    />
  </div>
}

type CountdownSplitProps = {
  descriptor: string
  n: number
  doUpdate: boolean
}

function CountdownSplit({n, descriptor, doUpdate}: CountdownSplitProps) {
  const num = `${n}`.padStart(2, '0');
  const nextNum = n > 0 ? `${n-1}`.padStart(2, '0') : "00";
  const animateUpper = doUpdate ? " anim-top" : "";
  const animateLower = doUpdate ? " anim-bottom": " wtf";
  return <div className="flex flex-col max-w-32">
    <div className="relative flex flex-col bg-cd-drop max-h-[132px] rounded-md">
      {/* The rear number, seen when the middle element folds down */}
      <div className="relative flex items-center gap-1 min-w-32 min-h-32 rounded-md hide-bottom bg-cd-top">
        <p className="mx-auto text-center text-countdown-timer font-bold text-6xl text-cd-top-text">{nextNum}</p>
      </div>
      {/* The bottom half */}
      <div className="relative flex items-center gap-1 min-w-32 min-h-32 rounded-md hide-top top-[-8rem] bg-cd-bottom">
        <p className="mx-auto text-center text-countdown-timer font-bold text-6xl text-cd-bottom-text">{num}</p>
      </div>
      {/* The folding upper half, text becomes hidden */}
      <div className={`relative flex items-center gap-1 min-w-32 min-h-32 rounded-md hide-bottom top-[-16rem] bg-cd-top border-space border-2${animateUpper}`}>
        <p className="mx-auto text-center text-countdown-timer font-bold text-6xl text-cd-top-text">{num}</p>
      </div>
      {/* The folding lower half, initially hidden */}
      <div className={`relative flex items-center gap-1 min-w-32 min-h-32 rounded-md hide-top top-[-24rem] bg-cd-bottom border-space border-2${animateLower}`}>
        <p className="mx-auto text-center text-countdown-timer font-bold text-6xl text-cd-top-text">{nextNum}</p>
      </div>
      {/* Two semicircles, as if carving out part of the countdown */}
      <div className="relative min-w-2 min-h-2 max-w-2 max-h-2 top-[-452px] left-[-4px] rounded-full bg-cd-drop hide-left" />
      <div className="relative min-w-2 min-h-2 max-w-2 max-h-2 top-[-460px] left-[124px] rounded-full bg-cd-drop hide-right" />
    </div>
    <p className="relative text-center font-bold text-cd-bottom-text">{descriptor}</p>
  </div>
}

type CountdownTimerProps = {
  end: dayjs.Dayjs
  msOffset: number
}

function CountdownTimer({end, msOffset}: CountdownTimerProps) {
  const update = () => {
    // account for the user loading at a time that doesn't synchronize with the render time
    setNow(dayjs(Date.now()).subtract(msOffset, 'millisecond'));
    setDays(end.diff(now, 'days'));
    setHours(end.diff(now, 'hours') % 24);
    setMinutes(end.diff(now, 'minutes') % 60);
    setSeconds(end.diff(now, 'seconds') % 60);
  }

  const [now, setNow] = useState(dayjs(Date.now()));
  const [days, setDays] = useState(end.diff(now, 'days'));
  const [hours, setHours] = useState(end.diff(now, 'hours') % 24);
  const [minutes, setMinutes] = useState(end.diff(now, 'minutes') % 60);
  const [seconds, setSeconds] = useState(end.diff(now, 'seconds') % 60);

  // update the timer every second
  useEffect(() => {
    setTimeout(update, 1000);
  });

  return <>
    <CountdownSplit
      n={Math.max(days, 0)}
      descriptor={"days".toUpperCase()}
      doUpdate={(days > 0 && hours == 0)} />
    <CountdownSplit
      n={Math.max(hours, 0)}
      descriptor={"hours".toUpperCase()} 
      doUpdate={(days > 0 || hours > 0) && minutes == 0} />
    <CountdownSplit
      n={Math.max(minutes, 0)}
      descriptor={"minutes".toUpperCase()}
      doUpdate={(hours > 0 || minutes > 0) && seconds == 0} />
    <CountdownSplit
      n={Math.max(seconds, 0)}
      descriptor={"seconds".toUpperCase()}
      doUpdate={end.isAfter(now)} />
  </>
}

type CountdownProps = {
  duration: duration.Duration
}

function Countdown({duration}: CountdownProps) {
  // often, the page is loaded at some time not close to the 200ms gap provided
  // so we wait a little to make sure we're showing at a good time
  const end = dayjs(new Date()).add(duration);
  return <CountdownTimer end={end} msOffset={end.millisecond()} />
}

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-space to-ground min-h-full overflow-hidden">
      <Stars/>
      <div className="absolute min-w-full min-h-full flex flex-col justify-center items-center gap-8">
        <p className="mb-16 font-bold text-cd-top-text">We're launching soon</p>
        <div className="flex gap-8 mb-32">
          <Countdown duration={dayjs.duration({'days': 10})} />
        </div>
      </div>
      <Hills/>
    </div>
  );
}
