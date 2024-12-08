import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";


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


export const metadata: Metadata = {
  title: "Ejercicios en Next.js",
  description: "Un proyecto para practicar ejercicios en Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-900`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Barra de navegación */}
          <header>
            <nav >
              <h1 >Ejercicios Next.js</h1>
              <ul >
                <li>
                  <Link href="/">Inicio</Link>
                </li>
                <li>
                  <Link href="/ejercicio1">Ejercicio 1</Link>
                </li>
                <li>
                  <Link href="/ejercicio2">Ejercicio 2</Link>
                </li>
                <li>
                  <Link href="/ejercicio3">Ejercicio 3</Link>
                </li>
              </ul>
            </nav>
          </header>

          
          <main className="container mx-auto flex-grow p-6">{children}</main>

          
          
        
        </div>
      </body>
    </html>
  );
}
