"use client";
import React from 'react';
import { experienceDetails } from '@/constants';

export default function ExperienceDetailPage({ 
  params 
}: {
  params: {
    id: string;
  };
}) {
  const experienceDetail = experienceDetails.find((t) => t.id === params.id);

  if (!experienceDetail) {
    return <div className="text-white text-[40px] text-center font-bold">Experience not found</div>;
  }
  
  const { title, description, Date, Hire } = experienceDetail;
  const combinedList: {description: string}[] = [];

  if (Array.isArray(description)) {
    const maxLength = Math.max(description.length);

    for (let i = 0; i < maxLength; i++) {
        const descItem = description[i] ?? ''; 
        combinedList.push({description: descItem});
    }
  } 
  else {
    const descItem = Array.isArray(description) ? description[0] ?? '' : description ?? '';
    combinedList.push({description: descItem});
  }
 
  
  return (
    <div className="flex flex-col text-center">
      <div className="text-white text-4xl font-bold mt-16 mb-8">
        <h1>{title}</h1>
      </div>
      <div className="flex justify-center">
        <div className="w-1/2">
          <div className="text-white text-[20px] flex flex-col justify-start items-center">
            <div className="items-center w-full">
              <h1 className="text-[30px] font-bold mb-8">Responsibilities</h1>
              {Array.isArray(description) ? (
                description.map((desc) => (
                  <p className="text-left ml-8" key={desc}>{desc}</p>
                ))
              ) : (
                <p>{description}</p>
              )}
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="text-white text-[20px] flex flex-col justify-start items-center">
            <div className="items-center w-full">
              <h1 className="text-[30px] font-bold">Date</h1>
              <p>{Date}</p>
              <h1 className="text-[30px] font-bold mt-8">Hired By</h1>
              <p>{Hire}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};