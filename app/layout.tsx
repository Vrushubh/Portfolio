import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vrushubh Gandhi | .NET Developer",
  description: "Portfolio of Vrushubh Gandhi, .NET Developer focused on C#, ASP.NET Core, REST APIs, Entity Framework Core, SQL Server, and Generative AI.",
  metadataBase: new URL("https://example.com"),
  openGraph: { title: "Vrushubh Gandhi | .NET Developer", description: "Building scalable backend systems and intelligent web applications.", type: "website" },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
