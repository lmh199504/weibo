import { AllStateTypes } from '@/store/interface'
export default {
	mode: (state: AllStateTypes): string => state.settingModule.mode
}