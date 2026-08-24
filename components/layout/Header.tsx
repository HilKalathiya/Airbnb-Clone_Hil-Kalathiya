import React from 'react';
import { Search, Globe, Menu } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="top-0 z-40 bg-white border-b border-[#ebebeb] w-full flex items-center justify-center" style={{ height: '89px' }}>
      <div 
        className="w-full h-full relative" 
        style={{ maxWidth: '1905px' }}
      >
        <div 
          className="absolute inset-0 flex items-center justify-between"
          style={{ paddingLeft: '80px', paddingRight: '80px' }}
        >
          {/* Logo Section */}
          <Link 
            href="/" 
            className="text-[#FF385C] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF385C] rounded-sm" 
            aria-label="Airbnb homepage"
            style={{ width: '103.41px', height: '32px' }}
          >
            <svg
              width="103.41"
              height="32"
              fill="currentColor"
              viewBox="0 0 3490 1080"
              xmlns="http://www.w3.org/2000/svg"
              className="block"
            >
              <path d="M1494.71 456.953C1458.28 412.178 1408.46 389.892 1349.68 389.892C1233.51 389.892 1146.18 481.906 1146.18 605.892C1146.18 729.877 1233.51 821.892 1349.68 821.892C1408.46 821.892 1458.28 799.605 1494.71 754.83L1500.95 810.195H1589.84V401.588H1500.95L1494.71 456.953ZM1369.18 736.895C1295.33 736.895 1242.08 683.41 1242.08 605.892C1242.08 528.373 1295.33 474.888 1369.18 474.888C1443.02 474.888 1495.49 529.153 1495.49 605.892C1495.49 682.63 1443.8 736.895 1369.18 736.895ZM1656.11 810.195H1750.46V401.588H1656.11V810.195ZM948.912 666.715C875.618 506.859 795.308 344.664 713.438 184.809C698.623 155.177 670.554 98.2527 645.603 67.8412C609.736 24.1733 556.715 0.779785 502.915 0.779785C449.115 0.779785 396.094 24.1733 360.227 67.8412C335.277 98.2527 307.207 155.177 292.392 184.809C210.522 344.664 130.212 506.859 56.9187 666.715C47.5621 687.769 24.9504 737.675 16.3736 760.289C6.2373 787.581 0.779297 817.213 0.779297 846.845C0.779297 975.509 101.362 1079.22 235.473 1079.22C346.193 1079.22 434.3 1008.26 502.915 934.18C571.53 1008.26 659.638 1079.22 770.357 1079.22C904.468 1079.22 1005.83 975.509 1005.83 846.845C1005.83 817.213 999.593 787.581 989.457 760.289C980.88 737.675 958.268 687.769 948.912 666.715ZM502.915 810.195C447.555 738.455 396.094 649.56 396.094 577.819C396.094 506.079 446.776 470.209 502.915 470.209C559.055 470.209 610.516 508.419 610.516 577.819C610.516 647.22 558.275 738.455 502.915 810.195ZM770.357 998.902C688.362 998.902 618.032 941.557 555.741 872.656C619.966 792.541 690.826 679.121 690.826 577.819C690.826 458.513 598.04 389.892 502.915 389.892C407.79 389.892 315.784 458.513 315.784 577.819C315.784 679.098 386.145 792.478 450.144 872.593C387.845 941.526 317.491 998.902 235.473 998.902C146.586 998.902 81.0898 931.061 81.0898 846.845C81.0898 826.57 84.2087 807.856 91.2261 788.361C98.2436 770.426 120.855 720.52 130.212 701.025C203.505 541.17 282.256 380.534 364.126 220.679C378.941 191.047 403.891 141.921 422.605 119.307C442.877 94.3538 470.947 81.0975 502.915 81.0975C534.883 81.0975 562.953 94.3538 583.226 119.307C601.939 141.921 626.89 191.047 641.704 220.679C723.574 380.534 802.325 541.17 875.618 701.025C884.975 720.52 907.587 770.426 914.604 788.361C921.622 807.856 925.52 826.57 925.52 846.845C925.52 931.061 859.244 998.902 770.357 998.902ZM3285.71 389.892C3226.91 389.892 3175.97 413.098 3139.91 456.953V226.917H3045.56V810.195H3134.45L3140.69 754.83C3177.12 799.605 3226.94 821.892 3285.71 821.892C3401.89 821.892 3489.22 729.877 3489.22 605.892C3489.22 481.906 3401.89 389.892 3285.71 389.892ZM3266.22 736.895C3191.6 736.895 3139.91 682.63 3139.91 605.892C3139.91 529.153 3191.6 474.888 3266.22 474.888C3340.85 474.888 3393.32 528.373 3393.32 605.892C3393.32 683.41 3340.07 736.895 3266.22 736.895ZM2827.24 389.892C2766.15 389.892 2723.56 418.182 2699.37 456.953L2693.13 401.588H2604.24V810.195H2698.59V573.921C2698.59 516.217 2741.47 474.888 2800.73 474.888C2856.87 474.888 2888.84 513.097 2888.84 578.599V810.195H2983.19V566.903C2983.19 457.733 2923.15 389.892 2827.24 389.892ZM1911.86 460.072L1905.62 401.588H1816.73V810.195H1911.08V604.332C1911.08 532.592 1954.74 486.585 2027.26 486.585C2042.85 486.585 2058.44 488.144 2070.92 492.043V401.588C2059.22 396.91 2044.41 395.35 2028.04 395.35C1978.58 395.35 1936.66 421.177 1911.86 460.072ZM2353.96 389.892C2295.15 389.892 2244.21 413.098 2208.15 456.953V226.917H2113.8V810.195H2202.69L2208.93 754.83C2245.36 799.605 2295.18 821.892 2353.96 821.892C2470.13 821.892 2557.46 729.877 2557.46 605.892C2557.46 481.906 2470.13 389.892 2353.96 389.892ZM2334.46 736.895C2259.84 736.895 2208.15 682.63 2208.15 605.892C2208.15 529.153 2259.84 474.888 2334.46 474.888C2409.09 474.888 2461.56 528.373 2461.56 605.892C2461.56 683.41 2408.31 736.895 2334.46 736.895ZM1703.28 226.917C1669.48 226.917 1642.08 254.326 1642.08 288.13C1642.08 321.934 1669.48 349.343 1703.28 349.343C1737.09 349.343 1764.49 321.934 1764.49 288.13C1764.49 254.326 1737.09 226.917 1703.28 226.917Z" />
            </svg>
          </Link>

          {/* Right Actions Section */}
          <nav className="flex items-center" style={{ width: '221.28px', height: '44.02px' }}>
            <Link 
              href="#" 
              className="text-[14px] font-medium text-[#222222] hover:bg-[#f7f7f7] rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#222222] flex items-center justify-center"
              style={{ width: '125.28px', height: '44px', paddingTop: '12px', paddingRight: '14px', paddingBottom: '12px', paddingLeft: '14px' }}
            >
              Become a host
            </Link>
            
            <div style={{ width: '8px' }}></div>
            
            <button 
              aria-label="Choose a language and currency" 
              className="hover:bg-[#f7f7f7] rounded-full flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#222222] text-[#222222]"
              style={{ width: '40px', height: '40px', paddingTop: '1px', paddingRight: '6px', paddingBottom: '1px', paddingLeft: '6px', backgroundColor: "#eeeeee" }}
            >
              <Globe size={18} strokeWidth={2} />
            </button>
            
            <div style={{ width: '8px' }}></div>
            
            <button 
              aria-label="Main menu"
              className="flex items-center justify-center hover:bg-[#f7f7f7] rounded-full transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#222222] text-[#222222]"
              style={{ width: '40px', height: '40px', backgroundColor: "#eeeeee" }}
            >
              <Menu size={16} strokeWidth={2.5} />
            </button>
          </nav>
        </div>

        {/* Absolute Centered Search Pill */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center bg-white border border-[#dddddd] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)] transition-shadow duration-200"
          style={{ width: '403.55px', height: '48px', paddingLeft: '8px', paddingRight: '8px' }}
        >
          {/* Anywhere */}
          <button 
            className="flex items-center h-full text-[14px] font-medium text-[#222222] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#222222] rounded-l-full"
            style={{ width: '149.31px', paddingLeft: '16px', paddingRight: '16px' }}
          >
            <div style={{ width: '48px', height: '48px', marginLeft: '-6px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
              <img 
                src="/ui/searchbar-house.png" 
                alt="" 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                aria-hidden="true"
              />
            </div>
            <span className="whitespace-nowrap flex-grow text-center">Anywhere</span>
          </button>
          
          <span className="bg-[#dddddd] shrink-0" style={{ width: '1px', height: '24px' }}></span>
          
          {/* Anytime */}
          <button 
            className="flex items-center justify-center h-full text-[14px] font-medium text-[#222222] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#222222]"
            style={{ width: '88.38px', paddingLeft: '16px', paddingRight: '16px' }}
          >
            <span className="whitespace-nowrap">Anytime</span>
          </button>
          
          <span className="bg-[#dddddd] shrink-0" style={{ width: '1px', height: '24px' }}></span>
          
          {/* Add guests */}
          <button 
            className="flex items-center h-full text-[14px] font-normal text-[#717171] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#222222]"
            style={{ width: '105.86px', paddingLeft: '16px', paddingRight: '16px' }}
          >
            <span className="whitespace-nowrap">Add guests</span>
          </button>
          
          {/* Search Button */}
          <button 
            className="bg-[#FF385C] text-white rounded-full flex items-center justify-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#FF385C]"
            style={{ width: '32px', height: '32px', marginLeft: '8px' }}
            aria-label="Search"
          >
            <Search size={14} strokeWidth={3} />
          </button>
        </div>
      </div>
    </header>
  );
}
