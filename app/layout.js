import "./globals.css";

export const metadata = {
  title: "Web Dev 2 Practice",
  description: "Web Dev 2 Practice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
