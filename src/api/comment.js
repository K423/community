import request from '@/utils/request'

export function fetchCommentsByPostId(post_Id) {
    return request({
        url: '/comment/get_comments',
        method: 'get',
        params: {
            topicid: post_Id
        }
    })
}

export function pushComment(data) {
    return request({
      url: '/comment/add_comment',
      method: 'post',
      data: data
    })
  }