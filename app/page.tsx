'use client';

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
}

function CountdownSplit({n, descriptor}: CountdownSplitProps) {
  const num = `${n}`.padStart(2, '0')
  return <div className="min-w-24">
    <div className="absolute flex gap-1 bg-countdown rounded-md p-4">
      <p className="relative text-center text-countdown-timer font-bold text-6xl text-red-400">{num}</p>
      <p className="absolute text-center text-countdown-timer font-bold text-6xl text-red-400">{num}</p>
    </div>
    <p className="text-center text-countdown-desc">{descriptor}</p>
  </div>
}

type CountdownProps = {
  end: dayjs.Dayjs
}

import {useState, useEffect} from "react"
function CountdownTimer({end}: CountdownProps) {
  const update = (now: number) => {
    setDays(end.diff(now, 'days'));
    setHours(end.diff(now, 'hours') % 24);
    setMinutes(end.diff(now, 'minutes') % 60);
    setSeconds(end.diff(now, 'seconds') % 60);
  }

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // update the timer every second
  useEffect(() => {
    update(Date.now());
    setTimeout(() => {
      const now = Date.now();
      update(now);
    }, 1000);
  });

  return <>
    <CountdownSplit n={days} descriptor="days" />
    <CountdownSplit n={hours} descriptor="hours" />
    <CountdownSplit n={minutes} descriptor="minutes" />
    <CountdownSplit n={seconds} descriptor="seconds" />
  </>
}

export default function Home() {
  const dur = dayjs.duration({'days': 10});
  const endTime = dayjs(new Date()).add(dur);
  return (
    <div className="bg-gradient-to-b from-space to-ground min-h-screen">
      <Stars/>
      <div className="absolute min-w-full min-h-full flex flex-col justify-center items-center gap-8">
        <p className="mb-16 font-bold">We're launching soon</p>
        <div className="flex gap-8 mb-32">
          <CountdownTimer end={endTime} />
        </div>
      </div>
      <Hills/>
    </div>
  );
}
