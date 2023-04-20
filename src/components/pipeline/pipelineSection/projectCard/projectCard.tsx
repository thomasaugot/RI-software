import { FC, ReactNode } from 'react';
import './projectCard.scss'
import { ProjectCardType } from '../../../../types/project/projectTypes'
import { forwardIcon } from '../../../../assets/pipelineIcons'

const ProjectCard: FC<ProjectCardType> = ({ title, organisation, amount, avatar }) => {
    return (
        <div className='project-card'>
            <div className="title-org-amount">
                <div className="title">
                    {title}
                </div>
                <div className="organisation">
                    {organisation}
                </div>
                <div className="amount">
                    {amount}.000 $
                </div>
            </div>
            <div className="avatar-forward-section">
                <div className="avatar">
                    {avatar as ReactNode}
                </div>
                <div className="forward-icon">
                    {forwardIcon}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
