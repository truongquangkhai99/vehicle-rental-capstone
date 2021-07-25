// @ts-nocheck
import React, { useEffect, useState } from 'react';
import vehicleApi from 'api/vehicleApi';
/**
 * @param {string} type
 */
function fetchListVehicle(type) {
    const [list, setlist] = useState([])
    let api;
    if (type === "XTL") {
        api = vehicleApi.getCarSelfDriver();
    } else if (type === "XCTX") {
        api = vehicleApi.getCarDriver
    } else {
        api = vehicleApi.getBikes();
    }
    useEffect(() => {
        if (api) {
            api.then((data) => {
                if (data) {
                    let arrLatLng = [];
                    for (let i = 0; i < data.lenght; i++) {
                        let lat = data[i].location.latitude;
                        let lng = data[i].locaiton.longitude;
                        let item = {
                            lat: lat,
                            lng: lng
                        }
                        arrLatLng.push(item)
                    }
                    setlist(arrLatLng)
                }
            })
        }
    }, [list])
    return list
}

function fetchDistance(origins, destinations) {
    return fetch("https://maps.distancematrixapi.com/maps/api/distancematrix/json?units=metric&origins=" + origins + "&destinations=" + destinations + "&key=AlphaDMABoRDveUyiKFP2BrugGtO4JcQYerNrioV")
        .then((res) => res.json())
        .then((result) => {
            return result;
        });
}

export default function UseDistance(origins, type) {
    const [list, setlist] = useState([]);
    useEffect(() => {
        if (origins.trim() !== "") {
            let isfresh = true;
            fetchDistance(origins, fetchListVehicle(type)).then((res) => {
                if (isfresh) {
                    let arr = res.rows
                    let result = []
                    for (let i = 0; i < arr.length; i++) {
                        let listElement = arr[i]
                        for (let j = 0; j < listElement.length; j++) {
                            let item = {
                                distance: listElement[j].distance.text,
                                duration: listElement[j].duration.text
                            }
                            result.push(item)
                        }
                    }
                    setlist(result)
                }
            })
            return () => (isfresh = false)
        }
    }, [list, origins, type])
    return list
}