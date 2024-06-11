import Header from "@/components/Header";

export default async function Layout({ children }) {
   
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });

    return (
        <html lang="en">
            <body>
                <Header />
                <div>
                    {children}
                </div>
            </body>
        </html>
    );
}