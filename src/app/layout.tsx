import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Portfólio de R1YCK",
  description: "Desenvolvedor Back-End - Editor de Vídeos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-background text-white font-poppins">
        <main>{children}</main>
      </body>
    </html>
  );
}
