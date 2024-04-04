"use client";
import { FC } from "react";
import ITutorInfo from "@/src/widgets/Tutor/types";
import Image from "next/image";
import avatar from "@/src/shared/assets/avatar.png";
import { useAppSelector } from "@/src/shared/model";
interface TutorCardProps {
  tutorData: ITutorInfo;
}

const TutorCard: FC<TutorCardProps> = ({ tutorData }) => {
  const user = useAppSelector(state => state.userReducer.user);

  return (
    <div>
      <div className="m-4 flex justify">
        <Image src={avatar} width={155} height={155} alt="Tutor Avatar" className="rounded-md" />
      </div>
      <div className="m-4">
        <h2 className="text-xl font-bold">Информация о тьюторе:</h2>
        <ul>
          <li>Имя: {user?.firstName}</li>
          <li>Фамилия: {user?.secondName} </li>
          <li>Номер:+{user?.phone} </li>
          <li>Почта: {user?.email}</li>
          <li>дальше мокковые данные :</li>
          <li>Город: {tutorData.city}</li>
          <li>Возраст: {tutorData.age} лет</li>
          <li>Образование: {tutorData.education}</li>
          <li>Дополнительное образование/квалификация: {tutorData.additionalEducation}</li>
          <li>Опыт работы: {tutorData.experience}</li>
          <li>Знание языков: {tutorData.languages?.join(",")}</li>
          <li>Интересы/хобби: {tutorData.interests}</li>
          <li>Возможность командировки: {tutorData.willingToTravel ? "Да" : "Нет"}</li>
          <li>Возможность работать по ненормированному графику: {tutorData.flexibleSchedule ? "Да" : "Нет"}</li>
          <li>Готовность повышать квалификацию и продолжать обучение: {tutorData.willingnessToLearn ? "Да" : "Нет"}</li>
        </ul>
      </div>
      <div className="m-4">
        <h2 className="text-xl font-bold">Видео:</h2>
        <div className="embed-responsive">
          <iframe
            width="560"
            height="315"
            src={tutorData.YouTubeVideo}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
