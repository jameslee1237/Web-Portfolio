"use client";
import React, { useRef, useState } from 'react';
import LinkedIn from './LinkedIn';
import GitHub from './Github';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [emailsubmitted, setEmailSubmitted] = useState(false);
    const [error, setError] = useState('');
    const form = useRef<HTMLFormElement>(null);

    if (!process.env.service_id || !process.env.template_id || !process.env.public_key) {
        return <div>Missing emailjs keys</div>
    }
    const service_id = process.env.service_id;
    const template_id = process.env.template_id;
    const public_key = process.env.public_key;
    
    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (form.current) {
            const formData = new FormData(form.current);
            let isValid = true;

            if (!formData.get('user_name')) {
                isValid = false;
                setError("Please fill in the Name field")
            }

            if (!formData.get('user_email')) {
                isValid = false;
                setError("Please fill in the Email field")
            }

            if (!formData.get('subject')) {
                isValid = false;
                setError("Please fill in the Subject field")
            }

            if (!formData.get('message')) {
                isValid = false;
                setError("Please fill in the Message field")
            }

            if (isValid) {
                emailjs
                  .sendForm(service_id, template_id, form.current, {
                            publicKey: public_key,
                  })
                  .then(
                    () => {
                        setEmailSubmitted(true);
                        setError('');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
            }
            
        }
    }

    return (
        <div className="bg-[#254a8e] pt-[4rem] md:pt-[8rem] pb-[1rem]">
            <h1 className="text-center text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] uppercase mb-[3rem] 
                font-bold text-white">
                Contact
            </h1>
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-start">
                <div className="mb-[3rem]">
                    <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">
                        Get in touch
                    </h1>
                    <p className="text-[19px] text-slate-300 md:text-lg mb-4">
                    I am currently exploring new career opportunities and would be thrilled to hear from you regarding any potential openings or collaborations. 
                    With a passion for diverse areas ranging from software engineer to full stack developer, I am eager to contribute my skills and experience 
                    to innovative projects and dynamic teams. Please feel free to reach out via the contact form.
                    </p>
                    <LinkedIn />
                    <GitHub />
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="text-red-600">{error}</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
                        <input 
                          type="text" 
                          placeholder="Name"
                          name="user_name" 
                          className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
                        />
                        <input 
                          type="text" 
                          placeholder="Email"
                          name="user_email" 
                          className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        className="py-[0.7rem] mt-[1rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
                    />
                    <textarea
                        placeholder="Message"
                        name="message"
                        className="py-[0.7rem] mt-[1rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
                        rows={4}
                    />
                    <button type="submit" className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-blue-700 hover:bg-blue-800 
                                        rounded-md px-4">
                        Send Message
                    </button>
                    {
                        emailsubmitted && (
                            <p className="text-green-500 text-sm mt-2">
                                Email sent successfully!
                            </p>
                        )
                    }
                </form>
            </div>
        </div>
    );
}

export default Contact;