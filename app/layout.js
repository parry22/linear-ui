import localFont from "next/font/local";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument-sans",
});

export const metadata = {
  title: "LinearUI - Modern Web3 Component Library",
  description:
    "A modern, open-source UI component library designed specifically for Web3 applications",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} font-sans antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
