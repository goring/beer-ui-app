import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";

export interface UsePaginationProps {
  pageCount: number;
}

function ensurePageIsNumber(page: any): number {
  if (Array.isArray(page)) {
    page = page[0];
  }

  if (typeof page === "string") {
    page = parseInt(page);
  }

  return Math.max(1, Number.isNaN(page) ? 1 : page) || 1;
}

export default function usePagination({ pageCount }: UsePaginationProps) {
  const router = useRouter();

  const currentPage = ensurePageIsNumber(router.query.page);
  const nextPageIsDisabled = currentPage >= pageCount;
  const previousPageIsDisabled = currentPage <= 1;

  const pagesToRender = useMemo(() => {
    const pagesToRender = [];

    // calculate which pages to render based on current page
    if (currentPage <= 3) {
      // if current page is less than or equal to 3
      // render the first 5 pages
      for (let i = 1; i <= 5; i++) {
        pagesToRender.push(i);
      }
    } else if (currentPage >= pageCount - 2) {
      // if current page is greater than or equal to the last 3 pages
      // render the last 5 pages
      for (let i = pageCount - 4; i <= pageCount; i++) {
        pagesToRender.push(i);
      }
    } else {
      // otherwise, render the 5 pages centered around the current page
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        pagesToRender.push(i);
      }
    }

    return pagesToRender;
  }, [currentPage, pageCount]);

  return {
    currentPage,
    pagesToRender,
    nextPageIsDisabled,
    previousPageIsDisabled,
  };
}
