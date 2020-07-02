import React from 'react'

const ViewMore = ({items, clickHandler, endIndex}) => {
  return (
    <div>
    { items.length > endIndex ?
    <button className="view_more"onClick={() => clickHandler(endIndex+5)}>View more</button> :
    <div className="view_more grey bold">No more posts to show </div> }
    </div>
  )
}

export default ViewMore