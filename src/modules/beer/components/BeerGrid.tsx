import { PropsWithChildren } from "react";

export type BeerProps = {} & PropsWithChildren;

const BeerGrid = ({ children }: BeerProps) => {
  return (
    <ul className="mt-6 grid grid-cols-1 gap-x-6 lg:gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-6">
      {children}
    </ul>
  );
};

export default BeerGrid;
