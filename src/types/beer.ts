// Generated by https://quicktype.io

export interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number | null;
  target_fg: number;
  target_og: number;
  ebc: number | null;
  srm: number | null;
  ph: number | null;
  attenuation_level: number;
  volume: Volume;
  boil_volume: BoilVolume;
  method: Method;
  ingredients: Ingredients;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}

export interface Volume {
  value: number;
  unit: "litres";
}

export interface BoilVolume {
  value: number;
  unit: Unit;
}

export enum Unit {
  Celsius = "celsius",
  Grams = "grams",
  Kilograms = "kilograms",
  Litres = "litres",
}

export interface Ingredients {
  malt: Malt[];
  hops: Hop[];
  yeast: string;
}

export interface Hop {
  name: string;
  amount: BoilVolume;
  add: Add;
  attribute: "aroma" | "bitter" | "flavour" | "Flavour";
}

export enum Add {
  DryHop = "dry hop",
  End = "end",
  Middle = "middle",
  Start = "start",
}

export interface Malt {
  name: string;
  amount: BoilVolume;
}

export interface Method {
  mash_temp: MashTemp[];
  fermentation: Fermentation;
  twist: null | string;
}

export interface Fermentation {
  temp: BoilVolume;
}

export interface MashTemp {
  temp: BoilVolume;
  duration: number | null;
}

export interface GenericIngredient {
  name: string;
  amount: BoilVolume;
  add?: Add;
  attribute?: "aroma" | "bitter" | "flavour" | "Flavour";
}
