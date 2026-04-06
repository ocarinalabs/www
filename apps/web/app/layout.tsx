import "./styles.css";
import { AnalyticsProvider } from "@repo/analytics/provider";
import { DesignSystemProvider } from "@repo/design-system";
import { fonts } from "@repo/design-system/lib/fonts";
import { cn } from "@repo/design-system/lib/utils";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

const perfectlyNineties = localFont({
  src: "../public/fonts/perfectly-nineties-regular.otf",
  variable: "--font-serif",
  display: "swap",
});

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
});

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => (
  <html
    className={cn(
      fonts,
      perfectlyNineties.variable,
      satoshi.variable,
      "scroll-smooth"
    )}
    lang="en"
    suppressHydrationWarning
  >
    <body>
      <AnalyticsProvider>
        <DesignSystemProvider defaultTheme="light" enableSystem={false}>
          <Header />
          {children}
          <Footer />
        </DesignSystemProvider>
      </AnalyticsProvider>
    </body>
  </html>
);

export default RootLayout;
