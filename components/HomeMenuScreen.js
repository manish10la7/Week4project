// HomeMenuScreen.js
import React from 'react';

const HomeMenuScreen = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-gray-50 justify-between group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div>
        {/* Header Section */}
        <div className="flex items-center bg-gray-50 p-4 pb-2 justify-between">
          {/* Menu Icon */}
          <div className="text-[#101418] flex size-12 shrink-0 items-center" data-icon="List" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
            </svg>
          </div>
          <h2 className="text-[#101418] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">PGS</h2>
          {/* Bell Icon */}
          <div className="flex w-12 items-center justify-end">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-transparent text-[#101418] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
              <div className="text-[#101418]" data-icon="Bell" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Welcome Section */}
        <h3 className="text-[#101418] tracking-light text-2xl font-bold leading-tight px-4 text-left pb-2 pt-5">
          Welcome back, Dr. Anya Sharma
        </h3>

        {/* Calendar Section */}
        <div className="flex flex-wrap items-center justify-center gap-6 p-4">
          <div className="flex min-w-72 max-w-[336px] flex-1 flex-col gap-0.5">
            <div className="flex items-center p-1 justify-between">
              {/* Previous Month Button */}
              <button>
                <div className="text-[#101418] flex size-10 items-center justify-center" data-icon="CaretLeft" data-size="18px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                  </svg>
                </div>
              </button>
              <p className="text-[#101418] text-base font-bold leading-tight flex-1 text-center">October 2024</p>
              {/* Next Month Button */}
              <button>
                <div className="text-[#101418] flex size-10 items-center justify-center" data-icon="CaretRight" data-size="18px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                  </svg>
                </div>
              </button>
            </div>
            {/* Calendar Days of Week */}
            <div className="grid grid-cols-7">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                <p key={index} className="text-[#101418] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">
                  {day}
                </p>
              ))}
              {/* Calendar Days (Hardcoded for this example, would be dynamic in a real app) */}
              <button className="h-12 w-full text-[#101418] col-start-4 text-sm font-medium leading-normal">
                <div className="flex size-full items-center justify-center rounded-full">1</div>
              </button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">2</div></button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">3</div></button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">4</div></button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal">
                <div className="flex size-full items-center justify-center rounded-full bg-[#dce7f3]">5</div>
              </button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">6</div></button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">7</div></button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">8</div></button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">9</div></button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">10</div></button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">11</div></button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">12</div></button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">13</div></button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">14</div></button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">15</div></button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">16</div></button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">17</div></button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">18</div></button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">19</div></button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">20</div></button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">21</div></button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">22</div></button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">23</div></button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">24</div></button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">25</div></button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">26</div></button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">27</div></button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">28</div></button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">29</div></button>
              <button className="h-12 w-full text-[#101418] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">30</div></button>
            </div>
          </div>
        </div>

        {/* Ongoing Events */}
        <h2 className="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Ongoing Events</h2>
        <div className="flex items-center gap-4 bg-gray-50 px-4 min-h-[72px] py-2">
          <div className="flex flex-col justify-center">
            <p className="text-[#101418] text-base font-medium leading-normal line-clamp-1">Research Seminar</p>
            <p className="text-[#5c728a] text-sm font-normal leading-normal line-clamp-2">10:00 AM - 11:00 AM</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-gray-50 px-4 min-h-[72px] py-2">
          <div className="flex flex-col justify-center">
            <p className="text-[#101418] text-base font-medium leading-normal line-clamp-1">Faculty Meeting</p>
            <p className="text-[#5c728a] text-sm font-normal leading-normal line-clamp-2">11:30 AM - 12:30 PM</p>
          </div>
        </div>

        {/* Upcoming Events */}
        <h2 className="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Upcoming Events</h2>
        <div className="flex items-center gap-4 bg-gray-50 px-4 min-h-[72px] py-2">
          <div className="flex flex-col justify-center">
            <p className="text-[#101418] text-base font-medium leading-normal line-clamp-1">Graduate Student Conference</p>
            <p className="text-[#5c728a] text-sm font-normal leading-normal line-clamp-2">October 25, 2024</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-gray-50 px-4 min-h-[72px] py-2">
          <div className="flex flex-col justify-center">
            <p className="text-[#101418] text-base font-medium leading-normal line-clamp-1">Alumni Networking Event</p>
            <p className="text-[#5c728a] text-sm font-normal leading-normal line-clamp-2">November 10, 2024</p>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div>
        <div className="flex gap-2 border-t border-[#eaedf1] bg-gray-50 px-4 pb-3 pt-2">
          {/* Home Link */}
          <a className="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-[#101418]" href="#">
            <div className="text-[#101418] flex h-8 items-center justify-center" data-icon="House" data-size="24px" data-weight="fill">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-32-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
              </svg>
            </div>
            <p className="text-[#101418] text-xs font-medium leading-normal tracking-[0.015em]">Home</p>
          </a>
          {/* Enrollment Link */}
          <a className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#5c728a]" href="#">
            <div className="text-[#5c728a] flex h-8 items-center justify-center" data-icon="PlusSquare" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208Zm-32-80a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"></path>
              </svg>
            </div>
            <p className="text-[#5c728a] text-xs font-medium leading-normal tracking-[0.015em]">Enrollment</p>
          </a>
          {/* Dashboard Link */}
          <a className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#5c728a]" href="#">
            <div className="text-[#5c728a] flex h-8 items-center justify-center" data-icon="PresentationChart" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"></path>
              </svg>
            </div>
            <p className="text-[#5c728a] text-xs font-medium leading-normal tracking-[0.015em]">Dashboard</p>
          </a>
          {/* Reminders Link */}
          <a className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#5c728a]" href="#">
            <div className="text-[#5c728a] flex h-8 items-center justify-center" data-icon="Bell" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
              </svg>
            </div>
            <p className="text-[#5c728a] text-xs font-medium leading-normal tracking-[0.015em]">Reminders</p>
          </a>
        </div>
        <div className="h-5 bg-gray-50"></div>
      </div>
    </div>
  );
};

export default HomeMenuScreen;