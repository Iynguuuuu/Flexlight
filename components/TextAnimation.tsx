import { TypeAnimation } from 'react-type-animation';


const TextAnimation = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Buidling Mangement System',
                1500, // wait 1s before replacing "Mice" with "Hamsters"
                'Wireless',
                1500,
                'Automation',
                1500,

            ]}

            speed={50}
            className='text-[2rem] md:text-[40px] text-cyan-300  font-bold uppercase'
            repeat={Infinity}
        />
    );
};

export default TextAnimation;
// text-[#b396e1]