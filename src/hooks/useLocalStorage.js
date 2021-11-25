import React from 'react'

export default function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
        } else {
            parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
    },[itemName]);

    const saveItem = (newItem) => {
          const stringifiedItem = JSON.stringify(newItem);
          localStorage.setItem(itemName, stringifiedItem);
          setItem(newItem);
      };

    return {item, saveItem};
}
