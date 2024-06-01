"use client";
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";

const PaginationWrapper = ({ page }: { page: number }) => {
    const router = useRouter();
    const currentPage = page ? page : 1;

    const onHandlePaginate = (_: React.ChangeEvent<unknown>, newPage: number) => {
        if (newPage === page || newPage < 1) return;
        router.push(`?page=${newPage}`);
    };

    return (
        <Pagination
            count={5}
            color="primary"
            page={currentPage}
            onChange={onHandlePaginate}
        />
    );
};

export default PaginationWrapper;
