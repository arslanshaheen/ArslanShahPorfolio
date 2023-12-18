import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
const poppins = Poppins({
  weight: ["400", "200", "300", "500", "600", "700", "800"],
  subsets: [],
});
export const metadata: Metadata = {
  title: "Waseem Kashif",
  description: "Generated by Waseem Kashif",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}, antialiased`}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
