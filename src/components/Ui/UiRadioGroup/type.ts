import { FieldError, FieldErrorsImpl, Merge, Message, MultipleFieldErrors, Ref, UseFormRegisterReturn } from "react-hook-form";

export interface UiGroupRadioProps {
    values: uiGroupCheckboxValue[];
    title: string;
    name: string;
    register: UseFormRegisterReturn<string>

}


interface uiGroupCheckboxValue {
    id: string;
    value: number;
}

interface error {    
    type: string;
    ref?: Ref;
    types?: MultipleFieldErrors;
    message?: Message;    }


interface errorMessage {
    pattern?: string
    required?: string
    minLength?: string
    maxLength?: string
}   

export interface UiRadioProps {
    label: string;
    id: string;
    value: number;
    register: UseFormRegisterReturn<string>
    errors:  Merge<FieldError, FieldErrorsImpl<error>> | undefined
    errorMessage?: errorMessage

}