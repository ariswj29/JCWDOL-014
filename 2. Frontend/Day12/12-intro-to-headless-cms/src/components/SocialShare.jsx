"use client";

import Link from "next/link";
import { FaSquareFacebook, FaSquareTwitter, FaSquareLinkedin, FaSquareWhatsapp, FaCopy } from "react-icons/fa";

export default function SocialShare({size, text}) {
    const url = window.location.href;

    return (
        <div className="flex items-center space-x-4">
            <ul>
                <li>
                    <FaCopy size={size} onClick={() => navigator.clipboard.writeText(url)} />
                </li>
                {[
                    [
                        <FaSquareFacebook size={size} />,
                        `https://www.facebook.com/sharer/sharer.php?u=${url}`,
                    ],
                    [
                        <FaSquareTwitter size={size} />,
                        `https://twitter.com/intent/tweet?url=${url}`,
                    ],
                    [
                        <FaSquareLinkedin size={size} />,
                        `https://www.linkedin.com/shareArticle?mini=true&url=${url}`,
                    ],
                    [
                        <FaSquareWhatsapp size={size} />,
                        `https://api.whatsapp.com/send?text=${url}`,
                    ]
                ].map(([icon, link], index) => (
                    <li key={index} className="inline-block">
                        <Link href={link} target="_blank">
                            {icon}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}