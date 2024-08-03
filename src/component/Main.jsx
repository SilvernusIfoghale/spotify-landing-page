import React, { useState } from "react";
import AsideFooter from "./AsideFooter";
import Artist from "./Artist";
import Title from "./Title";
import Album from "./Album";
import Radio from "./Radio";
import Charts from "./Charts";
import PlayLists from "./PlayLists";

export default function Main() {
  const [open, setOpen] = useState(false);
  const handleClicked = () => {
    setOpen(!open);
  };
  return (
    <main className="w-[100%]  overflow-y-scroll sm:overflow-x-hidden">
      <header className="hidden sm:flex h-[70px] w-[100%] bg-[#101010] sticky top-0 items-center  p-1 justify-between z-50 ">
        <div className="flex gap-4">
          <span>
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="fill-gray-400 w-4 cursor-not-allowed"
            >
              <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
            </svg>
          </span>
          <span>
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              className="fill-gray-400 w-4 hover:cursor-not-allowed"
              viewBox="0 0 16 16"
            >
              <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
            </svg>
          </span>
        </div>
        <div className="flex gap-6 pr-5 pt-2">
          <button className="align-text-bottom text-gray-300 hover:text-white font-semibold hover:font-bold ">
            Sign up
          </button>
          <button className="text-gray-700 flex items-center justify-center bg-white w-28 h-10 rounded-full font-semibold hover:bg-gray-200 hover:font-bold hover:h-[2.6rem] hover:w-[7.2rem]">
            Log in
          </button>
        </div>
      </header>
      {/* mobile */}
      <section>
        <div className=" flex sm:hidden ">
          <header className=" sm:flex h-[70px] w-[100%] bg-[#101010] flex sticky top-0 items-center  p-1 justify-between z-50 ">
            <div className="flex ">
              <div className="text-white px-4">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  height="32"
                  className="fill-white w-30"
                >
                  <title></title>
                  <path
                    d="M13.427.01C6.805-.253 1.224 4.902.961 11.524.698 18.147 5.853 23.728 12.476 23.99c6.622.263 12.203-4.892 12.466-11.514S20.049.272 13.427.01m5.066 17.579a.717.717 0 0 1-.977.268 14.4 14.4 0 0 0-5.138-1.747 14.4 14.4 0 0 0-5.42.263.717.717 0 0 1-.338-1.392c1.95-.474 3.955-.571 5.958-.29 2.003.282 3.903.928 5.647 1.92a.717.717 0 0 1 .268.978m1.577-3.15a.93.93 0 0 1-1.262.376 17.7 17.7 0 0 0-5.972-1.96 17.7 17.7 0 0 0-6.281.238.93.93 0 0 1-1.11-.71.93.93 0 0 1 .71-1.11 19.5 19.5 0 0 1 6.94-.262 19.5 19.5 0 0 1 6.599 2.165c.452.245.62.81.376 1.263m1.748-3.551a1.147 1.147 0 0 1-1.546.488 21.4 21.4 0 0 0-6.918-2.208 21.4 21.4 0 0 0-7.259.215 1.146 1.146 0 0 1-.456-2.246 23.7 23.7 0 0 1 8.034-.24 23.7 23.7 0 0 1 7.657 2.445c.561.292.78.984.488 1.546m13.612-.036-.832-.247c-1.67-.495-2.14-.681-2.14-1.353 0-.637.708-1.327 2.264-1.327 1.539 0 2.839.752 3.51 1.31.116.096.24.052.24-.098V6.935c0-.097-.027-.15-.098-.203-.83-.62-2.272-1.07-3.723-1.07-2.953 0-4.722 1.68-4.722 3.59 0 2.157 1.371 2.91 3.626 3.546l.973.274c1.689.478 1.998.902 1.998 1.556 0 1.097-.831 1.433-2.07 1.433-1.556 0-3.457-.911-4.35-2.025-.08-.098-.177-.053-.177.062v2.423c0 .097.01.141.08.22.743.814 2.52 1.53 4.59 1.53 2.546 0 4.456-1.485 4.456-3.784 0-1.787-1.052-2.865-3.625-3.635m10.107-1.76c-1.68 0-2.653 1.026-3.219 2.052V9.376c0-.08-.044-.124-.124-.124h-2.22c-.079 0-.123.044-.123.124V20.72c0 .08.044.124.124.124h2.22c.079 0 .123-.044.123-.124v-4.536c.566 1.025 1.521 2.034 3.237 2.034 2.264 0 3.89-1.955 3.89-4.581s-1.644-4.545-3.908-4.545m-.654 6.986c-1.185 0-2.211-1.167-2.618-2.458.407-1.362 1.344-2.405 2.618-2.405 1.211 0 2.051.92 2.051 2.423s-.84 2.44-2.051 2.44m40.633-6.826h-2.264c-.08 0-.115.017-.15.097l-2.282 5.483-2.29-5.483c-.035-.08-.07-.097-.15-.097h-3.661v-.584c0-.955.645-1.397 1.476-1.397.496 0 1.035.256 1.415.486.089.053.15-.008.115-.088l-.796-1.901a.26.26 0 0 0-.124-.133c-.389-.203-1.025-.38-1.644-.38-1.875 0-2.954 1.432-2.954 3.254v.743h-1.503c-.08 0-.124.044-.124.124v1.768c0 .08.044.124.124.124h1.503v6.668c0 .08.044.123.124.123h2.264c.08 0 .124-.044.124-.123v-6.668h1.936l2.812 6.11-1.512 3.325c-.044.098.009.142.097.142h2.414c.08 0 .116-.018.15-.097l4.997-11.355c.035-.08-.009-.141-.097-.141M54.964 9.04c-2.865 0-4.837 2.025-4.837 4.616 0 2.573 1.971 4.616 4.837 4.616 2.856 0 4.846-2.043 4.846-4.616 0-2.591-1.99-4.616-4.846-4.616m.008 7.065c-1.37 0-2.343-1.043-2.343-2.45 0-1.405.973-2.449 2.343-2.449 1.362 0 2.335 1.043 2.335 2.45 0 1.406-.973 2.45-2.335 2.45m33.541-6.334a1.24 1.24 0 0 0-.483-.471 1.4 1.4 0 0 0-.693-.17q-.384 0-.693.17a1.24 1.24 0 0 0-.484.471q-.174.302-.174.681 0 .375.174.677.175.3.484.471t.693.17.693-.17.483-.471.175-.676q0-.38-.175-.682m-.211 1.247a1 1 0 0 1-.394.39 1.15 1.15 0 0 1-.571.14 1.16 1.16 0 0 1-.576-.14 1 1 0 0 1-.391-.39 1.14 1.14 0 0 1-.14-.566q0-.316.14-.562t.391-.388.576-.14q.32 0 .57.14.253.141.395.39t.142.565q0 .312-.142.56m-19.835-5.78c-.85 0-1.468.6-1.468 1.396s.619 1.397 1.468 1.397c.866 0 1.485-.6 1.485-1.397 0-.796-.619-1.397-1.485-1.397m19.329 5.19a.31.31 0 0 0 .134-.262q0-.168-.132-.266-.132-.099-.381-.099h-.588v1.229h.284v-.489h.154l.374.489h.35l-.41-.518a.5.5 0 0 0 .215-.084m-.424-.109h-.26v-.3h.27q.12 0 .184.036a.12.12 0 0 1 .065.116.12.12 0 0 1-.067.111.4.4 0 0 1-.192.037M69.607 9.252h-2.263c-.08 0-.124.044-.124.124v8.56c0 .08.044.123.124.123h2.263c.08 0 .124-.044.124-.123v-8.56c0-.08-.044-.124-.124-.124m-3.333 6.605a2.1 2.1 0 0 1-1.053.257c-.725 0-1.185-.425-1.185-1.362v-3.484h2.211c.08 0 .124-.044.124-.124V9.376c0-.08-.044-.124-.124-.124h-2.21V6.944c0-.097-.063-.15-.15-.08l-3.954 3.113c-.053.044-.07.088-.07.16v1.007c0 .08.044.124.123.124h1.539v3.855c0 2.087 1.203 3.06 2.918 3.06.743 0 1.46-.194 1.884-.442.062-.035.07-.07.07-.133v-1.68c0-.088-.044-.115-.123-.07"
                    transform="translate(-0.95,0)"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex gap-4 pr-5 pt-2 justify-center items-center">
              <div className="cursor-pointer text-gray-400 font-bold hover:text-white py-4">
                <span className="pr-3">
                  <svg
                    data-encore-id="icon"
                    role="img"
                    aria-hidden="true"
                    viewBox="0 0 30 30"
                    className="inline group-hover:fill-white w-7 fill-gray-200 "
                  >
                    <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
                  </svg>
                </span>
              </div>
              <button className="text-gray-700 flex items-center justify-center bg-white w-28 h-10 rounded-full font-semibold hover:bg-gray-200 hover:font-bold hover:h-[2.6rem] hover:w-[7.2rem]">
                Open App
              </button>
              <div>
                {/* click */}
                <span onClick={handleClicked}>
                  <span aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40px"
                      height="40px"
                      viewBox="0 0 24 24"
                      className="fill-white "
                    >
                      <g clip-path="url(#clip0_429_11066)">
                        <path
                          d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
                          stroke="#fff"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_429_11066">
                          <rect
                            width="23"
                            height="20"
                            fill="white"
                            transform="translate(0 0.000915527)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </span>
                {open && (
                  <div className="absolute right-0 top-0  bg-black w-full h-[100vh]">
                    <div className="pl-7 pt-14 text-2xl font-semibold text-white leading-10">
                      <p className="hover:font-bold text-white">Log in</p>
                      <p className="hover:font-bold text-white">Sign up</p>

                      <p className="hover:font-bold text-gray-200">-</p>
                      <p className="hover:font-bold text-white">Premium</p>
                      <p className="hover:font-bold text-white">Help</p>
                      <p className="hover:font-bold text-white">Download</p>
                      <p className="hover:font-bold text-white">Privacy</p>
                      <p className="hover:font-bold text-white">Terms</p>
                    </div>

                    {/* close */}

                    <span onClick={handleClicked}>
                      <svg
                        role="img"
                        viewBox="0 0 28 28"
                        className="fill-gray-200 w-10 absolute top-5 right-2 hover:fill-white "
                      >
                        <path d="M3.293 3.293a1 1 0 0 1 1.414 0L12 10.586l7.293-7.293a1 1 0 1 1 1.414 1.414L13.414 12l7.293 7.293a1 1 0 0 1-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 0 1-1.414-1.414L10.586 12 3.293 4.707a1 1 0 0 1 0-1.414z"></path>
                      </svg>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </header>
        </div>
      </section>

      <div className="z-0 relative w-[100%]">
        <div className=" mt-2 bg-[#1D1D1D] py-3 px-6 z-[-1] ">
          <Title title="Popular artists" view="Show all" />
          <Artist />
        </div>
        <div className=" mt-2 bg-[#1D1D1D] py-3 px-6">
          <Title title="Popular albums" view="Show all" />
          <Album />
        </div>
        <div className=" mt-2 bg-[#1D1D1D] py-3 px-6">
          <Title title="Popular radio" view="Show all" />

          <Radio />
        </div>
        <div className=" mt-2 bg-[#1D1D1D] py-3 px-6">
          <Title title="Featured Charts" />

          <Charts />
        </div>
        <div className=" mt-2 bg-[#1D1D1D] py-3 px-6">
          <Title title="Spotify Playlists " view="Show all" />
          <PlayLists />
        </div>
      </div>

      {/* Footer */}
      <AsideFooter />
    </main>
  );
}
