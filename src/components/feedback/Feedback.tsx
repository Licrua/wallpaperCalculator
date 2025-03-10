import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "@/styles/feedback/feedback.module.css";
import toast from "react-hot-toast";
import Cross from "../general/Cross";

type FormDataType = {
  name: string;
  email: string;
};

type FeedbackFormProps = {
  results: { wallpaperArea: string; rollsNeeded: number; wallpaperM2: string } | null;
  onClick: () => void;
  closeFrame: () => void;
};

export default function FeedbackForm({ results, onClick, closeFrame }: FeedbackFormProps) {
  const schema = z.object({
    name: z.string().min(2, "Имя должно содержать хотя бы 2 символа"),
    email: z.string().email("Неверный формат email"),
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

    if (results) {
      formData.append("wallpaperArea", results.wallpaperArea);
      formData.append("rollsNeeded", results.rollsNeeded.toString());
      formData.append("wallpaperM2", results.wallpaperM2);
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      toast.success("Форма успешна отправлена!");
      onClick();
    } else {
      toast.error("Что - то пошло не так");
    }
  };

  return (
    <div className={styles.overlay}>
      <section className={styles.feedback}>
        <Cross onClick={closeFrame} styles={{ position: "absolute", top: 10, right: 10 }} />
        <div className={styles.header}>
          <h2 className={styles.title}>Обратная связь</h2>
          <p className={styles.text}>
            Пожалуйста, оставьте ваше имя и почту, чтобы получить данные калькулятора
          </p>
        </div>
        <div className={styles.formContainer}>
          <form autoComplete="on" onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
            <button type="submit" className={styles.button} disabled={isSubmitting}>
              {isSubmitting ? "Отправляется..." : "Отправить данные"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
