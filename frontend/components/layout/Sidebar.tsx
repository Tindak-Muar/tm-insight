"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  BookOpen,
  Radar,
  Search,
  BrainCircuit,
  Settings,
  Plug,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const [markasOpen, setMarkasOpen] = useState(
    pathname.startsWith("/markas")
  );

  const menus = [
    {
      name: "Khazanah Politik",
      href: "/khazanah-politik",
      icon: BookOpen,
    },
    {
      name: "Radar",
      href: "/radar",
      icon: Radar,
    },
    {
      name: "Risikan Politik",
      href: "/risikan-politik",
      icon: Search,
    },
    {
      name: "Strategis AI",
      href: "/strategis-ai",
      icon: BrainCircuit,
    },
    
  ];

  return (
    <aside className="flex min-h-screen w-64 flex-col bg-white px-6 py-8 shadow-sm">

      <nav className="flex-1">

        {/* MARKAS */}

        <button
          onClick={() => setMarkasOpen(!markasOpen)}
          className={`flex w-full items-center justify-between rounded-xl px-4 py-3 transition ${
            pathname.startsWith("/markas")
              ? "bg-red-700 text-white"
              : "text-gray-700 hover:bg-red-50 hover:text-red-700"
          }`}
        >
          <div className="flex items-center gap-3">

            <LayoutDashboard
              className="h-5 w-5"
            />

            <span className="font-medium">
              Markas
            </span>

          </div>

          {markasOpen ? (
            <ChevronDown size={18} />
          ) : (
            <ChevronRight size={18} />
          )}

        </button>

        {markasOpen && (

          <div className="mt-2 ml-6 space-y-1 border-l border-gray-200 pl-4">

            <Link
              href="/markas"
              className={`block rounded-lg px-3 py-2 text-sm transition ${
                pathname === "/markas"
                  ? "bg-red-100 font-medium text-red-700"
                  : "text-gray-600 hover:bg-red-50 hover:text-red-700"
              }`}
            >
              Utama
            </Link>

            <Link
              href="/markas/integrasi"
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${
                pathname === "/markas/integrasi"
                  ? "bg-red-100 font-medium text-red-700"
                  : "text-gray-600 hover:bg-red-50 hover:text-red-700"
              }`}
            >
              <Plug size={14} />
              Integrasi
            </Link>

          </div>

        )}

        {/* Menu lain */}

        <ul className="mt-4 space-y-2">

          {menus.map((menu) => {

            const Icon = menu.icon;

            const active =
              pathname === menu.href;

            return (

              <li key={menu.href}>

                <Link
                  href={menu.href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                    active
                      ? "bg-red-700 text-white shadow-sm"
                      : "text-gray-700 hover:bg-red-50 hover:text-red-700"
                  }`}
                >

                  <Icon className="h-5 w-5" />

                  <span className="font-medium">
                    {menu.name}
                  </span>

                </Link>

              </li>

            );

          })}

        </ul>

      </nav>

    </aside>
  );
}