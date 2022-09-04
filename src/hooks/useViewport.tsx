import React from 'react'
import { useState, useEffect } from 'react'


export default function useViewport(): number {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        })
    }, []);

    return width;
}