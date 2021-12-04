import React from 'react';

import './PostJob.sass';
import { useNavigate } from 'react-router-dom';

const PostJob = (): JSX.Element => {
    const navigate = useNavigate();
    return (
        <button className="post-job" onClick={ () => navigate('/postoffer')}>
            Post a job
        </button>
    );
};

export default PostJob;