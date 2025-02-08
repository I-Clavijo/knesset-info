"use client";

import { useEffect, useState } from 'react';

import type { Bill } from '../lib/models/Bill';


export default function useBills() {
    const [bills, setBills] = useState<Bill[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true); 

    useEffect(() => {
        const fetchBills = async () => {
            setIsLoading(true); 

            try {
                const response = await fetch('/api/');
                const data = await response.json();


                if (!data.success) {
                    setError(data.error);
                } else {
                    setBills(data.bills);
                }
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBills();
    }, []);

    return { bills, isLoading, error  };
}