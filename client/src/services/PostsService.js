import api from '@/services/Api'

export default {
    fetchPosts (){
        return api().get('posts')
    },

    addPost(params){
        return api().post('posts',params)
    }
}