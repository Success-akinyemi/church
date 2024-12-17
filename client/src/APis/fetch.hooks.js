import { useEffect, useState } from "react";
import axios from 'axios'

//axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL
axios.defaults.baseURL = 'https://hgfapi.xyz'


export function useFetchBlogs(query){
    const [ blogPost, setBlogPost] = useState({ isFetching: true, data: null, status: null, serverError: null, })
    useEffect(() => {
        const fetchBlogPost = async () => {
            try {
                const { data, status} = !query ? await axios.get(`/blog/posts`, {withCredentials: true}) : await axios.get(`/blog/posts/${query}`)
                console.log('Data from Hooks>>>', data, 'STATUS', status)

                if(status === 200){
                    setBlogPost({ isFetching: false, data: data, status: status, serverError: null})
                } else{
                    setBlogPost({ isFetching: false, data: null, status: status, serverError: null})
                }
            } catch (error) {
                setBlogPost({ isFetching: false, data: null, status: null, serverError: error})
            }
        }
        fetchBlogPost()
    }, [query])

    return blogPost
}