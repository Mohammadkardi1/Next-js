import React from 'react'
import Link from 'next/link';

const Error = () => {
    return (
        <div>
            <h1>Page not Found Please leave now </h1>
            <Link href="/">Go home</Link>
        </div>
    )
}

export default Error