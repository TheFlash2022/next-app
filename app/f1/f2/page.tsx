import Link from 'next/link';

import React from 'react'

const F2 = () => {
  return (
    <>
    <h3>f2 page</h3>
    <Link href={'/f1'}>back to f1</Link>
    </>
  )
}

export default F2