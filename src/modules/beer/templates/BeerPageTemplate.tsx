import { Beer } from "@/types/beer";
import { useMemo } from "react";
import Image from "next/image";
import BeerDetails, { BeerDetailsProps } from "../components/BeerDetails";
import { capitalizeFirstLetter } from "../../../lib/util";

export type BeerPageProps = {
  beer: Beer;
};

const BeerPageTemplate = ({ beer }: BeerPageProps) => {
  const details: BeerDetailsProps["details"] = useMemo(() => {
    const details: BeerDetailsProps["details"] = [];

    details.push({
      name: "Details",
      items: [
        `First Brewed: ${beer.first_brewed}`,
        `ABV: ${beer.abv}%`,
        `Volume: ${beer.volume.value} ${capitalizeFirstLetter(
          beer.volume.unit
        )}`,
        `IBU: ${beer.ibu}`,
      ],
    });

    details.push({
      name: "Ingredients",
      items: [
        `Malt: ${beer.ingredients.malt.map((malt) => malt.name).join(", ")}`,
        `Hops: ${beer.ingredients.hops.map((hop) => hop.name).join(", ")}`,
      ],
    });

    details.push({
      name: "Food Pairing",
      items: beer.food_pairing,
    });

    details.push({
      name: "Brewers Tips",
      items: [beer.brewers_tips],
    });

    return details;
  }, [beer]);

  return (
    <div className="bg-white pb-24 ">
      <div className="mx-auto sm:px-0 px-8 lg:grid lg:grid-cols-2 lg:gap-x-8 flex-1 h-full flex flex-col-reverse">
        {/* beer details */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="mt-12">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {beer.name}
            </h1>
          </div>
          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              beer information
            </h2>

            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl"></p>
            </div>

            <div className="mt-4 mb-6 space-y-6">
              <p className="text-base text-gray-500">{beer.description}</p>
            </div>

            <BeerDetails details={details} />
          </section>
        </div>

        {/* beer image */}
        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center  h-full">
          <div className="relative aspect-h-1 aspect-w-1 overflow-hidden lg:aspect-none group-hover:opacity-75 xl:h-[600px] bg-red-50/40 flex items-center justify-center px-2 h-full">
            <Image
              className="object-center h-96 xl:h-96 w-48 object-contain py-4"
              width={256}
              height={256}
              loading="eager"
              src={beer.image_url}
              alt={beer.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerPageTemplate;
