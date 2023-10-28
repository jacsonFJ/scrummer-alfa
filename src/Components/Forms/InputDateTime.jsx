import ReactDatePicker from "react-datepicker";
import { Controller } from "react-hook-form";

export default function InputDateTime({ control, name }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <ReactDatePicker
          placeholderText='dd/mm/aaaa hh:mm'
          onChange={field.onChange}
          selected={field.value}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="hora"
          dateFormat="dd/MM/yyyy HH:mm"
        />
      )}
    />
  );
}
