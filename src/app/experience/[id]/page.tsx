import React from 'react';

export default function ExperienceDetailPage() {
  const experienceDetails = {
    title: 'Experience Title',
    description: 'Description of the experience...',
  };

  return (
    <div>
      <h1>{experienceDetails.title}</h1>
      <p>{experienceDetails.description}</p>
    </div>
  );
};