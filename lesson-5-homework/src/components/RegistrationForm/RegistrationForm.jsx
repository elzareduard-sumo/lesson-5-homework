import React from "react";
import { useForm } from "react-hook-form";
import "./RegistrationForm.css";
const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const currentPassword = watch("password", "");
  const onSubmit = (data) => {
    const { confirmPassword, ...submitData } = data;
    console.log("[LOG] данные успешно отправлены:", submitData);
    alert("Регистрация прошла успешно!");
    reset();
  };
  return (
    <div className="registration-wrapper">
      <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
          Регистрация
        </h2>

        <div className="form-group">
          <label htmlFor="name">Имя</label>
          <input
            id="name"
            type="text"
            placeholder="Ваше имя"
            className={errors.name ? "input-error" : ""}
            {...register("name", {
              required: "Имя обязательно для заполнения",
            })}
          />
          {errors.name && (
            <span className="error-text">{errors.name.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="example@mail.com"
            className={errors.email ? "input-error" : ""}
            {...register("email", {
              required: "Email обязателен для заполнения",
              pattern: {
                value: /^[^@\s]{2,}@[^@\s]+\.[^@\s]+$/,
                message: "Введите корректный email (минимум 2 символа до '@')",
              },
            })}
          />
          {errors.email && (
            <span className="error-text">{errors.email.message}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input
            id="password"
            type="password"
            placeholder="Минимум 6 символов"
            className={errors.password ? "input-error" : ""}
            {...register("password", {
              required: "Пароль обязателен для заполнения",
              minLength: {
                value: 6,
                message: "Пароль должен быть не короче 6 символов",
              },
            })}
          />
          {errors.password && (
            <span className="error-text">{errors.password.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Подтверждение пароля</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Повторите пароль"
            className={errors.confirmPassword ? "input-error" : ""}
            {...register("confirmPassword", {
              required: "Подтвердите пароль",
              validate: (value) =>
                value === currentPassword || "Пароли не совпадают",
            })}
          />
          {errors.confirmPassword && (
            <span className="error-text">{errors.confirmPassword.message}</span>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
