import request from '@/utils/request'

export function getBoard(){
    return request({
        url : '/board/show',
        method : 'get'
    })
}