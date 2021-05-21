

import {
	ValidateErrorEntity
} from 'ant-design-vue/es/form/interface';
import {
	reactive,
	UnwrapRef,
	Ref,
	ref
} from 'vue';
interface FormState {
	user: string;
	password: string;
	repassword: string;
}


export const formState: UnwrapRef < FormState > = reactive({
	user: '',
	password: '',
	repassword: ''
});
export const handleFinish = (values: FormState):void => {
	console.log(values, formState);
	showSlide.value = true
};
export const handleFinishFailed = (errors: ValidateErrorEntity < FormState > ):void => {
	console.log(errors);
};
export const isSlideSuccess: Ref < boolean > = ref(false)
export const showSlide: Ref < boolean > = ref(false)
