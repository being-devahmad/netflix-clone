import React from "react";
import netflixBg from "../assets/netflixBg.jpg";
import netflixLogo from "../assets/netflixLogo.png";

const Header = () => {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${netflixBg})` }}
        className="w-[100%] h-[100vh] bg-center bg-cover"
      >
        <div className="w-[100%] h-[100vh] bg-[rgba(0,0,0,0.5)]">
          <header className="max-w-[1170px] mx-auto">
            <div className="grid sm:grid-cols-2 grid-cols-[30%_auto] px-[10px] items-center">
              <figure>
                <img src={netflixLogo} className="w-[148px]" alt="" />
              </figure>
              <div className="flex justify-end gap-[10px]">
                <div className="relative">
                  <svg
                    className="text-white absolute top-[10px] left-[5px]"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Languages"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <select
                    name=""
                    id=""
                    className="bg-[black] text-white border-[1px] border-[white] sm:p-[5px_25px] p-[5px_20px] rounded-[5px]"
                  >
                    <option value="">English</option>
                    <option value="">Hindi</option>
                  </select>
                </div>
                <button className="bg-[red] text-white rounded-[5px] px-[10px]">
                  SignIn
                </button>
              </div>
            </div>
          </header>

          <div className="max-w-[1170px] mx-auto sm:py-[150px] py-[200px] text-center">
            <h1 className="text-[35px] sm:text-[50px] text-white font-bold">
              Unlimited movies, TV shows, and more
            </h1>
            <h4 className="text-2xl pb-8 text-white">
              Watch anywhere. Cancel anytime
            </h4>
            <p className="text-2xl pb-5 text-white">
              Ready to watch? Enter your email to create or restart your
              membership
            </p>

            <div className="max-w-[700px] px-[10px] mx-auto mt-[30px]">
              <form
                action=""
                className="grid sm:grid-cols-[70%_auto] px[40px] grid-cols-[1] gap-[20px]"
              >
                <input
                  type="text"
                  className="border-[1px] border-[#cccc] bg-transparent h-[50px] pl-[20px]"
                  placeholder="Email address"
                />
                <button className="bg-[red] text-white rounded-[5px] px-[8x] py-[7px] hover:bg-[rgba(193,17,25)] duration-300 text-[20px]">
                  Get Started &#62;
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
