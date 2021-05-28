import { message } from 'ant-design-vue';
import { ref } from 'vue';

interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  // eslint-disable-next-line
  response?: any;
  url?: string;
  type?: string;
  size: number;
  // eslint-disable-next-line
  originFileObj: any;
}

interface FileInfo {
  file: FileItem;
  fileList: FileItem[];
}




export const fileList = ref([]);
export const loading = ref<boolean>(false);
export const imageUrl = ref<string>('');

export const handleChange = (info: FileInfo):void => {
  if (info.file.status === 'uploading') {
	loading.value = true;
	return;
  }
  if (info.file.status === 'done') {

	imageUrl.value = String(info?.file?.response?.data.url);
	loading.value = false;
  }
  if (info.file.status === 'error') {
	loading.value = false;
	message.error('upload error');
  }
};

export const beforeUpload = (file: FileItem): boolean => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
	message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
	message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

