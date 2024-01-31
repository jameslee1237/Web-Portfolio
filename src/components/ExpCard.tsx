import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ExpCard = ({ 
    experience,
}: {
    experience: {
        id: string;
        title: string;
        summary: string;
    }
}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }

    return (
        <div 
         onClick={handleFlip}
         className="mb-8 w-[450px] h-[150px]  rounded-md cursor-pointer">
            <motion.div 
             className="flip-card-inner w-full h-full"
             initial={false}
             animate={{rotateY: isFlipped ? 180 : 360}}
             transition={{ duration: 0.4, animationDirection: 'normal'}}
             onAnimationComplete={() => setIsAnimating(false)}
            >
                <div
                 className="w-full h-full group absolute bg-[#cf9595] flip-card-front bg-cover bg-center text-white text-center rounded-lg p-4">
                    <h2>{experience.title}</h2>
                </div>
                <div
                 className="w-full h-full group absolute bg-[#cf9595] flip-card-back bg-cover bg-center text-white text-center rounded-lg p-4">
                    <p>{experience.summary}</p>
                    <Link href={`/experience/${experience.id}`}>
                        <span>Learn more</span>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default ExpCard;