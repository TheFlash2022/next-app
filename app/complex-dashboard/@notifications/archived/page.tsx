

import Card from '@/app/_components/card'
import React from 'react'
import Link from 'next/link'

const ArchivedNotifications = () => {
  return (
    <Card>
      <div>Archived Notifications</div>
      <Link href={'/complex-dashboard'}>Default</Link>
    </Card>
  )
}

export default ArchivedNotifications
