import React from 'react'

const Userprofile = ({ name, email, role }) => {

    return (
        <section>
            <h2>{name}</h2>
            <p>Email: <span>{email}</span></p>
            <p>Role: {role}</p>
        </section>
    )
};

export default Userprofile;