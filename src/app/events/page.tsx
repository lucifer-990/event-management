'use client'
import Link from 'next/link';
import React from 'react'
import { ResponsiveContainer } from "recharts";



// const generateCertificate = () => {
//   alert("Participation Certificate Generated!");
// };

// const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
//   <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl shadow-md p-16">{children}</div>
// );

// const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
//   <div className="p-4">{children}</div>
// );


const Events = () => {
  return (<>
    <div className='items-center flex'>
      <img src="/hackentine.jpeg" alt="Hackentine" className='max-w-[70%] mx-auto rounded-3xl'/>
    </div>
    <div className="p-6 min-h-screen">
      <h1 className="text-3xl font-extrabold mb-6">Hackentine Hackathon 2025 - Pair with code</h1>
      
      <div className="mt-8 p-6 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <section className="shadow-lg rounded-xl p-6 mb-8">
          <p className=" mt-2">Hackentine 2025 is an event where developers, designers, and entrepreneurs collaborate to build innovative solutions to real-world problemsv.</p>
          <p className=" mt-2">Coding Ninjas 10X Club in collaboration with Hack2Skill presents Hackentine - A 2 Week long Hackathon Saga | This Valentine Month,Get Paired with Code
          </p>
          <hr className="my-3" />
          <p className="mt-2">A team-based “hackathon" where you and your squad collaborate, innovate, and build groundbreaking tech solutions! 💡💻 Compete with the best coding minds across the nation and grab exciting rewards! 🏆</p>
        </section>

        <ResponsiveContainer width="100%" height={300}>
        <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-6">🚀 Hackentine 2025</h1>
        <p className="text-lg mb-8">Join the ultimate coding challenge and showcase your skills!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className=" shadow-lg rounded-xl p-6 border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold">💡 Innovation</h2>
            <p className=" mt-2">Solve real-world problems with your creativity and coding skills.</p>
          </div>
          <div className=" shadow-lg rounded-xl p-6 border-l-4 border-green-500">
            <h2 className="text-2xl font-bold">🏆 Prizes</h2>
            <p className=" mt-2">Win exciting rewards and recognition for your talent.</p>
          </div>
          <div className=" shadow-lg rounded-xl p-6 border-l-4 border-purple-500">
            <h2 className="text-2xl font-bold">👥 Networking</h2>
            <p className=" mt-2">Connect with industry experts and fellow developers.</p>
          </div>
        </div>
        
        <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
          <a href="https://vision.hack2skill.com/event/hackentinehackathon/?utm_source=MAKAUT&utm_medium=DA&sectionid=67a5d1b0f32921c942e5deb0">Register Now</a>
        </button>
        <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition ml-8">
           <Link href="/certificate">Get Certificate</Link>
        </button>      
      </div>
    </div>
        </ResponsiveContainer>
        <div className="flex justify-self-center mt-32">
        <section className=" shadow-lg rounded-xl p-6 my-2">
          <h2 className="text-3xl font-bold">📅 Important Dates</h2>
          <ul className="list-disc list-inside my-2">
            <li className="my-2">Registration Opens: March 1, 2025</li>
            <li className="my-2">Submission Deadline: April 15, 2025</li>
            <li className="my-2">Final Event: April 30, 2025</li>
          </ul>
        </section>
        <section className="shadow-lg rounded-xl p-6 mb-8">
          <h2 className="text-3xl font-bold">🛠 Steps to Participate</h2>
          <ul className="list-disc list-inside my-2">
            <li className="my-2">Register for the hackathon.</li>
            <li className="my-2">Form a team or participate solo.</li>
            <li className="my-2">Submit your innovative solution.</li>
            <li className="my-2">Pitch your project to the judges.</li>
          </ul>
        </section>
        </div>
        <div className="flex items-center justify-center">
        <section className="shadow-lg rounded-xl p-6 mb-8">
          <h2 className="text-3xl font-bold">🤝 Partners</h2>
          <p className="mt-2">We are proudly supported by leading tech companies and innovation hubs.</p>
        </section>
        </div>
        <section className="shadow-lg rounded-xl p-6 mb-8">
          <h2 className="text-3xl font-bold ">❓ FAQs</h2>
          <ul className="list-disc list-inside  mt-2">
            <li><strong>Who can participate?</strong> Anyone with a passion for innovation and technology.</li>
            <li><strong>Do I need a team?</strong> You can participate solo or form a team of up to 4 members.</li>
            <li><strong>What technologies can I use?</strong> Any technology that helps bring your idea to life.</li>
          </ul>
        </section>
        <section className="shadow-lg rounded-xl p-6 mb-8">
          <h2 className="text-3xl font-bold">⏳ Timeline</h2>
          <div className="mt-4 space-y-4">
            <div className="border-l-4 border-r-4 border-blue-500 pl-4 my-6">
              <h3 className="text-xl font-semibold">March 1, 2025</h3>
              <p className='text-2xl font-bold my-3'>Registration Opens</p>
            </div>
            <div className="border-l-4 border-r-4 border-sky-500 pl-4 my-6">
              <h3 className="text-xl font-semibold">March 10, 2025</h3>
              <p className='text-2xl font-bold my-3'>Team formation</p>
              <p className='mx-6 my-3'>
                Ready to bring your ideas to life? The Team Formation module for Hackentine hackathon is here to help you find your perfect teammates! 🤝
              Whether you're a solo coder or a team leader looking for collaborators or to create a team with your collegemates or friends who are eager to expand their skills along with you, this is your chance to make your perfect squad
              What's inside the Team Formation module?
              Find Your Tribe: Connect with participants who share your passion and expertise.
              Collaborate with the Best: Look for teammates with complementary skills (coding, design, business, etc.).
              Build a Dream Team: Choose from various team structures based on your project needs.
              Flexibility & Freedom: You can join an existing team or start your own!
              Don't miss out on the chance to build and innovate with the best! Start forming your team today and let’s create something amazing together! 🚀
              </p>
            </div>
            <div className="border-l-4 border-r-4 border-green-500 pl-4 my-6">
              <h3 className="text-xl font-semibold">April 15, 2025</h3>
              <p className='text-2xl font-bold my-3'>Submission Deadline</p>
              <p className='mx-6 my-3'>
                All participants are required to submit a 5-10 slides presentation (PPT) detailing their proposed solution to the selected problem by the participant. 
                Send your file in this format:  Reference - Team Name  Name_Problemstatement-title
                By following these guidelines, participants will ensure that their submissions are clear, well-structured, and informative. 
              </p>
            </div>
            <div className="border-l-4 border-r-4 border-purple-500 pl-4 my-6">
              <h3 className="text-xl font-semibold">April 30, 2025</h3>
              <p className='text-2xl font-bold my-3'>Final Event & Winner Announcement</p>
              <p className='mx-6 my-3'></p>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
}

export default Events
