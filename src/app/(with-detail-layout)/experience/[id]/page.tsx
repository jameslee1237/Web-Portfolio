"use client";
import React from 'react';
import { experienceDetails } from '@/constants';
import RespCard from '@/components/RespCard';

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
  
  const { title, description, Date, Hire, src } = experienceDetail;
  const combinedList: {description: string, src: string}[] = [];

  if (Array.isArray(description) && Array.isArray(src)) {
    const maxLength = Math.max(description.length, src.length);

    for (let i = 0; i < maxLength; i++) {
        const descItem = description[i] ?? ''; 
        const srcItem = src[i] ?? ''; 
        combinedList.push({description: descItem, src: srcItem});
    }
  } 
  else {
    const descItem = Array.isArray(description) ? description[0] ?? '' : description ?? '';
    const srcItem = Array.isArray(src) ? src[0] ?? '' : src ?? '';
    combinedList.push({description: descItem, src: srcItem});
  }

  return (
    <div className="flex flex-col text-center">
      <div className="text-white text-4xl font-bold mt-16 mb-8">
        <h1>{title}</h1>
      </div>
      <div className="flex justify-center">
        <div className="w-full">
          <div className="text-white text-[20px] flex flex-col justify-start items-center">
            <h1 className="text-[30px] font-bold mb-8">Responsibilities</h1>
            <div className="flex flex-wrap justify-center gap-4">
              {combinedList.map((item, index) => (
                <RespCard key={index} Resp={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4 mb-16">
        <div className="w-1/2">
          <div className="text-white text-[20px] flex flex-col justify-start items-center">
            <h1 className="text-[30px] font-bold">Date</h1>
            <p>{Date}</p>
          </div>
        </div>
        <div className="w-1/2">
          <div className="text-white text-[20px] flex flex-col justify-start items-center">
            <h1 className="text-[30px] font-bold">Hired By</h1>
            <p>{Hire}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
