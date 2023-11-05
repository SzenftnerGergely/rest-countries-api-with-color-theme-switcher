

export async function fetchCountries() {
  
    const response = await fetch(
      `https://restcountries.com/v3.1/independent?status=true`,
    );
  
    const result = await response.json();
  
    return result;
  }