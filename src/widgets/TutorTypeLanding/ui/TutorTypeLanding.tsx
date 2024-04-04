import TutorTypeCard from "@/src/entities/TutorTypeCard/ui/TutorTypeCard";
import BlackHeart from "@/src/shared/assets/Landing/BlackHeart";

import IconTutorTypeFirst from "@/src/shared/assets/Landing/IconTTypeFirst";
import IconTTypeFourth from "@/src/shared/assets/Landing/IconTTypeFourth";
import IconTTypeSecond from "@/src/shared/assets/Landing/IconTTypeSecond";
import IconTTypeThird from "@/src/shared/assets/Landing/IconTTypeThird";
import TwoHeart from "@/src/shared/assets/Landing/TwoHeart";

const TutorTypeLanding = () => {
  const tutorTypes = [
    { title: "Академический", img: <IconTutorTypeFirst /> },
    { title: "Спортивный", img: <IconTTypeSecond /> },
    { title: "Социальный", img: <IconTTypeThird /> },
    { title: "Творческий", img: <IconTTypeFourth /> },
  ];

  return (
    <>
      <section className="flex flex-col text-center relative">
        <div className="absolute top-24 left-[-150px]">
          <BlackHeart />
        </div>
        <div className="absolute right-[-150px] top-14">
          <TwoHeart />
        </div>
        <h1 className="font-bold text-4xl text-green mb-8">Тьютор может быть</h1>
        <article className="flex justify-center gap-[58px] px-32">
          {tutorTypes.map((type, id) => (
            <TutorTypeCard key={id} title={type.title} img={type.img} />
          ))}
        </article>
      </section>
    </>
  );
};

export default TutorTypeLanding;
