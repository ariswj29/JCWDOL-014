"use client";

import { useRouter } from "next/navigation";

export default function Page(){
    const router = useRouter();

    function handleSubmit(e){
        e.preventDefault();
        router.push("/")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}