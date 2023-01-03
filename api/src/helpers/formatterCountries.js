const formatterCountries = (data)=>{
    let capital = ""
    if (!data.capital?.length) {
        capital = "Capital no disponible";
      } else if (data.capital.length === 1) {
        capital = data.capital[0];
      } else if (data.capital.length > 1) {
        capital = data.capital.join(", ");
      }

    return {
        id: data.cca3,
        name: data.translations.spa.common,
        flags: data.flags[0],
        continents : data.continents[0],
        capital,
        subregion : data.subregion || "There not avaible",
        area : data.area,
        population: data.population
    }
};

module.exports = formatterCountries;