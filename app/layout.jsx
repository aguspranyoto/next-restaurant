import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "../components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Restaurant",
  description: "Developed by Agus Pranyoto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
