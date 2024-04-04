import path from "path";
import React from "react";

const Logo = () => {
  return (
    <svg width="46" height="36" viewBox="0 0 46 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        // eslint-disable-next-line max-len
        d="M10.6595 3.69531C10.6866 3.69531 10.7098 3.69531 10.7368 3.69531C10.7407 3.72978 10.7484 3.76425 10.7523 3.80255C11.0731 5.69063 11.9622 7.65531 13.2881 9.05701C13.319 9.09148 13.3499 9.12212 13.3808 9.15659C13.7906 9.5817 14.4709 10.2481 15.0933 10.2902C16.0983 10.2749 16.9951 9.74255 17.8069 9.20638C17.8301 9.19106 17.8494 9.17957 17.8726 9.16425C18.2785 8.89233 18.6805 8.61276 19.0477 8.29106C19.0941 8.25276 19.1405 8.21063 19.1869 8.17233C19.2101 8.15318 19.2294 8.13404 19.2526 8.11489C19.4111 7.97701 19.5773 7.8468 19.7397 7.71659C19.759 7.70127 19.7783 7.68595 19.7977 7.67063C20.076 7.45233 20.3582 7.23787 20.6442 7.03106C20.9457 6.81276 21.2434 6.58297 21.5333 6.34936C21.6183 6.28042 21.7034 6.21148 21.7884 6.14638C21.8193 6.1234 21.8503 6.09659 21.8812 6.07361C21.9546 6.01616 22.0319 5.95872 22.1054 5.89744C22.3373 5.71744 22.5654 5.53744 22.7857 5.34595C23.0563 5.11233 23.3424 4.89404 23.6323 4.67957C23.6941 4.63361 23.756 4.58765 23.8217 4.53787C23.9222 4.46127 24.0227 4.3885 24.1232 4.31574C24.1541 4.29276 24.1851 4.26978 24.216 4.2468C24.2585 4.21616 24.2585 4.21616 24.3049 4.1817C24.3319 4.16255 24.3551 4.1434 24.3822 4.12425C24.4595 4.07829 24.5214 4.05531 24.6103 4.03999C24.5793 4.07446 24.5484 4.11276 24.5175 4.14723C24.3822 4.30042 24.2546 4.45744 24.1232 4.61446C24.0304 4.72553 23.9377 4.83659 23.8449 4.94382C23.6787 5.14297 23.5202 5.34595 23.3656 5.55659C23.2419 5.7251 23.1143 5.88978 22.9829 6.05063C22.7509 6.3417 22.5345 6.63659 22.3257 6.94297C22.1827 7.15361 22.0358 7.36042 21.8851 7.5634C21.5603 8.00765 21.2356 8.45191 20.9303 8.91148C20.8491 9.03404 20.764 9.15659 20.6751 9.27531C20.0103 10.183 19.4729 11.1787 19.0748 12.2281C19.0516 12.2932 19.0245 12.3583 18.9975 12.4234C18.9588 12.523 18.924 12.6264 18.8893 12.726C18.8661 12.7911 18.8661 12.7911 18.8429 12.86C18.3287 14.434 18.4834 16.2455 18.696 17.8579C18.6998 17.8962 18.6998 17.8962 18.7076 17.9383C18.7462 18.2294 18.7887 18.5242 18.8351 18.8153C18.8506 18.9302 18.8699 19.0451 18.8854 19.16C18.8893 19.1945 18.897 19.2328 18.9008 19.2672C18.9086 19.3323 18.9202 19.3974 18.9279 19.4625C18.955 19.6694 19.0052 19.8685 19.0555 20.0715C19.1096 20.2859 19.156 20.5004 19.1985 20.7187C19.2294 20.8604 19.2603 21.0021 19.2913 21.1438C19.3067 21.2166 19.3222 21.2894 19.3377 21.366C19.442 21.8485 19.5889 22.3157 19.7397 22.783C19.7667 22.8711 19.7938 22.9591 19.8247 23.0472C20.0296 23.6868 20.2693 24.2996 20.5553 24.9085C20.5708 24.943 20.5862 24.9774 20.6056 25.0119C21.3052 26.4787 22.2793 27.643 23.7173 28.4434C23.7521 28.4625 23.783 28.4817 23.8178 28.5008C23.8487 28.5162 23.8797 28.5353 23.9106 28.5506C23.9377 28.566 23.9647 28.5813 23.9918 28.5966C24.0884 28.6311 24.1309 28.6234 24.2237 28.5851C24.2972 28.5468 24.2972 28.5468 24.3706 28.497C24.3977 28.4779 24.4286 28.4587 24.4556 28.4434C24.4866 28.4242 24.5175 28.4051 24.5484 28.3821C24.9582 28.1217 25.3795 27.8881 25.8086 27.666C25.8511 27.643 25.8936 27.62 25.94 27.597C26.6242 27.2447 27.32 26.9345 28.0351 26.6434C28.1511 26.5974 28.2671 26.5477 28.383 26.5017C28.414 26.4902 28.4449 26.4749 28.4758 26.4634C28.5299 26.4404 28.584 26.4174 28.642 26.3945C28.8121 26.3255 28.8121 26.3255 28.8972 26.3255C28.8005 26.0689 28.6575 25.8468 28.5067 25.617C28.4797 25.5749 28.4565 25.5366 28.4294 25.4945C28.2284 25.1804 28.0274 24.8702 27.8148 24.5638C27.7955 24.537 27.78 24.514 27.7607 24.4872C27.5133 24.1311 27.2582 23.7902 26.9837 23.457C26.9103 23.3689 26.8407 23.277 26.7711 23.1851C26.5044 23.2962 26.4116 23.5872 26.3072 23.8362C26.2686 23.9013 26.2299 23.9625 26.1913 24.0277C26.0946 24.2 26.0212 24.3685 25.9632 24.5562C25.9014 24.7438 25.8279 24.92 25.7429 25.1C25.5264 25.5672 25.3563 26.0536 25.1746 26.5362C25.0896 26.7621 24.9968 26.9804 24.8808 27.1949C24.8229 27.3098 24.7726 27.4285 24.7224 27.5472C24.7108 27.5472 24.6953 27.5472 24.6837 27.5472C24.676 27.3825 24.6798 27.237 24.7185 27.0762C24.7765 26.8004 24.7881 26.5208 24.8074 26.2374C24.8113 26.1762 24.8151 26.1187 24.819 26.0574C24.8306 25.9004 24.8422 25.7472 24.8499 25.5902C24.8654 25.3413 24.8847 25.0923 24.9002 24.8434C24.9079 24.7553 24.9118 24.6711 24.9195 24.583C24.9504 24.1464 24.9504 24.1464 24.9736 23.9357C24.9968 23.7021 24.9968 23.4723 24.9968 23.2387C24.9968 23.1889 24.9968 23.143 24.9968 23.0932C24.9968 22.9898 24.9968 22.8864 24.9968 22.7868C24.9968 22.6834 24.9968 22.58 24.9968 22.4766C25.0045 21.6608 24.962 20.8987 24.734 20.1136C24.7146 20.0447 24.7146 20.0447 24.6953 19.9757C24.56 19.5047 24.3899 19.0489 24.2198 18.5894C24.1773 18.4745 24.1387 18.3557 24.1 18.237C23.8449 17.4749 23.4738 16.7281 23.095 16.0196C23.0756 15.9851 23.0602 15.9506 23.0408 15.9162C22.7084 15.2996 22.3373 14.7213 21.9392 14.1468C21.8309 13.9898 21.7227 13.8289 21.6183 13.6681C21.5372 13.5494 21.4482 13.4345 21.3555 13.3234C21.3168 13.2621 21.3168 13.2621 21.3168 13.1472C21.4289 13.2008 21.5217 13.2583 21.6183 13.3349C21.6454 13.3579 21.6763 13.377 21.7034 13.4C21.7343 13.423 21.7614 13.446 21.7923 13.4689C21.8232 13.4919 21.8541 13.5187 21.8851 13.5417C21.9778 13.6145 22.0706 13.6872 22.1634 13.76C22.2136 13.7983 22.26 13.8366 22.3103 13.8749C22.4185 13.9591 22.5306 14.0472 22.6388 14.1315C22.7277 14.2004 22.8166 14.2694 22.9056 14.3383C22.9519 14.3728 22.9945 14.4072 23.0408 14.4455C23.1568 14.5336 23.2689 14.6217 23.3849 14.7098C23.5936 14.8706 23.7985 15.0315 23.9956 15.2115C24.1155 15.3225 24.2276 15.4068 24.3745 15.4796C24.4634 15.5294 24.5368 15.5945 24.6141 15.6596C24.9814 15.9545 25.4027 16.2111 25.8356 16.4025C25.8666 16.4179 25.8936 16.4294 25.9245 16.4447C26.0598 16.4906 26.1874 16.4945 26.3266 16.4945C26.3536 16.4945 26.3768 16.4945 26.4039 16.4983C26.8445 16.5021 27.2698 16.2187 27.6563 16.0349C27.6988 16.0157 27.6988 16.0157 27.7414 15.9928C28.0467 15.8472 28.3482 15.7017 28.642 15.5332C29.6935 14.9281 30.8724 14.457 32.0321 14.1008C32.1365 14.0664 32.2447 14.0319 32.3491 13.9974C32.4148 13.9745 32.4844 13.9553 32.5501 13.9323C32.581 13.9208 32.6119 13.9132 32.6429 13.9017C32.7859 13.8557 32.8787 13.8328 33.0256 13.8787C32.9946 13.9017 32.9637 13.9208 32.9289 13.9438C31.7499 14.7519 30.5555 15.5945 29.7398 16.7894C29.7128 16.8277 29.6857 16.8698 29.6587 16.9081C29.0131 17.9 28.5029 19.0911 28.4951 20.286C28.4951 20.3166 28.4951 20.3434 28.4951 20.374C28.4951 20.4698 28.4951 20.5655 28.4951 20.6574C28.4951 20.6881 28.4951 20.7225 28.4951 20.757C28.4951 21.2472 28.5261 21.7221 28.6072 22.2085C28.6304 22.3617 28.6459 22.5149 28.6614 22.6719C28.6845 22.9094 28.7271 23.1353 28.7851 23.3651C28.8198 23.503 28.8469 23.6447 28.8701 23.7825C28.9783 24.357 29.1175 24.9123 29.2914 25.4677C29.3301 25.5902 29.3649 25.7166 29.3997 25.8391C29.4615 26.0536 29.535 26.2566 29.62 26.4596C29.6896 26.6396 29.7514 26.8234 29.8094 27.0072C29.8442 27.1183 29.8829 27.2255 29.9215 27.3328C29.9331 27.3634 29.9409 27.3902 29.9524 27.4208C29.9718 27.4783 29.995 27.5319 30.0143 27.5894C30.0684 27.7387 30.1071 27.8842 30.1303 28.0413C30.1805 28.026 30.2269 28.0106 30.2772 27.9953C30.8067 27.8383 31.3363 27.7004 31.8736 27.5702C31.9239 27.5587 31.9239 27.5587 31.978 27.5472C33.1145 27.2715 34.2664 27.0455 35.4299 26.9153C35.457 26.9115 35.484 26.9077 35.515 26.9038C36.5625 26.7813 36.5625 26.7813 36.8988 27.0072C36.9414 27.034 36.9414 27.034 36.98 27.057C37.0728 27.1145 37.1617 27.1719 37.2506 27.2332C37.3202 27.2791 37.3859 27.3213 37.4555 27.3672C37.4903 27.3902 37.5251 27.4132 37.5637 27.4362C37.7067 27.5281 37.8498 27.62 37.9928 27.7081C38.1358 27.7962 38.275 27.8842 38.418 27.9762C38.4876 28.0183 38.5572 28.0643 38.6267 28.1064C38.7272 28.1677 38.8239 28.2328 38.9244 28.294C38.9553 28.3132 38.9824 28.3323 39.0133 28.3515C39.0403 28.3706 39.0674 28.386 39.0945 28.4051C39.1177 28.4204 39.1409 28.4357 39.1679 28.4511C39.2182 28.5008 39.2182 28.5008 39.2182 28.654C38.6035 28.7421 37.9851 28.7766 37.3627 28.8149C36.4388 28.8723 35.515 28.9451 34.5988 29.106C34.5563 29.1136 34.5563 29.1136 34.5138 29.1213C33.9803 29.2132 33.4585 29.3319 32.9328 29.466C32.7975 29.5004 32.6622 29.5349 32.523 29.5694C30.8609 29.9906 29.2489 30.5536 27.6911 31.2621C27.6215 31.2928 27.5481 31.3272 27.4785 31.3579C26.5469 31.7791 25.6424 32.2464 24.7456 32.7366C24.5136 32.863 24.2856 32.9855 24.0536 33.1081C23.8642 33.2077 23.6748 33.3111 23.4893 33.4183C23.4545 33.4374 23.4197 33.4566 23.3849 33.4796C23.3192 33.5179 23.2535 33.5523 23.1916 33.5906C23.0099 33.694 22.8824 33.7515 22.6698 33.7132C22.5229 33.6519 22.3837 33.5753 22.2445 33.4949C22.202 33.4719 22.1634 33.4489 22.1208 33.426C21.9933 33.357 21.8696 33.2842 21.742 33.2153C21.6647 33.1732 21.5913 33.1311 21.514 33.0889C21.4057 33.0277 21.2936 32.9664 21.1854 32.9051C20.8182 32.6983 20.4432 32.5068 20.0682 32.3153C19.9445 32.2502 19.8208 32.1851 19.6972 32.12C18.2862 31.377 16.8366 30.7145 15.3136 30.2319C15.2286 30.2051 15.1474 30.1783 15.0624 30.1515C14.8961 30.0979 14.7338 30.0481 14.5676 29.9983C14.4903 29.9753 14.4168 29.9485 14.3395 29.9255C14.3047 29.914 14.2699 29.9064 14.2313 29.8949C13.9955 29.8183 13.9955 29.8183 13.9259 29.6957C13.895 29.6077 13.8756 29.5196 13.8563 29.4315C13.8293 29.374 13.8061 29.3128 13.779 29.2553C13.6708 28.9949 13.636 28.7191 13.5973 28.4396C13.5935 28.4089 13.5896 28.3821 13.5857 28.3515C13.2378 25.8889 13.8099 23.1277 14.8961 20.8949C14.958 20.7225 14.9309 20.6038 14.8536 20.4391C14.8343 20.4047 14.815 20.3664 14.7918 20.3319C14.7686 20.2898 14.7454 20.2515 14.7222 20.2094C14.7106 20.1864 14.699 20.1672 14.6835 20.1442C14.1926 19.2749 13.7635 18.3672 13.3924 17.4442C13.377 17.4021 13.3577 17.36 13.3422 17.3179C13.1605 16.866 12.9827 16.414 12.8165 15.9545C12.7662 15.8128 12.7121 15.6711 12.658 15.5294C12.5266 15.177 12.4029 14.8208 12.3062 14.4532C12.2637 14.2962 12.2173 14.143 12.1671 13.986C12.0356 13.5762 11.9235 13.1587 11.8153 12.7413C11.8037 12.703 11.796 12.6647 11.7844 12.6225C11.2277 10.4587 10.876 8.24893 10.644 6.02765C10.6402 5.97787 10.6402 5.97787 10.6324 5.93191C10.6093 5.6868 10.5977 5.44553 10.5977 5.19659C10.5977 5.15829 10.5977 5.12382 10.5977 5.08553C10.5977 5.00893 10.5977 4.9285 10.5977 4.85191C10.5977 4.73318 10.5977 4.61446 10.5977 4.49574C10.5977 4.41914 10.5977 4.34255 10.5977 4.26595C10.5977 4.23148 10.5977 4.19701 10.5977 4.15872C10.6131 4.0017 10.617 3.85233 10.6595 3.69531Z"
        fill="#CBFE90"
      />
      <path
        // eslint-disable-next-line max-len
        d="M6.30755 29.3707C6.59361 29.3745 6.87192 29.3975 7.15411 29.4281C7.23142 29.4358 7.23142 29.4358 7.30873 29.4435C7.44403 29.4588 7.57932 29.4741 7.71075 29.4894C7.84991 29.5047 7.98907 29.5201 8.12823 29.5354C8.3215 29.5583 8.51478 29.5775 8.70806 29.6005C8.97865 29.6311 9.24537 29.6618 9.51596 29.6886C10.0339 29.7422 10.5519 29.8035 11.0699 29.8724C11.1124 29.8801 11.1549 29.8839 11.1975 29.8915C11.4449 29.926 11.6845 29.9758 11.9281 30.0332C12.0672 30.0639 12.2025 30.0907 12.3417 30.1175C13.2849 30.3013 14.201 30.5579 15.1133 30.8643C15.1597 30.8796 15.206 30.8949 15.2563 30.9103C16.9301 31.4771 18.4995 32.243 20.0225 33.1277C20.2699 33.2694 20.5173 33.4111 20.7647 33.5528C20.9812 33.6754 21.1976 33.8018 21.4102 33.9243C22.1756 34.4337 22.1756 34.4337 23.0376 34.6137C23.1729 34.56 23.2966 34.4949 23.4242 34.4222C23.459 34.403 23.4899 34.3839 23.5247 34.3647C23.6329 34.3035 23.7412 34.2422 23.8494 34.1771C23.9306 34.1311 24.0118 34.0813 24.0968 34.0354C24.1393 34.0124 24.1818 33.9856 24.2244 33.9626C24.4331 33.84 24.6457 33.7213 24.8544 33.6026C25.1444 33.4379 25.4343 33.2694 25.7203 33.1047C27.657 31.9788 29.6632 31.0558 31.8318 30.4698C31.9207 30.4469 32.0057 30.4201 32.0946 30.3971C33.6176 29.9796 35.187 29.769 36.7565 29.6081C36.8802 29.5966 37.0077 29.5813 37.1314 29.5698C37.3595 29.5469 37.5876 29.5239 37.8156 29.5009C37.9393 29.4894 38.063 29.4741 38.1867 29.4626C38.264 29.4549 38.3452 29.4473 38.4225 29.4396C38.523 29.4281 38.6197 29.4205 38.7202 29.409C39.3232 29.3477 39.3232 29.3477 39.5783 29.3745C39.6556 29.4511 39.6556 29.4511 39.6672 29.5469C39.6633 29.5775 39.6595 29.612 39.6556 29.6426C39.5281 29.7269 39.4701 29.7345 39.3232 29.7498C39.2536 29.7575 39.2536 29.7575 39.184 29.7652C39.1338 29.769 39.0835 29.7728 39.0333 29.7805C38.9791 29.7843 38.9289 29.792 38.8748 29.7958C38.7627 29.8073 38.6506 29.8188 38.5385 29.8303C38.237 29.8609 37.9393 29.8877 37.6378 29.9183C37.6069 29.9222 37.576 29.926 37.545 29.926C35.1754 30.1596 32.8368 30.466 30.5755 31.2511C30.5329 31.2664 30.4943 31.2779 30.4518 31.2932C28.8707 31.8447 27.3864 32.5686 25.9445 33.4073C25.6971 33.549 25.4497 33.6907 25.2023 33.8324C24.866 34.0239 24.5297 34.2192 24.1934 34.4107C24.1548 34.4337 24.1161 34.4528 24.0775 34.4758C23.919 34.5677 23.7605 34.6596 23.6059 34.7592C23.3662 34.9086 23.1304 34.9354 22.856 34.9392C22.8289 34.9392 22.798 34.943 22.7709 34.943C22.338 34.9469 21.9592 34.7018 21.6035 34.4873C21.5223 34.4413 21.4412 34.3915 21.36 34.3456C21.2981 34.3073 21.2981 34.3073 21.2324 34.2728C21.0237 34.1503 20.8149 34.0315 20.6062 33.9128C20.5212 33.863 20.44 33.8171 20.3549 33.7673C20.3124 33.7443 20.2699 33.7213 20.2274 33.6945C20.096 33.6218 19.9684 33.5452 19.837 33.4724C19.5896 33.3307 19.3422 33.189 19.0948 33.0473C19.0639 33.0281 19.0329 33.0128 19.002 32.9937C16.8876 31.7873 14.5953 30.9907 12.2141 30.4813C12.1677 30.4698 12.1213 30.4622 12.0711 30.4507C10.8689 30.1941 9.65898 30.0754 8.43747 29.9528C7.94655 29.903 7.45562 29.8532 6.9647 29.792C6.72117 29.7613 6.4815 29.7383 6.23411 29.7269C6.1452 29.7192 6.1452 29.7192 6.02924 29.6426C6.0215 29.5239 6.0215 29.5239 6.02924 29.4128C6.09882 29.3439 6.21092 29.3707 6.30755 29.3707Z"
        fill="#CEFF95"
      />
      <path
        // eslint-disable-next-line max-len
        d="M9.54865 26.8076C9.60277 26.8114 9.60277 26.8114 9.66075 26.8152C10.4145 26.8765 11.1606 27.0029 11.9066 27.1369C11.9608 27.1484 12.0149 27.1561 12.069 27.1676C12.6334 27.271 12.6334 27.271 12.9117 27.3476C13.1166 27.405 13.3214 27.4548 13.534 27.4969C13.5881 27.788 13.6423 28.0791 13.6771 28.374C13.6848 28.4314 13.6848 28.4314 13.6925 28.4889C13.7003 28.5655 13.708 28.6382 13.7157 28.7148C13.7428 28.9369 13.793 29.1246 13.8858 29.3276C13.9322 29.4463 13.9476 29.5535 13.9592 29.6799C13.735 29.6531 13.5186 29.6072 13.2982 29.5535C13.2634 29.5459 13.2248 29.5382 13.19 29.5267C12.9967 29.4808 12.8034 29.431 12.6102 29.3735C11.9724 29.1897 11.3191 29.0786 10.6658 28.9752C10.5962 28.9638 10.5962 28.9638 10.5228 28.9523C10.4803 28.9446 10.4377 28.9408 10.3952 28.9331C10.287 28.914 10.287 28.914 10.2135 28.8948C10.1208 28.8718 10.0357 28.8642 9.94294 28.8565C9.90428 28.8527 9.86949 28.8489 9.83084 28.8489C9.79218 28.845 9.74966 28.8412 9.70714 28.8412C9.66462 28.8374 9.6221 28.8335 9.57958 28.8297C9.44428 28.8182 9.31286 28.8106 9.17756 28.7991C9.04613 28.7876 8.91084 28.7799 8.77941 28.7684C8.69823 28.7608 8.61319 28.7569 8.53202 28.7493C8.35033 28.734 8.17252 28.7186 7.99084 28.7033C7.85168 28.688 7.71639 28.6803 7.57723 28.6765C7.53857 28.6765 7.49605 28.6727 7.45353 28.6727C7.39168 28.6689 7.39168 28.6689 7.32983 28.6689C7.01286 28.6574 6.69588 28.6421 6.37891 28.6114C6.37891 28.5616 6.37891 28.5118 6.37891 28.4582C6.47168 28.3855 6.47168 28.3855 6.60311 28.305C6.65336 28.2744 6.70361 28.2438 6.75386 28.2131C6.79252 28.1901 6.79252 28.1901 6.83504 28.1633C6.97807 28.0791 7.11723 27.9872 7.26025 27.8991C7.3221 27.8608 7.38395 27.8225 7.4458 27.7842C7.68546 27.6348 7.92126 27.4855 8.16092 27.3323C8.22277 27.294 8.22277 27.294 8.28462 27.2557C8.32328 27.2327 8.36193 27.2059 8.40059 27.1829C8.4547 27.1484 8.4547 27.1484 8.51269 27.1101C8.58227 27.0642 8.64798 27.0182 8.71756 26.9723C8.99975 26.7693 9.20849 26.7808 9.54865 26.8076Z"
        fill="#CCFE90"
      />
      <path
        // eslint-disable-next-line max-len
        d="M30.0838 27.7659C29.9447 27.4021 29.8132 27.0344 29.6895 26.663C29.6779 26.6247 29.6625 26.5825 29.6509 26.5404C29.5465 26.2264 29.5465 26.2264 29.5117 26.077C29.8287 25.9391 30.1457 25.8242 30.4781 25.7323C30.5245 25.7208 30.5709 25.7055 30.6211 25.694C31.3904 25.4834 32.1673 25.3417 32.9559 25.2498C33.0526 25.2383 33.1453 25.223 33.2381 25.2038C33.7097 25.1464 34.0847 25.4795 34.4519 25.7323C34.6181 25.8472 34.7921 25.9544 34.9621 26.0617C35.0201 26.1 35.0781 26.1344 35.1361 26.1727C35.3139 26.2838 35.4917 26.3949 35.6734 26.4983C35.6618 26.5366 35.6463 26.5749 35.6347 26.6132C35.5961 26.617 35.5961 26.617 35.5574 26.6247C33.9803 26.8544 32.4302 27.111 30.8917 27.5438C30.6289 27.6204 30.3544 27.6932 30.0838 27.7659Z"
        fill="#CBFE90"
      />
      <path
        // eslint-disable-next-line max-len
        d="M16.6612 23.5156C16.8003 23.6382 16.8892 23.7799 16.9781 23.9407C17.1289 24.1935 17.2913 24.4309 17.4729 24.6646C17.5116 24.7143 17.5464 24.7641 17.585 24.8101C18.2035 25.6373 18.8761 26.4109 19.7227 27.0237C19.7729 27.062 19.8271 27.1003 19.8773 27.1386C20.8128 27.8318 21.8913 28.299 23.0007 28.6475C23.1707 28.7012 23.337 28.7701 23.5032 28.839C23.5689 28.8658 23.6307 28.8888 23.6965 28.9156C23.6965 28.9424 23.6965 28.9654 23.6965 28.9922C23.6423 29.042 23.6423 29.042 23.5689 29.0956C23.5418 29.1148 23.5148 29.1339 23.4877 29.1569C23.4607 29.1761 23.4297 29.199 23.4027 29.2182C23.3486 29.2603 23.2906 29.2986 23.2365 29.3407C23.2094 29.3599 23.1823 29.379 23.1553 29.3982C23.0625 29.4633 22.9775 29.5361 22.8886 29.605C22.7494 29.5552 22.6412 29.4978 22.5252 29.4058C22.4943 29.3829 22.4595 29.3561 22.4286 29.3331C22.3938 29.3063 22.359 29.2795 22.3242 29.2526C20.9713 28.2224 19.5023 27.4412 17.9407 26.7709C17.9175 26.7595 17.8904 26.7518 17.8672 26.7403C17.3067 26.499 16.7462 26.2692 16.1741 26.0586C16.1316 26.0433 16.0891 26.028 16.0465 26.0126C15.7914 25.9207 15.5363 25.8441 15.2734 25.7752C15.285 25.5684 15.3739 25.4343 15.4822 25.2658C15.5402 25.1701 15.5827 25.0705 15.6252 24.9671C15.6871 24.8292 15.7721 24.7029 15.8533 24.5726C15.8687 24.5458 15.8881 24.519 15.9035 24.4884C15.919 24.4616 15.9383 24.4348 15.9538 24.408C15.9692 24.385 15.9847 24.362 16.0002 24.3352C16.0465 24.2778 16.0465 24.2778 16.1625 24.2395C16.1896 24.1743 16.2128 24.1131 16.2398 24.048C16.3017 23.9599 16.3674 23.8756 16.437 23.7875C16.4563 23.7646 16.4718 23.7416 16.4911 23.7186C16.6148 23.5616 16.6148 23.5616 16.6612 23.5156Z"
        fill="#FDFEFD"
      />
      <path
        // eslint-disable-next-line max-len
        d="M13.0561 25.2766C13.1141 25.2843 13.1721 25.292 13.2301 25.2996C13.3692 25.3188 13.5084 25.3341 13.6476 25.3532C13.6437 25.3762 13.6437 25.403 13.6398 25.426C13.5896 26.0005 13.5509 26.5749 13.5316 27.1532C13.2456 27.1303 12.975 27.069 12.6928 27.0077C12.1477 26.8851 11.5988 26.8124 11.0422 26.7473C10.9378 26.732 10.9378 26.732 10.8219 26.6937C10.7716 26.686 10.7175 26.6822 10.6672 26.6745C10.6363 26.6707 10.6093 26.6668 10.5783 26.6668C10.5165 26.6592 10.4546 26.6554 10.3928 26.6477C10.2072 26.6286 10.0371 26.5941 9.85547 26.5405C9.94051 26.4524 10.0217 26.3873 10.1261 26.326C10.157 26.3069 10.1879 26.2877 10.2227 26.2686C10.2575 26.2494 10.2923 26.2264 10.3271 26.2073C10.4005 26.1613 10.474 26.1192 10.5474 26.0732C10.6054 26.0388 10.6054 26.0388 10.6634 26.0043C10.8721 25.8779 11.077 25.7515 11.2857 25.6213C11.3437 25.5868 11.3437 25.5868 11.4056 25.5486C11.4442 25.5256 11.479 25.5026 11.5177 25.4796C11.5524 25.4566 11.5872 25.4375 11.622 25.4145C11.7187 25.3532 11.7187 25.3532 11.8269 25.2613C12.1748 25.0813 12.6773 25.2268 13.0561 25.2766Z"
        fill="#CCFE91"
      />
      <path
        // eslint-disable-next-line max-len
        d="M14.5347 27.498C14.8169 27.521 15.0682 27.5823 15.3349 27.6666C15.3774 27.6819 15.4238 27.6934 15.4663 27.7087C17.2793 28.2793 19.0265 29.0568 20.7196 29.9108C20.5689 29.9606 20.5302 29.9261 20.3872 29.861C20.3408 29.8419 20.2983 29.8227 20.2519 29.7997C20.2287 29.7883 20.2055 29.7768 20.1784 29.7653C20.047 29.7078 19.9156 29.6504 19.7842 29.5929C19.7571 29.5815 19.73 29.57 19.6991 29.5546C18.0137 28.827 16.2704 28.1989 14.4961 27.7202C14.5077 27.6512 14.5232 27.5746 14.5347 27.498Z"
        fill="#FDFEFC"
      />
      <path
        // eslint-disable-next-line max-len
        d="M30.0039 27.8276C30.0735 27.8812 30.0735 27.8812 30.1005 27.9808C30.1044 28.0115 30.1083 28.0421 30.1083 28.0727C30.0735 28.0842 30.0387 28.0919 30.0039 28.1034C28.4499 28.5821 26.9385 29.1681 25.4387 29.8C25.4116 29.8115 25.3846 29.8229 25.3575 29.8344C25.2995 29.8612 25.2377 29.8881 25.1797 29.9149C25.1333 29.9378 25.1333 29.9378 25.0869 29.957C25.0599 29.9685 25.0328 29.9838 25.0019 29.9991C24.9246 30.0221 24.9246 30.0221 24.8086 29.9838C26.2698 29.2064 27.8005 28.54 29.3661 27.9961C29.4472 27.9655 29.5284 27.9387 29.6057 27.9042C29.6444 27.8889 29.683 27.8736 29.7217 27.8583C29.772 27.8391 29.772 27.8391 29.8222 27.8161C29.9188 27.8047 29.9188 27.8047 30.0039 27.8276Z"
        fill="#FDFEFB"
      />
      <path
        // eslint-disable-next-line max-len
        d="M14.9996 20.6426C15.0266 20.6426 15.0498 20.6426 15.0769 20.6426C15.0923 20.6694 15.1078 20.6962 15.1233 20.7268C15.1928 20.8532 15.2624 20.9758 15.332 21.1022C15.3552 21.1443 15.3784 21.1864 15.4054 21.2324C15.5253 21.4468 15.649 21.6536 15.7881 21.8566C15.8616 21.9677 15.9234 22.0826 15.9891 22.1975C16.1901 22.5536 16.4259 22.8907 16.6617 23.2315C16.7197 23.3158 16.7777 23.4 16.8318 23.4804C16.8511 23.5073 16.8666 23.5302 16.8859 23.557C17.0058 23.737 17.0058 23.737 17.0058 23.8634C16.9787 23.8902 16.9555 23.9132 16.9285 23.94C16.8125 23.7485 16.8125 23.7485 16.6965 23.557C16.6579 23.5685 16.6192 23.5839 16.5806 23.5953C16.5728 23.557 16.5612 23.5187 16.5535 23.4804C16.5033 23.3043 16.4143 23.1626 16.3138 23.0094C16.2945 22.9787 16.2752 22.9481 16.2559 22.9175C16.1592 22.7643 16.0587 22.6111 15.9621 22.4579C15.6219 21.9332 15.3088 21.3932 15.0343 20.8341C15.0073 20.8341 14.9841 20.8341 14.957 20.8341C14.9725 20.769 14.988 20.7077 14.9996 20.6426Z"
        fill="#2BF435"
      />
      <path
        // eslint-disable-next-line max-len
        d="M20.6403 7.00781C20.6674 7.0193 20.6905 7.03462 20.7176 7.04611C20.6905 7.06526 20.6635 7.08441 20.6364 7.10356C20.5166 7.20313 20.42 7.3142 20.3195 7.43292C20.1803 7.58611 20.0721 7.6359 19.8672 7.65888C20.0218 7.49803 20.188 7.36398 20.362 7.22611C20.4006 7.19547 20.4006 7.19547 20.4432 7.161C20.5089 7.11122 20.5746 7.0576 20.6403 7.00781Z"
        fill="#51F959"
      />
      <path
        // eslint-disable-next-line max-len
        d="M24.7773 26.8477C24.7889 26.8477 24.8044 26.8477 24.816 26.8477C24.816 26.9128 24.816 26.974 24.816 27.0391C24.8547 27.0506 24.8933 27.066 24.932 27.0774C24.9049 27.1272 24.8817 27.177 24.8547 27.2306C24.8276 27.2306 24.8044 27.2306 24.7773 27.2306C24.7773 27.1043 24.7773 26.9779 24.7773 26.8477Z"
        fill="#35E23F"
      />
      <path
        // eslint-disable-next-line max-len
        d="M24.1207 18.0391C24.2289 18.1961 24.2405 18.2727 24.2367 18.4603C24.1709 18.3378 24.1246 18.2114 24.082 18.0774C24.0936 18.0659 24.1091 18.0506 24.1207 18.0391Z"
        fill="#60E867"
      />
      <path
        // eslint-disable-next-line max-len
        d="M21.3359 13.1367C28.0852 18.9005 26.0326 15.4805 33.0485 13.8644C30.0953 15.5648 27.8417 18.6937 28.6264 22.198C28.7423 24.178 29.6546 26.1044 30.0721 27.958C29.2758 27.3452 26.9448 21.7997 26.3225 23.8218C25.6808 25.0052 25.3368 26.3303 24.7376 27.5367C24.7763 25.1584 25.3832 22.512 24.7531 20.1031C24.1075 17.564 22.743 15.2852 21.3359 13.1367Z"
        fill="#24E42E"
      />
      <path
        // eslint-disable-next-line max-len
        d="M25.357 29.1833C22.0481 29.0033 18.716 26.8969 16.9843 24.0207C16.3851 22.1556 13.7759 29.0071 14.031 29.7578C12.8327 27.0807 13.7024 23.4539 14.9123 20.8803C15.0283 20.6046 14.8273 20.3633 14.7036 20.1297C12.1253 15.2697 10.7453 9.72796 10.6254 4.25137C10.5945 4.10201 10.6525 3.44328 10.7646 3.78414C11.2633 6.24286 12.5814 9.34882 15.1018 10.2756C18.0937 10.0497 21.9012 5.49222 24.6226 4.02158C22.4463 6.75988 20.0342 9.52116 18.8552 12.8492C18.1169 15.3961 18.7083 18.1688 19.2108 20.708C19.8796 24.3539 21.5997 27.9041 25.357 29.1833Z"
        fill="#22E32D"
      />
      <path
        // eslint-disable-next-line max-len
        d="M26.4938 15.7479C27.6402 15.7479 28.5696 14.87 28.5696 13.787C28.5696 12.7041 27.6402 11.8262 26.4938 11.8262C25.3473 11.8262 24.418 12.7041 24.418 13.787C24.418 14.87 25.3473 15.7479 26.4938 15.7479Z"
        fill="#27ED31"
      />
      <path
        // eslint-disable-next-line max-len
        d="M15.9846 9.28339C17.6093 9.28339 18.9263 8.05913 18.9263 6.54892C18.9263 5.03872 17.6093 3.81445 15.9846 3.81445C14.36 3.81445 13.043 5.03872 13.043 6.54892C13.043 8.05913 14.36 9.28339 15.9846 9.28339Z"
        fill="#27ED31"
      />
    </svg>
  );
};

export default Logo;
