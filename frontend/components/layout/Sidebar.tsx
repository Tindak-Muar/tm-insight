"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  BookOpen,
  Files,
  Radar,
  Search,
  BrainCircuit,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const menus = [
    {
      name: "Markas",
      href: "/markas",
      icon: LayoutDashboard,
    },
    {
      name: "Khazanah Politik",
      href: "/khazanah-politik",
      icon: BookOpen,
    },
    {
      name: "Pusat Dokumentasi",
      href: "/pusat-dokumentasi",
      icon: Files,
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
    {
      name: "Tetapan",
      href: "/tetapan",
      icon: Settings,
    },
  ];

  return (
    <aside className="flex min-h-screen w-64 flex-col border-r bg-white p-6">
      <nav className="flex-1">
        <ul className="space-y-2">
          {menus.map((menu) => {
            const Icon = menu.icon;

            return (
              <li key={menu.href}>
                <Link
                  href={menu.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                    pathname === menu.href
                      ? "bg-blue-600 font-semibold text-white"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{menu.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t pt-6 text-xs text-gray-500">
        <p className="font-medium">SINAR v0.1 Alpha</p>
        <p className="mt-1">Fasa Pembangunan</p>
      </div>
    </aside>
  );
}