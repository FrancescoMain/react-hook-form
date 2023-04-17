import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInput } from "./type";
import { UiInput } from "../../components/Ui/UiInput/UiInput";
import { Container, Main, Box } from "./style";
import { UiDateInput } from "../../components/Ui/UiDateInput/UiDateInput";
import UiGroupRadio from "../../components/Ui/UiRadioGroup/UiGroupRadio";
import { uiGroupRadioValues } from "../../components/Ui/UiRadioGroup/lib";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <Main>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <UiInput
              errors={errors.fullName}
              register={register("fullName", {
                required: true,
                maxLength: 20,
                minLength: 2,
              })}
              errorMessage={{
                required: "Questo campo è richiesto",
                maxLength: "Non può superare i 20 caratteri",
                minLength: "Deve essere almeno due caratteri",
              }}
              label="Full Name"
              id="fullName"
            />
            <UiInput
              errors={errors.lastName}
              register={register("lastName", { pattern: /^[A-Za-z]+$/i })}
              errorMessage={{ pattern: "Deve contenere solo Lettere" }}
              label="Last Name"
              id="lastName"
            />
            <UiDateInput
              errors={errors.dateOfBirth}
              register={register("dateOfBirth", { required: true })}
              errorMessage={{ required: "Questo campo è richiesto" }}
              label="Date Of Birth"
              id="dateOfBirth"
            />
            <UiGroupRadio
              register={register("gender")}
              title="Gender"
              values={uiGroupRadioValues}
              name={"Gender"}
            />
          </Box>

          <input type="submit" />
        </form>
      </Container>
    </Main>

    //
    //
    //
    //   <select {...register("gender")}>
    //     <option value="female">female</option>
    //     <option value="male">male</option>
    //     <option value="other">other</option>
    //   </select>
  );
}
