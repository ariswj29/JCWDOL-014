import imgClientDatabiz from "../assets/client-databiz.svg"
import imgClientAudiophile from "../assets/client-audiophile.svg"
import imgClientMeet from "../assets/client-meet.svg"
import imgClientMaker from "../assets/client-maker.svg"
import imgHeroMobile from "../assets/image-hero-mobile.png"
import imgHeroDesktop from "../assets/image-hero-desktop.png"

function Main(){
    const styleImgClients = "w-[100%] h-[100%] object-contain" 

    return (
        <main className="mb-[64px]">
            <section className="flex items-stretch gap-[72px] m-0-auto max-w-[80%]">
                <div className="flex flex-1 flex-col justify-between pt-[96px]">
                    <h1 className="text-secondary text-[72px] font-bold leading-[1]">Make remote work</h1>
                    <p className="max-w-[80%] text-primary font-medium leading-[1.5]">
                        Get your team in sync, no matter your location. Streamline
                        processes, create team rituals, and watch productivity soar.
                    </p>
                    <button className="py-[16px] px-[24px] w-fit bg-secondary text-white border-none rounded-[12px]">
                        Learn More
                    </button>
                    <div className="flex gap-[32px] max-w-[15%]">
                        <img className={styleImgClients} src={imgClientDatabiz} alt="Logo Image" />
                        <img className={styleImgClients} src={imgClientAudiophile} alt="Logo Image" />
                        <img className={styleImgClients} src={imgClientMeet} alt="Logo Image" />
                        <img className={styleImgClients} src={imgClientMaker} alt="Logo Image" />
                    </div>
                </div>
                <div className="w-[450px]">
                    <picture className="w-[100%] h-[100%] ">
                        <source srcSet={imgHeroMobile} media="(max-width: 850px)" />
                        <img className="w-[100%] h-[100%] object-cover"  src={imgHeroDesktop} />
                    </picture>
                </div>
            </section>
        </main>
    )
}

export default Main