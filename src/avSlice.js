import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
        {
        img: "https://pixabay.com/get/g4f1752948009a60ca70fe799eb7f6fa31c6ada6e69099c5bb7c6c83eed9a09430b559ef24377036b26ef601c5feab4ba1721f7ed32703477eef0b3151ebce2e754639e59cc74097087dea1c789d7d0b5_640.jpg",
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: "https://pixabay.com/get/gbe6f0aea81c2f9f288ef9819c362d1db900d676edf806706e99b63d73aa8eaa25337a1a8c4dfbeee43ac080be9cb614fb57dee2080c0f9c62fa47ee68cdccc9bcafd5eb3fc377fb31a573866e6078bec_640.jpg",
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: "https://pixabay.com/get/g0f6faf9a98fa61b8594404f5cc89747b3c26c2300604cd6edf101be02ca9b209c1cd8c36f5c3c630b222cac6cd9b77f22b7d03aab98c828c73afad8f6971a94931e96653dd94e9484bcf5f6f08c1dc13_640.jpg",
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: "https://pixabay.com/get/gbb1c3911b93763e5b388cb2a989408683622a2d87a13fa07f550c11ad02ac5d6233fd2e7e4d6774164513e0c7e57a0dd9ada0ac493d99133b470e257b74204f9130516ca71532821fedd00808744dccc_640.png",
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },

    {
        img: "https://pixabay.com/get/gc15ecc220802e8046dec842cb35d9d978b9b496cc8825c67ebf2030d703af98594b757b0753037fe7b3e68197e82983dc20274d9c2623fc1d10206813840c9c55724caa95d86c7fbf4ee0db06e41d7fd_640.jpg",
        name: "Signage",
        cost: 80,
        quantity: 0,
    },

  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item) {
            item.quantity++;
        }
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item && item.quantity > 0) {
            item.quantity--;
        }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;