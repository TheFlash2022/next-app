import Link from 'next/link';

import React from 'react'

const F1 = () => {
  return (
    <>
    <h3>f1 page</h3>
    <Link href={'/f1/f2'}>go to f2</Link>
    </>
  )
}

export default F1