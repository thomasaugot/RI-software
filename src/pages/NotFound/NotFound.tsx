import React from 'react'
import BaseLayout from '../../layouts/BaseLayout/BaseLayout'
import './NotFound.scss'

function NotFound() {
  return (
    <BaseLayout>
        <div className='not-found'>
        <h3>Page Not Found | 404</h3>
        </div>
    </BaseLayout>
  )
}

export default NotFound
