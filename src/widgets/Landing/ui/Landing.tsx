import AdviceLanding from "@/src/widgets/AdviceLanding";
import DonateLanding from "@/src/widgets/DonateLanding";
import FAQLanding from "@/src/widgets/FAQLanding";
import FindVacanLanding from "@/src/widgets/FindVacanLanding";
import HowWorkSteps from "@/src/widgets/HowWorkSteps";
import IntroLanding from "@/src/widgets/IntroLanding";
import SearchTutorLanding from "@/src/widgets/SearchTutorLanding";
import HowWorkStepsTitle from "../../HowWorkStepsTitle";
import TutorTypeLanding from "../../TutorTypeLanding";
import AboutUS from "../../AboutUS";
import AdditionalPCLanding from "../../AdditionalPCLanding";

interface Ilng {
  lng: string;
}

const Landing = ({ lng }: Ilng) => {
  return (
    <section className="w-full ">
      <article className="bg-introcolor  flex items-center justify-center ">
        <IntroLanding lng={lng} />
      </article>
      <HowWorkStepsTitle />
      <article className="bg-bggreen bg-opacity-40  flex items-center justify-center ">
        <HowWorkSteps lng={lng} />
      </article>
      <article className="max-w-[1200px] mx-auto" id="searchTutor">
        <SearchTutorLanding lng={lng} />
        <TutorTypeLanding />
      </article>
      <article className="max-w-[1200px] mx-auto">
        <section>
          <AdviceLanding lng={lng} />
        </section>
        <section id="becomeTutor">
          <FindVacanLanding lng={lng} />
        </section>
        <section id="donate">
          <DonateLanding lng={lng} />
        </section>
        <section id="faq">
          <FAQLanding lng={lng} />
        </section>
      </article>
      <article id="about" className="bg-bggreen bg-opacity-40  flex items-center justify-center ">
        <AboutUS lng={lng} />
      </article>
      <AdditionalPCLanding lng={lng} />
    </section>
  );
};

export default Landing;
