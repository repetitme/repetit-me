import { useState } from 'react';

export default function useForm<T>(inputValues: T) {
  const [values, setValues] = useState<T>(inputValues);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    path?: keyof T
  ) => {
    const { value, name } = event.target;
    if (path) {
      setValues({ ...values, [path]: { ...values[path], [name]: value } });
    } else {
      setValues({ ...values, [name]: value });
    }
  };
  return { values, handleChange, setValues };
}
