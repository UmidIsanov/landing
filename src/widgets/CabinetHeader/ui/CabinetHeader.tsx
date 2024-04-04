"use client";
import { useAppSelector } from "@/src/shared/model";
import Button from "@/src/shared/ui/Button";
import Link from "next/link";
import { FC } from "react";
const CabinetHeader: FC = () => {
  const role = useAppSelector(state => state.userReducer.user?.role);

  return (
    <header className="flex justify-center mt-6 h-16  ">
      <div className="container">
        <div className="flex justify-between">
          <nav className="">
            <ul className="flex gap-4 cursor-pointer mt-3">
              <li>
                <Link href={""}>
                  <Button variant={1} className="py-3 px-6" type="button">
                    <h1> Own information</h1>
                  </Button>
                </Link>
              </li>
              {role === "HIRER" && (
                <li>
                  <Link href={""}>
                    <Button variant={1} className="py-3 px-6" type="button">
                      <h1> My applications</h1>
                    </Button>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default CabinetHeader;
