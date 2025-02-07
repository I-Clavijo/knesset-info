"use client";

import { useEffect } from 'react';

export default function useInitiateData() {
    useEffect(() => {
        const populateDatabase = async () => {
            try {
                const response = await fetch('/api/');
                const data = await response.json();
                
                if (!data.success) {
                    console.error('Failed to populate database:', data.error);
                } else {
                    console.log('Database populated successfully');
                }
            } catch (error) {
                console.error('Error populating database:', error);
            }
        };

        populateDatabase();
    }, []); 
}