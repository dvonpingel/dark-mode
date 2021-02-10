import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useDarkMode() {
    const [value, setValue] = useLocalStorage('dark')

    return [value, setValue];
};
