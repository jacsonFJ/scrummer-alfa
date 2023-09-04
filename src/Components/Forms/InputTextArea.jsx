import { Input } from "./InputText";

export default function InputTextArea({placeholder, style}) {
  const styles = {resize: 'none', ...style};
  return <Input as="textarea" placeholder={placeholder} style={styles} />
}
