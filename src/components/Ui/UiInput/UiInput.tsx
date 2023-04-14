import { UiInputProps } from "./type";

export const UiInput = ({
  register,
  errorMessage,
  id,
  label,
  errors,
}: UiInputProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input id={id} type="text" {...register} />
      {errors?.type === "required" && (
        <p role="alert">{errorMessage?.required}</p>
      )}
      {errors?.type === "minLength" && (
        <p role="alert">{errorMessage?.minLength} </p>
      )}
      {errors?.type === "maxLength" && (
        <p role="alert">{errorMessage?.maxLength} </p>
      )}
      {errors?.type === "pattern" && (
        <p role="alert">{errorMessage?.pattern} </p>
      )}
    </div>
  );
};
