import { Container, Box, Select } from "./style";
import { UiSelectProps } from "./type";

const UiSelect = ({
  label,
  id,
  values,
  register,
  defaultValue,
}: UiSelectProps) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <Box>
        <Select {...register} name={id} id={id} defaultValue={defaultValue}>
          {values.map((value) => {
            return (
              <option key={value.code} value={value.label}>
                {value.label}
              </option>
            );
          })}
        </Select>
      </Box>
    </Container>
  );
};

export default UiSelect;
