import { useState } from 'react';

export default function useForm<T>(inputValues: T) {
  const [values, setValues] = useState<T>(inputValues);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    path?: keyof T
  ) => {
    const { value, name } = event.target;
    let processedValue = value;
    if (name === 'email') {
      processedValue = value.replace(/\s/g, '');
    }

    if (path) {
      setValues({
        ...values,
        [path]: { ...values[path], [name]: processedValue }
      });
    } else {
      setValues({ ...values, [name]: processedValue });
    }
  };
  return { values, handleChange, setValues };
}
