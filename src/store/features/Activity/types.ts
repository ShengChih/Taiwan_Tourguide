type RequestState = 'pending' | 'fulfilled' | 'rejected'


export interface ListResponse<T> {
	data: T[]
}

type PictureDescriptionKey = `PictureDescription${number}`
type PictureUrlKey = `PictureUrl${number}`
type Picture = {
	[key in PictureDescriptionKey | PictureUrlKey]?: string
}

export interface Activity {
	ActivityID: string
	ActivityName: string
	Address: string
	City: string
	Class1: string
	Class2: string
	Description: string
	EndTime: string
	Location: string
	Organizer: string
	Picture: Picture
	Position: {
		PositionLon: number
		PositionLat: number
		GeoHash: string
	}
	SrcUpdateTime: string
	StartTime: string
	UpdateTime: string
	WebsiteUrl: string
}
