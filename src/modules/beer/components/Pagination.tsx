import React, { PropsWithChildren, useMemo } from "react";
import usePagination from "../hooks/usePagination";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import { classNames } from "@/lib/util";
import Link from "next/link";
import { PAGE_COUNT } from "@/lib/constants";

const PaginationLink: React.FC<
  PropsWithChildren<{
    href: string;
    disabled?: boolean;
  }>
> = ({ children, href, disabled }) => {
  const className =
    "w-12 justify-center relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-orange-100/40 focus:z-20 focus:outline-offset-0";
  return (
    <>
      {disabled ? (
        <button
          disabled={disabled}
          className={classNames("disabled:cursor-not-allowed ", className)}
        >
          {children}
        </button>
      ) : (
        <Link href={href} className={className}>
          {children}
        </Link>
      )}
    </>
  );
};
const Pagination = () => {
  const {
    currentPage,
    nextPageIsDisabled,
    previousPageIsDisabled,
    pagesToRender,
  } = usePagination({
    pageCount: PAGE_COUNT,
  });

  return (
    <div className="flex items-center justify-between g-white pb-3 pt-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <div className="flex justify-center items-center w-full">
          <PaginationLink
            href={`/?page=${currentPage - 1}`}
            disabled={previousPageIsDisabled}
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </PaginationLink>
          {pagesToRender.map((page) => {
            return (
              <Link
                key={`page-${page}`}
                className={classNames(
                  currentPage === page
                    ? " z-50 bg-orange-100/40 text-slate-800 hover:bg-orange-100/40"
                    : "text-slate-700 hover:bg-gray-50",
                  " relative inline-flex items-center px-1 sm:px-4 py-2 text-sm font-semibold ring-1 hover:bg-orange-100/80 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0"
                )}
                href={`/?page=${page}`}
              >
                <button className="w-8">{page}</button>
              </Link>
            );
          })}
          <PaginationLink
            href={`/?page=${currentPage + 1}`}
            disabled={nextPageIsDisabled}
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </PaginationLink>
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
        <div>
          <nav
            className="isolate inline-flex -space-x-px shadow-sm"
            aria-label="Pagination"
          >
            <PaginationLink
              href={`/?page=${currentPage - 1}`}
              disabled={previousPageIsDisabled}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </PaginationLink>
            {pagesToRender.map((page) => {
              return (
                <Link
                  key={`page-${page}`}
                  className={classNames(
                    currentPage === page
                      ? " z-50 bg-orange-100/40 text-slate-800 hover:bg-orange-100/40"
                      : "text-slate-700 hover:bg-gray-50",
                    " relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 hover:bg-orange-100/80 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0"
                  )}
                  href={`/?page=${page}`}
                >
                  <button className="w-8">{page}</button>
                </Link>
              );
            })}
            <PaginationLink
              disabled={nextPageIsDisabled}
              href={`/?page=${currentPage + 1}`}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </PaginationLink>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Pagination;
