import React from "react";
import ApplicationManageTutor from "@/src/widgets/ApplicationManageTutor";
import NoApplicationPage from "@/src/widgets/NoApplicationPage";
import ApplicationPendingPage from "@/src/widgets/ApplicationPendingPage";
const page = () => {
  return (
    <>
      <ApplicationManageTutor btn1={"Отправленные"} btn2={"Полученные"} />
      <NoApplicationPage />
      <ApplicationPendingPage />
    </>
  );
};

export default page;
