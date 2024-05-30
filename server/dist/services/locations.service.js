import axios from "axios";
const amadeusTOKEN = "bfnwDFWe9Mf4i3vnkXPXk2GG4fRj";
const countriesTOKEN = "884|oAmLCk0nENRVkaWHi4XlQ0y7joyW0BHhSZW28vh0";
const getAllCountries = async (continent, page) => {
    const url = `https://restfulcountries.com/api/v1/countries?continent=${continent}&per_page=15&page=${page}`;
    try {
        const response = await axios.get(url, {
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + countriesTOKEN,
            },
        });
        if (!response.data.data) {
            throw new Error("failed to get countries");
        }
        const countriesArray = response.data.data.map((country) => {
            return {
                name: country.name,
                iso2: country.iso2,
                flag: country.href.flag,
            };
        });
        return countriesArray;
    }
    catch (err) {
        throw new Error(err);
    }
};
const getAllStates = async (country) => {
    const url = "https://countriesnow.space/api/v0.1/countries/states";
    try {
        const response = await axios.post(url, { country }, {
            headers: {
                "Content-Type": "application/json",
            },
            maxBodyLength: Infinity,
        });
        return response.data.data.states.map((state) => {
            return state.name;
        });
    }
    catch (err) {
        throw new Error(err);
    }
};
export default {
    getAllCountries,
    getAllStates,
};
//# sourceMappingURL=locations.service.js.map