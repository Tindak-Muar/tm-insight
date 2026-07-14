export default function Sidebar() {
  const menus = [
    "Dashboard",
    "Khazanah Politik",
    "Media Intelligence",
    "Data Analytics",
    "Election Intelligence",
    "AI Assistant",
    "Settings",
  ];

  return (
    <aside className="w-64 bg-gray-100 min-h-screen p-6 border-r">
      <h2 className="font-bold text-lg mb-6">Menu</h2>

      <ul className="space-y-3">
        {menus.map((menu) => (
          <li
            key={menu}
            className="cursor-pointer rounded-lg px-3 py-2 hover:bg-blue-100"
          >
            {menu}
          </li>
        ))}
      </ul>
    </aside>
  );
}