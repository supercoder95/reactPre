import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Users() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setUsers(null);
                setError(null);
                setLoading(true);
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/users/'
                )
            } catch (e) {

            }
        }
    }, [])

    return <div />
}

export default Users
