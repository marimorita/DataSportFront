import React, { useContext } from "react";
import { Formslogadmin } from "../../shared/Forms/Forms";
import { useLocation } from "wouter";
import { ModalLogin } from "../../Modals/ModalLogin/ModalLogin";
import { StateContext } from "../../Context/Context";
import { FaRegCheckCircle } from "react-icons/fa";
import { ButtomHome } from "../../shared/Button/Buttons";

export const LoginAdmin = ({ Location }) => {
  const { loginAdmin, setLoginAdmin } = useContext(StateContext);
  const [location, setLocation] = useLocation();
  return (
    <>
      <div className="" onClick={() => setLocation(Location)}>
        <ButtomHome
          customClassName={
            "cursor-pointer text-[40px] text-[#1E1E1E] fixed left-[24rem] top-[7rem] z-20"
          }
        />
      </div>
      <div className="w-full h-full flex flex-1 items-center relative">
        <div>
          <svg
            className="w-[470px] rotate-180 h-[488px] fixed right-[-1rem] top-[22rem] "
            width="316"
            height="235"
            viewBox="0 0 316 235"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="cursor-pointer "
              onClick={() => setLocation("/login/KQWJ7482")}
              fill="url(#paint0_linear_425_3047)"
              transform="translate(0 0)"
            >
              <animate
                attributeName="d"
                dur="18000ms"
                repeatCount="indefinite"
                values="
              M271.652 79.8754C243.997 118.056 202.28 136.164 159.661 149.564C117.041 162.964 73.5195 171.656 31.5637 157.005C-10.4796 142.104 -50.7328 103.785 -72.6151 54.3203C-94.4973 4.85576 -97.697 -55.58 -75.6893 -97.7183C-53.5941 -139.607 -6.51553 -163.124 34.9907 -159.733C76.1853 -156.516 111.496 -126.565 159.099 -107.955C207.014 -89.1712 266.996 -81.654 290.216 -49.0558C313.299 -16.1337 299.394 41.9443 271.652 79.8754Z;
              M211.767 -2.82793C240.363 16.9551 268.155 46.7335 279.971 87.8888C291.793 129.276 287.638 182.039 260.385 199.783C232.912 217.533 182.334 200.03 138.932 193.908C95.5295 187.786 59.5237 193.037 33.9097 177.107C8.0684 160.951 -7.60843 123.39 -11.0243 82.9112C-14.6535 42.6706 -6.02166 -0.487628 18.4767 -21.8588C43.1883 -43.4682 83.9869 -43.2972 118.983 -38.0829C153.971 -33.1003 183.385 -22.8492 211.767 -2.82793Z;
              M111.192 -88.0835C148.094 -100.359 181.807 -112.931 211.452 -105.243C241.205 -97.199 266.771 -68.6459 281.159 -32.3267C295.774 4.09995 299.093 48.5409 284.008 88.5011C268.814 128.106 235.216 163.23 198.215 174.546C161.105 185.506 120.592 172.658 74.7532 157.586C29.0233 142.87 -22.3764 126.07 -36.5474 90.4624C-50.8363 55.1024 -27.8966 0.934259 3.3827 -31.6425C34.5534 -64.5749 74.4078 -76.0564 111.192 -88.0835Z;
              M229.3 2.85329C257.921 25.308 268.235 65.8339 256.242 96.342C244.026 126.999 209.261 147.957 176.502 165.676C143.725 183.565 112.509 198.512 85.2395 194.18C57.7473 189.997 33.9983 166.513 17.4658 143.292C0.933393 120.07 -8.3825 97.1103 -11.8059 69.4292C-15.2294 41.7482 -12.7603 9.34593 8.15105 -7.92511C29.0624 -25.1962 68.3977 -27.1651 111.306 -25.8091C154.215 -24.4532 200.901 -19.7501 229.3 2.85329Z;
              M257.247 0.271337C281.693 17.0715 284.627 47.2796 274.604 70.8645C264.336 94.4494 240.868 111.25 216.178 129.665C191.732 147.919 166.308 167.789 135.261 171.343C104.459 175.058 67.7897 162.62 36.0098 144.204C4.22983 125.95 -22.6609 101.719 -30.4836 72.4799C-38.5509 43.0796 -27.3056 8.5099 4.4743 -8.29031C36.2542 -24.929 88.5689 -23.9597 137.706 -21.8597C186.842 -19.7597 232.557 -16.5289 257.247 0.271337Z;
              M271.652 79.8754C243.997 118.056 202.28 136.164 159.661 149.564C117.041 162.964 73.5195 171.656 31.5637 157.005C-10.4796 142.104 -50.7328 103.785 -72.6151 54.3203C-94.4973 4.85576 -97.697 -55.58 -75.6893 -97.7183C-53.5941 -139.607 -6.51553 -163.124 34.9907 -159.733C76.1853 -156.516 111.496 -126.565 159.099 -107.955C207.014 -89.1712 266.996 -81.654 290.216 -49.0558C313.299 -16.1337 299.394 41.9443 271.652 79.8754Z
              "
              ></animate>
            </path>
            <defs>
              <linearGradient
                id="paint0_linear_425_3047"
                x1="148.737"
                y1="120.683"
                x2="28.7373"
                y2="-15.8165"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.15" stop-color="#692FDB" />
                <stop
                  offset="0.859857"
                  stop-color="#381975"
                  stop-opacity="0.6"
                />
              </linearGradient>
            </defs>
            <text
              className="pointer-events-none"
              x="30.5%"
              y="40%"
              fill="white"
              fontSize="24px"
            >
              uı̣ɯpɐ
            </text>
          </svg>
        </div>

        <svg
          className="w-[380px] h-[438px] absolute left-[4rem] bottom-[14rem] "
          width="1026"
          height="1000"
          viewBox="0 0 1026 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.18"
            d="M944.872 665.516C906.452 713.9 854.938 778.824 788.559 835.934C722.181 893.045 640.144 942.754 541.609 959.727C515.466 964.227 488.961 966.306 462.432 965.964C447.454 965.781 198.28 958.791 74.374 762.81C3.36618 650.416 -13.6539 529.342 77.3922 425.058C121.168 374.801 174.293 330.14 199.369 268.347C209.831 242.601 214.892 214.868 225.898 189.328C251.791 129.476 308.525 87.1004 370.092 67.3859C431.66 47.6713 498.106 48.3109 562.351 55.9637C643.707 65.6497 731.78 91.9206 775.193 161.847C802.765 206.256 807.758 261.585 833.265 307.205C853.69 343.595 885.96 371.762 920.431 394.949C948.412 413.773 979.434 431.18 996.046 460.695C1002.2 471.637 1006.37 483.585 1008.41 495.989C1018.38 556.092 979.525 621.884 944.872 665.516Z"
            fill="#692FDB"
          />
          <path
            d="M317.034 775C317.034 775 583.794 773 591.797 775.8C599.8 778.6 631.811 818.6 627.296 822.8C622.782 827 600.62 810.8 600.62 810.8C600.62 810.8 605.34 834.8 597.337 842.4C589.335 850 585.025 818.6 580.716 814.4C576.407 810.2 556.502 805 556.502 805C542.138 813.2 526.543 819.6 510.333 824C484.067 830.8 321.754 821.6 321.754 821.6L317.034 775Z"
            fill="#C77070"
          />
          <path
            d="M558.555 785C568.2 789.2 577.844 793.2 587.078 797.4C589.335 798.4 591.798 799.599 593.85 800.799C594.465 801.199 594.876 801.399 595.491 801.799L596.928 802.799C597.748 803.399 598.159 804.2 598.569 805.2C599.39 807.4 600.006 809.8 600.416 812.2C600.826 814.6 601.032 817.199 601.032 819.599C601.237 821.999 601.237 824.6 601.032 827C600.826 829.4 600.416 831.599 599.595 833.799C598.569 835.999 597.543 838.599 596.312 840.599C595.902 841.399 595.286 842.199 594.465 842.799C594.26 842.799 594.465 842.999 594.26 842.799C593.85 842.599 593.644 842.199 593.439 841.799C592.208 839.799 590.977 837.6 590.361 835.2C589.335 832.8 588.514 830.4 587.488 828C585.436 823.2 583.384 818.6 580.922 814C582.564 818.8 584.205 823.799 585.642 828.599L587.899 835.799C588.514 838.399 589.54 841 590.977 843.2C591.387 844 592.003 844.6 592.824 845C593.234 845.4 593.85 845.599 594.465 845.599C595.081 845.599 595.696 845.6 596.312 845.2C597.133 844.8 597.748 844.2 598.364 843.4C598.774 842.8 599.185 842.199 599.595 841.599C601.032 839.199 602.058 836.999 603.289 834.599C604.315 831.999 604.93 829.399 605.136 826.599C605.341 823.999 605.546 821.399 605.341 818.599C605.136 815.999 604.93 813.399 604.52 810.799C604.11 808.199 603.494 805.4 602.468 803C601.852 801.6 600.826 800.2 599.595 799.2L597.748 798L595.902 797C593.439 795.8 591.182 794.799 588.72 793.799C578.87 790.799 568.815 787.6 558.555 785Z"
            fill="#1E1E1E"
          />
          <path
            d="M380.238 891H185.914C185.914 891 61.1523 597.2 250.552 554C250.552 554 348.022 629.2 366.49 695.2C370.594 710.2 346.586 730.4 348.022 747.4C349.458 764.4 380.238 891 380.238 891Z"
            fill="#692FDB"
          />
          <path
            d="M287.692 475.8C307.801 478.8 379.621 488 379.621 488C379.621 488 370.592 420.6 340.428 414.6C310.263 408.6 287.692 475.8 287.692 475.8Z"
            fill="#1E1E1E"
          />
          <path
            d="M284.819 615C287.897 618.2 293.232 618.2 296.516 615.2C298.157 613.6 299.183 611.4 298.978 609.2C297.542 577.2 290.36 482.4 310.264 480.8C347.61 478 369.567 432.6 369.567 432.6C369.567 432.6 401.373 423.8 401.988 417C402.604 410.2 378.596 395.2 363.206 378.2C347.816 361.2 338.171 338.4 318.062 341.6C297.952 344.8 319.908 371.6 305.134 393.2C296.105 406.4 278.458 404.8 278.458 404.8C278.458 404.8 275.79 382 251.166 397C226.542 412 263.273 439.2 260.4 445C254.45 457.2 241.727 541.6 236.597 557C235.982 560 269.429 598.8 284.819 615Z"
            fill="#EA8383"
          />
          <path
            d="M310.056 400C310.056 400 341.452 386.8 353.559 408.6C353.353 408.4 320.727 421.8 310.056 400Z"
            fill="#F2EBEB"
          />
          <path
            d="M308.418 400C312.522 399 316.626 398.2 320.73 397.6C324.834 397 328.938 396.8 333.042 397.2C337.146 397.4 341.045 398.4 344.739 400C348.432 401.6 351.715 404.4 353.973 407.8C352.331 403.8 349.458 400.6 345.559 398.6C343.713 397.6 341.661 396.8 339.609 396.2C337.557 395.6 335.299 395.4 333.247 395.2C328.938 395 324.629 395.2 320.525 396.2C316.216 396.8 312.317 398.2 308.418 400Z"
            fill="#1E1E1E"
          />
          <path
            d="M339.195 396.999C339.195 396.999 330.576 399.799 335.706 412.399C335.706 412.399 356.432 410.799 353.559 406.999C353.354 406.999 346.377 396.199 339.195 396.999Z"
            fill="#1E1E1E"
          />
          <path
            d="M310.058 412.4C310.673 412.2 311.494 412 312.11 412C312.52 412 312.931 411.8 313.341 411.6C313.751 411.4 313.957 411 314.162 410.6C314.367 410 314.572 409.2 314.777 408.6C314.162 408.2 313.341 408 312.52 408C311.905 408 311.289 408.2 310.673 408.8C310.058 409.2 309.647 409.8 309.647 410.6C309.237 411 309.442 411.8 310.058 412.4Z"
            fill="#1E1E1E"
          />
          <path
            d="M318.675 415.999C319.291 415.799 320.112 415.599 320.727 415.199C321.138 414.999 321.548 414.599 321.958 414.399C322.164 413.999 322.369 413.599 322.574 413.199L322.984 411.199C322.369 410.599 321.343 410.599 320.522 410.799C319.086 411.199 318.06 412.399 318.06 413.799C317.854 414.599 318.06 415.399 318.675 415.999Z"
            fill="#1E1E1E"
          />
          <path
            d="M324.013 447.6C324.013 447.6 329.553 442.2 335.299 446.4C341.044 450.6 329.143 464.8 319.293 461.4C309.443 458 324.013 447.6 324.013 447.6Z"
            fill="#1E1E1E"
          />
          <path
            d="M323.602 438.6C322.165 441 321.755 443.6 321.96 446.4C322.165 449.2 323.396 452 325.243 454.2C327.09 456.4 329.552 458 332.22 458.8C333.451 459.2 334.887 459.6 336.119 459.8C337.555 460 338.786 460 340.223 459.8C339.197 459.2 337.965 458.4 336.734 458C335.708 457.4 334.477 456.8 333.656 456.2C327.5 452.2 323.807 445.6 323.602 438.6Z"
            fill="#1E1E1E"
          />
          <path
            d="M319.087 382.2C322.37 380.6 326.063 379.6 329.757 379C331.604 378.8 333.245 378.8 335.092 379C336.118 379 336.939 379.2 337.965 379.2C338.991 379.4 340.017 379.4 341.043 379.6C339.607 378 337.965 376.8 335.913 376C333.861 375.2 331.604 374.8 329.347 375.2C327.089 375.4 325.037 376.2 323.191 377.4C321.344 378.6 319.907 380.2 319.087 382.2Z"
            fill="#1E1E1E"
          />
          <path
            d="M334.684 340.6C334.684 340.6 313.343 406.4 266.557 425.6C266.557 425.6 304.314 452 294.054 474.4C283.794 496.8 321.346 530.8 317.036 548.8L113.068 481.2C113.068 481.2 139.333 427 179.552 432C219.772 437 174.217 385.6 223.876 350.6C273.534 315.6 334.684 340.6 334.684 340.6Z"
            fill="#1E1E1E"
          />
          <path
            d="M98.9074 478C101.985 473.6 105.474 469.6 109.167 465.8C112.656 461.8 116.555 458.2 120.659 454.8C128.661 447.8 137.895 442.2 147.95 438.4C158.005 434.6 168.881 433.6 179.346 435.2C184.681 436 189.811 437.6 194.736 439.8C197.198 440.8 199.661 442 201.918 443.2C204.38 444.4 206.432 446 208.895 447.2C200.276 440.6 190.427 435.8 179.551 433.6L175.447 432.8L171.343 432.6C169.907 432.6 168.675 432.6 167.239 432.6H165.187L163.135 432.8C157.595 433.2 152.259 434.4 147.129 436.4C136.869 440.4 127.635 446.2 119.633 453.4C111.63 460.6 104.653 469 98.9074 478Z"
            fill="#1E1E1E"
          />
          <path
            d="M334.684 340.6C332.221 346.6 329.554 352.6 326.681 358.4C323.808 364.2 320.525 370 317.242 375.4C310.675 386.4 302.467 396.6 293.028 405.6C288.308 410 283.178 413.8 277.638 417.2C272.098 420.4 265.942 422.8 259.786 424.4C246.858 427.4 233.52 427 220.798 423.4L225.517 425L227.98 425.8C228.8 426 229.621 426.2 230.442 426.4L235.367 427.6L240.292 428.4C247.063 429.2 253.835 429 260.606 427.6C267.378 426.2 273.739 423.8 279.69 420.6C285.641 417.2 291.181 413.4 296.106 408.8C305.75 399.6 313.958 389 320.32 377.2C326.476 365.4 331.4 353.2 334.684 340.6Z"
            fill="#1E1E1E"
          />
          <path
            d="M197.609 891C197.609 891 145.078 592.4 108.347 588.6C71.6166 584.8 115.119 888.4 115.119 888.4L197.609 891Z"
            fill="#F2EBEB"
          />
          <path
            d="M380.648 853.6C380.648 853.6 374.902 833.6 404.04 825.4C433.179 817.2 487.352 854 487.352 854L380.648 853.6Z"
            fill="#1E1E1E"
          />
          <path
            d="M811.362 371.399L830.445 414.799C830.445 414.799 698.091 737.399 694.603 745.399C691.115 753.399 655.82 756.599 655.82 756.599L811.362 371.399Z"
            fill="#1E1E1E"
          />
          <path
            d="M727.64 620.4L830.445 852L655.82 852.8C655.82 852.8 683.933 833.2 697.681 835.6C711.429 838 797.203 830.4 797.203 830.4L715.328 650.4L727.64 620.4Z"
            fill="#1E1E1E"
          />
          <path
            d="M635.301 852.799L627.708 839H525.108L507.256 852.799H635.301Z"
            fill="#1E1E1E"
          />
          <path
            d="M932.43 846.8L347.815 853.6L327.705 890.6H924.427L932.43 846.8Z"
            fill="#F2EBEB"
          />
          <path
            d="M273.943 441.8C273.943 441.8 274.559 404.8 255.065 399.2C235.571 393.6 223.259 443.8 238.239 461.8C253.218 479.8 274.354 468.6 273.943 441.8Z"
            fill="#F25200"
          />
          <path
            d="M257.939 405.399C259.375 410.199 260.607 414.999 261.633 419.599C262.659 424.199 263.685 428.999 264.095 433.799C264.505 436.199 264.505 438.599 264.505 440.999C264.505 443.399 264.505 445.799 264.3 448.199C263.685 452.999 262.453 457.599 260.196 461.999C263.89 458.399 266.352 453.799 267.378 448.799C268.404 443.799 268.815 438.599 268.199 433.599C267.583 428.599 266.352 423.599 264.711 418.999C263.069 413.999 260.812 409.399 257.939 405.399Z"
            fill="#1E1E1E"
          />
          <path
            d="M333.86 466.8C333.86 466.8 240.904 445.6 241.725 439.4C242.546 433.2 245.419 432.4 250.344 433.6C255.268 434.8 334.681 461.8 334.681 461.8C334.681 461.8 334.065 457.2 349.66 461.8C365.256 466.4 366.487 468.8 363.819 473.4C361.152 478 334.065 472.2 333.86 466.8Z"
            fill="#F25200"
          />
          <path
            d="M331.4 480C326.475 480.2 298.978 484.6 298.978 484.6C298.978 484.6 295.9 470.2 297.542 465.8C299.183 461.4 320.114 457.4 318.883 449C317.651 440.6 285.025 450.4 283.999 454.2C283.999 454.2 283.383 427 277.637 430.4C271.892 433.8 265.941 484 266.762 490.4C267.583 496.8 280.305 521.2 280.305 521.2C280.305 521.2 327.296 567 327.296 573.8C327.296 580.6 266.762 808.4 266.762 808.4C266.762 808.4 359.307 930 379.417 797.4C381.058 786.6 367.925 581.6 367.925 581.6C367.925 581.6 370.183 556.4 365.258 548.8C360.333 541.2 331.81 501.2 331.81 501.2L342.686 494.4C342.686 494.4 364.027 503.4 361.975 497.4C359.923 491.4 346.379 478.6 341.249 478L331.4 480Z"
            fill="#EA8383"
          />
          <path
            d="M318.675 449.2C318.469 450.2 317.649 451.2 316.828 452C316.007 452.8 315.186 453.4 314.16 454C312.313 455.2 310.261 456.4 308.415 457.6C306.568 458.8 304.516 459.8 302.464 461L296.513 464.4L295.282 465L295.487 466.2C295.897 469.6 296.308 473 296.923 476.4C297.539 479.8 298.155 483.2 299.181 486.6C299.591 483.2 299.796 479.8 299.796 476.2C299.796 472.8 299.796 469.4 299.591 466L298.565 467.8C302.874 465.6 306.773 463.2 310.672 460.4C312.519 459 314.365 457.4 316.007 455.6C316.828 454.8 317.649 453.8 318.264 452.8C318.469 451.6 318.88 450.4 318.675 449.2Z"
            fill="#1E1E1E"
          />
          <path
            d="M312.316 446C307.186 445.6 301.851 446 296.926 446.8C294.259 447.2 291.796 447.8 289.129 448.6C287.692 449 286.461 449.6 285.23 450.4C284.614 450.8 283.999 451.2 283.383 451.8C282.973 452.2 282.768 452.4 282.562 452.8C282.357 453.2 282.152 453.6 281.947 454C281.126 456.6 280.716 459.2 280.51 461.8C280.305 464.4 280.1 466.8 280.1 469.4C280.1 474.4 280.305 479.4 281.126 484.4C282.152 479.4 282.768 474.4 283.383 469.6C283.794 467.2 283.999 464.6 284.409 462.2C284.614 459.8 285.23 457.6 285.846 455.4C286.051 454.8 286.666 454.2 287.487 453.6C288.513 453 289.539 452.6 290.565 452C292.822 451 295.285 450.4 297.542 449.6C302.467 448.4 307.392 447.4 312.316 446Z"
            fill="#1E1E1E"
          />
          <path
            d="M203.97 588.599C207.458 587.199 211.152 586.999 214.845 587.799C218.334 588.599 221.822 590 224.695 592.2C227.568 594.2 230.441 596.6 232.903 599.2C235.365 601.8 237.623 604.599 239.675 607.599C247.883 619.399 253.628 632.8 258.758 646.2C263.888 659.6 267.992 673.6 272.712 687.4C277.431 701.2 282.356 714.8 287.691 728.4C284.203 714.4 280.304 700.4 275.995 686.4C273.943 679.4 271.891 672.599 269.634 665.599C268.608 662.199 267.377 658.6 266.351 655.2C265.325 651.8 263.888 648.4 262.657 645C259.989 638.2 257.117 631.4 253.833 625C250.55 618.4 246.651 612 242.137 606.2C237.828 600.2 232.287 595 225.926 591C222.643 589 219.155 587.8 215.256 587.2C211.357 586.2 207.458 586.799 203.97 588.599Z"
            fill="white"
          />
          <path
            d="M220.589 563.799L241.315 538.399L300.207 589.399L297.129 640.399L220.589 563.799Z"
            fill="#692FDB"
          />
          <path
            d="M298.979 609.2C298.158 614.4 297.748 619.6 297.132 624.8C296.927 627.4 296.517 630 296.311 632.6L295.491 640.4L298.158 639.4C292.002 632.8 285.641 626.4 279.485 620C273.124 613.6 266.763 607.2 260.401 600.8C254.04 594.4 247.474 588.2 240.907 582C234.341 575.8 227.569 569.8 220.798 563.8C226.749 570.6 232.699 577.2 238.855 583.8C245.011 590.4 251.167 596.8 257.529 603.4C263.89 609.8 270.251 616.2 276.612 622.6C282.973 629 289.54 635.2 296.106 641.4L298.569 643.8V640.6L298.774 632.8C298.774 630.2 298.979 627.6 298.979 625C298.979 619.6 299.184 614.4 298.979 609.2Z"
            fill="white"
          />
          <path
            d="M436.051 508.2C434.82 505.8 433.178 503.8 430.921 502.2C428.869 500.6 426.817 499.2 424.56 498C422.302 496.8 420.045 495.6 417.583 494.8C415.12 493.8 412.658 493.2 409.99 492.8C411.837 494.6 413.889 496.2 415.941 497.6C417.993 499 420.25 500.4 422.302 501.6C424.354 502.8 426.817 504 429.074 505C431.331 506 433.794 507 436.051 508.2Z"
            fill="#F25200"
          />
          <path
            d="M446.723 479C445.286 478.2 443.85 477.8 442.208 477.6C440.567 477.4 439.13 477.2 437.694 477C434.616 476.8 431.538 476.6 428.46 476.6C425.382 476.6 422.304 476.8 419.226 477.2C416.148 477.6 413.07 478.2 410.197 479C413.275 479.6 416.353 480.2 419.431 480.2C422.509 480.4 425.587 480.4 428.665 480.4C431.743 480.4 434.821 480.2 437.899 480C439.335 479.8 440.977 479.6 442.413 479.6C443.645 479.2 445.081 479 446.723 479Z"
            fill="#F25200"
          />
          <path
            d="M409.991 465C411.633 465.4 413.274 465.6 414.916 465.4C416.558 465.4 417.994 465 419.635 464.8C421.277 464.4 422.714 464 424.15 463.2C425.586 462.6 427.023 461.6 428.254 460.6C426.612 460.2 424.971 460 423.329 460.2C421.687 460.2 420.251 460.6 418.609 461C417.173 461.4 415.531 461.8 414.095 462.6C412.659 463 411.222 463.8 409.991 465Z"
            fill="#F25200"
          />
          <path
            d="M734.206 222.4C734.206 222.4 760.061 293.8 725.177 314.6C690.293 335.4 567.584 316.8 547.269 322.2C526.954 327.6 513.821 352.6 503.972 341.2C494.327 329.8 480.784 256.4 524.697 214.6C568.61 172.8 705.068 175.4 734.206 222.4Z"
            fill="#692FDB"
          />
          <path
            d="M689.062 272.4C685.779 267.2 682.086 262.201 677.982 257.201C674.083 252.401 669.774 247.801 664.849 243.601C662.386 241.401 659.719 239.601 656.846 238.201C653.973 236.401 650.485 235.601 646.996 235.801C645.15 236.001 643.508 236.601 642.072 237.601C640.635 238.601 639.404 239.801 638.173 241.201C636.326 244.001 635.095 247.201 635.095 250.601C634.89 257.001 636.326 263.6 639.199 269.4C639.814 270.8 640.635 272.401 641.661 273.601C642.687 275.001 643.918 276.4 645.15 277.4C645.97 278.2 647.202 278.601 648.433 278.601C649.869 278.601 651.1 277.801 651.921 276.601C652.947 274.801 653.358 272.8 652.742 270.8C651.921 267.6 650.69 264.401 648.843 261.601C647.202 258.801 645.355 256.201 643.098 253.801C638.994 248.801 633.864 244.6 628.118 241.4C625.245 239.8 621.962 238.601 618.679 238.001C615.19 237.401 611.702 237.601 608.214 238.801C604.93 240.001 602.058 242.001 599.8 244.601C597.338 247.001 595.491 249.801 594.26 253.001C591.798 259.401 592.413 266.4 595.902 272.4C596.722 273.8 597.748 275.201 598.98 276.601C600.211 278.001 601.853 279 603.494 279.8C604.725 280.2 605.956 280.2 606.982 279.8C607.598 279.6 608.214 279.2 608.624 278.8C609.035 278.4 609.24 277.801 609.445 277.201C610.06 275.401 609.855 273.401 609.24 271.601C608.008 268.601 606.572 265.601 604.725 263.001C602.878 260.401 600.826 258.001 598.774 255.601C594.465 250.801 589.335 246.801 583.59 244.001C580.512 242.401 577.023 242.201 573.74 243.201C572.304 244.001 570.867 245.001 569.841 246.201C569.226 246.801 568.815 247.401 568.2 248.001C567.584 248.601 567.174 249.201 566.763 249.801C562.864 254.801 560.812 261.001 560.812 267.201C561.018 264.201 561.633 261.201 562.864 258.201C564.096 255.401 565.737 252.8 567.584 250.4C567.995 249.8 568.61 249.201 569.02 248.601C569.431 248.001 570.047 247.401 570.662 247.001C571.688 246.001 572.919 245 574.15 244.4C577.023 243.8 580.101 244.201 582.564 245.601C587.899 248.601 592.824 252.401 596.722 257.201C598.774 259.401 600.621 261.8 602.263 264.4C603.904 266.8 605.341 269.401 606.367 272.201C606.777 273.401 606.983 274.601 606.572 275.601C606.572 275.801 606.367 276.001 606.367 276.001C606.162 276.001 606.162 276.201 605.956 276.201C605.546 276.401 605.136 276.401 604.725 276.201C603.494 275.601 602.468 274.801 601.647 274.001C600.621 273.001 599.8 271.801 599.185 270.601C596.312 265.601 596.107 259.601 598.159 254.201C599.185 251.601 600.826 249.201 602.878 247.201C604.725 245.201 607.188 243.6 609.855 242.4C615.19 240.4 621.141 242.001 626.476 245.001C631.812 248.001 636.531 251.8 640.43 256.4C642.482 258.6 644.124 261.001 645.765 263.601C647.407 266.001 648.433 268.6 649.254 271.4C649.664 272.4 649.459 273.601 649.048 274.601C648.843 275.001 648.843 274.801 648.638 275.001C648.228 275.001 647.817 274.801 647.612 274.601C645.56 272.801 643.713 270.4 642.687 267.8C641.456 265.2 640.43 262.4 639.609 259.4C638.788 256.6 638.583 253.601 638.583 250.601C638.583 247.801 639.404 245.001 641.046 242.601C642.482 240.401 644.944 238.801 647.817 238.201C650.69 238.001 653.768 238.601 656.23 240.001C658.898 241.401 661.566 243.001 664.028 245.001C673.467 252.801 681.47 262.4 689.062 272.4Z"
            fill="white"
          />
          <path
            d="M560.401 282.2C561.017 282 561.632 281.6 562.043 281.2C562.248 281 562.453 280.6 562.453 280.2C562.453 279.8 562.248 279.4 562.043 279.2C561.632 278.8 561.017 278.4 560.401 278.2C559.786 278.4 559.17 278.8 558.76 279.2C558.554 279.4 558.349 279.8 558.349 280.2C558.349 280.6 558.554 281 558.76 281.2C559.375 281.6 559.786 282 560.401 282.2Z"
            fill="white"
          />
        </svg>

        <div className="w-[90px] h-[93px] bg-[#FE7A3659] rounded-[50%] bottom-[20%]  left-[6%] absolute " />
        <div className="w-[110px] h-[113px] bg-[#38197559] rounded-[50%] bottom-[4%] left-[12%] absolute " />
        <Formslogadmin />
        <div className="w-[80px] h-[83px] bg-[#FE7A3659] rounded-[50%] top-[5%]  right-[12%] absolute " />
        <div className="w-[126px] h-[123px] bg-[#FF9F2E59] rounded-[50%] top-[20%]  right-[8%] absolute " />
        <ModalLogin
          visibility={loginAdmin}
          IconAlert={FaRegCheckCircle}
          closeButton={() => setLoginAdmin(false)}
          closeIcon={() => setLoginAdmin(false)}
          text={`Your login was successful, Welcome ${name}.`}
        />
      </div>
    </>
  );
};