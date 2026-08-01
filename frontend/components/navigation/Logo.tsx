import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      href="/markas"
      title="Kembali ke Markas"
      className="group flex items-center rounded-lg transition duration-200 hover:opacity-80"
    >
      <Image
        src="/images/logo/sinarlabs-logo.svg"
        alt="SINARLabs"
        width={200}
        height={70}
        priority
        className="transition-transform duration-200 group-hover:scale-[0.98]"
      />
    </Link>
  );
}