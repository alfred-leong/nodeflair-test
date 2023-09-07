import React from 'react';
import JobListing from './components/JobListing';

const App = () => {
  // Sample job listings data (replace with your actual data)
  const jobListings = [
    {
      companyLogo: 'https://play-lh.googleusercontent.com/Ui_-OW6UJI147ySDX9guWWDiCPSq1vtxoC-xG17BU2FpU0Fi6qkWwuLdpddmT9fqrA=w240-h480-rw',
      companyName: 'TikTok',
      companyRatings: 3.9,
      jobTitle: 'Intern - Technology Consulting, Cybersecurity (2024)',
      updatedTime: 'about 1 hour ago',
      jobLocation: 'Singapore',
      estimatedSalary: 'S$2000 - S$4000 / mth',
      jobCategory: 'Fullstack',
      techStack: ['Graph', 'TensorFlow', 'PyTorch', 'Spark'],
    },
    {
      companyLogo: 'https://pbs.twimg.com/profile_images/1605297940242669568/q8-vPggS_400x400.jpg',
      companyName: 'Google',
      companyRatings: 3.9,
      jobTitle: 'Data Analyst Intern',
      updatedTime: 'about 1 hour ago',
      jobLocation: 'Singapore',
      estimatedSalary: 'S$2000 - S$4000 / mth',
      jobCategory: 'Fullstack',
      techStack: ['Graph', 'TensorFlow','Spark', 'Python', 'C++', 'JavaScript'],
    },
  ];

  return (
    <div className="App">
      <JobListing jobListings={jobListings} />
      {/* Add other content or components here */}
    </div>
  );
};

export default App;
