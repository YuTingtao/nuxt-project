export const state = ()=> ({
    token: '',
    userInfo: {}
})

export const mutations = {
    LOGIN(state, data) {
        state.token = data.token;
        state.userInfo = data.userInfo;
    },
    LOGOUT(state) {
        state.token = '';
        state.userInfo = {};
        state.menuList = [];
    }
}
