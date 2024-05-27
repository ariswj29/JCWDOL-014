import logo from "../assets/logo.svg"

function Header(){ 
    const styleUl = "flex items-center gap-[32px] p-0 list-none"
    const styleLiA = "text-inherit decoration-none"
    const styleLiButton = "bg-transparent border-none text-inherit cursor-pointer"

    return(
        <header className="flex gap-[64px] items-center mb-[64px] w-[100%]">
            <div>
                <img src={logo} alt="Logo Image" />
            </div>
            <nav className="flex w-[100%] justify-between font-bold text-[16px] text-primary">
                <ul className={styleUl}>
                    <li><a className={styleLiA}>Features</a></li>
                    <li><a className={styleLiA}>Company</a></li>
                    <li><a className={styleLiA}>Careers</a></li>
                    <li><a className={styleLiA}>About</a></li>
                </ul>
                <ul className={styleUl}>
                    <li><button className={styleLiButton}>Login</button></li>
                    <li className="py-[12px] px-[16px] border-[1px] border-solid border-primary rounded-[13px]"><button className={styleLiButton}>Register</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header