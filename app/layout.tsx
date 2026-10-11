import './globals.css';

export const metadata = {
  title: "Mayank Kamdi — AI Engineer · Builder · Creative Technologist",
  description: "Portfolio showcasing AI engineering, creative technology, and design.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <head />
      <body>{children}</body>
    </html>
  );
}
