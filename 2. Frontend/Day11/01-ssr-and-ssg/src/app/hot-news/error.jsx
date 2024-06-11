"use client";

export default function Error({error, reset}) {
    return (
        <div>
            <h1>{error.message}</h1>
            <button onClick={reset}>Go back</button>
        </div>
    )
}