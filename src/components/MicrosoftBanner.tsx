// src/components/MicrosoftBanner.tsx
"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const SCRIPT_ID = "210b06cb-bfca-4524-a407-319a67621ede";

// Leaderboard + mobile banner
const DESKTOP = { w: 728, h: 90 };
const MOBILE  = { w: 320, h: 50 };

export default function MicrosoftBanner({ className = "" }: { className?: string }) {
  const [dims, setDims] = useState(DESKTOP);

  useEffect(() => {
    const pick = () => {
      const mobile = window.matchMedia("(max-width: 640px)").matches;
      setDims(mobile ? MOBILE : DESKTOP);
    };
    pick();
    window.addEventListener("resize", pick);
    return () => window.removeEventListener("resize", pick);
  }, []);

  const containerId = `dccn-${SCRIPT_ID}`;

  return (
    <section className={`my-12 md:my-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Container that DMC script writes into */}
        <div
          id={containerId}
          className="mx-auto overflow-hidden rounded-3xl ring-1 ring-slate-200 bg-white/70 shadow-sm"
          style={{ maxWidth: `${dims.w}px`, minHeight: `${dims.h}px` }}
        />

        {/* Microsoft DMC embed */}
        <Script
          id={`ms-dmc-banner-${dims.w}x${dims.h}`}
          strategy="afterInteractive"
          src={`https://dmc.partner.microsoft.com/dccn/api/embedded-campaigns/js?id=${SCRIPT_ID}&height=${dims.h}&width=${dims.w}&embedType=banner`}
        />
      </div>
    </section>
  );
}
