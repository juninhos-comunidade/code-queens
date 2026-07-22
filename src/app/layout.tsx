import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@styles/globals.scss";

const poppinsSans = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Stack Check",
  description: `Stack Check é a plataforma ideal para testar suas habilidades em programação, 
  receber feedback, dicas de estudo e se preparar para entrevistas técnicas.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={poppinsSans.variable}>
      <body>{children}</body>
    </html>
  );
}
