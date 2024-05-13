import Card from '@/app/_components/card'
import React from 'react'
import Link from 'next/link'

const Notifications = () => {
  return (
    <Card>
      <div>Notifications helloworld</div>
      <Link href={'/complex-dashboard/archived'}>Archived</Link>
    </Card>
  )
}

export default Notifications
