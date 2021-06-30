


import { Module } from 'vuex'
import RootStateTypes from '@/store/interface'
import VideoModuleTypes from '@/store/modules/videos/interface'
const userModule: Module<VideoModuleTypes, RootStateTypes> = {
    namespaced: true,
    state: {
        videoId: ''
    },
    mutations: {
        SET_VIDEO_ID: (state, id) => {
            state.videoId = id
        }
    },
    actions: {
        
    }
}

export default userModule