import { Beer } from "@/types/beer";
import BeerCard from "../components/BeerCard";
import BeerGrid from "../components/BeerGrid";

export type BeerGridProps = {
  beers: Beer[];
};

const BeerGridTemplate = ({ beers }: BeerGridProps) => {
  return (
    <BeerGrid>
      {beers.map((beer) => (
        <BeerCard key={beer.id} beer={beer} />
      ))}
    </BeerGrid>
  );
};

export default BeerGridTemplate;
