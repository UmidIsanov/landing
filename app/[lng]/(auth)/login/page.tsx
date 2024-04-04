import Login from "@/src/features/Auth/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Авторизация",
  description: "Авторизация",
};

export default function LoginPage() {
  return <Login />;
}
