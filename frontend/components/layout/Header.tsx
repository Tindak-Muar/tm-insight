import Logo from "@/components/navigation/Logo";
import DateTime from "@/components/navigation/DateTime";
import UserDropdown from "@/components/navigation/UserDropdown";

export default function Header() {
  return (
    <header className="bg-red-700 text-white shadow">

      <div className="flex h-20 items-center justify-between px-6">

        <Logo />

        <div className="flex items-center gap-8">

          <DateTime />

          {/* Divider */}

          <div className="h-10 w-px bg-red-500" />

          {/* User */}

          <UserDropdown />

        </div>

      </div>

    </header>
  );
}