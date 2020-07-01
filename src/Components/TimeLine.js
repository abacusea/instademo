import React, { useState, useEffect} from 'react'
import axios from 'axios'
import List from './List'

const TimeLine = () => {
	
	const [newsFeed, setNewsFeed] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://hiit.ria.rocks/videos_api/cdn/com.rstream.crafts?versionCode=40&lurl=Canvas%20painting%20ideas#');
      const data = res.data;
      setNewsFeed(data);
    };
    fetchData();
  }, [newsFeed]);

	return (
		<div>
      {
        newsFeed.map(repo => (
          <List key={repo.id} title={repo.title} image={repo["low thumbnail"]} />
        ))
      }
    </div>
	)
}

export default TimeLine