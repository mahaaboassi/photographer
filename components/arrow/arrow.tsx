type Props = {
    isRotate : boolean
}
const Arrow = ({isRotate}:Props)=>{
    return( <div className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px]  flex justify-center items-center arrow">
                <svg style={isRotate?{rotate:"180deg"}:{}} xmlns="http://www.w3.org/2000/svg" width="33" height="26" viewBox="0 0 33 26" fill="none">
                    <g clipPath="url(#clip0_742_94)">
                    <path d="M27.8253 13.8362L0.000212861 13.8015L0.000213438 11.6011L27.5522 11.635L16.6516 1.62342L18.1329 0.0010538L32.1367 12.8636L18.4159 25.4399L16.9346 23.8176L27.8253 13.8362Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_742_94">
                    <rect width="32.1365" height="25.4414" fill="white" transform="translate(32.1367 25.4414) rotate(-180)"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>)
}
export default Arrow