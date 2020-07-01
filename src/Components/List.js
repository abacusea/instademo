import React from 'react'

const List = ({ title, image}) => {
	return (
		<div>
		<img src={image} />
		<p>{title}</p>
		</div>
	)
}

export default List