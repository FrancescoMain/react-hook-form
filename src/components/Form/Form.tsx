import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInput } from "./type";
import { UiInput } from "../Ui/UiInput/UiInput";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <UiInput
        errors={errors.firstName}
        register={register("firstName", {
          required: true,
          maxLength: 20,
          minLength: 2,
        })}
        errorMessage={{
          required: "Il First name è richiesto",
          maxLength: "Non può superare i 20 caratteri",
          minLength: "Deve essere almeno due caratteri",
        }}
        label="First Name"
        id="firstName"
      />
      <UiInput
        errors={errors.lastName}
        register={register("lastName", { pattern: /^[A-Za-z]+$/i })}
        errorMessage={{ pattern: "Deve contenere solo Lettere" }}
        label="Second Name"
        id="secondName"
      />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
}
