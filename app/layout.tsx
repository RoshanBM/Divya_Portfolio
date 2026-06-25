import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Cursor } from "@/components/cursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divyashree N S — Creative Marketing Strategist",
  description:
    "Portfolio of Divyashree N S, a creative marketing strategist crafting campaigns, stories, and brand identities through strategy-led content and creative execution.",
  openGraph: {
    title: "Divyashree N S — Creative Marketing Strategist",
    description:
      "Campaigns, content, and brand identities. Selected work across food, fashion, and street culture.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5efe6",
  width: "device-width",
  initialScale: 1,
};

// Prevent theme flash before hydration.
const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>
          <Cursor />
          <div className="grain" aria-hidden />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
