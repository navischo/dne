const eventMarkup = `
<div id="event-swiper" class="swiper --sub">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
        <div id="dne-page-up">
        
        </div>
    </div>
    <div class="swiper-slide">
        <div id="collector-body" class="collector-body">
            <div class="scene">
                <div class="sticker" data-sticker="ice">
                    <svg width="2560" height="1360" viewBox="0 0 2560 1360" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M930 449.5V409.5H890H205C113.909 409.5 40 483.409 40 574.5C40 665.591 113.909 739.5 205 739.5H890H930V699.5V449.5Z" fill="white" stroke="white" stroke-width="80"/>
                    <path d="M1162.31 1109H1703.45C1707.19 1109.17 1710.65 1109.3 1713.91 1109.43C1723.53 1109.79 1731.44 1110.09 1739.8 1111.27C1750.31 1112.75 1757.3 1115.24 1762.39 1118.7C1770.13 1123.97 1786.4 1140.74 1786.4 1206C1786.4 1268.99 1837.41 1320 1900.4 1320C1907.22 1320 1913.57 1319.36 1919.57 1318.34C1973.4 1309.24 2014.4 1262.43 2014.4 1206C2014.4 1144.64 2054.83 1120.41 2070.29 1113.19C2073.34 1113.67 2077.73 1114.72 2083.88 1116.53C2088.06 1117.76 2091.73 1118.92 2095.75 1120.19C2098.68 1121.12 2101.81 1122.11 2105.45 1123.22C2112.95 1125.52 2121.88 1128.1 2130.61 1129.67C2191.22 1140.62 2231.27 1101.79 2255.33 1071.44C2264.75 1059.56 2273.72 1046.37 2281.35 1035.17C2283.62 1031.84 2285.76 1028.68 2287.77 1025.79C2297.36 1011.94 2303.84 1003.83 2308.83 999.516C2436.7 901.935 2519.2 747.841 2519.2 574.5C2519.2 279.309 2279.89 40 1984.7 40H999.3C950.961 40 917.52 64.1743 896.265 92.2351C876.051 118.921 865.988 149.922 860.682 169.574C849.305 211.718 839.2 252.132 839.2 574.5C839.2 896.869 849.305 937.282 860.682 979.426C865.649 997.869 874.704 1025.85 892.076 1051C909.865 1076.75 937.946 1101.55 979.857 1107.63C981.318 1107.88 982.635 1108.14 983.815 1108.4C989.153 1150.65 1023.76 1183.79 1066.78 1186.79C1069.53 1187.01 1071.97 1187 1072.91 1187L1073.1 1187C1118.72 1187 1156.44 1153.02 1162.31 1109ZM2068.1 1112.93C2067.85 1112.94 2067.7 1112.93 2067.69 1112.92C2067.68 1112.92 2067.81 1112.91 2068.1 1112.93Z" fill="black" stroke="white" stroke-width="80"/>
                    <path d="M870 469.5V679.5H205C147.1 679.5 100 632.4 100 574.5C100 516.6 147.1 469.5 205 469.5H870ZM890 449.5H205C136 449.5 80 505.5 80 574.5C80 643.5 136 699.5 205 699.5H890V449.5Z" fill="black"/>
                    <path d="M889.2 449.5H837.8C837.4 485.5 837.2 526.9 837.2 574.5C837.2 622.1 837.4 663.5 837.8 699.5H889.2V449.5Z" fill="black"/>
                    <path d="M886.6 666.9L889 655.1C859.5 649.2 808.7 642.6 754.7 642.1C711 641.6 650.6 645.2 610.8 664.7C585.6 677.1 550.3 689.1 515.6 699.4H555.6C577.9 691.9 599.1 683.8 616 675.4C684.8 641.8 828 655.2 886.6 666.9Z" fill="black"/>
                    <path d="M184.2 688.1C247.3 694.9 384.4 699.2 451.2 666.5C453.9 665.2 456.6 663.9 459.3 662.5C523.5 630.8 603 591.6 890.1 580.6V568.6C600.1 579.7 519.3 619.5 454 651.7C451.3 653 448.6 654.4 445.9 655.7C417.6 669.5 371.3 678 312 680.2C263.3 682 214.7 679.3 185.5 676.1C169.2 674.3 152.4 675.9 136.6 679C142 682.6 147.8 685.7 153.8 688.4C163.9 687.3 174.2 687 184.2 688.1Z" fill="black"/>
                    <path d="M265.9 654C274.5 655.3 284.5 655.9 295.2 655.9C304.9 655.9 315.3 655.4 325.9 654.4C358.6 651.2 413.4 640.4 411.4 619.8C410.6 611 400.6 605.4 380.9 602.5C364.6 600.1 343.3 600 320.9 602.2C288.2 605.4 233.4 616.2 235.4 636.8C236.2 645.5 246.2 651.2 265.9 654ZM268.4 624.4C282.8 619.6 301.9 616 322 614C342.2 612.1 361.6 612 376.6 613.9C392.6 615.9 398.3 619.5 399.3 620.8C398.5 622.3 393.6 626.9 378.3 631.9C363.9 636.6 344.8 640.3 324.7 642.3C304.5 644.2 285.1 644.3 270.1 642.4C254.1 640.4 248.4 636.8 247.4 635.5C248.2 634 253.1 629.5 268.4 624.4Z" fill="black"/>
                    <path d="M567.9 559.1C664.2 551.6 763.8 543.9 843.8 533.9C860.7 531.8 876.1 529.7 890.1 527.5V515.3C875.8 517.5 859.9 519.7 842.3 521.9C762.6 531.8 663.2 539.5 567 547C478.6 553.9 395.2 560.4 335.5 567.9C237.2 580.5 160 606.1 112.5 625.5C106.2 628.1 100.2 630.6 94.6001 633.1C96.5001 636.7 98.6001 640.2 100.8 643.6C152 621.2 233 593.1 336.9 580C396.3 572.4 479.6 565.9 567.9 559.1Z" fill="black"/>
                    <path d="M275.3 511C334.4 505 407.8 503.3 485.5 501.6C627.3 498.4 786.8 494.8 890 462.3V449.7C788.8 482.8 628 486.4 485.2 489.6C407.2 491.4 333.6 493 274.1 499.1C181.6 508.5 118.8 537.9 82.3 561C81.7 561.4 81.2 561.7 80.6 562.1C80.2 566.2 80 570.4 80 574.6C80 575.4 80 576.1 80 576.9C83 574.9 86 572.9 89.3 570.8C124.6 548.5 185.5 520.2 275.3 511Z" fill="black"/>
                    <path d="M359.3 449.5H288.4C220.5 462 167.7 474.4 128.9 484.7C123.8 486.1 118.8 487.4 114.1 488.7C109.4 493.7 105.1 499.1 101.2 504.8C110.9 502 121.3 499.1 132.7 496.1C183.4 482.6 258.1 465.7 359.3 449.5Z" fill="black"/>
                    </svg>
                </div>
                    
                <div class="sticker" data-sticker="ice-color">
                    <svg width="2560" height="1360" viewBox="0 0 2560 1360" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M930 449.5V409.5H890H205C113.909 409.5 40 483.409 40 574.5C40 665.591 113.909 739.5 205 739.5H890H930V699.5V449.5Z" fill="white" stroke="white" stroke-width="80"/>
                    <path d="M1162.31 1109H1703.45C1707.19 1109.17 1710.65 1109.3 1713.91 1109.43C1723.53 1109.79 1731.44 1110.09 1739.8 1111.27C1750.31 1112.75 1757.3 1115.24 1762.39 1118.7C1770.13 1123.97 1786.4 1140.74 1786.4 1206C1786.4 1268.99 1837.41 1320 1900.4 1320C1907.22 1320 1913.57 1319.36 1919.57 1318.34C1973.4 1309.24 2014.4 1262.43 2014.4 1206C2014.4 1144.64 2054.83 1120.41 2070.29 1113.19C2073.34 1113.67 2077.73 1114.72 2083.88 1116.53C2088.06 1117.76 2091.73 1118.92 2095.75 1120.19C2098.68 1121.12 2101.81 1122.11 2105.45 1123.22C2112.95 1125.52 2121.88 1128.1 2130.61 1129.67C2191.22 1140.62 2231.27 1101.79 2255.33 1071.44C2264.75 1059.56 2273.72 1046.37 2281.35 1035.17C2283.62 1031.84 2285.76 1028.68 2287.77 1025.79C2297.36 1011.94 2303.84 1003.83 2308.83 999.516C2436.7 901.935 2519.2 747.841 2519.2 574.5C2519.2 279.309 2279.89 40 1984.7 40H999.3C950.961 40 917.52 64.1743 896.265 92.2351C876.051 118.921 865.988 149.922 860.682 169.574C849.305 211.718 839.2 252.132 839.2 574.5C839.2 896.869 849.305 937.282 860.682 979.426C865.649 997.869 874.704 1025.85 892.076 1051C909.865 1076.75 937.946 1101.55 979.857 1107.63C981.318 1107.88 982.635 1108.14 983.815 1108.4C989.153 1150.65 1023.76 1183.79 1066.78 1186.79C1069.53 1187.01 1071.97 1187 1072.91 1187L1073.1 1187C1118.72 1187 1156.44 1153.02 1162.31 1109ZM2068.1 1112.93C2067.85 1112.94 2067.7 1112.93 2067.69 1112.92C2067.68 1112.92 2067.81 1112.91 2068.1 1112.93Z" fill="black" stroke="white" stroke-width="80"/>
                    <path d="M870 469.5V679.5H205C147.1 679.5 100 632.4 100 574.5C100 516.6 147.1 469.5 205 469.5H870ZM890 449.5H205C136 449.5 80 505.5 80 574.5C80 643.5 136 699.5 205 699.5H890V449.5Z" fill="black"/>
                    <path d="M889.2 449.5H837.8C837.4 485.5 837.2 526.9 837.2 574.5C837.2 622.1 837.4 663.5 837.8 699.5H889.2V449.5Z" fill="black"/>
                    <path d="M886.6 666.9L889 655.1C859.5 649.2 808.7 642.6 754.7 642.1C711 641.6 650.6 645.2 610.8 664.7C585.6 677.1 550.3 689.1 515.6 699.4H555.6C577.9 691.9 599.1 683.8 616 675.4C684.8 641.8 828 655.2 886.6 666.9Z" fill="black"/>
                    <path d="M184.2 688.1C247.3 694.9 384.4 699.2 451.2 666.5C453.9 665.2 456.6 663.9 459.3 662.5C523.5 630.8 603 591.6 890.1 580.6V568.6C600.1 579.7 519.3 619.5 454 651.7C451.3 653 448.6 654.4 445.9 655.7C417.6 669.5 371.3 678 312 680.2C263.3 682 214.7 679.3 185.5 676.1C169.2 674.3 152.4 675.9 136.6 679C142 682.6 147.8 685.7 153.8 688.4C163.9 687.3 174.2 687 184.2 688.1Z" fill="black"/>
                    <path d="M265.9 654C274.5 655.3 284.5 655.9 295.2 655.9C304.9 655.9 315.3 655.4 325.9 654.4C358.6 651.2 413.4 640.4 411.4 619.8C410.6 611 400.6 605.4 380.9 602.5C364.6 600.1 343.3 600 320.9 602.2C288.2 605.4 233.4 616.2 235.4 636.8C236.2 645.5 246.2 651.2 265.9 654ZM268.4 624.4C282.8 619.6 301.9 616 322 614C342.2 612.1 361.6 612 376.6 613.9C392.6 615.9 398.3 619.5 399.3 620.8C398.5 622.3 393.6 626.9 378.3 631.9C363.9 636.6 344.8 640.3 324.7 642.3C304.5 644.2 285.1 644.3 270.1 642.4C254.1 640.4 248.4 636.8 247.4 635.5C248.2 634 253.1 629.5 268.4 624.4Z" fill="black"/>
                    <path d="M567.9 559.1C664.2 551.6 763.8 543.9 843.8 533.9C860.7 531.8 876.1 529.7 890.1 527.5V515.3C875.8 517.5 859.9 519.7 842.3 521.9C762.6 531.8 663.2 539.5 567 547C478.6 553.9 395.2 560.4 335.5 567.9C237.2 580.5 160 606.1 112.5 625.5C106.2 628.1 100.2 630.6 94.6001 633.1C96.5001 636.7 98.6001 640.2 100.8 643.6C152 621.2 233 593.1 336.9 580C396.3 572.4 479.6 565.9 567.9 559.1Z" fill="black"/>
                    <path d="M275.3 511C334.4 505 407.8 503.3 485.5 501.6C627.3 498.4 786.8 494.8 890 462.3V449.7C788.8 482.8 628 486.4 485.2 489.6C407.2 491.4 333.6 493 274.1 499.1C181.6 508.5 118.8 537.9 82.3 561C81.7 561.4 81.2 561.7 80.6 562.1C80.2 566.2 80 570.4 80 574.6C80 575.4 80 576.1 80 576.9C83 574.9 86 572.9 89.3 570.8C124.6 548.5 185.5 520.2 275.3 511Z" fill="black"/>
                    <path d="M359.3 449.5H288.4C220.5 462 167.7 474.4 128.9 484.7C123.8 486.1 118.8 487.4 114.1 488.7C109.4 493.7 105.1 499.1 101.2 504.8C110.9 502 121.3 499.1 132.7 496.1C183.4 482.6 258.1 465.7 359.3 449.5Z" fill="black"/>
                    <path d="M890.001 699.5H205.001C136.001 699.5 80.0009 643.5 80.0009 574.5C80.0009 505.5 136.001 449.5 205.001 449.5H890.001V699.5Z" fill="#C89E6B"/>
                    <path opacity="0.6" d="M889.201 449.5H837.8C837.401 485.5 837.201 526.9 837.201 574.5C837.201 622.1 837.401 663.5 837.8 699.5H889.201V449.5Z" fill="#A37B4B"/>
                    <path d="M567.901 559.1C664.201 551.6 763.801 543.9 843.801 533.9C860.701 531.8 876.101 529.7 890.101 527.5V515.3C875.801 517.5 859.901 519.7 842.301 521.9C762.601 531.8 663.201 539.5 567.001 547C478.601 553.9 395.2 560.4 335.501 567.9C237.201 580.5 160.001 606.1 112.501 625.5C106.201 628.1 100.201 630.6 94.6006 633.1C96.5004 636.7 98.6005 640.2 100.801 643.6C152.001 621.2 233.001 593.1 336.901 580C396.301 572.4 479.601 565.9 567.901 559.1Z" fill="#A37B4B"/>
                    <path d="M265.901 654C274.501 655.3 284.501 655.9 295.2 655.9C304.901 655.9 315.301 655.4 325.901 654.4C358.601 651.2 413.4 640.4 411.4 619.8C410.6 611 400.6 605.4 380.9 602.5C364.6 600.1 343.3 600 320.9 602.2C288.2 605.4 233.4 616.2 235.4 636.8C236.201 645.5 246.201 651.2 265.901 654ZM268.401 624.4C282.801 619.6 301.901 616 322.001 614C342.201 612.1 361.601 612 376.601 613.9C392.601 615.9 398.301 619.5 399.301 620.8C398.501 622.3 393.601 626.9 378.301 631.901C363.901 636.601 344.801 640.301 324.701 642.3C304.501 644.2 285.101 644.3 270.101 642.4C254.101 640.401 248.401 636.801 247.401 635.5C248.201 634 253.101 629.5 268.401 624.4Z" fill="#A37B4B"/>
                    <path d="M184.201 688.1C247.301 694.9 384.401 699.201 451.201 666.5C453.901 665.2 456.601 663.9 459.301 662.5C523.501 630.8 603.001 591.6 890.101 580.6V568.6C600.101 579.7 519.3 619.5 454.001 651.7C451.301 653 448.601 654.4 445.901 655.7C417.601 669.5 371.301 678 312.001 680.201C263.301 682 214.701 679.3 185.501 676.1C169.201 674.3 152.401 675.9 136.601 679.001C142.001 682.601 147.801 685.701 153.801 688.401C163.901 687.301 174.201 687 184.201 688.1Z" fill="#A37B4B"/>
                    <path d="M886.6 666.9L889 655.1C859.501 649.2 808.701 642.6 754.701 642.1C711.001 641.6 650.601 645.2 610.801 664.7C585.601 677.1 550.301 689.1 515.601 699.4H555.601C577.901 691.9 599.101 683.8 616.001 675.4C684.801 641.8 828.001 655.2 886.6 666.9Z" fill="#A37B4B"/>
                    <path d="M275.301 511C334.401 505 407.801 503.3 485.501 501.6C627.301 498.4 786.801 494.8 890.001 462.3V449.7C788.801 482.8 628.001 486.4 485.201 489.6C407.201 491.4 333.601 493 274.101 499.1C181.601 508.5 118.801 537.9 82.3009 561C81.7011 561.4 81.2008 561.7 80.601 562.1C80.2012 566.2 80.0012 570.4 80.0012 574.6C80.0012 575.4 80.0012 576.1 80.0012 576.9C83.001 574.9 86.0012 572.9 89.3013 570.8C124.601 548.5 185.501 520.2 275.301 511Z" fill="#A37B4B"/>
                    <path d="M359.301 449.5H288.401C220.501 462 167.7 474.4 128.9 484.7C123.801 486.1 118.801 487.4 114.101 488.7C109.401 493.7 105.101 499.1 101.201 504.8C110.9 502 121.301 499.1 132.7 496.1C183.401 482.6 258.101 465.7 359.301 449.5Z" fill="#A37B4B"/>
                    <path d="M899.301 180.001C889.501 216.301 879.201 251.601 879.201 574.5C879.201 897.401 889.501 932.7 899.301 969C908.401 1002.8 929.901 1060.2 986.001 1068.1C1005.2 1071.3 1023.1 1078.5 1023.1 1097C1023.1 1123.5 1043.7 1145.2 1069.8 1146.9C1044.1 985.3 1147.8 677.7 1069.2 80H999.3C933.101 80.0004 909.101 143.7 899.301 180.001Z" fill="#DB5746"/>
                    <path d="M2479.2 574.5C2479.2 735.201 2402.6 878.001 2283.8 968.3C2244.5 1000.9 2212.3 1103.8 2137.7 1090.3C2112.7 1085.8 2075.4 1067.7 2059.2 1074.4C2044.7 1080.3 1974.4 1112.6 1974.4 1206C1974.4 1242.6 1947.8 1273 1912.9 1278.9C1864.2 1081.2 2001.7 674.601 1937.9 80.0005H1984.7C2257.8 80.0005 2479.2 301.4 2479.2 574.5Z" fill="#79C3A6"/>
                    <path d="M1913 1278.9C1908.9 1279.6 1904.8 1280 1900.5 1280C1859.6 1280 1826.5 1246.9 1826.5 1206C1826.5 1065.2 1756.5 1071.5 1704.5 1069H1421.2C1474.6 581.901 1470 527.5 1407.4 80.0005H1938C2001.8 674.701 1864.3 1081.3 1913 1278.9Z" fill="#3D96D3"/>
                    <path d="M1421.1 1069H1157.6C1138.9 1069.4 1123.1 1078.5 1123.1 1097C1123.1 1124.6 1100.7 1147 1073.1 1147C1072 1147 1070.9 1147 1069.8 1146.9C1044.1 985.3 1147.8 677.6 1069.2 80H1407.3C1469.9 527.5 1474.5 581.901 1421.1 1069Z" fill="#F3EB75"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="2559.2" height="1360" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                </div>
                    
                <div class="sticker" data-sticker="pizza">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/124740/stickers-10.png" alt="">
                </div>
                    
                <div class="sticker" data-sticker="rick">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/124740/stickers-02.png" alt="">
                </div>
                    
                <div class="sticker" data-sticker="morty">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/124740/stickers-04.png" alt="">
                </div>
                    
                <div class="sticker" data-sticker="blobsweat">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/124740/blobsweat.png" alt="">
                </div>
                    
                <div class="sticker" data-sticker="sadcett">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/124740/sad_cett.png" alt="">
                </div>
                    
                <div class="sticker" data-sticker="banhammer">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/124740/ban_hammer.png" alt="">
                </div>
                    
                <div class="sticker" data-sticker="pepehonk">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/124740/pepe_honk.png" alt="">
                </div>
                
                <div class="middle">
                    <span>Collect stickers</span>
                    <span>idea from -> <a href="https://square.geex-arts.com/" target="_blank">square.geex-arts.com</a></span>
                </div>
            </div>
            
            <h3 class="collector-title">Meet your Guests</h3>
            
            <div class="color-wheel">
                <div class="color-wheel__inner"></div>
            </div>
            
            <div class="sticker-collection">
                <div class="sticker-collection__trigger"></div>
            </div>
        </div>
    </div>
    <div class="swiper-slide">
        <div class="sky-nav">
            <a class="sky-nav-item"><span class="sky-nav-item__text">TIME</span></a>
            <a class="sky-nav-item"><span class="sky-nav-item__text">LOCATION</span></a>
            <a class="sky-nav-item"><span class="sky-nav-item__text">SETTING</span></a>
            <a class="sky-nav-item"><span class="sky-nav-item__text">SOUND</span></a>
        </div>
    </div>
  </div>
  <div class="swiper-button-next --up"></div>
  <div class="swiper-button-prev --up"></div>
</div>

`;

export {eventMarkup};
