// @ts-nocheck
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  DistanceMatrixService
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";
import car from '../../assets/images/car.png'
import vehicleApi from 'api/vehicleApi';
const libraries = ["places"];
const mapContainerStyle = {
  width: '550px',
  height: '400px'
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 16.02,
  lng: 108.2,
};
var listMarker = [
  {
    id: 1,
    coords: { lat: 16.047980480350443, lng: 108.2467529749532 },
    icon: './images/car.png',
    title: 'xe 4 chỗ-honda civic',
    rate: 4,
    price: '1000$/h'
  },
  {
    id: 2,
    coords: { lat: 16.03023497778036, lng: 108.2521420636848 },
    icon: './images/car.png',
    title: 'xe 4 chỗ-honda civic',
    rate: 4,
    price: '1000$/h'
  },
  {
    id: 3,
    coords: { lat: 15.986239065321238, lng: 108.26747198623006 },
    icon: './images/car.png',
    title: 'xe 4 chỗ-honda civic',
    rate: 4,
    price: '1000$/h'
  },
  {
    id: 4,
    coords: { lat: 15.983070809344706, lng: 108.23248705444202 },
    icon: './images/car.png',
    title: 'xe 4 chỗ-honda civic',
    rate: 4,
    price: '1000$/h'
  },
  {
    id: 5,
    coords: { lat: 16.002079592182234, lng: 108.22069865351344 },
    icon: './images/car.png',
    title: 'xe 4 chỗ-honda civic',
    rate: 4,
    price: '1000$/h'
  },
  {
    id: 6,
    coords: { lat: 15.984654943606115, lng: 108.19281211368238 },
    icon: './images/car.png',
    title: 'xe 4 chỗ-honda civic',
    rate: 4,
    price: '1000$/h'
  },
  {
    id: 7,
    coords: { lat: 16.023766891897697, lng: 108.21372701848777 },
    icon: './images/car.png',
    title: 'xe 4 chỗ-honda civic',
    rate: 4,
    price: '1000$/h'
  },
  {
    id: 8,
    coords: { lat: 16.04167541312327, lng: 108.21879729839952 },
    icon: './images/car.png',
    title: 'xe 4 chỗ-honda civic',
    rate: 4,
    price: '1000$/h'
  },
  {
    id: 9,
    coords: { lat: 16.034122355591787, lng: 108.22120568138493 },
    icon: './images/car.png',
    title: 'xe 4 chỗ-honda civic',
    rate: 4,
    price: '1000$/h'
  },
  {
    id: 10,
    coords: { lat: 16.064211060441252, lng: 108.18609399256782 },
    icon: './images/car.png',
    title: 'xe 4 chỗ-honda civic',
    rate: 4,
    price: '1000$/h'
  },
];
const destination = [];
for (const i of listMarker) {
  destination.push(i.coords)
}
export default function GGmap() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCpxahQv_3J_M7PdT0JgRg3J1RyXXG4GIw',
    libraries,
  });

  const [getDataCarDriver, setDataCarDriver] = useState({ list: [] });
  useEffect(() => {
    vehicleApi.getCarDriver().then((res) => {
      setDataCarDriver({ list: res.data });
    });
  }, []);
  console.log(getDataCarDriver);
  const [selected, setSelected] = React.useState(null);
  const [KC, setKC] = React.useState([]);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  var distance = require('google-distance-matrix');

  var origins = ['San Francisco CA', '40.7421,-73.9914'];
  var destinations = ['New York NY', 'Montreal', '41.8337329,-87.7321554', 'Honolulu'];

  distance.key('AIzaSyCpxahQv_3J_M7PdT0JgRg3J1RyXXG4GIw');
  distance.units('imperial');
  distance.matrix(origins, destinations, function (err, distances) {
    if (err) {
      return console.log(err);
    }
    if (!distances) {
      return console.log('no distances');
    }
    if (distances.status == 'OK') {
      for (var i = 0; i < origins.length; i++) {
        for (var j = 0; j < destinations.length; j++) {
          var origin = distances.origin_addresses[i];
          var destination = distances.destination_addresses[j];
          if (distances.rows[0].elements[j].status == 'OK') {
            var distance = distances.rows[i].elements[j].distance.text;
            console.log('Distance from ' + origin + ' to ' + destination + ' is ' + distance);
          } else {
            console.log(destination + ' is not reachable by land from ' + origin);
          }
        }
      }
    }
  });
  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
      >
        {
          listMarker.map(marker =>
            <div>
              <Marker
                key={`${marker.lat}-${marker.lng}`}
                position={marker.coords}
                onClick={() => {
                  setSelected(marker);
                }}
                icon={car}
              />
              {selected ? (
                <InfoWindow
                  position={selected.coords}
                  onCloseClick={() => {
                    setSelected(null);
                  }}
                >
                  <div>
                    <h3>{selected.title}</h3>
                    <h5>{selected.rate}</h5>
                    <h5>{selected.price}</h5>
                  </div>
                </InfoWindow>
              ) : null}

            </div>
          )
        }

      </GoogleMap>
      <DistanceMatrixService
        options={{
          destinations: destination,
          origins: [{ lng: 108.21, lat: 16.023 }],
          travelMode: "DRIVING",
        }}
        callback={(response, status) => {
          if (response != null) {
            setKC(response.rows[0].elements)
            // return response.rows[0].elements
          }
          console.log(response)
        }

        }
      />
      {
        KC.map(m => {
          return (<h4 className="tesst">
            {m.distance.text}
          </h4>)
        }
        )
      }
    </div>
  );
}
