"use client";
import { useTranslation } from "@/app/i18n/client";

import FaqAccordion from "@/src/entities/FaqAccordion";
import ClickHeart from "@/src/shared/assets/Landing/ClickHeart";
import FAQIcon from "@/src/shared/assets/Landing/FAQIcon";
import SearchHeart from "@/src/shared/assets/Landing/SearchHeart";
import Button from "@/src/shared/ui/Button";
import { FC, useState } from "react";

/* eslint-disable max-len */
const dataParents = [
  {
    id: 1,
    title: "Что делает тьютор ? ",
    // eslint-disable-next-line max-len
    desc: `Тьютор – это специалист по включению в среду. Он мостик, коммуникатор между обществом и ребенком, оказавшимся в плену своего физиологического, ментального или психологического состояния. 
    Роль тьютора – помочь преодолеть границы и органично включиться в социум в различных сценах жизни. 
    Тьютор легко ориентируется в особенностях поведения и течения болезни своего подопечного, и знает, как организовать внимание ребенка, как помочь ему включиться в социальную сцену, в образовательный процесс, провоцируя интерес и мотивацию, деликатно и с эмпатией. Тьютор прикреплен к одному ученику, и он не является няней ребенка, его охранником, репетитором или обслуживающим персоналом.
    `,
  },
  {
    id: 2,
    title: "Как мне выбрать тьютора для своего ребенка?",
    desc: "Вам нужно очень хорошо понимать границы, которые мешают ребенку быть включенным в социальную жизнь, в академический процесс. Исходя из этого вы сможете выбрать того человека, который точно сможет сопровождать ребенка и помогать ему эффективно включаться в среду. Обязательно советуйтесь со специалистами, которые ведут ребенка, это врачи, педагоги, психологи… ",
  },
  {
    id: 3,
    title: "Можем ли мы познакомиться сразу с несколькими тьюторами и потом выбрать?",
    desc: "Вы, как родитель или работодатель, можете выбирать того тьютора, в котором нуждается ребенок. Поэтому, вы можете знакомиться, встречаться и обсуждать профессиональные задачи и условия работы с теми претендентами, которые вас заинтересовали. ",
  },
  {
    id: 4,
    title: "Какие гарантии безопасности дает платформа для родителей особенных детей? ",
    desc: `Платформа предназначена для того, чтобы родители и тьюторы могли встретиться. Но ответственность за принятие решение о сотрудничестве с тем или иным тьютором лежит на родителях. Поэтому мы рекомендуем обязательно запрашивать:
    - документы, удостоверяющие личность
    - справку об отсутствии судимости
    - справки из поликлиники о состоянии здоровья
    - справку о регистрации по месту жительства.
    `,
  },
  {
    id: 5,
    title: "Есть ли специалист, который поможет с выбором тьютора?",
    desc: `Самым лучшим специалистом в этом вопросе будет тот человек, который ведет маршрут развития ребенка. Это может быть родитель, педагог или психолог… Вот несколько рекомендаций, который могут помочь:
    -  в первую очередь, внимательно ознакомьтесь с видео-анкетами претендентов
    - при выборе тьютора обязательно учитывайте состояние ребенка, которого предстоит сопровождать
    - вы ищите друга для ребенка, человека, которому он сможет доверять, а также специалиста, который знает, как организовать социальную сцену так, чтобы ребенку было легко включиться. Поэтому, обращайте внимание на особенности специализации тьюторов, обсуждайте свои ожидания и требования в работе тьютора с претендентом. 
    `,
  },
  {
    id: 6,
    title: "В каких аспектах развития и обучения моего ребенка может помочь тьютор?",
    desc: `Тьютор может помочь ребенку включиться в образовательный процесс, адаптируя программу, ища подход к сознанию и пониманию подопечного. В случае, если ребенку трудно сосредоточиться на уроке, тьютор помогает ему не отвлекаться, следит за тем, чтобы он выполнял задания. 
    Если ребенок испытывает психологические границы, неустойчивость эмоционального состояния, тьютор может помочь организовать базовую атмосферу безопасности в среде, пояснять ребенку, что происходит, интерпретировать ситуации, которые неясны ребенку.
    Также тьютор может помочь с физическим развитием, сопровождая ребенка в спортивных активностях, занимаясь ЛФК, помогая включиться в подвижные игры, вне зависимости от способов передвижения ребенка. 
    `,
  },
  {
    id: 7,
    title: "Могу ли я поменять тьютора?",
    desc: "Платформа SparkLab Tutur предоставляет сервис с доступом к анкетам профессиональных тьюторов. Вы всегда можете воспользоваться возможностью установления контакта с нужным вам специалистом.  Если тьютор не подошел требованиям, всегда можно попробовать сотрудничество с другим соискателем на эту роль. ",
  },
];

const FAQLanding: FC<{ lng: string }> = ({ lng }) => {
  const [isParentFAQActive, setIsParentFAQActive] = useState<boolean>(true);

  const handleParentFAQClick = () => {
    setIsParentFAQActive(true);
  };

  const handleTutorFAQClick = () => {
    setIsParentFAQActive(false);
  };

  const { t } = useTranslation(lng, "landing");
  const dataTutors = [
    {
      id: 1,
      title: t("1FAQTTile"),
      desc: t("1FAQTDesc"),
    },
    {
      id: 2,
      title: t("2FAQTTile"),
      desc: t("2FAQTDesc"),
    },
    {
      id: 3,
      title: t("3FAQTTile"),
      desc: t("3FAQTDesc"),
    },
    {
      id: 4,
      title: t("4FAQTTile"),
      desc: t("4FAQTDesc"),
    },
    {
      id: 5,
      title: t("5FAQTTile"),
      desc: t("5FAQTDesc"),
    },
    {
      id: 6,
      title: t("6FAQTTile"),
      desc: t("6FAQTDesc"),
    },
  ];
  const data = [
    {
      id: 1,
      title: t("1AQTitle"),
      desc: t("1FAQDesc"),
    },
    {
      id: 2,
      title: t("2FAQTitle"),
      desc: t("2FAQDesc"),
    },
    {
      id: 3,
      title: t("3FAQTitle"),
      desc: t("2FAQDesc"),
    },
    {
      id: 4,
      title: t("4FAQTitle"),
      desc: t("4FAQDesc"),
    },
    {
      id: 5,
      title: t("5FAQTitle"),
      desc: t("5FAQDesc"),
    },
    {
      id: 6,
      title: t("6FAQTitle"),
      desc: t("6FAQDesc"),
    },
    {
      id: 7,
      title: t("7FAQTitle"),
      desc: t("7FAQDesc"),
    },
  ];
  return (
    <section id="faq" className="flex flex-col justify-center mt-10 pb-24 relative">
      <div className="absolute top-0 left-[-100px]">
        <FAQIcon />
      </div>
      <div className="absolute top-96 right-[-100px]">
        <SearchHeart />
      </div>
      <div className="absolute left-[-80px] top-[906px] ">
        <ClickHeart />
      </div>
      <div className="flex justify-center gap-[35px]">
        <Button variant={isParentFAQActive ? 1 : 2} onClick={handleParentFAQClick} className="py-5 px-14 ">
          <span className="font-extrabold text-4xl">{t("FAQ")}</span>
        </Button>
        <Button
          variant={!isParentFAQActive ? 1 : 2}
          onClick={handleTutorFAQClick}
          className="py-5 px-14 font-extrabold text-4xl "
        >
          <span className="font-extrabold text-4xl">{t("FAQtutor")}</span>
        </Button>
      </div>
      <div className="flex flex-col mx-auto mt-12 gap-10">
        {isParentFAQActive
          ? data.map(data => <FaqAccordion key={data.id} title={data.title} desc={data.desc} />)
          : dataTutors.map(data => <FaqAccordion key={data.id} title={data.title} desc={data.desc} />)}
      </div>
    </section>
  );
};

export default FAQLanding;
