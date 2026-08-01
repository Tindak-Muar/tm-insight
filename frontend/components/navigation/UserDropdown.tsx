"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import {
  ChevronDown,
  User,
  Plug,
  Settings,
  LogOut,
} from "lucide-react";

export default function UserDropdown() {

  const [open, setOpen] =
    useState(false);

  const dropdownRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {

    function handleClickOutside(
      event: MouseEvent
    ) {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target as Node
        )
      ) {

        setOpen(false);

      }

    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };

  }, []);

  return (

    <div
      ref={dropdownRef}
      className="relative"
    >

      <button
        onClick={() =>
          setOpen(!open)
        }
        className="flex items-center gap-3 rounded-lg px-2 py-1 transition hover:bg-red-600"
      >

        <div className="text-right">

          <p className="font-semibold">
            Ahmad Anwar
          </p>

          <p className="text-sm text-red-100">
            Pengasas
          </p>

        </div>

        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${
            open
              ? "rotate-180"
              : ""
          }`}
        />

      </button>

      {open && (

        <div className="absolute right-0 mt-3 w-64 rounded-xl bg-white py-2 text-gray-700 shadow-xl">

          <div className="border-b px-5 pb-3">

            <p className="font-semibold">
              Ahmad Anwar
            </p>

            <p className="text-sm text-gray-500">
              Pengasas
            </p>

          </div>

          <Link
            href="/profil"
            className="flex items-center gap-3 px-5 py-3 hover:bg-red-50"
          >

            <User size={18} />

            Profil Saya

          </Link>

          <Link
            href="/tetapan"
            className="flex items-center gap-3 px-5 py-3 hover:bg-red-50"
          >

            <Settings size={18} />

            Tetapan

          </Link>

          <div className="my-2 border-t" />

          <button
            className="flex w-full items-center gap-3 px-5 py-3 text-left text-red-600 hover:bg-red-50"
          >

            <LogOut size={18} />

            Log Keluar

          </button>

        </div>

      )}

    </div>

  );

}