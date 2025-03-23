import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    redirect("/signin"); // Giriş yapmamışsa signin sayfasına yönlendir
  }

  return <h1>Welcome to Dashboard</h1>;
}
