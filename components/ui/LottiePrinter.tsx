"use client";

import Lottie from "lottie-react";
import printerAnimation from "@/public/lottie/Printer.json";

export function LottiePrinter({ className = "" }: { className?: string }) {
  return (
    <Lottie
      animationData={printerAnimation}
      loop
      autoplay
      className={className}
      aria-hidden="true"
    />
  );
}
