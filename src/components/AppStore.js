import Vuex from 'vuex'


const state = {
    menu: true,
      setting: false,
      credit: false,
      difficulty: [
        { easy: false },
        { medium: true },
        { hard: false },
        { brutal: false },
      ],
      moderne: true,
      retro: false,
      game: false,
}

const mutations = {
    startGame: () => {
        setting = false
        credit = false
        menu = false
        game = true
    },
    chargeCredit: () => {
        setting = false
        menu = false
        credit = true
    },
    chargeSettingd: () => {
        credit = false
        menu = false
        setting = true
    },
    changeTheme: (value) => {
        if(value == "moderne") {
            retro = false
            moderne = true
        }
        else {
            moderne = false
            retro = true
        }
    },
}

const getters = {
    getPannel: () => {

        return false
    },
    getDifficulty: () => {

        return false
    },
    getTheme: () => {
        if(moderne){
            return moderne
        }
        else {
            return retro
        }
    }
}


export default new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: {},
})