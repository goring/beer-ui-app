export type PaginatedQuery = {
  page: number;
  per_page: number;
};

export type BeerQuery = {
  abv_gt: number;
  abv_lt: number;
  ibu_gt: number;
  ibu_lt: number;
  ebc_gt: number;
  ebc_lt: number;
  beer_name: string;
  yeast: string;
  brewed_before: Date;
  brewed_after: Date;
  hops: string;
  malt: string;
  food: string;
  ids: string;
};

export type PaginatedBeerQuery = Partial<PaginatedQuery & BeerQuery>;
