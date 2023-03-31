import React, { PropsWithChildren } from "react";

const List = ({ children }: PropsWithChildren) => {
  return (
    <ul
      role="list"
      className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
    >
      {children}
    </ul>
  );
};

export const ListItem = ({ children }: PropsWithChildren) => {
  return (
    <li className="inline-flex w-64 flex-col text-center lg:w-auto">
      {children}
    </li>
  );
};

export default List;
