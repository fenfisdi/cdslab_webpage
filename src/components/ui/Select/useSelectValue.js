import { useEffect, useState } from "react";

export const useSelectValue = (val, validator, extras) => {
  const [value, setValue] = useState(val);
  const [isPress, setIsPress] = useState(false);
  const [helperText, setHelperText] = useState(null);
  const [error, setError] = useState(false);

  const onChange = (e) => {
    if (e && e.target) {
      setValue(e.target.value);
      if (error) {
        setError(false);
        setHelperText("");
      }
    }
  };

  const onOpen = (event) => {
    !isPress && setIsPress(true);
  };

  const onClose = (event) => {
    if (validator.value && isPress && !value.length > 0) {
      setError(true);
      setHelperText(validator.message);
    }
  };

  return {
    error,
    helperText,
    value,
    onOpen,
    onClose,
    onChange,
    ...extras,
  };
};
