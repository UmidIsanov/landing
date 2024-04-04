import React from "react";

const ApplicationPendingPage = () => {
  return (
    <main className="flex justify-center mt-16 mb-16">
      <article className="flex flex-col text-center gap-32">
        <h1 className="text-3xl font-extrabold px-60">
          Ваша заявка еще на модерации, вы пока не имеете <br /> доступа к странице. <br /> Ответ придет на почту в
          течение 3 дней. <br /> Проверяйте папку Спама.
        </h1>
        <p className="text-xl font-semibold">
          Прошло больше трех дней, а ответа нет? Напишите нам <span className="text-green">tutor@example.com</span>
        </p>
      </article>
    </main>
  );
};

export default ApplicationPendingPage;
