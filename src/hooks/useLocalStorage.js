import { useEffect, useState } from "react";



export function useLocalStorage(key, initialValue = null) {
    return localStorage.getItem(key) ?? initialValue;
}

