import { UiRadio } from "./UiRadio";
import { ContainerGroup, Box } from "./style";
import { UiGroupRadioProps } from "./type";

const UiGroupRadio = ({ values, title, name, register }: UiGroupRadioProps) => {
  return (
    <ContainerGroup>
      <legend>{title}</legend>
      <Box>
        {values.map((radio) => {
          return (
            <UiRadio
              key={radio.id}
              id={radio.id}
              label={radio.id}
              register={register}
              errors={undefined}
              value={radio.value}
            />
          );
        })}
      </Box>
    </ContainerGroup>
  );
};

export default UiGroupRadio;
