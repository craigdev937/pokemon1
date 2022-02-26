import React from "react";

export const useDebounce = 
<Type>(value: Type, delay: number) => {
    const [debouncedValue, setDebouncedValue] = 
        React.useState<Type>(value);
    
    React.useEffect(() => {
        const handler = setTimeout(() => {
           setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        }
    }, [value, delay]);

    return debouncedValue;
};





