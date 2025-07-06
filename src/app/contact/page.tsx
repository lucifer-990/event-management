'use client'

import React, { useState } from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Contact = () => {
        const [form, setForm] = useState({ name: "", email: "", message: "" });
        
        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setForm({ ...form, [e.target.name]: e.target.value });
        };
      
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            alert("Message Sent! We will get back to you soon.");
            setForm({ name: "", email: "", message: "" });
          };


        return (
            <div>
               <div className="shadow-lg rounded-lg p-8 w-full">
                  <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
                  <p className="text-center mb-6">We are a passionate team of hungry learners dedicated to building innovative solutions.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {[
                        { name: "Subhajit Shaw", role: "Lead Developer", img: "/profile.png", githubLink: "https://github.com/lucifer-990", linkedinUrl:"https://www.linkedin.com/in/subhajit-shaw-56610b208"},
                        { name: "Dipon Mitra", role: "Frontend developer", img: "/dipon.jpeg", githubLink: "https://github.com/10112004-Dipon", linkedinUrl:"https://www.linkedin.com/in/diponmitra"},
                        { name: "Suporno Maiti", role: "Backened Engineer", img: "/suporno.jpeg", githubLink: "https://github.com/SupornoMaiti", linkedinUrl:"https://www.linkedin.com/in/suporno-maiti-639326287"}
                      ].map((member, index) => (
                         <div key={index} className="p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
                               <img src={member.img} alt={member.name} className="w-36 h-36 rounded-full mb-4 shadow-md" />
                               <h3 className="text-xl font-bold">{member.name}</h3>
                              <p>{member.role}</p>
                              <div className='flex flex-row'>
                                  <a href={member.githubLink}><AiFillGithub className="mr-3 text-4xl cursor-pointer text-black dark:text-white" /></a>
                                  <a href={member.linkedinUrl}><AiFillLinkedin className="mr-3 text-4xl cursor-pointer text-black dark:text-white" /></a>
                              </div>
                         </div>
                      ))}
                    </div>
                </div>
                <div className="min-h-screen flex items-center justify-center p-6">
                    <div className="shadow-lg rounded-lg p-8 max-w-lg w-full">
                        <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
                        <p className="text-center mb-6">Have questions? We&apos;d love to hear from you.</p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block font-semibold">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full p-2 border text-black rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block font-semibold">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full p-2 border text-black rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block font-semibold">Message</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full p-2 border text-black rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
export default Contact
