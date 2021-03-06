import React from 'react';
import JobsTable from '../..//components/JobsTable/JobsTable'
import AddJob from '../../components/AddJob/add-job.component';
import {connect} from 'react-redux'
import { signOutStart } from '../../redux/user/user.actions';
import Button from 'react-bootstrap/Button'

import './home.styles.scss'


const HomePage = (props) => {
    return (
        <div className='home-page'>
            <div className='side-bar'>
                <AddJob/>
                <Button onClick={() => props.signOutStart()} className='sign-out'>Sign Out</Button>
            </div>
            <div className='job-stuffs'>
                <JobsTable></JobsTable>
            </div>
        </div>
    );
}

const msp = ({jobs}) => ({
    selectedJob: jobs.selectedJob
})

const mdp = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(msp, mdp)(HomePage);
