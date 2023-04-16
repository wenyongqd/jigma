import { useEffect, useState } from 'react';

export const cleanObject = (obj: Object) => {
    const filteredEntries = Object.entries(obj).filter(
        ([_, value]) => value !== undefined && value !== '',
    );
    return Object.fromEntries(filteredEntries);
};

export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback();
    }, []);
};
//   0ms -----------> 200ms -----------> 400ms -----------> 900ms
//  'a'               'ag'               'age'                |
//   |                 |                   |                  |
// (empty)       (cancel timeout#1)  (cancel timeout#2)    timeout#3
// timeout#1         timeout#2           timeout#3

// const debounce = (func, delay) => {
//     let timeout;
//     return (...param) => {
//         if (timeout) {
//             clearTimeout(timeout);
//         }
//         timeout = setTimeout(function() {
//             func(...param);
//         }, delay);
//     }
// }

export const useDebounce = <V>(value: V, delay?: number): V => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timeout = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(timeout);
    }, [value, delay]);

    return debouncedValue;
};
