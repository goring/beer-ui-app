import { BeerQuery, PaginatedBeerQuery, PaginatedQuery } from "@/types/api";
import { Beer } from "@/types/beer";

function parseQuery(query: PaginatedBeerQuery): string {
  // defaults
  if (!query.page) query.page = 1;
  if (!query.per_page) query.per_page = 15;

  const parsedQuery = new URLSearchParams(
    query as any as Record<string, string> // related issue: https://github.com/microsoft/TypeScript/issues/32951
  );

  return `?${parsedQuery.toString()}`;
}

// Abstract the http client implementation so it allows us to switch if needed
export interface RequestBeersConfig {
  path?: string;
  query: PaginatedBeerQuery;
}

async function requestBeers({
  path = "",
  query,
}: RequestBeersConfig): Promise<Array<Beer>> {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_URL ?? "https://api.punkapi.com/v2/beers";
  const url = new URL(path, baseUrl);
  const parsedQuery = parseQuery(query);

  try {
    const response = await fetch(`${url}${parsedQuery}`);
    return response.json();
  } catch (error) {
    console.error("[requestBeers] ERROR:", error);
    throw new Error(`ERROR: requesting url '${url}'\n${JSON.stringify(error)}`);
  }
}

export async function getBeers(query: PaginatedBeerQuery = {}) {
  const result = await requestBeers({ query });
  return result;
}
