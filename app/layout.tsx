import type { Metadata } from "next";
import "@/main.css";
import App from "@/App";

export const metadata: Metadata = {
  title: "Restaurants",
  description: "Restaurants",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="root" className="root">
          <App>{children}</App>
        </div>
      </body>
    </html>
  );
}
