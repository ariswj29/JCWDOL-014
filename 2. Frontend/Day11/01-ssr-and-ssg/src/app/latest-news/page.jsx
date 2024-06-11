export default async function Page(){
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });

    return (
        <div>
            <h1>Latest NEWS Page</h1>
        </div>
    )
}