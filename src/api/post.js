import request from '@/utils/request'

// 列表
export function getList(pageNo, size, tab) {
    return request(({
        url: '/post/list',
        method: 'post',
        params: {
            pageNo: pageNo,
            size: size,
            tab: tab
        }
    }))
}