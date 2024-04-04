"use client";

// import Button from "@/src/shared/ui/Button";
import React, { FC, useEffect } from "react";
// import { Checkbox } from "@/src/shared/ui/CheckBox";
import Link from "next/link";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/src/shared/model";
import { userFetchingSelector } from "@/src/entities/User";
import { useRouter } from "next/navigation";
import { authThunk } from "@/src/entities/User";
import { clearError } from "@/src/entities/User";

import FormInput from "@/src/shared/ui/FormInput/ui/FormClassicInput";
import FormPasswordInput from "@/src/shared/ui/FormInput/ui/FormPasswordInput";

import { LoginState } from "../../types/loginState";

//MUI
import Button from "@/src/shared/ui/Button";

//validate
import ReCAPTCHA from "react-google-recaptcha";

const Login: FC = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { isSubmitSuccessful, isValid },
  } = useForm<LoginState>({
    mode: "onChange",
    defaultValues: { password: "", email: "" },
  });

  const dispatch = useAppDispatch();
  const { error: errorMsg, isLoading, isAuth } = useAppSelector(userFetchingSelector);
  const { push } = useRouter();

  useEffect(() => {
    dispatch(clearError());
  }, []);

  useEffect(() => {
    if (isAuth) {
      push("/");
    }
  }, [isAuth]);

  const submitHandler: SubmitHandler<LoginState> = async data => {
    await dispatch(authThunk(true, data)).then(data => {
      if (data === null) {
        setError("root", { message: "Ошибка" });
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      noValidate
      action=""
      className="w-[544px] bg-white mb-32 h-[588px] shadow-xl px-8 mt-16 rounded-[30px]"
    >
      <div className="w-[450px] flex flex-col justify-center mx-3">
        <h1 className="text-3xl text-center p-6">Вход</h1>
        {/* Почта */}
        <Controller
          control={control}
          name="email"
          rules={{ required: true }}
          render={({ fieldState: { error }, field: { onChange, value, ref } }) => {
            return (
              <FormInput
                newClassNames="py-[8px]"
                isErrorCheckDisable
                withBlueBorder
                isRequired
                ref={ref}
                isSubmitSuccessful={isSubmitSuccessful}
                isError={true}
                label="Ваша эл-почта"
                inputProps={{ type: "email", onChange, value, placeholder: "Почта" }}
              />
            );
          }}
        />
        <Controller
          control={control}
          name="password"
          rules={{ required: true }}
          render={({ field: { onChange, value, ref } }) => {
            return (
              <FormPasswordInput
                isRequired
                newClassNames="py-[8px]"
                withBlueBorder
                ref={ref}
                isSubmitSuccessful={isSubmitSuccessful}
                isError={Boolean(errorMsg)}
                successMessage={"Вход выполняется"}
                errorCodes={["FAIL"]}
                errorMessages={errorMsg ? [errorMsg] : undefined}
                label="Пароль"
                inputProps={{ onChange, value, placeholder: "Пароль" }}
              />
            );
          }}
        />
        <div className="mt-4">
          <ReCAPTCHA sitekey="some key" />
        </div>

        <Button
          disabled={!isValid || isAuth || isLoading}
          variant={1}
          type="submit"
          className="font-normal bg-green rounded-[16px] mt-6 h-14"
        >
          Продолжить
        </Button>
        <hr className="mt-6 mb-6" />
        <div className="flex justify-center text-sm">
          <span className="flex flex-col text-center">
            Новый пользователь?
            <Link href="/register/tutor" className="text-green">
              Зарегистрироваться
            </Link>
          </span>
        </div>
      </div>
    </form>
  );
};

export default Login;
