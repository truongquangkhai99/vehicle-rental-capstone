import { createSlice } from '@reduxjs/toolkit';
const vehicle = {
    id: 0,
    deliveryEnable: false,
    deliveryFee: 5000,
    deliveryRadius: 5,
    deliveryRadiusFree: 5,
    description: "",
    discountEnable: false,
    fuelConsumption: 0,
    fuelType: "Xăng",
    images: [],
    licensePlates: "",
    limitEnable: false,
    limitDistance: 100,
    location: null,
    mainImg: "",
    model: { id: 0 },
    originPrice: 0,
    outLimitFee: 1000,
    yom: "2017",
}
const bike = {
    bikeType: "Xe số",
}
const car = {
    carType: 1,
    transmission: "Số tự động",
    gps: false,
    reverseCamera: false,
    bluetooth: false,
    usb: false,
    driver: false,
}
const registerSlice = createSlice({
    name: 'register',
    initialState: { status: 'idle', data: {}, type: "0", error: [], images: [] },
    reducers: {
        changeType: (state, action) => {
            const type = action.payload;
            if (type === "bike") {
                state.data = { ...vehicle, ...bike };
            } else if (type === "car") {
                state.data = { ...vehicle, ...car };
            } else if (type === "withDriver") {
                state.data = { ...vehicle, ...car };
                state.data.driver = true;
            }
            state.type = type;
        },
        validate: (state, action) => {
            state.error = action.payload;
        },
        validateOk: (state) => {
            state.error = [];
        },
        changeLicensePlates: (state, action) => {
            state.data.licensePlates = action.payload;
            if (action.payload !== "") {
                state.error = state.error.filter((item) => { return item !== "licensePlates" });
            }
        },
        changeModel: (state, action) => {
            state.data.model = action.payload;
            if (action.payload.id !== 0) {
                state.data.originPrice = action.payload.suggestPrice;
                state.error = state.error.filter((item) => { return item !== "model" });
            }
        },
        changeFuelConsumption: (state, action) => {
            state.data.fuelConsumption = action.payload;
            if (action.payload !== 0) {
                state.error = state.error.filter((item) => { return item !== "fuelConsumption" });
            }
        },
        changeLocation: (state, action) => {
            state.data.location = action.payload;
            if (action.payload !== null) {
                state.error = state.error.filter((item) => { return item !== "fuelConsumption" });
            }
        },
        changeData: (state, action) => {
            const name = action.payload.name;
            const data = action.payload.data;
            state.data.[name] = data;
        },
        addImage: (state, action) => {
            state.images.push(action.payload);
        },
        removeImage: (state, action) => {
            state.images.splice(action.payload,1);
        },
        setMainImg: (state, action) => {
            state.images.forEach((item,index) => {
                if(item.mainImg){
                    item.mainImg=false;
                }
                if(index===action.payload){
                    item.mainImg=true;
                }
            });
        },

    },
})
const { reducer, actions } = registerSlice;
export const {changeLocation,setMainImg,removeImage,addImage, changeFuelConsumption, changeData, changeType, validate, validateOk, changeLicensePlates, changeModel } = actions;
export default reducer;