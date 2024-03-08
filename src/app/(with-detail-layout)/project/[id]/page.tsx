"use client";
import React, { useState } from 'react';
import { projectDetails } from '@/constants';
import Inline from "yet-another-react-lightbox/plugins/inline";
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

export default function ProjectDetailPage({ 
    params 
}: {
    params: {
        id: string;
    }
}) {
    const ProjectDetail = projectDetails.find((t) => t.id === params.id);

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    if (!ProjectDetail) {
        return <div className="text-white text-[40px] text-center font-bold">Project not found</div>
    }

    const { title, description, slides, FI } = ProjectDetail;

    const toggleOpen = (state: boolean) => () => setOpen(state);

    const updateIndex = ({ index: current}: {index: number}) => setIndex(current);

    return (
        <div className="text-center flex-col">
            <div className="text-white text-4xl font-bold mt-16 mb-8 ml-16 mr-16" style={{width: "90vw"}}>
                <h1>{title}</h1>
            </div>
            <div className="text-white text-[18px] flex flex-col md:flex-row gap-4">
                <div className="uppercase font-bold flex flex-col items-center justify-center md:w-1/2 mx-4 object-contain">
                    <p className="text-[30px] mb-8">Screenshots</p>
                    <Lightbox 
                      index={index}
                      slides={slides}
                      plugins={[Inline]}
                      on={{
                        view: updateIndex,
                        click: toggleOpen(true),
                      }}
                      carousel={{
                        padding:0,
                        spacing:0,
                        imageFit: "contain",
                      }}
                      inline={{
                        style: {
                            width: "100%",
                            maxWidth: "600px",
                            maxHeight: "400px",
                            aspectRatio: "3 / 2",
                            margin: "0 auto",
                        },
                      }}
                    />

                    <Lightbox
                        open={open}
                        close={toggleOpen(false)}
                        index={index}
                        slides={slides}
                        on={{ view: updateIndex }}
                        animation={{ fade: 0 }}
                        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
                    />
                </div>
                <div className="md:mr-8 md:w-1/2 ml-4 mr-4 text-wrap">
                    <p className="font-bold text-[40px]">Aim</p>
                    <p className="text-left">{description}</p>
                    <p className="font-bold text-[40px]">Future Improvements</p>
                    <p className="text-left mb-8">{FI}</p>
                </div>
            </div>
        </div>
        
    )
}
