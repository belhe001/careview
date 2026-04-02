"use client";

import { Bell, Settings } from "lucide-react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Dashboard", active: true },
  { href: "#", label: "Patient Search", active: false },
  { href: "#", label: "Staff Directory", active: false },
  { href: "#", label: "Reports", active: false },
] as const;

export function Navbar() {
  return (
    <nav
      className="flex items-center justify-between px-8 h-14 bg-[#0f1117] border-b border-[#252a38]"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2 font-semibold text-[15px] text-white hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] rounded"
        aria-label="CareView home"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          aria-hidden="true"
        >
          <rect width="28" height="28" rx="6" fill="#3b82f6" />
          <path
            d="M6 20 L10 8 L14 16 L18 8 L22 20"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        CareView
      </Link>

      {/* Nav links */}
      <ul className="flex items-center gap-7" role="list">
        {NAV_LINKS.map(({ href, label, active }) => (
          <li key={label}>
            <Link
              href={href}
              className={`text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] rounded ${
                active
                  ? "text-[#3b82f6]"
                  : "text-[#8b92a4] hover:text-white"
              }`}
              aria-current={active ? "page" : undefined}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Action buttons */}
      <div className="flex items-center gap-2">
        <button
          className="w-9 h-9 rounded-lg bg-[#181c27] border border-[#252a38] text-[#8b92a4] flex items-center justify-center hover:bg-[#252a38] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]"
          aria-label="Notifications"
        >
          <Bell size={16} aria-hidden="true" />
        </button>
        <button
          className="w-9 h-9 rounded-lg bg-[#181c27] border border-[#252a38] text-[#8b92a4] flex items-center justify-center hover:bg-[#252a38] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]"
          aria-label="Settings"
        >
          <Settings size={16} aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
}
