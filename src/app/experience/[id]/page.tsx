import React from 'react';

export default function ExperienceDetailPage() {
  const experienceDetails = {
    title: 'Experience Title',
    description: 'Description of the experience...',
  };

  return (
    <div>
      <div className="text-white text-4xl font-bold mt-16 mb-8">
        <h1>{experienceDetails.title}</h1>
      </div>
      <div className="text-white text-[20px]">
        <p>{experienceDetails.description}</p>
      </div>  
    </div>
  );
};