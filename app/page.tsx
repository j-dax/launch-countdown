'use client';

import {useState, useEffect, useRef} from "react"

import Image from "next/image";

import dayjs from "dayjs"
import duration from "dayjs/plugin/duration"
dayjs.extend(duration)
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)

import bgStars from "@/public/images/bg-stars.svg"
import patternHills from "@/public/images/pattern-hills.svg"
import iconFb from "@/public/images/icon-facebook.svg"
import iconIg from "@/public/images/icon-instagram.svg"
import iconPt from "@/public/images/icon-pinterest.svg"

function Hills() {
  return <div className="absolute bottom-0 min-w-full">
    <Image
      alt="background layer: hills"
      src={patternHills}
      className="min-w-full"
    />
    <nav className="absolute min-w-full flex gap-20 justify-center bottom-16">
      <Image
        alt="icon linking to facebook"
        src={iconFb}
        className=""
      />
      <Image
        alt="icon linking to Instagram"
        src={iconIg}
        className=""
      />
      <Image
        alt="icon linking to Pinterest"
        src={iconPt}
        className=""
      />
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

function CountdownSplit({n, descriptor, doUpdate }: CountdownSplitProps) {
  const num = `${n}`.padStart(2, '0');
  const nextNum = `${n-1}`.padStart(2, '0');
  const doWiggle = doUpdate ? "animate-fall" : "";
  const doDelayed = doUpdate ? "delay-300 animate-fall" : "";
  return <div className="flex flex-col">
    <div className="relative flex flex-col bg-cd-drop max-w-32 max-h-[132px] rounded-md">
      {/* The rear number, seen when the middle element folds down */}
      <div className="relative flex items-center gap-1 min-w-32 min-h-32 rounded-md bg-cd-top">
        <p className="mx-auto text-center text-countdown-timer font-bold text-6xl text-cd-top-text">{nextNum}</p>
      </div>
      {/* The folding upper half, text should become hidden after 50% folded */}
      <div className={`relative flex items-center gap-1 min-w-32 min-h-32 rounded-md hide-bottom top-[-8rem] bg-cd-top border-space border-2 ${doWiggle}`}>
        <p className="mx-auto text-center text-countdown-timer font-bold text-6xl text-cd-top-text">{num}</p>
      </div>
      {/* The bottom half */}
      <div className={`relative flex items-center gap-1 min-w-32 min-h-32 rounded-md hide-top top-[-16rem] bg-cd-bottom origin-bottom ${doDelayed}`}>
        <p className="mx-auto text-center text-countdown-timer font-bold text-6xl text-cd-bottom-text">{num}</p>
      </div>

      {/* Two semicircles, as if carving out part of the countdown */}
      <div className="relative min-w-2 min-h-2 max-w-2 max-h-2 top-[-324px] left-[-4px] rounded-full bg-cd-drop hide-left" />
      <div className="relative min-w-2 min-h-2 max-w-2 max-h-2 top-[-332px] left-[124px] rounded-full bg-cd-drop hide-right" />
    </div>
    <p className="relative text-center font-bold text-cd-bottom-text">{descriptor}</p>
  </div>
}

type CountdownProps = {
  end: dayjs.Dayjs
}

function CountdownTimer({end}: CountdownProps) {
  const update = () => {
    setNow(dayjs(Date.now()));
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
    update();
    setTimeout(update, 1000);
  });

  return <>
    <CountdownSplit
      n={Math.max(days)}
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
      doUpdate={seconds != 0 && end.isAfter(now)} />
  </>
}

export default function Home() {
  const dur = dayjs.duration({'seconds': 5});
  const endTime = dayjs(new Date()).add(dur);
  return (
    <div className="bg-gradient-to-b from-space to-ground min-h-full overflow-hidden">
      <Stars/>
      <div className="absolute min-w-full min-h-full flex flex-col justify-center items-center gap-8">
        <p className="mb-16 font-bold text-cd-top-text">We're launching soon</p>
        <div className="flex gap-8 mb-32">
          <CountdownTimer end={endTime} />
        </div>
      </div>
      <Hills/>
    </div>
  );
}
