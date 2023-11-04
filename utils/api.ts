

export async function fetchCountries() {
  
    const response = await fetch(
      `https://restcountries.com/v3.1/name/deutschland`,
    );
  
    const result = await response.json();
  
    return result;
  }