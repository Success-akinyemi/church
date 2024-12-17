import { useEffect, useState } from "react";
import axios from 'axios'

//axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL
//axios.defaults.baseURL = 'https://hgfapi.xyz'
axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://hgfapi.xyz'

export function useFetchBlogs(query){
    const [ blogPost, setBlogPost] = useState({ isFetching: true, data: null, status: null, serverError: null, })
    useEffect(() => {
        const fetchBlogPost = async () => {
            try {
                const { data, status} = !query ? await axios.get(`/blog/posts`) : await axios.get(`/blog/posts/${query}`)
                //console.log('Data from Hooks>>>', data, 'STATUS', status)

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

export function useFetchChildrenProgram(query){
    const [ childrenData, setChildrenData] = useState({ isFetching: true, data: null, status: null, serverError: null, })
    useEffect(() => {
        const fetchChildrenData = async () => {
            try {
                const { data, status} = !query ? await axios.get(`/children_corner`) : await axios.get(`/children_corner/${query}`)
                //console.log('Data from Hooks>>>', data, 'STATUS', status)

                if(status === 200){
                    setChildrenData({ isFetching: false, data: data, status: status, serverError: null})
                } else{
                    setChildrenData({ isFetching: false, data: null, status: status, serverError: null})
                }
            } catch (error) {
                setChildrenData({ isFetching: false, data: null, status: null, serverError: error})
            }
        }
        fetchChildrenData()
    }, [query])

    return childrenData
}

export function useFetchBranches(query){
    const [ branchesData, setBranchesData] = useState({ isFetching: true, data: null, status: null, serverError: null, })
    useEffect(() => {
        const fetchBranchesData = async () => {
            try {
                const { data, status} = !query ? await axios.get(`/about_us/ministry_branches`) : await axios.get(`/about_us/ministry_branches/${query}`)
                //console.log('Data from Hooks>>>', data, 'STATUS', status)

                if(status === 200){
                    setBranchesData({ isFetching: false, data: data, status: status, serverError: null})
                } else{
                    setBranchesData({ isFetching: false, data: null, status: status, serverError: null})
                }
            } catch (error) {
                setBranchesData({ isFetching: false, data: null, status: null, serverError: error})
            }
        }
        fetchBranchesData()
    }, [query])

    return branchesData
}