// 防止vuex刷新失效
export default function(ctx) {
    const store = ctx.store;
    if (sessionStorage.vuex) {
        store.replaceState(
            Object.assign({}, store.state, JSON.parse(sessionStorage.vuex))
        );
        sessionStorage.removeItem('vuex');
    }
    window.addEventListener('beforeunload', () => {
        sessionStorage.vuex = JSON.stringify(store.state);
    });
    window.addEventListener('pagehide', () => {
        sessionStorage.vuex = JSON.stringify(store.state);
    });
}
