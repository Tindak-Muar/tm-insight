"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menus = [
    { name: "🏛️ Markas", href: "/markas" },
    { name: "📚 Khazanah Politik", href: "/khazanah-politik" },
    { name: "📡 Radar", href: "/radar" },
    { name: "📊 Risikan Politik", href: "/risikan-politik" },
    { name: "🤖 Strategis AI", href: "/strategis-ai" },
    { name: "⚙️ Tetapan", href: "/tetapan" },
  ];

  return (
    <aside className="w-64 bg-gray-100 min-h-screen p-6 border-r flex flex-col">
      <div>
  <h2 className="text-2xl font-bold tracking-wide text-blue-700">
    SINAR
  </h2>

  <p className="mb-6 mt-1 text-xs leading-5 text-gray-500">
    Empowering Smarter Political Decisions
  </p>

  <ul className="space-y-3">
          {menus.map((menu) => (
            <li key={menu.href}>
              <Link
                href={menu.href}
                className={`block rounded-lg px-3 py-2 transition-colors ${
                  pathname === menu.href
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-100"
                }`}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-6 border-t text-sm text-gray-500">
        <p className="font-semibold">Versi</p>
        <p>SINAR v0.1 Alpha</p>

        <div className="mt-4">
          <p className="font-semibold">Alpha Build</p>
          <p>Core Platform</p>
        </div>
      </div>
    </aside>
  );
}