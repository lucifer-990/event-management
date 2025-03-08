'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const defaultFormData = {
    email: '',
    password: '',
}

const login = () => {

    const inputStyles = "border border-gray-300 sm:text-sm text-black rounded:lg block w-full p-2.5 focus:outline-non rounded-lg ";


    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    return (
        <section className="container mx-auto">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
                <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">Login to an existing account</h1>
                </div>
                <form className="space-y-4 md:space-y-6" onSubmit={login}>
                   
                    <input
                        type="email"
                        name="email"
                        placeholder="name@company.com"
                        required
                        className={inputStyles}
                          value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        required
                        minLength={6}
                        className={inputStyles}
                          value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        onClick={login}
                        className="w-full bg-tertiary-light focus:outline-none font-bold rounded-lg text-sm px-5 py-2.5 text-center">
                       <Link href="/home">login</Link> 
                    </button>
                </form>
            </div>
        </section>
    )
};

export default login;




