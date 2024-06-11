export default function Page(){
    const indexError = Math.round(Math.random());
    if(indexError){
        throw new Error("500 Error");
    }

    return (
        <div>
            <h1>Hot NEWS Page</h1>
            <h2 style={{color: "red"}}>This is first page</h2>
            <p>Hot news content</p>
            <h2 style={{color: "red"}}>This is second page</h2>
            <p>Hot news content</p>
            <h2 style={{color: "red"}}>This is third page</h2>
            <p>Hot news content</p>
        </div>
    )
}