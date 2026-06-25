import localFont from "next/font/local";

export const aventa = localFont({
  src: [
    {
      path: "./Aventa-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Aventa-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Aventa-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Aventa-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aventa",
  display: "swap",
});
