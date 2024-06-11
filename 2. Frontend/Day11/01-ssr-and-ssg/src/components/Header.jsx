import Link from "next/link";

export default function Header() {
    return (
        <div style={{backgroundColor: "skyblue"}}>
            <h1>Header</h1>
            <ul style={{display: "flex", listStyle: "none"}}>
                <li style={{marginRight: "10px"}}><Link href="/">Home</Link></li>
                <li style={{marginRight: "10px"}}><Link href="/hot-news">Hot News</Link></li>
                <li style={{marginRight: "10px"}}><Link href="/latest-news">Latest News</Link></li>
                <li style={{marginRight: "10px"}}><Link href="/register">Register</Link></li>
                {/* <li style={{marginRight: "10px"}}><Link href="/latest-news">404</Link></li> */}
            </ul>
        </div>
    )
}