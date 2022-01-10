// auth中间件demo
export default function({ store, redirect }) {
    if (!store.state.token) {
        return redirect('/');
    }
}
