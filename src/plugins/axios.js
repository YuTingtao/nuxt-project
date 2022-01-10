// nuxt axios封装
import { Message } from 'element-ui'

const toast = function(msg) {
    Message.closeAll();
    Message.error(msg, {
        duration: 2000
    });
}

export default function({ $axios, store, redirect }) {
    // 请求拦截
    $axios.onRequest(config => {
        if (store.state.token) {
            config.headers['token'] = store.state.token;
        }
        return config;
    });
    // 响应拦截
    $axios.onResponse(res => {
        if (res.status === 200) {
            if (process.client && (res.data instanceof Blob || res.data instanceof ArrayBuffer)) {
                return res;
            }
            return res.data;
        } else {
            return Promise.reject(res);
        }
    });
    // 错误拦截
    $axios.onError(error => {
        if (process.client) {
            if (error.response) {
                switch (parseInt(error.response.status)) {
                    case 401: // 401: 未登录
                        redirect('/login');
                        break;
                    case 403: // 403 token过期
                        toast('登录过期，请重新登录');
                        store.commit('LOGOUT');
                        redirect('/login');
                        break;
                    case 404: // 404请求不存在
                        toast('网络请求不存在');
                        break;
                    default: // 其他错误
                        toast('网络请求错误');
                }
            } else {
                if (!navigator.onLine) {
                    toast('网络已断开，请检查网络');
                } else {
                    // console.log(error);
                    return Promise.reject(error);
                }
            }
        }
    });
}
