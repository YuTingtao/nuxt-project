// auth中间件
export default function({ store, redirect }) {
    if (!store.state.token) {
        return redirect('/login');
    }
}
