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
        <h2 className="font-bold text-lg mb-6">TM Insight</h2>

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
        <p>v0.4.0</p>

        <div className="mt-4">
          <p className="font-semibold">Stage 1</p>
          <p>30% Siap</p>
        </div>
      </div>
    </aside>
  );
}