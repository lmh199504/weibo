import { ref } from 'vue'
import { message } from 'ant-design-vue'
export interface FileItem {
	uid: string;
	name?: string;
	status?: string;
	response?: string;
	percent?: number;
	url?: string;
	preview?: string;
	// eslint-disable-next-line
	originFileObj?: any;
}

interface FileInfo {
	file: FileItem;
	fileList: FileItem[];
}

export const fileList = ref<FileItem[]>([])

export const handleChange = ({ fileList: newFileList, file }: FileInfo): void => {
	if(file.status == 'error') {
		message.error("图片上传失败")
	}
	fileList.value = newFileList.filter((item: FileItem) => item.status != 'error')
};


export const previewVisible = ref<boolean>(false);
export const previewImage = ref<string | undefined>('');

export const handlePreview = async (file: FileItem): Promise<void> => {
	if (!file.url && !file.preview) {
		file.preview = (await getBase64(file.originFileObj)) as string;
	}
	previewImage.value = file.url || file.preview;
	previewVisible.value = true;
};

export const handleCancel = (): void => {
	previewVisible.value = false;
}

export const beforeUploadImg = (file: FileItem): boolean => {
	console.log(file)
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