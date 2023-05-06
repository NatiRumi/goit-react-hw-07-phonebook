import React from 'react'

const ContactItem = ({name, number}) => {
	return (
		<li className='list-item'>
			<p>{name}:   {number}</p>
		</li>
	)
}

export default ContactItem