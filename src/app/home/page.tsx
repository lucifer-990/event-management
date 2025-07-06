'use client'
import { CheckIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";
import { useState, useEffect } from 'react';

const faqs = [
  {
    id: 1,
    question: 'Do i need to buy tickets to participate?',
    answer: '=> No its completely free'
  },
  {
    id: 2,
    question: 'Is the event family-friendly?',
    answer: '=> Absolutely! we have activities for all ages'
  },
  {
    id: 3,
    question: 'what is the refund policy',
    answer: '=> No refund'
  }
]
const tiers = [
  {
    name: 'Hackathons',
    id: 'tier-hackathon',
    href: '#',
    Price: 'Free',
    description: "Experience the magic of hackathon, Learn, Innovate",
    features: ['Step into the Spotlight', '2k participations', 'Innovative Ideas', '24-hour brainstorming'],
    featured: false,
  },
  {
    Price: 'Free',
    id: 'tier-workshops',
    href: '#',
    name: 'Workshops',
    description: 'Dedicated support staff and Teachers in Makaut.',
    features: [
      'Inspiring Speakers',
      'Talks with industry leaders',
      'Exciting giveaways',
      'Dedicated support representative',
      'Hands-on practise',
    ],
    featured: true,
  }
]
const sponsors = [
  { name: "coding ninja", logo: "/coding-ninja.svg" },
  { name: "google", logo: "/google.svg" },
  { name: "leetcode", logo: "/leetcode.svg" },
  { name: "SBI", logo: "/sbi.svg" },
]

const images = [
  '/event1.jpeg',
  '/event2.jpeg',
  '/event3.jpeg',
  '/event4.jpeg',
];

const feedback = [
  { text: "Amazing experience! Can't wait for the next event.", author: "Suporno Maiti" },
  { text: "Loved the atmosphere and the people.", author: "Sayan Borai" },
  { text: "A truly unforgettable event. Highly recommended!", author: "Dipon Mitra" },
  { text: "Incredible speakers and a fantastic atmosphere. Highly recommended!", author: "Arghya Ray" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
} 

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <button
        className='w-full flex justify-between items-center text-left text-lg font-medium'
        onClick={() => setOpen(!open)}
      >{faq.question}
        <ChevronDownIcon className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="mt-2">{faq.answer}</p>}
    </div>
  );
}

 function Highlights() {
  const [current, setCurrent] = useState(0);
  const [feedbackIndex, setFeedbackIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    const feedbackInterval = setInterval(() => {
      setFeedbackIndex((prev) => (prev + 1) % feedback.length);
    }, 5000);
    return () => clearInterval(feedbackInterval);
  }, []);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Event Highlights</h2>
      <div className="relative w-full h-64 overflow-hidden rounded-2xl shadow-lg">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[current]}
            src={images[current]}
            alt="Event Highlight"
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full cursor-pointer" onClick={prevSlide}>
        <ChevronLeftIcon className="text-white" />
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full cursor-pointer" onClick={nextSlide}>
        <ChevronRightIcon className="text-white" />
      </div>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${current === index ? 'bg-blue-500' : 'bg-gray-400'}`}
          />
        ))}
      </div>
      <div className="mt-10 text-center">
        <h3 className="text-xl font-semibold">What People Say</h3>
        <AnimatePresence mode="wait">
          <motion.p
            key={feedback[feedbackIndex].text}
            className="mt-4 text-lg italic"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8 }}
          >
            "{feedback[feedbackIndex].text}"<br />
            <span className="text-sm font-bold">- {feedback[feedbackIndex].author}</span>
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}



const Home = () => {
  return (
    <section className="container mx-auto">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-[100%] md:w-[70%] mx-auto">
        <div className="flex items-center justify-between gap-6">
          <div className="space-y-4 md:space-y-6">
            <h1 className=" text-5xl font-extrabold tracking-tighter text-pretty"
            >Welcome to <span className="text-red-500 text-5xl font-extrabold text-pretty p-4 my-5">makaut10X</span> event website</h1>
            <p className="font-bold">Event planning made easier for everyone</p>
            <button className=" mt-8 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 text-2xl px-6 py-3 font-bold animate-bounce transition"><Link href="/evently">events</Link></button>
          </div>
          <img src="/hero.png" width="600" height="600" alt="bg img" className='hover:scale-110 transition-all duration-300'/>
        </div>
      </div>
      <div className="container relative isolate px-6 py-24 sm:py-32 lg:px-8">
        <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36">
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">EventX</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance  sm:text-6xl">
            "Discover, Connect, Celebrate"
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty  sm:text-xl/8">
          From inspiring keynote speakers to hands-on workshops, EventX is designed to entertain, inspire whether you are a student or a teacher.
        </p>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white sm:mx-8 lg:mx-0',
                tier.featured
                  ? ''
                  : tierIdx === 0
                    ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                    : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
                'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
              )}
            >
              <h3
                id={tier.id}
                className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'text-base/7 font-semibold')}
              >
                {tier.Price}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span
                  className={classNames(
                    tier.featured ? 'text-white' : 'text-gray-900',
                    'text-5xl font-semibold tracking-tight',
                  )}
                >
                  {tier.name}
                </span>
              </p>
              <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7')}>
                {tier.description}
              </p>
              <ul
                role="list"
                className={classNames(
                  tier.featured ? 'text-gray-300' : 'text-gray-600',
                  'mt-8 space-y-3 text-sm/6 sm:mt-10',
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'h-6 w-5 flex-none')}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? 'bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500'
                    : 'text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600',
                  'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 ',
                )}
              >
                Register now
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className='max-w-5xl mx-auto p-6 space-y-12'>
        <div>
          <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} />
            ))}
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Our Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="p-4 rounded-lg shadow-md">
                <img src={sponsor.logo} alt={sponsor.name} className="h-16 mx-auto" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <Highlights/>
        </div>
      </div>
    </section>
  );
}
export default Home;