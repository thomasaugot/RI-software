import { workerCardProps } from '../../types/types'
import { onMoveWorkerFetch } from '../../queries/moveWorker';
import './WorkerCard.scss';

function WorkerCard({
  workerNames,
  workerPosition,
  workerAvatar,
  id,
  leaderId
  
}: workerCardProps) {

  const employeeId = parseInt(localStorage.getItem('employee_id') || '-1');

  return (
    <div className='worker-card' onClick={() => {onMoveWorkerFetch(employeeId, true, leaderId, id)}}>
      <div className="worker-card-img">
        <img src={workerAvatar ? workerAvatar: 'https://tinypic.host/images/2023/01/20/Ellipse-14.png'} alt=""/>
      </div>
      <div className="worker-card-info">
        <p className="worker-card-name">{workerNames}</p>
        <p className="worker-card-position">{workerPosition}</p>
      </div>
    </div>
  )
}

export default WorkerCard

