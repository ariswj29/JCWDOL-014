"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
    const router = useRouter();
    const [remainingTime, setRemainingTime] = useState(5);

    useEffect(() => {
        const timerId = setInterval(() => {
            if (remainingTime > 0) {
                setRemainingTime(remainingTime - 1);
            }else{
                clearInterval(timerId);
                router.back();
            }
        }, 1000);

        return () => {
            clearInterval(timerId);
        }
    }, [remainingTime]);

    return (
        <div>
            <h1>Ooops... There is nothing here. Go back in {remainingTime} seconds</h1>
        </div>
    )
}