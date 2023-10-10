import { useState, useEffect } from "react";
import debounce from "lodash/debounce";

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  const saveToLocalStorage = debounce((value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }, 200);

  useEffect(() => {
    saveToLocalStorage(value);
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
