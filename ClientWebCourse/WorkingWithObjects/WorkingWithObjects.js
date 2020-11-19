(function () {
    var AIS = AIS || {};

    AIS.countries = [AIS.Kanada = {
        name: "Kanada",
        cities: [AIS.Ottawa = {
            name: "Ottawa",
            population: 934243
        },
        AIS.Toronto = {
            name: "Toronto",
            population: 2731571
        },
        AIS.Vancouver = {
            name: "Vancouver",
            population: 2463431
        }]
    }, AIS.USA = {
        name: "USA",
        cities: [AIS.Washington = {
            name: "Washington",
            population: 601723
        }, AIS.Chicago = {
            name: "Chicago",
            population: 2693976
        },
        AIS.Houston = {
            name: "Houston",
            population: 7066141
        }, AIS.NewYork = {
            name: "New York",
            population: 8405837
        }]
    }, AIS.Mexico = {
        name: "Mexico",
        cities: [AIS.MexicoCity = {
            name: "Mexico",
            population: 8918653
        }, AIS.Monterrey = {
            name: "Monterey",
            population: 4689601
        }]
    }];

    // 1. Вывод страны/стран с максимальным количеством городов
    console.log(getCountriesWithMaxCountCities(AIS.countries));

    AIS.CountriesInformation = {};

    // 2. Создание объекта с информацией о каждой стране
    AIS.countries.forEach(function (country) {
        AIS.CountriesInformation[country.name] = getCountryPopulation(country.cities);
    });

    console.log(AIS.CountriesInformation);

    function getCountriesWithMaxCountCities(country) {
        AIS.maxCountCities = 0;

        country.forEach(function (e) {
            if (e.cities.length > AIS.maxCountCities) {
                AIS.maxCountCities = e.cities.length;
            }
        })

        return country.filter(function (e) {
            return e.cities.length === AIS.maxCountCities;
        })
    }

    function getCountryPopulation(cities) {

        return cities.reduce(function (countryPopulation, e) {
            return countryPopulation + e.population;
        }, 0)
    };
})();