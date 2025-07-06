'use client'
import Link from 'next/link';


const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-gradient-to-bl from-fuchsia-600 from- via-violet-600 via- rounded-xl shadow-md p-16 border-l-4 border-b-4 border-blue-500 hover:border-purple-500">{children}</div>
);

const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-4">{children}</div>
);

const quotes = [
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Do not be embarrassed by your failures, learn from them and start again.", author: "Richard Branson" },
  { text: "Your most unhappy customers are your greatest source of learning.", author: "Bill Gates" },
  { text: "Creativity is thinking up new things. Innovation is doing new things.", author: "Theodore Levitt" },
  { text: "Innovation is seeing what everybody has seen and thinking what nobody has thought .", author: "Dr Albert" }
];

const evently = () => {
  return (
    <div className='p-6 min-h-screen'>
          <h1 className="text-3xl font-bold mb-6">Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-9">
           <Card>
          <CardContent>
            <img src="/hackathon.png" alt="hackathon" className='w-20 mx-4 my-3 hover:scale-110 transition-all duration-300' />
                      <h2 className="text-4xl font-semibold text-white my-2 hover:text-black transition-all duration-300">Hackathons</h2>
                         <div className='flex items-end'>
                         <button className="p-4 bg-indigo-700 rounded-3xl font-bold text-white hover:scale-110 transition-all duration-300 hover:bg-orange-500"><Link href="/events" >Hackentine 2025</Link></button>
                         </div>
                </CardContent>
           </Card>
           <Card>
          <CardContent>
          <img src="/workshop.png" alt="hackathon" className='w-20 mx-4 my-3 hover:scale-110 transition-all duration-300' />
               <h2 className="text-4xl text-white font-bold my-2 hover:text-black transition-all duration-300">Workshops</h2>
               <button className="p-4 bg-indigo-700 rounded-3xl font-bold text-white hover:scale-110 transition-all duration-300 hover:bg-orange-500">0</button>
             </CardContent>
           </Card>
      </div> 
      <div className="flex items-center justify-center min-h-screen ">
      <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {quotes.map((quote, index) => (
          <div 
            key={index} 
            className="bg-white shadow-xl rounded-xl p-6 flex flex-col justify-between transform hover:scale-105 transition-all duration-300 border-l-4 border-blue-500 hover:border-purple-500"
          >
            <p className="text-lg font-semibold text-gray-800">"{quote.text}"</p>
            <span className="block text-right text-gray-500 text-sm mt-4">- {quote.author}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default evently
