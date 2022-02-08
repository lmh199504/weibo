
export interface unReadData{
	list_id?: number;
	refresh?: number;
	max_id?: number | string;
	count: number;
	since_id?: number | string;
};

export interface friendData{
	list_id: number;
	refresh?: number;
	count?: number;
	since_id?: number;
	max_id?: number | string | undefined;
	fid: number;
};


export interface groudData{
	list_id: number | string;
	refresh?: number;
	count?: number;
	fast_refresh?: number;
	max_id?: number | string | undefined;
}

export interface userInfoData{
	uid: number | string;
}
