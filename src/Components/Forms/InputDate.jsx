import ReactDatePicker from "react-datepicker";
import { Controller } from "react-hook-form";

export default function InputDate({ control, name }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <ReactDatePicker
          placeholderText='dd/mm/aaaa'
          onChange={field.onChange}
          selected={field.value}
        />
      )}
    />
  );
}
