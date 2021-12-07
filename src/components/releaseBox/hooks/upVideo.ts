import { ref } from 'vue'
import { message } from 'ant-design-vue'
interface FileItem {
	uid: string;
	name?: string;
	status?: string;
	response?: string;
	percent?: number;
	url?: string;
	preview?: string;
	// eslint-disable-next-line
	originFileObj?: any;
	size?: number
}

interface FileInfo {
	file: FileItem;
	fileList: FileItem[];
}

export const videoList = ref<FileItem[]>([])

export const videoChange = ({ fileList: newFileList, file }: FileInfo): void => {
	if(file.status == 'error') {
		message.error("视频上传失败")
	}
	videoList.value = newFileList;
};


export const preVideoModal = ref<boolean>(false);
export const previewVideo = ref<string | undefined>('');

export const handPrevVideo = async (file: FileItem): Promise<void> => {
	if (!file.url && !file.preview) {
		file.preview = (await getBase64(file.originFileObj)) as string;
	}
	previewVideo.value = file.url || file.preview;
	preVideoModal.value = true;
};

export const handCanVideo = (): void => {
	preVideoModal.value = false;
}

export const beforeUploadVideo = (file: FileItem): boolean | Promise<void> => {
	const maxsize = 1024 * 1024 * 10
	console.log(file)
	if(file.size && file.size > maxsize) {
		message.error("视频不能大于100M")
		return false
	}
	return true
}


function getBase64(file: File) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});
}