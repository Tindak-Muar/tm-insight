"use client";

import { useEffect, useState } from "react";

import {
  CalendarDays,
  Clock3,
} from "lucide-react";

export default function DateTime() {

  const [now, setNow] =
    useState<Date | null>(null);

  useEffect(() => {

    setNow(new Date());

    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  if (!now) {

    return (
      <div className="flex items-center gap-6 text-sm opacity-0">

        <div className="flex items-center gap-2">

          <CalendarDays size={16} />

          <span>Loading...</span>

        </div>

        <div className="flex items-center gap-2">

          <Clock3 size={16} />

          <span>00:00:00</span>

        </div>

      </div>
    );

  }

  const date =
    now.toLocaleDateString("ms-MY", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const time =
    now.toLocaleTimeString("ms-MY", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

  return (

    <div className="flex items-center gap-6 text-sm">

      <div className="flex items-center gap-2">

        <CalendarDays
          size={16}
          strokeWidth={2}
        />

        <span>{date}</span>

      </div>

      <div className="flex items-center gap-2">

        <Clock3
          size={16}
          strokeWidth={2}
        />

        <span>{time}</span>

      </div>

    </div>

  );

}