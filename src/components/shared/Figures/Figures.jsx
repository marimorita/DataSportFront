import React, { useContext } from 'react'
import { useLocation } from 'wouter'
import { StateContext } from '../../Context/Context';



export const Usertype = ({ name, customClassName }) => {
    const [location, setLocation] = useLocation();
    const { userObservation, setUserObservation } = useContext(StateContext);
    console.log("nombre Home",userObservation);
    

    return (
        <div className='flex justify-center items-center my-[3rem] cursor-pointer'>
            <div className={`${customClassName} w-[50rem] h-[15rem] rounded-[20px] flex items-center shadow-2xl gap[4rem]`}>
                <svg width="282" height="250" viewBox="0 0 282 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M58.2046 226.35L58.0918 221.1C58.0918 220.65 57.3022 175.8 56.851 130.9C56.0614 38.6996 57.5278 36.3496 58.8814 34.2996C60.6298 31.5496 62.6038 28.4496 125.997 25.2996C153.915 23.8996 192.437 22.8496 208.849 24.4496C214.263 24.9496 219.283 25.7996 220.693 29.8996C222.836 36.1496 221.595 165.45 220.975 220.75L220.919 226L58.2046 226.35ZM66.1006 40.6996C64.5214 57.5496 65.5366 153.8 66.6082 216.7L212.346 216.35C213.079 149.45 213.756 52.9996 212.684 35.1996C204.563 34.0996 176.419 33.8496 139.251 35.3496C103.719 36.7996 74.1658 39.0996 66.1006 40.6996Z" fill="#F2EBEB" />
                    <path d="M217.815 106.55H64.125V113.4H217.815V106.55Z" fill="#F2EBEB" />
                    <path d="M160.852 58.2998C163.22 60.5498 165.589 62.8998 167.845 65.2498C170.158 67.5998 172.357 69.9498 174.613 72.3498C176.869 74.7498 179.012 77.1498 181.212 79.5998C183.412 82.0498 185.498 84.4998 187.529 86.9998C185.16 84.7498 182.791 82.4498 180.535 80.0998C178.223 77.7498 176.023 75.3998 173.767 72.9998C171.511 70.5998 169.368 68.1998 167.225 65.7498C165.082 63.2498 162.938 60.7998 160.852 58.2998Z" fill="#FE7A36" />
                    <path d="M180.535 58.2998C182.34 59.9998 184.088 61.6998 185.78 63.4998C187.472 65.2498 189.108 67.0498 190.744 68.8498C192.379 70.6498 193.958 72.4998 195.538 74.3498C197.117 76.1998 198.64 78.0998 200.106 79.9998C198.301 78.2998 196.553 76.5998 194.861 74.7998C193.169 72.9998 191.533 71.2498 189.898 69.4498C188.262 67.6498 186.683 65.7998 185.104 63.9498C183.524 62.0998 182.002 60.2498 180.535 58.2998Z" fill="#FE7A36" />
                    <path d="M236.879 144.05C240.827 141.25 244.324 138 247.313 134.4C250.246 130.8 252.615 126.75 253.63 122.45C254.137 120.3 254.307 118.1 254.081 115.9C253.855 113.7 253.235 111.55 252.333 109.55C251.881 108.5 251.374 107.5 250.753 106.55C250.189 105.6 249.513 104.65 248.779 103.8C248.103 102.95 247.2 102.2 246.185 101.65C245.226 101.1 244.098 101.05 243.083 101.5C242.068 102 241.278 102.8 240.827 103.7C240.319 104.65 239.981 105.7 239.925 106.75C239.868 107.8 240.094 108.85 240.827 109.5C241.222 109.8 241.729 109.95 242.237 109.95C242.519 109.95 242.801 109.95 243.083 109.9C243.365 109.85 243.647 109.8 243.929 109.7C246.241 109 248.328 107.8 250.02 106.2C250.866 105.4 251.599 104.55 252.276 103.65C252.953 102.75 253.573 101.75 254.025 100.75C255.999 96.6498 256.675 92.1498 255.999 87.7498C255.322 83.2998 253.799 78.9998 251.43 75.0498C253.968 78.9498 255.716 83.2498 256.506 87.6998C257.296 92.1998 256.675 96.8498 254.758 101.05C254.25 102.1 253.686 103.15 253.009 104.1C252.333 105.05 251.543 106 250.641 106.8C248.892 108.55 246.636 109.85 244.155 110.6C243.816 110.65 243.534 110.75 243.196 110.8C242.857 110.85 242.519 110.9 242.124 110.9C241.334 110.9 240.601 110.65 240.037 110.2C239.473 109.75 239.135 109.2 238.966 108.55C238.797 107.95 238.74 107.35 238.74 106.75C238.796 105.55 239.135 104.4 239.755 103.3C240.319 102.15 241.335 101.25 242.519 100.6C243.196 100.3 243.929 100.15 244.662 100.2C245.395 100.25 246.072 100.45 246.693 100.75C247.821 101.4 248.836 102.2 249.625 103.15C250.415 104.05 251.092 105.05 251.656 106.05C252.276 107.05 252.784 108.1 253.235 109.15C254.194 111.25 254.814 113.5 255.04 115.8C255.265 118.1 255.04 120.35 254.476 122.6C253.348 127.05 250.866 131.1 247.764 134.7C246.185 136.5 244.493 138.15 242.688 139.75C240.883 141.25 238.966 142.75 236.879 144.05Z" fill="#FE7A36" />
                    <path d="M47.2064 151.8C49.0112 147 50.2521 142 50.9853 137C51.3237 134.5 51.4364 131.95 51.3236 129.45C51.2672 128.85 51.2108 128.2 51.098 127.6L50.9289 126.65L50.7033 125.75L50.5904 125.3L50.4213 124.85C50.3085 124.55 50.2521 124.25 50.0829 123.95C49.8573 123.35 49.5753 122.8 49.2369 122.25C48.8985 121.7 48.5037 121.2 48.1089 120.7C47.6577 120.25 47.2064 119.8 46.6424 119.4L46.2476 119.1L46.0784 118.95L45.8529 118.85L45.0069 118.35C44.7249 118.2 44.3864 118.1 44.048 117.95C43.766 117.8 43.4277 117.7 43.0893 117.65L42.074 117.4L41.0024 117.15C40.2692 117 39.5925 116.8 38.9157 116.55C38.5773 116.45 38.2388 116.3 37.9004 116.15C37.562 116 37.2237 115.85 36.9417 115.7C36.3213 115.35 35.7009 115 35.0805 114.65C33.8961 113.85 32.8245 113 31.8093 112C31.3581 111.5 30.8505 111 30.4557 110.5L29.8353 109.7L29.2713 108.85C27.7485 106.65 26.6205 104.2 25.8873 101.7C25.1541 99.1996 24.9285 96.5496 25.1541 93.9996C25.2669 92.6996 25.6053 91.3996 26.1129 90.1496C26.6205 88.8496 27.5793 87.7496 28.7637 86.8996C29.3841 86.4996 30.1173 86.1996 30.9069 86.0496C31.3017 85.9496 31.6401 85.8996 32.0349 85.8996C32.4297 85.8996 32.7681 85.8996 33.1629 85.8996C34.6293 85.9996 36.0957 86.2496 37.5057 86.6496C40.3257 87.4496 42.8637 88.8496 45.0069 90.6496C46.0785 91.5496 47.0372 92.5996 47.714 93.7496C47.8832 94.0496 47.9961 94.3996 48.1089 94.6996C48.2217 95.0996 48.1652 95.4996 47.996 95.8496C47.8832 96.0496 47.6576 96.1996 47.432 96.2996C47.2064 96.3496 46.9809 96.3996 46.7553 96.3996C46.3605 96.3996 45.9657 96.3496 45.5709 96.1996C44.1045 95.7996 42.8637 94.9996 41.9049 93.9496C41.0025 92.8996 40.3821 91.7496 39.9873 90.4996C39.2541 87.9996 39.3105 85.3496 40.2129 82.8996C40.4385 82.2996 40.7769 81.6996 41.1717 81.1496C41.5665 80.5996 42.0176 80.0996 42.5816 79.6996C43.1456 79.2996 43.7661 78.9496 44.4993 78.7996C45.1761 78.6496 45.9092 78.5996 46.6424 78.6496C45.9092 78.5996 45.2324 78.6996 44.5556 78.8996C43.8788 79.0996 43.2585 79.4496 42.7509 79.8496C42.2433 80.2496 41.7921 80.7496 41.4537 81.2996C41.1153 81.8496 40.8333 82.3996 40.6077 82.9996C39.8181 85.3996 39.8181 87.9996 40.6077 90.3996C41.0025 91.5996 41.6229 92.6996 42.4689 93.6996C43.3149 94.6496 44.4993 95.3496 45.8529 95.6996C46.1349 95.7996 46.4732 95.8496 46.8116 95.8496C47.0936 95.8496 47.3192 95.7496 47.432 95.5996C47.5448 95.3996 47.5448 95.1496 47.432 94.8996C47.3756 94.5996 47.2064 94.3496 47.0936 94.0996C46.4168 93.0496 45.5145 92.0496 44.4993 91.2496C42.4125 89.5496 39.9872 88.2996 37.3364 87.4996C35.9828 87.0996 34.6293 86.8996 33.2193 86.7996C32.8809 86.7996 32.5425 86.7996 32.2041 86.7996C31.8657 86.7996 31.5273 86.8496 31.2453 86.8996C30.6249 87.0496 30.0045 87.2996 29.4969 87.5996C28.4253 88.3496 27.6921 89.3496 27.2409 90.4496C26.7333 91.5996 26.4513 92.7996 26.2821 93.9996C26.1129 96.4996 26.3385 98.9996 27.0717 101.4C27.7485 103.85 28.8201 106.15 30.2301 108.3L30.7941 109.1L31.4145 109.85C31.8093 110.4 32.2605 110.85 32.7117 111.3C33.6141 112.25 34.6857 113.05 35.7573 113.8C36.3213 114.15 36.8853 114.5 37.5057 114.85C37.7877 115 38.126 115.15 38.408 115.3C38.69 115.45 39.0285 115.6 39.3669 115.7C39.9873 115.95 40.6641 116.15 41.3409 116.3L42.356 116.55L43.4276 116.85C43.766 116.95 44.1609 117.05 44.4429 117.2C44.7813 117.35 45.1196 117.45 45.458 117.65L46.4169 118.2L46.6424 118.35L46.868 118.5L47.3193 118.8C47.8833 119.25 48.3908 119.7 48.842 120.25C49.2932 120.8 49.6316 121.35 49.97 121.95C50.3084 122.55 50.5904 123.15 50.816 123.75C50.9288 124.05 51.0416 124.35 51.1544 124.7L51.3236 125.15L51.4364 125.65L51.662 126.6L51.8313 127.55C51.944 128.2 51.944 128.85 52.0004 129.45C52.1132 132 51.944 134.55 51.5493 137.1C51.0981 139.65 50.5341 142.15 49.8009 144.6C49.0677 147 48.1652 149.4 47.2064 151.8Z" fill="#FE7A36" />
                    <path d="M212.404 170.45C212.404 170.45 187.08 128.05 140.945 140.8C116.749 147.5 83.1914 216.3 83.1914 216.3H212.404V170.45Z" fill="#FE7A36" />
                    <path d="M167.285 141.55C167.285 141.55 156.738 88.9 152.96 88C149.181 87.1 120.191 93.25 119.853 96.7C118.499 110.95 111.618 118.3 116.751 119.65C121.319 120.85 123.857 119.15 123.857 119.15C123.857 119.15 125.606 132.85 129.272 133.65C132.938 134.45 138.521 132.65 138.521 132.65L136.773 151.6C136.773 151.55 160.686 143.05 167.285 141.55Z" fill="#EA8383" />
                    <path d="M144.95 114.25C144.95 114.25 158.712 126 162.039 125.5C165.367 125 158.26 86.8 155.553 85C152.846 83.2 120.472 76.05 116.017 78.2C111.561 80.35 117.54 85.3 117.54 85.3C117.54 85.3 105.583 84.45 104.173 88.9C102.763 93.35 115.227 94.9 120.924 95.6C126.62 96.3 137.9 94.1 137.9 94.1C137.9 94.1 135.306 103.05 136.716 104.65C138.126 106.25 142.243 107.75 142.243 107.75C142.243 107.75 143.653 100.85 147.488 102.55C151.323 104.25 149.744 114.25 144.95 114.25Z" fill="#A04040" />
                    <path d="M136.207 116.55C136.432 117.05 136.545 117.55 136.489 118.1C136.489 118.65 136.319 119.15 136.037 119.65C135.755 120.15 135.248 120.6 134.684 120.85C134.12 121.05 133.443 121.05 132.879 120.85C133.387 120.7 133.838 120.45 134.233 120.15C134.571 119.85 134.853 119.5 135.079 119.15C135.304 118.75 135.473 118.35 135.643 117.9C135.812 117.55 135.981 117.05 136.207 116.55Z" fill="#000001" />
                    <path d="M133.329 102.15C133.442 101.5 133.217 100.8 132.765 100.3C132.314 99.7998 131.694 99.3998 131.017 99.1998C130.34 98.9998 129.551 98.9998 128.874 99.1998C128.197 99.3998 127.577 99.7998 127.238 100.4C127.802 100.65 128.366 100.85 128.987 101.05C129.494 101.2 129.889 101.35 130.284 101.45C131.073 101.6 131.863 101.8 133.329 102.15Z" fill="#000001" />
                    <path d="M148.222 130.9C146.756 131.45 145.177 131.9 143.654 132.3C142.075 132.7 140.552 133.05 138.973 133.3C137.393 133.6 135.758 133.8 134.179 133.9C133.389 133.95 132.543 133.95 131.753 133.95C130.907 133.95 130.118 133.8 129.328 133.6C130.907 133.55 132.487 133.4 134.066 133.1C135.645 132.85 137.224 132.6 138.747 132.3C140.27 132 141.905 131.75 143.485 131.5C145.064 131.3 146.643 131.1 148.222 130.9Z" fill="#000001" />
                    <path d="M125.832 109.85C125.832 109.3 125.945 108.8 126.17 108.3C126.396 107.8 126.791 107.35 127.242 107C127.75 106.6 128.37 106.4 128.99 106.35C129.611 106.35 130.231 106.55 130.682 106.9C130.175 106.9 129.611 106.95 129.103 107.1C128.652 107.25 128.257 107.45 127.919 107.75C127.524 108.05 127.186 108.35 126.847 108.7C126.622 109.05 126.283 109.45 125.832 109.85Z" fill="#000001" />
                    <path d="M100.167 167.75C100.167 167.75 108.796 154.9 117.651 150.75C126.505 146.6 116.353 144.25 108.965 146.8C108.965 146.8 110.375 130.6 112.518 126.8C114.661 123 103.438 120.65 100.843 138.1C100.843 138.1 100.843 129.2 101.577 125.25C102.31 121.3 96.1623 118.8 93.5115 127.4C92.0451 132 90.9735 136.7 90.1839 141.45C90.1839 141.45 89.8455 131.7 91.0863 128.75C92.3271 125.8 85.7283 123.5 82.4571 133.45C79.1859 143.4 80.9907 160.95 81.0471 162.95C81.1035 164.95 100.167 167.75 100.167 167.75Z" fill="#EA8383" />
                    <path d="M94.7537 153.25C94.4153 151.85 94.7537 150.35 95.6561 149.15C95.8817 148.85 96.1637 148.55 96.4457 148.3C96.7841 148.05 97.0661 147.85 97.4045 147.6C97.7429 147.35 98.1377 147.25 98.4761 147.05C98.8709 146.9 99.2093 146.75 99.6041 146.65C99.7733 146.6 99.9989 146.55 100.168 146.5L100.732 146.4C101.127 146.35 101.522 146.25 101.917 146.2L103.101 146.15C103.496 146.1 103.891 146.1 104.285 146.15C105.075 146.2 105.865 146.25 106.598 146.35C107.387 146.5 108.121 146.6 108.854 146.8C108.064 146.85 107.275 146.85 106.541 146.85C106.147 146.85 105.808 146.85 105.413 146.9L104.285 146.95C103.552 147 102.819 147.1 102.029 147.15C101.691 147.2 101.296 147.3 100.958 147.35L100.394 147.45C100.225 147.5 100.055 147.55 99.8861 147.6C97.0097 148.35 94.9229 150.6 94.7537 153.25Z" fill="#000001" />
                    <path d="M100.845 215.4C102.029 208.45 100.168 167.75 100.168 167.75L81.1049 163L66.3281 194.3L66.7229 216.7L100.845 215.4Z" fill="#FE7A36" />
                </svg>
                <div className='flex flex-col text-center text-[#F0ECE3] ml-[2rem]'>
                    {userObservation.map(userName => (
                        <h1 className='text-[40px]'>¡Hola {userName.name}!</h1>
                    ))
                    }
                    <p className='w-[25rem] text-[20px] text-[#cacac9]'>Espero que estes teniendo un gran día, ¿hoy que tienes en mente? </p>
                </div>
            </div>
        </div>
    )
}