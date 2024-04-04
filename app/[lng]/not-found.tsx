import NotFoundError from "@/src/shared/assets/Landing/NotFoundError";
import Button from "@/src/shared/ui/Button";
import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <div className="max-w-[1300px] mx-auto h-[690px]">
      <section className="flex justify-between items-center">
        <article>
          <h1 className="font-extrabold text-4xl mb-12">
            <span className="text-8xl">404,</span>
            <br />
            Извините, страница не найдена
          </h1>

          <Button variant={1} className="py-2 px-5 text-xl font-semibold">
            <Link href={"/"}>← Вернуться на главную страницу</Link>
          </Button>
        </article>
        <NotFoundError />
      </section>
    </div>
  );
};

export default notFound;
