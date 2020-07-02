import React from 'react'
import Card from './card'

const Post = ({items}) => {
    return (
    <div >
    {items.length ?
    <ul>
        { items.map(item => {
            return (
                <li key={item.id} >
                    <Card item={item} />
                </li>
            )
        }) 
        }
    </ul> : null
    }
    </div>
)}

export default Post;