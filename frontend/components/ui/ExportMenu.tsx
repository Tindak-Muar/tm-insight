"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ChevronDown,
  Database,
  FileText,
} from "lucide-react";

export type ExportOption = {
  label: string;
  href: string;
};

export type ExportGroup = {
  title: string;
  icon: "document" | "dataset";
  options: ExportOption[];
};

type ExportMenuProps = {
  groups: ExportGroup[];
};

const GROUP_CONFIG = {
  document: {
    icon: FileText,
  },

  dataset: {
    icon: Database,
  },
} satisfies Record<
  ExportGroup["icon"],
  {
    icon: React.ComponentType<{
      size?: number;
      strokeWidth?: number;
      className?: string;
    }>;
  }
>;

export default function ExportMenu({
  groups,
}: ExportMenuProps) {

  const [open, setOpen] =
    useState(false);

  const menuRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {

    function handleClickOutside(
      event: MouseEvent
    ) {

      if (
        menuRef.current &&
        !menuRef.current.contains(
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
      ref={menuRef}
      className="relative"
    >

      <button
        type="button"
        onClick={() =>
          setOpen((prev) => !prev)
        }
        className="flex items-center gap-2 rounded-lg border bg-white px-5 py-2 hover:bg-gray-50"
      >

        Eksport

        <ChevronDown
          size={16}
        />

      </button>

      {open && (

        <div className="absolute right-0 z-50 mt-2 w-72 rounded-xl border bg-white shadow-lg">

          {groups.map((group) => {

            const Icon =
              GROUP_CONFIG[group.icon].icon;

            return (

              <div
                key={group.title}
                className="border-b border-gray-100 last:border-b-0"
              >

                <div className="flex items-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">

                  <Icon
                    size={14}
                    strokeWidth={2}
                  />

                  {group.title}

                </div>

                {group.options.map(
                  (item) => (

                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-8 py-2 text-sm hover:bg-gray-50"
                      onClick={() =>
                        setOpen(false)
                      }
                    >

                      {item.label}

                    </a>

                  )
                )}

              </div>

            );

          })}

        </div>

      )}

    </div>

  );

}