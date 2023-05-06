import React from 'react'

const ContactItem = ({name}) => {
	return (
		<li className='list-item'>
			<p>{name}</p>
		</li>
	)
}

export default ContactItem