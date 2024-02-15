"use client";
import React, { useRef, useState } from 'react';
import LinkedIn from './LinkedIn';
import GitHub from './Github';
import emailjs from '@emailjs/browser';
import { API_KEY } from "../constants/apikeys";

const Contact = () => {
    const [emailsubmitted, setEmailSubmitted] = useState(false);

    const { service_id, template_id, public_key } = API_KEY[0];
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs
              .sendForm(service_id, template_id, form.current, {
                publicKey: public_key,
                })
                .then(
                    () => {
                        setEmailSubmitted(true);
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <LinkedIn />
                    <GitHub />
                </div>
                <form ref={form} onSubmit={sendEmail}>
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