import { useState, useCallback } from 'react';

function useInputs(initialFrom) {
    const [from, setForm] = useState(initialFrom);
    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        setForm(form => ({ ...form, [name]: value }));
    }, [])

    const reset = useCallback(() => setForm(initialFrom), [initialFrom]);
};