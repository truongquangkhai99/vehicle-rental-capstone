// @ts-nocheck
import React from 'react'
export default function UseAddressSearch(searchTerm) {
    const [address, setaddress] = React.useState([]);

    React.useEffect(() => {
      if (searchTerm.trim() !== "") {
        let isFresh = true;
        fetchCities(searchTerm).then((address) => {
          if (isFresh) setaddress(address);
        });
        return () => (isFresh = false);
      }
    }, [searchTerm]);

    return address;
}
const cache = {};
function fetchCities(value) {
    if (cache[value]) {
      return Promise.resolve(cache[value]);
    }
    return fetch("https://api.locationiq.com/v1/autocomplete.php?key=pk.5a27d5b7fe2c1fcef10a3410df539422&q="+value)
      .then((res) => res.json())
      .then((result) => {
        cache[value] = result;
        return result;
      });
}
