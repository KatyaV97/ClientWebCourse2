var AIS = AIS || {};

AIS.countries = [AIS.Kanada = {}, AIS.USA = {}, AIS.Mexico = {}];

AIS.Kanada.name = "Kanada";
AIS.Kanada.cities = [AIS.Ottawa = {}, AIS.Toronto = {}, AIS.Vancouver = {}];

AIS.Ottawa.name = "Ottawa";
AIS.Ottawa.population = 934243;

AIS.Toronto.name = "Toronto";
AIS.Toronto.population = 2731571;

AIS.Vancouver.name = "Vancouver";
AIS.Vancouver.population = 2463431;

AIS.USA.name = "USA";
AIS.USA.cities = [AIS.Washington = {}, AIS.Chicago = {}, AIS.Houston = {}, AIS.NewYork = {}];

AIS.Washington.name = "Washington";
AIS.Washington.population = 601723;

AIS.Chicago.name = "Chicago";
AIS.Chicago.population = 2693976;

AIS.Houston.name = "Houston";
AIS.Houston.population = 7066141;

AIS.NewYork.name = "New York";
AIS.NewYork.population = 8405837;

AIS.Mexico.name = "Mexico";
AIS.Mexico.cities = [AIS.MexicoCity = {}, AIS.Monterrey = {}];

AIS.MexicoCity.name = "Mexico";
AIS.MexicoCity.population = 8918653;

AIS.Monterrey.name = "Monterey";
AIS.Monterrey.population = 4689601;

//1. Вывод страны/стран с максимальным количеством городов
console.log(AIS.countries.sort(function (country1, country2) {
    return country2.cities.length - country1.cities.length;
}).filter(function (country) {
    return country.cities.length === AIS.countries[0].cities.length;
}));

AIS.CountriesInformation = {};

//2. Создание объекта с информацией о каждой стране
AIS.countries.forEach(function (country) {
    AIS.CountriesInformation[country.name] = getCountryPopulation(country);
});

console.log(AIS.CountriesInformation);

function getCountryPopulation(country) {
    var population = 0;

    country.cities.forEach(function (city) {
        population += city.population;
    });

    return population;
};