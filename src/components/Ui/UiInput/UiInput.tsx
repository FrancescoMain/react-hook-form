import { Container, Input, P } from "./style";
import { UiInputProps } from "./type";

export const UiInput = ({
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
      <Input id={id} type="text" {...register} placeholder={label} />
      <div>
        {errors?.type === "required" && (
          <P role="alert">{errorMessage?.required}</P>
        )}
        {errors?.type === "minLength" && (
          <P role="alert">{errorMessage?.minLength} </P>
        )}
        {errors?.type === "maxLength" && (
          <P role="alert">{errorMessage?.maxLength} </P>
        )}
        {errors?.type === "pattern" && (
          <P role="alert">{errorMessage?.pattern} </P>
        )}
      </div>
    </Container>
  );
};
