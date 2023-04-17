import { Container, Input, P } from "./style";
import { UiInputProps } from "../UiInput/type";

export const UiDateInput = ({
  register,
  errorMessage,
  id,
  label,
  errors,
}: UiInputProps) => {
  return (
    <Container>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Input id={id} type="date" {...register} placeholder={label} />
      <div>
        {errors?.type === "required" && (
          <P role="alert">{errorMessage?.required}</P>
        )}
      </div>
    </Container>
  );
};
