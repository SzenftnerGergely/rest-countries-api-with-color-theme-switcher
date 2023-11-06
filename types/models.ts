export type CountryProps = {
  country: {
    flags: {
      svg: string;
    };
    name: {
      common: string;
    };
    population: number;
    region: string;
    capital: string;
  };
};

export type OptionProps = {
  id: number;
  name: string;
  title: string;
};

export type CustomFilterProps = {
  title: string;
  options: OptionProps[];
};

export type FilterProps = {
  region: string;
};

export type HomeProps = {
  searchParams: FilterProps;
};
