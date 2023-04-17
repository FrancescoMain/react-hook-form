import { UseFormRegisterReturn } from "react-hook-form";
export interface CountryType {
    code: string;
    label: string;
    phone: string;
    suggested?: boolean;
  }
  

export  interface UiSelectProps {
    label: string;
    id: string;
    values: CountryType[];
    defaultValue: number;
    register: UseFormRegisterReturn<string>

}