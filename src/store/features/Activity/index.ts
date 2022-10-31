
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@store'
import type { Activity } from './types'

interface State {
	list: Array<Activity>
}

const initialState: State = {
	list: []
}

export const slice = createSlice({
  name: 'activity',
  initialState,
	reducers: {
		setList: (state, action: PayloadAction<any>) => {
			state.list = action.payload.data
		},
	},
	extraReducers: ()
})

export const { setList } = slice.actions
export const getList = (state: RootState) => state.activity.list


export default slice.reducer