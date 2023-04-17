import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInput } from "./type";
import { UiInput } from "../../components/Ui/UiInput/UiInput";
import { Container, Main, Box } from "./style";
import { UiDateInput } from "../../components/Ui/UiDateInput/UiDateInput";
import UiGroupRadio from "../../components/Ui/UiRadioGroup/UiGroupRadio";
import { uiGroupRadioValues } from "../../components/Ui/UiRadioGroup/lib";
import UiSelect from "../../components/Ui/UiSelect/UiSelect";
import { selectValues } from "../../components/Ui/UiSelect/lib";

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
              register={register("dateOfBirth", {
                required: true,
                pattern:
                  /(?<!\d)(?:(?:(?:1[6-9]|[2-9]\d)?\d{2})(?:(?:(?:0[13578]|1[02])31)|(?:(?:0[1,3-9]|1[0-2])(?:29|30)))|(?:(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))0229)|(?:(?:1[6-9]|[2-9]\d)?\d{2})(?:(?:0?[1-9])|(?:1[0-2]))(?:0?[1-9]|1\d|2[0-8]))(?!\d)/,
              })}
              errorMessage={{
                required: "Questo campo è richiesto",
                pattern: "La data non è valida",
              }}
              label="Date Of Birth"
              id="dateOfBirth"
            />
            <UiGroupRadio
              register={register("gender")}
              title="Gender"
              values={uiGroupRadioValues}
              name={"Gender"}
            />
            <UiSelect
              register={register("nationality")}
              defaultValue={2}
              label="Nationality"
              id="nationality"
              values={selectValues}
            />
          </Box>

          <input type="submit" />
        </form>
      </Container>
    </Main>
  );
}
