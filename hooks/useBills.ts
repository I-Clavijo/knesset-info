"use client";

import { useEffect, useState } from 'react';

export interface Bill {
    BillID: number;
    KnessetNum: number;
    Name: string;
    SubTypeID: number;
    SubTypeDesc: string;
    PrivateNumber: number;
    CommitteeID: number;
    StatusID: number;
    Number: number;
    PostponementReasonID: number;
    PostponementReasonDesc: string;
    PublicationDate: Date;
    MagazineNumber: number;
    PageNumber: number;
    IsContinuationBill: boolean;
    SummaryLaw: string;
    PublicationSeriesID: number;
    PublicationSeriesDesc: string;
    PublicationSeriesFirstCall: number;
    LastUpdatedDate: Date;
}

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