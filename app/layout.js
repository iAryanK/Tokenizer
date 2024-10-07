import localFont from "next/font/local";
import "./globals.css";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import { BackgroundLines } from "../components/aceternity/background-lines";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Tokenizer",
  description: "Create Solana tokens with ease!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BackgroundLines className="flex items-center justify-center h-full w-full flex-col px-4">
          {children}
        </BackgroundLines>

        <Link className="fixed bottom-4 right-4 text-4xl text-white hover:scale-105 transition-all duration-200" href={"https://github.com/iAryanK/Tokenizer"} target="_blank"><BsGithub /></Link>
      </body>
    </html>
  );
}
