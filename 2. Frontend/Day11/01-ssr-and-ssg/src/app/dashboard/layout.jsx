import Header from "@/components/Header";

export default function Layout({ children, conversion, revenue, visitor }) {
    return (
        <div>
            <Header />
            {children}
            {conversion}
            {revenue}
            {visitor}
        </div>
    )
}