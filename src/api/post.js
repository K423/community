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

//发布
export function post(content) {
    return request({
        url: '/post/create',
        method: 'post',
        data: content
    })
}

// 浏览
export function getTopic(id) {
    return request({
        url: '/post',
        method: 'get',
        params: {
            id: id
        }
    })
}