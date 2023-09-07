import React, {useState} from 'react';
import './JobListing.css';

const JobListing = ({ jobListings }) => {
    const [selectedJob, setSelectedJob] = useState(null);

    const handleJobSelect = (index) => {
      setSelectedJob(index);
    };

    const selectedJobTitle = selectedJob !== null ? jobListings[selectedJob].jobTitle : '';

  return (
    <div class="container">
        <div className="job-list-container">
        {jobListings.map((job, index) => (
            <div key={index} 
            className={`job ${index === selectedJob ? 'selected' : ''}`}
            onClick={() => handleJobSelect(index)}>
            <div className="job-header">
                <img src={job.companyLogo} alt={job.companyName} className="company-logo" />
                <div className="company-info">
                    <span className="company-name">{job.companyName}</span>
                    <span className="company-ratings">{job.companyRatings.toFixed(1)}&nbsp;★</span>
                    <div className="job-title">{job.jobTitle}</div>
                </div>
                <div className="job-category">{job.jobCategory}</div>
            </div>
            <div className="job-details">
                <div>
                    <span className="job-updated-time">{job.updatedTime}</span>
                    <span className="job-location">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" className="location-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg> 
                        {job.jobLocation}
                    </span>
                </div>
                <div className="job-salary">{job.estimatedSalary}<span className="est-container">{"EST"}</span></div>
            </div>
            <hr className="divider" />
            <div className="tech-stack">
                <div className="tech-stack-list">
                {job.techStack.map((tech, techIndex) => (
                    <div key={techIndex} className="tech-stack-item">
                    {tech}
                    </div>
                ))}
                </div>
            </div>
            </div>
        ))}
        </div>
        <div className="selected-job-title-container">
            <p className="selected-job-title-text">{selectedJobTitle}</p>
      </div>
    </div>

  );
};

export default JobListing;