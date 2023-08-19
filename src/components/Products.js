import productImg from "../assets/images/product-img.png";

function Products() {
  return (
    <section className="product-section grey-section" id="products">
      <div className="container">
        <div className="row text-left">
          <div className="col-sm-12 tc">
            <h3 className="tc">PRODUCTS</h3>
            <h5 className="tc">
              Empower yourself with the ultimate resource for achieving
              excellence in IT services.
            </h5>
          </div>

          <div className="col-sm-12">
            <ul className="products">
              <li>
                <div className="icon-cart">
                  <svg
                    width="55"
                    height="42"
                    viewBox="0 0 55 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M50.0047 11.6678H48.3379C47.9113 8.46437 46.3359 5.52489 43.9046 3.3959C41.4734 1.26692 38.3516 0.0933131 35.12 0.0933131C31.8883 0.0933131 28.7666 1.26692 26.3353 3.3959C23.904 5.52489 22.3286 8.46437 21.9021 11.6678H16.9183L14.8014 5.60053C14.2338 3.96574 13.1714 2.54818 11.7616 1.5446C10.3518 0.541013 8.66451 0.00117295 6.93399 0H1.66682C1.22475 0 0.800792 0.175612 0.488202 0.488202C0.175612 0.800792 0 1.22475 0 1.66682C0 2.10889 0.175612 2.53286 0.488202 2.84545C0.800792 3.15804 1.22475 3.33365 1.66682 3.33365H6.93399C7.97134 3.32965 8.98427 3.64837 9.83243 4.24567C10.6806 4.84296 11.322 5.68925 11.6678 6.66729L13.3346 11.6678L17.4516 23.3355L21.8687 36.0367C22.4317 37.6804 23.4942 39.1071 24.9078 40.1173C26.3214 41.1274 28.0154 41.6705 29.7528 41.6706H38.3369C38.779 41.6706 39.203 41.495 39.5156 41.1824C39.8282 40.8698 40.0038 40.4458 40.0038 40.0038C40.0038 39.5617 39.8282 39.1377 39.5156 38.8251C39.203 38.5126 38.779 38.3369 38.3369 38.3369H29.7528C28.7126 38.3444 27.696 38.0273 26.8445 37.4298C25.993 36.8322 25.3491 35.984 25.0024 35.0033H42.954C45.2572 35.0099 47.4937 34.2306 49.2939 32.794C51.0941 31.3575 52.3503 29.3497 52.855 27.1026L54.8885 17.7183C55.045 16.9896 55.0367 16.2351 54.864 15.5099C54.6913 14.7848 54.3588 14.1075 53.8906 13.5275C53.4225 12.9475 52.8305 12.4795 52.1582 12.1577C51.4859 11.8359 50.7501 11.6685 50.0047 11.6678ZM28.786 5.50052C30.5506 4.09013 32.7444 3.32554 35.0033 3.33365C37.365 3.33604 39.6496 4.17414 41.4526 5.69951C43.2556 7.22489 44.4606 9.33911 44.8542 11.6678C44.9552 12.2176 45.0054 12.7756 45.0042 13.3346C45.0042 15.987 43.9506 18.5308 42.075 20.4063C40.1995 22.2819 37.6557 23.3355 35.0033 23.3355C34.6699 23.3355 34.3366 23.3355 34.0032 23.3355H33.8365L33.0198 23.2022C31.1344 22.8233 29.3983 21.909 28.0193 20.5686L27.6859 20.2019C27.5663 20.0877 27.4548 19.9652 27.3526 19.8352C27.2712 19.7481 27.1986 19.6532 27.1359 19.5518C26.9989 19.3924 26.8709 19.2255 26.7525 19.0518C26.654 18.9135 26.5649 18.7687 26.4858 18.6184C26.4025 18.4851 26.3191 18.3517 26.2525 18.2184C26.1448 18.0364 26.0501 17.847 25.9691 17.6517L25.8191 17.335C25.7358 17.1349 25.6524 16.9183 25.5857 16.7016C25.5191 16.4849 25.5024 16.5016 25.4691 16.4182C25.4357 16.3349 25.3524 15.9682 25.3024 15.7348C25.2524 15.5015 25.3024 15.5348 25.219 15.4348C25.1357 15.3348 25.219 14.9681 25.119 14.7181V14.4347C25.0126 13.6158 25.0126 12.7866 25.119 11.9678C25.4649 9.42091 26.7781 7.10497 28.786 5.50052ZM51.6715 17.0183L49.638 26.4025C49.2898 27.907 48.4399 29.2482 47.2282 30.2055C46.0164 31.1628 44.5149 31.6791 42.9707 31.6696H23.9189L20.5853 22.2688L18.0684 15.0014H21.7687V15.2348C21.8516 15.7983 21.9741 16.3553 22.1354 16.9016C22.1573 17.0141 22.1851 17.1254 22.2188 17.235C22.4109 17.8021 22.6335 18.3586 22.8855 18.9018L23.1188 19.3518C23.3997 19.9004 23.7171 20.4294 24.0689 20.9353L24.3023 21.2353C24.7001 21.7804 25.1404 22.2932 25.6191 22.7688C25.9254 23.0697 26.2482 23.3535 26.5858 23.6189C26.7859 23.7856 27.0025 23.9189 27.2026 24.0689C27.329 24.1728 27.4627 24.2674 27.6026 24.3523C27.9026 24.569 28.236 24.7523 28.5527 24.9357H28.6694C29.0194 25.119 29.3861 25.2857 29.7528 25.4357H29.8361C30.1862 25.5857 30.5529 25.7024 30.9196 25.8191H31.0529L32.0864 26.0858H32.3197C32.6531 26.1525 32.9864 26.2025 33.3198 26.2358H33.6198C34.064 26.2607 34.5092 26.2607 34.9533 26.2358C35.3863 26.2611 35.8204 26.2611 36.2534 26.2358H36.7701L37.5202 26.1191L38.1369 25.9691L38.737 25.8191L39.4037 25.5857L39.9038 25.4024C40.1387 25.3195 40.3671 25.2193 40.5872 25.1024L41.0205 24.9023L41.7039 24.519L42.054 24.3023L42.754 23.8356L43.0374 23.6189C43.271 23.4497 43.4936 23.266 43.7041 23.0688L43.9541 22.8521C44.1708 22.6521 44.3875 22.4521 44.5875 22.2354L44.7875 22.0187C44.9876 21.7854 45.2043 21.552 45.3876 21.3187L45.5376 21.1187C45.7376 20.8686 45.921 20.6019 46.1043 20.3352C46.1283 20.2885 46.1562 20.2439 46.1877 20.2019C46.7524 19.314 47.2111 18.363 47.5545 17.3683C47.5952 17.2709 47.6287 17.1706 47.6545 17.0683C47.6545 16.8683 47.7712 16.6682 47.8212 16.4516C47.8712 16.2349 47.9378 16.0348 47.9879 15.8348L48.0879 15.2681L48.1879 14.7014H49.8547C50.1176 14.6942 50.3786 14.7494 50.6161 14.8623C50.8537 14.9753 51.0611 15.1429 51.2215 15.3514C51.4415 15.5617 51.5998 15.8282 51.6791 16.122C51.7585 16.4159 51.7558 16.7258 51.6715 17.0183Z"
                      fill="#3498DB"
                    ></path>
                  </svg>
                </div>
                <h5>Tailored Solutions</h5>
                <p>
                  E-Commerce Integrations unique to your business needs and
                  goals!
                </p>
              </li>
              <li>
                <div className="icon-cart">
                  <svg
                    width="55"
                    height="54"
                    viewBox="0 0 55 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.1942 23.6868H6.20335V25.8347H10.1942V23.6868ZM10.1942 26.7168H6.20335V28.8647H10.1942V26.7168ZM35.2506 23.0164H27.9827V25.1641H30.1444C30.1663 25.1641 30.1877 25.1641 30.2055 25.1641H33.3823H33.3932H35.2507V23.0164H35.2506ZM41.1027 26.0463H35.7024H35.6918H33.8342V28.1939H38.3342C38.3557 28.1905 38.3771 28.1905 38.3991 28.1939H41.1027V26.0463ZM5.32104 29.3163V29.3056V26.2864V26.2756V26.2651V23.2603V23.2458V23.2351V20.2304V20.2196V20.2052V17.2005V17.1898V17.1789V14.1705V14.1598V14.1491V11.1407V11.1299V11.1192V8.10004V8.08923V5.69405C5.32104 5.4538 5.51853 5.25301 5.7622 5.25301H48.1771C48.4206 5.25301 48.6178 5.4538 48.6178 5.69405V32.8161C48.6178 33.0597 48.4206 33.2571 48.1771 33.2571H5.7622C5.51853 33.2571 5.32104 33.0597 5.32104 32.8161V29.3163ZM49.8049 4.09132C49.4033 3.69328 48.8512 3.44244 48.2452 3.44244H5.79427C5.18863 3.44244 4.6361 3.68975 4.23817 4.09132C3.83661 4.49288 3.58918 5.04506 3.58918 5.65105V36.2152C3.58918 36.821 3.83649 37.3733 4.23817 37.7749C4.6361 38.1728 5.18851 38.4238 5.79427 38.4238H48.2451C48.8511 38.4238 49.4031 38.1727 49.8048 37.7749C50.2028 37.3733 50.4501 36.821 50.4501 36.2152V5.65105C50.4501 5.05576 50.2133 4.51074 49.8262 4.1127L49.8049 4.09132ZM32.1166 39.306H21.9261L19.8897 47.0438H34.1534L32.1166 39.306ZM41.0919 47.9222H19.3194H19.3088H12.948V49.1415H41.0917V47.9222H41.0919ZM19.7607 16.2143H27.9142C28.1546 16.2143 28.3555 16.4116 28.3555 16.6553V19.6852C28.3555 19.9291 28.1546 20.1263 27.9142 20.1263H22.4247V20.5638C22.4247 20.8828 22.0841 21.1089 21.7902 20.9618C21.6504 20.9046 21.5427 20.7324 21.5427 20.5638V20.1263H19.7607C19.5203 20.1263 19.3196 19.9291 19.3196 19.6852V16.6553C19.3194 16.4116 19.5203 16.2143 19.7607 16.2143ZM36.1324 25.1641H41.5434C41.7874 25.1641 41.9845 25.3615 41.9845 25.6054V28.6351C41.9845 28.8789 41.7874 29.0763 41.5434 29.0763H38.8077V29.5137C38.8077 29.8329 38.4671 30.0587 38.1732 29.9116C38.0335 29.8543 37.9259 29.6821 37.9259 29.5137V29.0763H33.3933C33.1496 29.0763 32.9525 28.8789 32.9525 28.6351V26.0463H30.6147V26.4872C30.6147 26.8064 30.2741 27.0287 29.9835 26.8816C29.8437 26.8279 29.7323 26.6522 29.7323 26.4872V26.0463H27.5417C27.2981 26.0463 27.1006 25.8489 27.1006 25.6054V22.5754C27.1006 22.3315 27.2981 22.1343 27.5417 22.1343H35.692C35.9357 22.1343 36.1327 22.3315 36.1327 22.5754V25.1641H36.1324ZM15.2033 7.659H23.3568C23.5972 7.659 23.798 7.85978 23.798 8.10004V11.1299C23.798 11.3738 23.5972 11.5709 23.3568 11.5709H22.4246V12.012C22.4246 12.3312 22.084 12.5534 21.79 12.4064C21.6502 12.3527 21.5426 12.177 21.5426 12.012V11.5709H15.2033C14.963 11.5709 14.7622 11.3738 14.7622 11.1299V8.10004C14.7622 7.85978 14.963 7.659 15.2033 7.659ZM6.20335 7.659H10.6349C10.879 7.659 11.0761 7.85978 11.0761 8.10004V11.1192V11.1299V11.1407V14.1491V14.1598V14.1705V17.1789V17.1898V17.2005V20.2052V20.2196V20.2304V23.2351V23.2458V23.2603V26.2651V26.2756V26.2864V29.3056C11.0761 29.5495 10.8789 29.7465 10.6349 29.7465H6.20335V32.3784H47.7359V6.1351H6.20335V7.659ZM10.1942 8.54108H6.20335V10.689H10.1942V8.54108ZM10.1942 11.5709H6.20335V13.7187H10.1942V11.5709ZM10.1942 14.6008H6.20335V16.7486H10.1942V14.6008ZM10.1942 17.6307H6.20335V19.7783H10.1942V17.6307ZM27.4735 17.0964H20.2015V19.2442H21.9551C21.9729 19.2407 21.9947 19.2407 22.0161 19.2442H27.4735V17.0964ZM22.9161 8.54108H15.6441V10.689H21.9551C21.9729 10.689 21.9947 10.689 22.0161 10.689H22.9163V8.54108H22.9161ZM21.5427 15.5368C21.5427 15.7017 21.6504 15.8772 21.7902 15.9312C22.0841 16.0781 22.4247 15.8558 22.4247 15.5368V14.6547C22.4247 14.4897 22.3171 14.3141 22.1774 14.2603C21.8834 14.1133 21.5429 14.3356 21.5429 14.6547V15.5368H21.5427ZM21.5427 24.0885C21.5427 24.2571 21.6504 24.4291 21.7902 24.4866C22.0841 24.6335 22.4247 24.4076 22.4247 24.0885V23.21C22.4247 23.0415 22.3171 22.8694 22.1774 22.812C21.8834 22.665 21.5429 22.8908 21.5429 23.21V24.0885H21.5427ZM21.5427 27.6132C21.5427 27.7818 21.6504 27.9538 21.7902 28.0111C22.0841 28.1582 22.4247 27.9324 22.4247 27.6132V26.7311C22.4247 26.5662 22.3171 26.3907 22.1774 26.3367C21.8834 26.1899 21.5429 26.412 21.5429 26.7311V27.6132H21.5427ZM13.3529 13.5538C13.3529 13.7224 13.4606 13.8944 13.6002 13.9519C13.8942 14.0989 14.2315 13.8729 14.2315 13.5538V12.6753C14.2315 12.5068 14.1239 12.3348 13.9842 12.2774C13.6902 12.1303 13.3529 12.3561 13.3529 12.6753V13.5538ZM13.3529 17.0785C13.3529 17.2471 13.4606 17.4192 13.6002 17.4766C13.8942 17.6235 14.2315 17.3977 14.2315 17.0785V16.2C14.2315 16.0314 14.1239 15.8594 13.9842 15.802C13.6902 15.6551 13.3529 15.8809 13.3529 16.2V17.0785ZM13.3529 20.6033C13.3529 20.7718 13.4606 20.9438 13.6002 21.0012C13.8942 21.1483 14.2315 20.9225 14.2315 20.6033V19.7211C14.2315 19.5563 14.1239 19.3842 13.9842 19.3268C13.6902 19.1798 13.3529 19.4057 13.3529 19.7211V20.6033ZM13.3529 24.128C13.3529 24.2928 13.4606 24.4686 13.6002 24.5223C13.8942 24.6694 14.2315 24.447 14.2315 24.128V23.2458C14.2315 23.0809 14.1239 22.9053 13.9842 22.8515C13.6902 22.7046 13.3529 22.9267 13.3529 23.2458V24.128ZM13.3529 27.6527C13.3529 27.8176 13.4606 27.9932 13.6002 28.0471C13.8942 28.1939 14.2315 27.9718 14.2315 27.6527V26.7705C14.2315 26.6057 14.1239 26.43 13.9842 26.3762C13.6902 26.2291 13.3529 26.4515 13.3529 26.7705V27.6527ZM14.2315 9.1506C14.2315 8.98201 14.1239 8.81001 13.9842 8.75256C13.6902 8.60911 13.3529 8.83139 13.3529 9.1506V10.0328C13.3529 10.1976 13.4606 10.3733 13.6002 10.4271C13.8942 10.5741 14.2315 10.3518 14.2315 10.0328V9.1506ZM37.9257 13.5538C37.9257 13.7224 38.0334 13.8944 38.1731 13.9519C38.467 14.0989 38.8076 13.8729 38.8076 13.5538V12.6753C38.8076 12.5068 38.6962 12.3348 38.5602 12.2774C38.2662 12.1303 37.9257 12.3561 37.9257 12.6753V13.5538ZM37.9257 17.0785C37.9257 17.2471 38.0334 17.4192 38.1731 17.4766C38.467 17.6235 38.8076 17.3977 38.8076 17.0785V16.2C38.8076 16.0314 38.6962 15.8594 38.5602 15.802C38.2662 15.6551 37.9257 15.8809 37.9257 16.2V17.0785ZM37.9257 20.6033C37.9257 20.7683 38.0334 20.9438 38.1731 20.9977C38.467 21.1446 38.8076 20.9224 38.8076 20.6033V19.7211C38.8076 19.5563 38.6962 19.3842 38.5602 19.3268C38.2662 19.1798 37.9257 19.4057 37.9257 19.7211V20.6033ZM37.9257 24.128C37.9257 24.2928 38.0334 24.4686 38.1731 24.5223C38.467 24.6694 38.8076 24.447 38.8076 24.128V23.2458C38.8076 23.0809 38.6962 22.9053 38.5602 22.8515C38.2662 22.7046 37.9257 22.9267 37.9257 23.2458V24.128ZM38.8076 9.1506C38.8076 8.98201 38.6962 8.81001 38.5602 8.75256C38.2662 8.60911 37.9257 8.83139 37.9257 9.1506V10.0328C37.9257 10.1976 38.0334 10.3733 38.1731 10.4271C38.467 10.5741 38.8076 10.3518 38.8076 10.0328V9.1506ZM29.7321 13.5538C29.7321 13.7224 29.8433 13.8944 29.9833 13.9519C30.2739 14.0989 30.6145 13.8729 30.6145 13.5538V12.6753C30.6145 12.5068 30.5069 12.3348 30.3671 12.2774C30.0731 12.1303 29.7322 12.3561 29.7322 12.6753L29.7321 13.5538ZM29.7321 17.0785C29.7321 17.2471 29.8433 17.4192 29.9833 17.4766C30.2739 17.6235 30.6145 17.3977 30.6145 17.0785V16.2C30.6145 16.0314 30.5069 15.8594 30.3671 15.802C30.0731 15.6551 29.7322 15.8809 29.7322 16.2L29.7321 17.0785ZM29.7321 20.6033C29.7321 20.7718 29.8433 20.9438 29.9833 21.0012C30.2739 21.1483 30.6145 20.9225 30.6145 20.6033V19.7211C30.6145 19.5563 30.5069 19.3842 30.3671 19.3268C30.0731 19.1798 29.7322 19.4057 29.7322 19.7211L29.7321 20.6033ZM29.7321 29.5279C29.7321 29.6966 29.8433 29.8686 29.9833 29.926C30.2739 30.0695 30.6145 29.8471 30.6145 29.5279V29.13C30.6145 28.9612 30.5069 28.7894 30.3671 28.7318C30.0731 28.5849 29.7322 28.8109 29.7322 29.13L29.7321 29.5279ZM30.6145 9.1506C30.6145 8.98201 30.5069 8.81001 30.3671 8.75256C30.0731 8.60911 29.7322 8.83139 29.7322 9.1506V10.0328C29.7322 10.1976 29.8434 10.3733 29.9834 10.4271C30.274 10.5741 30.6146 10.3518 30.6146 10.0328V9.1506H30.6145ZM2.89367 52.0172C2.65329 52.0172 2.45251 51.8198 2.45251 51.576C2.45251 51.3323 2.65329 51.135 2.89367 51.135H35.5053C35.7453 51.135 35.9461 51.3323 35.9461 51.576C35.9461 51.8198 35.7453 52.0172 35.5053 52.0172H2.89367ZM21.9909 54C21.7473 54 21.5498 53.8027 21.5498 53.559C21.5498 53.3152 21.7473 53.1179 21.9909 53.1179H44.5553C44.7995 53.1179 44.9966 53.3152 44.9966 53.559C44.9966 53.8027 44.7995 54 44.5553 54H21.9909ZM46.8646 54C46.6205 54 46.4234 53.8027 46.4234 53.559C46.4234 53.3152 46.6205 53.1179 46.8646 53.1179H49.6865C49.9265 53.1179 50.1273 53.3152 50.1273 53.559C50.1273 53.8027 49.9265 54 49.6865 54H46.8646ZM1.61014 53.9391C1.366 53.9391 1.16898 53.7419 1.16898 53.498C1.16898 53.2578 1.36612 53.0571 1.61014 53.0571H12.3023C12.5464 53.0571 12.7434 53.2578 12.7434 53.498C12.7434 53.7419 12.5463 53.9391 12.3023 53.9391H1.61014ZM0.881964 16.487C0.881964 16.7308 0.681181 16.928 0.441158 16.928C0.197023 16.928 0 16.7308 0 16.487V3.3884C0 2.4598 0.380184 1.61355 0.993223 0.996865C1.61002 0.380183 2.45615 0.000117421 3.3884 0.000117421H10.9149C11.1585 0.000117421 11.3557 0.197376 11.3557 0.441041C11.3557 0.684941 11.1585 0.882199 10.9149 0.882199H3.3884C2.69653 0.882199 2.06904 1.16546 1.61707 1.61731C1.16181 2.07268 0.881964 2.70017 0.881964 3.38852V16.487ZM50.6546 0.882082C50.4106 0.882082 50.2134 0.684823 50.2134 0.440923C50.2134 0.197258 50.4106 0 50.6546 0C51.587 0 52.433 0.383708 53.046 0.996747C53.6592 1.61002 54.043 2.45615 54.043 3.38828V8.92456C54.043 9.16834 53.8421 9.3656 53.6017 9.3656C53.3581 9.3656 53.161 9.16834 53.161 8.92456V3.3884C53.161 2.70005 52.8778 2.07256 52.4222 1.62071C51.9703 1.16546 51.3433 0.882082 50.6546 0.882082ZM10.1942 20.6607H6.20335V22.8083H10.1942V20.6607Z"
                      fill="#3498DB"
                    ></path>
                  </svg>
                </div>
                <h5>Digital Solutions</h5>
                <p>
                  Superior Digital and Social solutions to improve business
                  organization with a human experience!
                </p>
              </li>
              <li>
                <div className="icon-cart">
                  <svg
                    width="43"
                    height="52"
                    viewBox="0 0 43 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.4929 1.59593C22.4929 0.715843 21.9194 0 21.2142 0C20.5092 0 19.9355 0.715964 19.9355 1.59593V4.32631H22.4929V1.59593Z"
                      fill="#3498DB"
                    ></path>
                    <path
                      d="M3.47838 9.73196H5.64259H37.6513H38.9496C39.8926 9.73196 40.6598 8.77423 40.6598 7.5969C40.6598 6.41934 39.8926 5.46136 38.9496 5.46136H22.9443H19.4834H3.47838C2.53575 5.46136 1.7688 6.41934 1.7688 7.5969C1.7688 8.77411 2.53575 9.73196 3.47838 9.73196Z"
                      fill="#3498DB"
                    ></path>
                    <path
                      d="M41.9767 50.3773H36.1348L24.3443 34.5828H37.1994V10.867H6.09421V34.5828H18.9187L5.44828 50.3773H0.451838C0.202392 50.3773 0 50.6313 0 50.9447C0 51.2583 0.202392 51.5123 0.451838 51.5123H41.9767C42.2263 51.5123 42.4286 51.2583 42.4286 50.9447C42.4286 50.6313 42.2263 50.3773 41.9767 50.3773ZM14.9801 12.6135H16.7077V14.7733H14.9801V12.6135ZM11.5198 12.6135H13.2474V14.7733H11.5198V12.6135ZM8.05951 12.6135H9.78721V14.7733H8.05951V12.6135ZM9.96791 29.5087C9.71846 29.5087 9.51607 29.2547 9.51607 28.9411C9.51607 28.6278 9.71827 28.3736 9.96771 28.3736C9.99548 28.3736 12.7953 28.3547 16.9172 27.0287C18.7684 26.4331 21.0795 25.5053 23.6258 24.0736C21.0795 22.6419 18.7684 21.7142 16.9172 21.1187C12.7953 19.7926 9.99548 19.7738 9.96771 19.7738C9.71827 19.7736 9.51607 19.5193 9.51626 19.206C9.51636 18.8928 9.71856 18.6388 9.96791 18.6388C10.0851 18.6388 12.8847 18.6543 17.1085 20.0083C19.1788 20.6721 21.8102 21.7397 24.704 23.4449C26.8699 22.136 29.1766 20.461 31.497 18.3213L29.7224 17.5817C29.4857 17.4831 29.3574 17.1618 29.4359 16.8644C29.5145 16.5668 29.7705 16.4057 30.007 16.5044L32.6027 17.5863C32.6029 17.5865 32.603 17.5866 32.6032 17.5867C32.6088 17.589 32.614 17.5929 32.6195 17.5954C32.6335 17.6021 32.6469 17.6099 32.6602 17.6183C32.6685 17.6234 32.6773 17.6269 32.6852 17.6327C32.6902 17.6361 32.6941 17.6408 32.6989 17.6446C32.7115 17.6545 32.7231 17.6654 32.7348 17.6768C32.7421 17.684 32.7502 17.6894 32.7574 17.6972C32.7615 17.7018 32.7648 17.7072 32.7687 17.7122C32.7793 17.7245 32.7888 17.7381 32.7984 17.7518C32.805 17.7614 32.8127 17.7696 32.819 17.7795C32.819 17.7798 32.8192 17.7799 32.8192 17.7799C32.8216 17.7838 32.8229 17.7881 32.8251 17.792C32.8254 17.7922 32.8256 17.7928 32.8258 17.7933C32.8345 17.8085 32.8419 17.8243 32.8493 17.8406C32.8546 17.8518 32.8608 17.8623 32.8654 17.874C32.8676 17.8794 32.8691 17.885 32.871 17.8906C32.8767 17.9061 32.881 17.9224 32.8854 17.9386C32.8891 17.9514 32.8935 17.9639 32.8964 17.9771C32.8977 17.9836 32.8984 17.9902 32.8997 17.9967C32.9025 18.0117 32.9039 18.0271 32.9057 18.0425C32.9076 18.0571 32.9102 18.0713 32.911 18.0861C32.9113 18.0936 32.9109 18.1011 32.9111 18.1086C32.9112 18.1141 32.9124 18.1193 32.9124 18.1248V21.3693C32.9124 21.6827 32.7101 21.9367 32.4606 21.9367C32.211 21.9367 32.0087 21.6827 32.0087 21.3693V19.2572C29.8749 21.2222 27.7522 22.8039 25.7357 24.0734C27.7522 25.343 29.8749 26.9247 32.0087 28.8897V26.7773C32.0087 26.4639 32.211 26.2098 32.4606 26.2098C32.7101 26.2098 32.9124 26.4639 32.9124 26.7773V30.0223C32.9124 30.0278 32.9112 30.033 32.9111 30.0386C32.9109 30.0461 32.9113 30.0535 32.911 30.0611C32.9102 30.0759 32.9076 30.0901 32.9057 30.1047C32.9039 30.1201 32.9026 30.1355 32.8997 30.1504C32.8984 30.1569 32.8977 30.1635 32.8964 30.1699C32.8935 30.1832 32.8889 30.1958 32.8853 30.2089C32.8808 30.225 32.8766 30.2411 32.871 30.2565C32.8691 30.262 32.8677 30.2677 32.8655 30.2731C32.8608 30.2851 32.8546 30.2959 32.8492 30.3074C32.8417 30.3231 32.8345 30.3388 32.826 30.3535C32.8247 30.3561 32.8237 30.3589 32.8222 30.3612C32.821 30.3631 32.8203 30.3653 32.8193 30.3672L32.8191 30.3675C32.8177 30.3699 32.8159 30.3718 32.8145 30.3742C32.804 30.391 32.793 30.4069 32.7814 30.4216C32.7794 30.4241 32.7774 30.4261 32.7755 30.4284C32.7723 30.4323 32.7689 30.436 32.7657 30.4398C32.7613 30.4446 32.7574 30.4495 32.7528 30.4542C32.742 30.4658 32.7307 30.4765 32.7193 30.4866C32.7159 30.4897 32.7127 30.4928 32.7092 30.4956C32.7034 30.5005 32.6974 30.5051 32.6913 30.5095C32.6871 30.5127 32.6828 30.5155 32.6785 30.5184C32.6668 30.5265 32.655 30.534 32.6429 30.5408C32.638 30.5435 32.633 30.5461 32.6281 30.5485C32.6203 30.5523 32.6128 30.5564 32.6051 30.5597C32.6041 30.5602 32.6035 30.5608 32.6027 30.5611L30.007 31.6425C29.9597 31.6622 29.9118 31.6715 29.8646 31.6715C29.6753 31.6715 29.4987 31.5207 29.4359 31.2826C29.3574 30.9851 29.4857 30.6638 29.7224 30.5651L31.4969 29.8258C29.1765 27.686 26.8699 26.0111 24.704 24.7021C21.8101 26.4072 19.1787 27.4749 17.1085 28.1387C12.8847 29.4932 10.0852 29.5087 9.96791 29.5087ZM21.1951 50.3773H6.77255L19.0323 36.0023V39.5633C19.0323 41.1744 19.9681 42.5163 21.1951 42.785V50.3773ZM22.0987 50.3773V42.785C23.3257 42.5163 24.2614 41.1744 24.2614 39.5633V36.131L34.896 50.3771H22.0987V50.3773Z"
                      fill="#3498DB"
                    ></path>
                  </svg>
                </div>
                <h5>Strategic Partners</h5>
                <p>
                  Stronger together with like-minded individuals and business
                  across every industry imaginable.
                </p>
              </li>
            </ul>
          </div>

          <div className="container">
            <div className="row text-left">
              <div className="col-sm-6">
                <img src={productImg} className="img-fluid" />
              </div>

              <div className="col-sm-6">
                <h5>
                  Empower yourself with the ultimate resource for achieving
                  excellence in IT services.
                </h5>

                <ul>
                  <li>
                    In-depth data insights and identifies amazing market
                    opportunities from millions of businesses, consumers, and
                    decision-making executives. Connect and discover your next
                    best and enduring relationship.
                  </li>
                  <li>
                    Sophisticated artificial intelligence and machine learning
                    models, powering learning opportunities that upgrade your
                    business performance and deepen insights.
                  </li>
                  <li>
                    Markit IQ programmatically combines the best of human
                    intelligence with evolving and emerging to establish
                    augmented intelligence solutions responsive to your specific
                    data needs and challenges.
                  </li>
                </ul>
                <a href="#services" className="btn btn-theme margin-45">
                  VIEW DETAILS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
