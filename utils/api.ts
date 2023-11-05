export async function fetchCountries(filters: any) {
  const {region} = filters

  const response = await fetch(
    `https://restcountries.com/v3.1/region/${region}`
  );

  const result = await response.json();

  return result;
}

export const updateSearchParams = (region: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search)

  searchParams.set(region, value)

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`

  return newPathname
}