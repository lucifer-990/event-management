'use client';

import Link from "next/link";
import { useState } from "react";

// const defaultFormData = {
//     email: '',
//     name: '',
//     password: '',
// }


function Auth() { 

    const inputStyles = "border border-gray-300 sm:text-sm text-black rounded:lg block w-full p-2.5 focus:outline-non rounded-lg ";
        const [name, setName] = useState("");
        const [password, setPassword] = useState("");
        const [email, setEmail] = useState("");
    
    
        return (
            <section className="container mx-auto">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
                    <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">Create an account</h1>
                        
                    </div>
                    <form className="space-y-4 md:space-y-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="subhajit"
                            required
                            className={inputStyles}
                              value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
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
                        <button type="submit"
                            className="w-full bg-tertiary-light focus:outline-none font-bold rounded-lg text-sm px-5 py-2.5 text-center"
                        ><Link href="/home">login</Link>
                        </button>
                        <button className="text-blue-500 underline font-bold">
                            <Link href="/login">login</Link>
                        </button>
                    </form>
                </div>
            </section>
        )
};
export default Auth;
