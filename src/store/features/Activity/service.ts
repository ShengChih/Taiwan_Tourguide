import TDXApi, { CityInfoGet } from '@api/TDXApi'
import { createApi } from '@reduxjs/toolkit/query/react'
import type { ListResponse, Activity } from './types'

export const activityApi = createApi({
	reducerPath: 'ActivityApi',
	baseQuery: TDXApi.getInstance().getBaseQuery(),
	endpoints: (build) => ({
		listActivities: build.query<ListResponse<Activity>, CityInfoGet>({
			query: (params: CityInfoGet) => ({
				...TDXApi.getInstance().genTourismUrl(params, 'Activity'),
				method: 'get'
			})
		}),
	})
})