import GradientText from '../../blocks/TextAnimations/GradientText/GradientText'
import CountUp from '../../blocks/TextAnimations/CountUp/CountUp'
import SplitText from "../../blocks/TextAnimations/SplitText/SplitText";
import RotatingText from '../../blocks/TextAnimations/RotatingText/RotatingText'

export const Hero = () => {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    return (
        <>
            <div className="container  w-[80%] flex h-screen font-[Poppins]">
                {/* Left Section */}
                <div className="left mt-64 w-[50%]">
                    {/* Heading Text */}
                    <div className="head">
                        {/* <h1 className="text-5xl font-semibold">I'm Danish Shamshee</h1> */}
                        <GradientText
                            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                            animationSpeed={3}
                            showBorder={false}
                            className="custom-class ml-0 text-5xl font-semibold"
                        >
                            Danish Shamshee
                        </GradientText>

                        {/* <SplitText
                            text="a Web Developer"
                            className="text-3xl font-semibold"
                            delay={150}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            easing="easeOutCubic"
                            threshold={0.2}
                            rootMargin="-50px"
                            onLetterAnimationComplete={handleAnimationComplete}
                        /> */}

                        <RotatingText
                            texts={['a Web Developer', 'Cloud Architect!']}
                            mainClassName="px-2 sm:px-2 md:px-3 ml-0 text-3xl font-semibold w-[300px] text-black overflow-hidden py-0.5 sm:py-1 md:py-1 justify-start rounded-lg"
                            staggerFrom={"first"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={3000}
                        />
                        {/* <h2 className="text-3xl font-semibold">a Web Developer</h2> */}
                        <p className="mt-4">Transforming ideas into elegant solutions through creative design and innovative development</p>
                    </div>
                    {/* Buttons */}
                    <div className="btnn mt-8">
                        <button className="border-1 cursor-pointer font-semibold bg-orange-600 text-white border-orange-600 px-5 rounded-full py-2">View My Work</button>
                        <button className="border-1 cursor-pointer font-semibold hover:bg-orange-600 hover:text-white border-orange-600 px-5 rounded-full py-2 ml-5">Let's Connect</button>
                    </div>
                    <div className="end flex gap-10 mt-6">
                        <div>
                            <h1 className="text-4xl font-bold">
                                <CountUp
                                    from={0}
                                    to={20}
                                    separator=","
                                    direction="up"
                                    duration={1}
                                    className="count-up-text"
                                />+
                            </h1>
                            <h2 className="">Minor Projects</h2>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold">
                                <CountUp
                                    from={0}
                                    to={15}
                                    separator=","
                                    direction="up"
                                    duration={1}
                                    className="count-up-text"
                                />+
                            </h1>
                            <h2>Major Projects</h2>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                {/* <div className="right mt-42 w-[50%] h-auto relative">
                    <img className="" src="./images/head_shape1.png" alt="" />
                    <img className="" src="./images/profile-1.webp" alt="" />
                </div> */}
                <div className="right mt-42 w-[50%] h-auto relative">
                    {/* Background Image */}
                    <img
                        className="absolute inset-0 w-full h-full object-cover"
                        src="./images/head_shape1.png"
                        alt="Background"
                    />

                    {/* Foreground Image */}
                    <img
                        className="relative z-10 w-full h-auto"
                        src="./images/profile-1.webp"
                        alt="Profile"
                    />
                </div>
            </div>
        </>
    )
}