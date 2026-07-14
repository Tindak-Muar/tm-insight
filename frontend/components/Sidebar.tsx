import Link from "next/link";

export default function Sidebar() {
  const menus = [
    { name: "🏛️ Markas", href: "/markas" },
    { name: "📚 Khazanah Politik", href: "/khazanah-politik" },
    { name: "📡 Radar", href: "/radar" },
    { name: "📊 Risikan Politik", href: "/risikan-politik" },
    { name: "🤖 Strategis AI", href: "/strategis-ai" },
    { name: "⚙️ Tetapan", href: "/tetapan" },
  ];

  return (
    <aside className="w-64 bg-gray-100 min-h-screen p-6 border-r">
      <h2 className="font-bold text-lg mb-6">TM Insight</h2>

      <ul className="space-y-3">
        {menus.map((menu) => (
          <li key={menu.href}>
            <Link
              href={menu.href}
              className="block rounded-lg px-3 py-2 hover:bg-blue-100"
            >
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}