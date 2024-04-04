import React, { FC } from "react";
import HirerCard from "@/src/shared/ui/HirerCard";
import HirerInfoCard from "@/src/shared/ui/HirerInfoCard";

const Hirer: FC = () => {
  const hirerBacisData = [
    {
      id: 1,
      fullName: "Марихуваевна Махабад Хамзатова",
      phoneNumber: 7771234567,
    },
  ];
  const hirerData = [
    {
      id: 1,
      fullName: "Марихуваевна Махабад Хамзатова",
      city: "Актау",
      age: 15,
      specialNeeds: "Нет",
      extraWishes: "Нет",
      payment: 100000,
    },
    {
      id: 2,
      fullName: "Айдарова Айдана Айдаровна",
      city: "Шымкент",
      age: 18,
      specialNeeds: "Да",
      extraWishes: "Нет",
      payment: 80000,
    },
    {
      id: 3,
      fullName: "Иванов Ивана Иванович",
      city: "Актобе ",
      age: 17,
      specialNeeds: "Хочу 1000$",
      extraWishes: "Нет",
      payment: 60000,
    },
    {
      id: 4,
      fullName: "Иванов Ивана Иванович",
      city: "Актобе ",
      age: 17,
      specialNeeds: "Хочу 1000$",
      extraWishes: "Нет",
      payment: 60000,
    },
  ];
  const ownInfo = true;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-screen-lg-3 mx-auto">
        <div className="flex justify-center">
          <h1 className="text-4xl">Hirer Profile</h1>
        </div>
        <div className=" flex-wrap  gap-9 mt-4">
          {!ownInfo && hirerBacisData.map((data, index) => <HirerInfoCard key={index} hirerData={data} />)}
          {ownInfo && hirerData.map((data, index) => <HirerCard key={index} hirerData={data} />)}
        </div>
      </div>
    </div>
  );
};

export default Hirer;
