

export default interface SettingsModuleTypes {
    lang: string;
    loading: boolean;
	mode: string;
}

 export enum Mode = { DAYLY = 'daily', DARK= 'dark' }