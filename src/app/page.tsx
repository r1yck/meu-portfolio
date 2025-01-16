import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/about"); // Redireciona para a rota "about"
  return null;
}
