import { useState, useEffect } from "react";
import {v4 as uuid} from 'uuid';

export default function useId() {
    const [id, setId] = useState('');

    useEffect(() => {
        setId( uuid() );
    },[])

    return id;
}