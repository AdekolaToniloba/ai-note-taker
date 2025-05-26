// hooks/useToast.ts
"use client";

import { toast as sonner } from "sonner";

type Variant = "success" | "error" | "loading" | "custom";
// Grab the second parameter type of sonner(), which is the options object
type SonnerOpts = Parameters<typeof sonner>[1];

export function useToast() {
  function toast(
    message: React.ReactNode,
    variant: Variant = "custom",
    opts?: SonnerOpts
  ) {
    switch (variant) {
      case "success":
        return sonner.success(message, opts);
      case "error":
        return sonner.error(message, opts);
      case "loading":
        return sonner.loading(message, opts);
      default:
        return sonner(message, opts);
    }
  }

  return { toast };
}
