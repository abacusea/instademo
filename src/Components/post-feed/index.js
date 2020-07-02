import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from 'axios'
import Posts from '../posts'
import Navbar from '../Home/navbar'
import ViewMore from '../view-more'
import { getPostsByCount } from '../../services/utils'
import { fetchDataSuccess } from '../../actions/postFeed'

const Feed = ({ postFeeds, isDataFetchDone, fetchPosts}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [endIndex, setEndIndex] = useState(10)

      console.log(postFeeds)
    const url ="https://hiit.ria.rocks/videos_api/cdn/com.rstream.crafts?versionCode=40&lurl=Canvas%20painting%20ideas#";


    useEffect(() => {
      if (!isDataFetchDone) {
          setIsLoading(true)
          fetch(url,{method: "GET",}).then(res => res.json())
          .then(response => {
            setIsLoading(false)
            fetchPosts(response)
          })
          .catch(error => console.log(error));
      }
    }, [isDataFetchDone, fetchPosts])


    const listingPosts = getPostsByCount(postFeeds, endIndex)
    console.log(listingPosts)
    return (
        <div>
        {isLoading ? <span>loading...</span> :  
            listingPosts.length ?
            <Fragment>
                <Posts items={listingPosts} />
                <ViewMore items={postFeeds} clickHandler={setEndIndex} endIndex={endIndex} />
             </Fragment>
             :
            <label className="grey bold"> No Data found </label> }
        </div>
)}

const mapStateToProps = state => ({postFeeds: state.postFeeds, isDataFetchDone:state.isDataFetchDone})

const mapDispatchToProps = (dispatch) => ({
    fetchPosts: (response) => dispatch(fetchDataSuccess(response))
})


export default connect(mapStateToProps, mapDispatchToProps)(Feed)