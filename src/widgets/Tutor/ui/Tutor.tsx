"use client";
import { FC } from "react";

import TutorCard from "@/src/shared/ui/TutorCard/ui/TutorCard";
import { useAppSelector } from "@/src/shared/model";
const Tutor: FC = () => {
  const role = useAppSelector(state => state.userReducer.user?.role);

  const tutorData = [
    {
      fullName: "Иванов Иван Иванович",
      city: "Алматы",
      age: 25,
      education: "Высшее",
      additionalEducation: "Курсы повышения квалификации в универе Нархоз",
      experience: "35 лет",
      languages: ["Русский", "Английский", "Казахский"],
      interests: ["Чтение", "Путешествия", "Спорт"],
      willingToTravel: true,
      flexibleSchedule: true,
      willingnessToLearn: true,
      YouTubeVideo: "https://www.youtube-nocookie.com/embed/q_xchAWMvbQ?si=EfBf9fWrht7Wvnam",
    },
  ];

  return (
    <div className=" container mx-auto px-4 py-10 max-w-screen-lg-3 ">
      <div className="flex justify-center mt-6">
        <h1 className="text-4xl">Tutor Profile</h1>
      </div>

      {tutorData.map((row, index) => (
        <TutorCard key={index} tutorData={row} />
      ))}
    </div>
  );
};

export default Tutor;
