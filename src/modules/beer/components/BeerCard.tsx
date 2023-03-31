import { capitalizeFirstLetter } from "@/lib/util";
import { Beer, GenericIngredient, Unit } from "@/types/beer";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

export type BeerCardProps = {
  beer: Beer;
};

const BeerCard = ({ beer }: BeerCardProps) => {
  // get the most prominent 3 ingredients
  const ingredients = useMemo(() => {
    const ingredientToAmountInGrams = [
      ...beer.ingredients.hops,
      ...beer.ingredients.malt,
    ].reduce((acc, curr) => {
      let newValue: number = curr.amount.value;
      if (curr.amount.unit === "kilograms") {
        newValue = curr.amount.value * 1000;
      }

      acc.push({
        ...curr,
        amount: {
          unit: Unit.Grams,
          value: newValue,
        },
      });

      return acc;
    }, [] as GenericIngredient[]);

    return ingredientToAmountInGrams
      .sort((a, b) => b.amount.value - a.amount.value)
      .slice(0, 3)
      .map((ingredient) => ingredient.name)
      .join(", ");
  }, [beer.ingredients]);

  return (
    <li
      key={beer.id}
      className="group relative flex border border-zinc-200/60 space-x-2"
    >
      <div className="relative aspect-h-1 aspect-w-1 overflow-hidden lg:aspect-none group-hover:opacity-75 xl:h-48 bg-orange-50/40 flex items-center px-2 border-r">
        <Image
          className="object-center h-48 xl:h-48 w-48 object-contain py-4"
          width={256}
          height={256}
          loading="eager"
          src={beer.image_url}
          alt={beer.name}
        />
      </div>
      <div className="mt-4 flex justify-between w-full pr-2">
        <div className="w-full">
          <Link
            passHref
            href={`/beer/${beer.id}`}
            className="w-full flex flex-col items-start text-sm tracking-tight"
          >
            <span aria-hidden="true" className="absolute inset-0" />
            <div className="inline-block">
              <p className="text-slate-900 text-base font-bold line-clamp-1 tracking-wide">
                {beer.name}
              </p>
            </div>
            <div className="flex space-x-4 py-2 tracking-tighter">
              <span className="text-gray-600">
                ABV <br />
                <span className="text-gray-900 font-semibold">
                  {beer.abv}&#37;
                </span>
              </span>
              <span className="text-gray-700">
                Size <br />
                <span className="text-gray-900 font-semibold">
                  {beer.volume.value} {capitalizeFirstLetter(beer.volume.unit)}
                </span>
              </span>
            </div>
            <span className=" text-gray-700 py-1 line-clamp-2 tracking-tighter">
              {beer.tagline}
            </span>
            <p className="mt-1 text-xs text-gray-400 line-clamp-2 text-ellipsis tracking-tightest">
              {ingredients}
            </p>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default BeerCard;
