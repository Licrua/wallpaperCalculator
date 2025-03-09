"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "@/app/styles/componentStyles/general/feedbackForm.module.css";
import { FormDataType } from "@/types/formatData";

export default function FeedbackForm() {
  // Определяем схему валидации с использованием Zod
  const schema = z.object({
    name: z.string().min(2, "Имя должно содержать хотя бы 2 символа"),
    email: z.string().email("Неверный формат email"),
    story: z.string().min(10, "Сообщение должно быть не менее 10 символов"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormDataType) => {
    const formData = new FormData();
    formData.append("access_key", "89367206-309f-4284-893f-051c3e5b6f1f");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.story);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Сообщение отправлено успешно!");
    } else {
      alert("Произошла ошибка при отправке сообщения.");
    }
  };

  return (
    <section className={styles.feedback}>
      <div className={styles.header}>
        <h2 className={styles.title}>Обратная связь</h2>
        <p className={styles.text}>
          Пожалуйста, оставьте ваше сообщение, и мы свяжемся с вами в ближайшее время.
        </p>
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <p className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Имя
            </label>
            <input type="text" id="name" {...register("name")} className={styles.input} />
            {errors.name && <span className={styles.error}>{errors.name.message}</span>}
          </p>
          <p className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input type="email" id="email" {...register("email")} className={styles.input} />
            {errors.email && <span className={styles.error}>{errors.email.message}</span>}
          </p>
          <p className={styles.field}>
            <label htmlFor="story" className={styles.label}>
              Сообщение
            </label>
            <textarea id="story" rows={5} {...register("story")} className={styles.textarea} />
            {errors.story && <span className={styles.error}>{errors.story.message}</span>}
          </p>
          <button type="submit" className={styles.button} disabled={isSubmitting}>
            {isSubmitting ? "Отправляется..." : "Отправить"}
          </button>
        </form>
      </div>
    </section>
  );
}
