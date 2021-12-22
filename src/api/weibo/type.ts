
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