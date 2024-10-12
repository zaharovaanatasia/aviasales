import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer: {
        // Define your reducers here
    },
    // Add any middleware you want to use here, such as thunk or logger
})

export default store;