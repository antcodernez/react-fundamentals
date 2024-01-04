import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        let localStorageItem = localStorage.getItem(itemName);
  
        let parsedItem;
  
        if (!localStorageItem) 
          {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } 
        else 
          {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
  
        setLoading(false);
      } 
      catch (error) 
        {
          setLoading(false);
          setError(true);
        }
    }, 2000);
  }, [itemName, initialValue]);
  //Este array especifica las variables o valores externos que el efecto debe observar. Cuando alguno de estos valores cambia, el efecto se ejecuta. Si el array está vacío, el efecto se ejecutará solo una vez, después del primer renderizado del componente. 

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };