import { Container, Input, P } from "./style";
import { UiRadioProps } from "./type";

export const UiRadio = ({
  register,
  id,
  label,
  errorMessage,
  value,
  errors,
}: UiRadioProps) => {
  return (
    <Container>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Input
        id={id}
        type="radio"
        {...register}
        placeholder={label}
        value={value}
      />
      <div>
        {errors?.type === "required" && (
          <P role="alert">{errorMessage?.required}</P>
        )}
      </div>
    </Container>
  );
};
