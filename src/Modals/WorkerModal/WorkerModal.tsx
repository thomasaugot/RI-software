import React from 'react'
import TextField from '../../components/TextField/TextField'
import WorkerCard from '../../components/WorkerCard/WorkerCard'
import { workerCardProps } from '../../types/types'
import './WorkerModal.scss'

const workerData: Array<workerCardProps> = [
  {
    workerNames: 'Emery Vetrovs',
    workerPosition: 'CTO'
  },
  {
    workerNames: 'Ahmad Vetrovs',
    workerPosition: 'Lead Team A'
  },
  {
    workerNames: 'Jaxson Franci',
    workerPosition: 'CTO'
  },
  {
    workerNames: 'Alfredo Stanton',
    workerPosition: 'CTO'
  },
  {
    workerNames: 'Phillip Curtis',
    workerPosition: 'CTO'
  },
  {
    workerNames: 'Ahmad Vetrovs',
    workerPosition: 'CTO'
  },
  {
    workerNames: 'Jaxson Franci',
    workerPosition: 'CTO'
  },
  {
    workerNames: 'Alfredo Stanton',
    workerPosition: 'CTO'
  },
  {
    workerNames: 'Phillip Curtis',
    workerPosition: 'CTO'
  },
  {
    workerNames: 'Ahmad Vetrovs',
    workerPosition: 'CTO'
  },
  {
    workerNames: 'Jaxson Franci',
    workerPosition: 'CTO'
  },
  {
    workerNames: 'Alfredo Stanton',
    workerPosition: 'CTO'
  }
]

function WorkerModal() {
  return (
    <div className='wokder-modal'>
      <div className='worker-modal-head'>
        <div className="workder-modal-close">
          <span>X</span>
        </div>
        <div className="worker-modal-head-input">
          <TextField placeholder='Search' name='search' isSearchInput={true}/>
        </div>
      </div>
      <div className="worker-modal-user-list">
        {workerData.map(({workerNames, workerPosition}, i)=>(
          <WorkerCard workerNames={workerNames} workerPosition={workerPosition}/>
        ))}
      </div>
    </div>
  )
}

export default WorkerModal
