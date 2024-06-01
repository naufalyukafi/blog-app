"use client";
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState, useCallback, useEffect, useRef } from 'react';

const SearchWrapper = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState<string>('');
    const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const debouncedSearch = useCallback((query: string) => {
        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
        }
        debounceTimeoutRef.current = setTimeout(() => {
            if (query.trim() === "") {
                router.push('/member')
            } else {
                router.push(`?search=${query}`);
            }
        }, 500); // 500ms debounce time
    }, [router]);

    useEffect(() => {
        debouncedSearch(searchQuery);

        return () => {
            if (debounceTimeoutRef.current) {
                clearTimeout(debounceTimeoutRef.current);
            }
        };
    }, [searchQuery, debouncedSearch]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div style={{ display: 'flex', gap: '8px' }}>
            <TextField
                variant="outlined"
                size="small"
                placeholder="Search by name"
                value={searchQuery}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchWrapper;
