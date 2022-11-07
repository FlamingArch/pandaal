/* eslint-disable @next/next/no-head-element */
import "./global.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Pandaal</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
