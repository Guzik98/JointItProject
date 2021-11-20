import axios from 'axios';

type  GeoType = {
    longitude: string
    latitude: string
};

const getLocation = async (address: string): Promise<GeoType> => {
    let geocode;
    const apiKey = '08082df1f65d43d5a6c8ed5af197306b';
    await axios.get(`https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(address)}&limit=5&apiKey=${apiKey}`)
        .then((response) => {
            geocode = {
                longitude: response.data.features[0].geometry.coordinates[0],
                latitude: response.data.features[0].geometry.coordinates[1]
            };
        })
        .catch((error) => {
            console.log(error);
        });
    if (geocode) {
        console.log(geocode);
        return geocode;
    }
    throw new Error('couldnt not fetch geo location');
};

export default getLocation;