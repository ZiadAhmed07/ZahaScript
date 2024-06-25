
import "./styleloader.css"

export default function Loader() {
    return (
        <div className=" w-full h-screen fixed flex items-center justify-center flex-col top-0 right-0 z-[1000] bg-gray-900/80 gap-6">
            <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
                <div className="wheel"></div>
                <div className="hamster">
                    <div className="hamster__body">
                        <div className="hamster__head">
                            <div className="hamster__ear"></div>
                            <div className="hamster__eye"></div>
                            <div className="hamster__nose"></div>
                        </div>
                        <div className="hamster__limb hamster__limb--fr"></div>
                        <div className="hamster__limb hamster__limb--fl"></div>
                        <div className="hamster__limb hamster__limb--br"></div>
                        <div className="hamster__limb hamster__limb--bl"></div>
                        <div className="hamster__tail"></div>
                    </div>
                </div>
                <div className="spoke"></div>
            </div>
            <h3 className="text-lg text-gray-200">Loading...</h3>
        </div>
    )
}
