import type { UiState } from "@zero/redux/types/uiSlice";
import { PayloadAction } from "@reduxjs/toolkit";

const setCounter = (previousState: UiState, action: PayloadAction<number>): UiState => ({
	...previousState,
	counter: action.payload,
});

export default setCounter;
