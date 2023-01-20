import React from 'react'
import { workerCardProps } from '../../types/types'
import './WorkerCard.scss';

function WorkerCard({
  workerNames,
  workerPosition,
  workerAvatar
}: workerCardProps) {
  return (
    <div className='worker-card'>
      <div className="worker-card-img">
        <img src={workerAvatar ? workerAvatar: ''} alt=""/>
      </div>
      <div className="worker-card-info">
        <p className="worker-card-name">{workerNames}</p>
        <p className="worker-card-position">{workerPosition}</p>
      </div>
    </div>
  )
}

export default WorkerCard

