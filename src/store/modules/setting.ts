import { defineStore } from 'pinia'

const useLayOutSettingStore = defineStore('SettingStore', {
    state: () => {
        return {
            fold: false,// 用户控制展开还是收起
        }
    },
    action: {
    }
})

export default useLayOutSettingStore