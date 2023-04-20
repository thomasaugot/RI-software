import { FC, useEffect, useState } from 'react';
import './pipelineSection.scss';
import { PipelineSectionType } from '../../../types/pipeline/pipelineTypes'
import { projects } from '../../../pages/pipeline/pipelineMockData'
import ProjectCard from './projectCard/projectCard'
import { profile } from '../../../assets/Icons'

const PipelineSection: FC<PipelineSectionType> = ({ pipelineTitle }) => {
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalProjects, setTotalProjects] = useState(0);

    useEffect(() => {
        const projectDetails = projects.reduce((acc, project) => {
            if (project.stage === pipelineTitle) {
                acc['totalAmount'] = acc['totalAmount'] + project.amount;
                acc['totalProjects'] = acc['totalProjects'] + 1
            }
            return acc
        }, { totalAmount: 0, totalProjects: 0 })
        setTotalAmount(projectDetails['totalAmount']);
        setTotalProjects(projectDetails['totalProjects']);
    }, [])

    return (
        <div className='pipeline-section-container'>
            <div className="pipeline-header">
                <div className="pipeline-title">
                    {pipelineTitle}
                </div>
                <div className="amount-deals">
                    {/* {amountDeals} */}
                    {totalAmount}.000 $ - {totalProjects} deals
                </div>
                <div className="card-container">
                    {projects.map(({ title, id, organisation, amount, stage }) => {
                        return (
                            stage === pipelineTitle &&
                            <ProjectCard key={id} title={title} organisation={organisation} avatar={profile} amount={amount} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PipelineSection
