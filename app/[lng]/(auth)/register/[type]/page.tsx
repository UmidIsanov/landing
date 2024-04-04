import RegistartionContext from "@/src/features/Auth/provider/RegistartionContext";
import { Metadata } from "next";

export const generateMetadata = ({ params }: { params: { type: string } }): Metadata => ({
  title: `Регистрация | ${params.type === "tutor" ? "Тьютор" : "Наниматель"}`,
  description: `Регистрация | ${params.type === "tutor" ? "Тьютор" : "Наниматель"}`,
});

export default function RegistrationPage({ params }: { params: { type: string } }) {
  return <RegistartionContext type={params.type} />;
}
