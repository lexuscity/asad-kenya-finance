import type { ReactNode } from "react";

import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

interface SiteLayoutProps {
  children: ReactNode;
}

function SiteLayout({
  children,
}: SiteLayoutProps) {
  return (
    <div className="site">
      <SiteHeader />

      <main className="site-main">
        {children}
      </main>

      <SiteFooter />
    </div>
  );
}

export default SiteLayout;