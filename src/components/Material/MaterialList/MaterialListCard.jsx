// eslint-disable-next-line react/prop-types, no-unused-vars
export const MateriaListCard = ({ week, fileType, options, doc, name }) => {
  return (
    <>
      <div className="container">
        <div className="container-card-material container row shadow-sm">
          <div className="col-12 col-md-12 col-lg-7 col-xl-7">
            <div className="row">
              {options[0] ? (
                <div className="d-none d-md-none d-lg-flex d-xl-flex col-1 icon-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                    fill="none"
                    className=""
                  >
                    <path
                      d="M49.1625 32.0156C47.6813 30.4375 44.6547 29.525 40.3656 29.525C38.0703 29.525 35.4172 29.7531 32.5281 30.2906C30.7624 28.5491 29.1555 26.6536 27.7266 24.6265C26.6203 23.089 25.6516 21.4609 24.7641 19.8578C26.4563 14.5687 27.2781 10.2547 27.2781 7.14686C27.2781 3.66405 26.0172 0.0343628 22.4031 0.0343628C21.2875 0.0343628 20.1813 0.709363 19.5875 1.70311C17.9594 4.6328 18.6922 11.0625 21.5 17.4094C20.429 20.6471 19.2481 23.8474 17.9594 27.0047C16.7392 29.9011 15.4006 32.7462 13.9469 35.5328C5.81719 38.8375 0.551566 42.6859 0.0640656 45.7141C-0.156247 46.8531 0.218753 47.8953 1.01563 48.7328C1.29219 48.9609 2.33438 49.8641 4.1 49.8641C9.49532 49.8641 15.1766 40.9531 18.0734 35.5734C20.2875 34.825 22.5094 34.1406 24.7219 33.4578C27.0599 32.8122 29.4285 32.2824 31.8188 31.8703C37.5156 37.0875 42.5359 37.9094 45.0594 37.9094C48.1688 37.9094 49.275 36.6234 49.65 35.5734C50.2359 34.2141 49.7969 32.7172 49.1297 31.9437L49.1703 32.025L49.1625 32.0156ZM46.2813 34.2125C46.0609 35.3437 44.9469 36.1 43.3922 36.1C42.9531 36.1 42.5781 36.0187 42.1313 35.9531C39.2984 35.2687 36.6469 33.8297 34.0016 31.5578C36.0534 31.2133 38.1303 31.0392 40.2109 31.0375C41.7484 31.0375 43.0844 31.1109 43.9781 31.3391C45.0031 31.5594 46.6313 32.25 46.2656 34.2203H46.3063L46.2813 34.2125ZM30.6078 30.6562C28.5489 31.0765 26.5027 31.5569 24.4719 32.0969C22.7054 32.5767 20.9549 33.1139 19.2234 33.7078C20.1225 31.9273 20.961 30.1169 21.7375 28.2797C22.6328 26.1562 23.3656 23.9672 24.1063 21.9312C24.8313 23.2094 25.6438 24.4953 26.4578 25.6422C27.7922 27.4562 29.1844 29.1828 30.5844 30.6875V30.6469L30.6078 30.6562ZM20.9141 2.56405C21.0444 2.29743 21.2452 2.07157 21.4947 1.91098C21.7443 1.7504 22.033 1.66122 22.3297 1.65311C23.8844 1.65311 24.1766 3.45936 24.1766 4.9078C24.1766 7.34061 23.4359 11.0359 22.175 15.2515C19.9609 9.37655 19.8156 4.46093 20.9219 2.56405H20.9141ZM12.7844 37.7687C9.01719 44.1078 5.39532 48.0391 3.17344 48.0391C2.74219 48.0391 2.36719 47.8844 2.075 47.6641C1.62813 47.2078 1.40782 46.6797 1.55469 46.0766C2.00157 43.8062 6.21719 40.6328 12.7938 37.7672L12.7844 37.7687Z"
                      fill="white"
                    />
                  </svg>
                </div>
              ) : (
                <div className="d-none d-md-none d-lg-flex d-xl-flex col-1 icon-red">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                    fill="none"
                  >
                    <path
                      d="M38.485 32.6137L14.6237 46.4587C12.5987 47.6325 10 46.2112 10 43.845V16.155C10 13.7925 12.595 12.3675 14.6237 13.545L38.485 27.39C38.9456 27.653 39.3285 28.0331 39.5949 28.4918C39.8612 28.9505 40.0015 29.4715 40.0015 30.0019C40.0015 30.5323 39.8612 31.0533 39.5949 31.512C39.3285 31.9707 38.9456 32.3508 38.485 32.6137Z"
                      fill="white"
                    />
                  </svg>
                </div>
              )}

              <div className="col-12 col-md-12 col-lg-10 col-xl-10 text-file">
                <span className="">
                  {name }
                  <span className="d-none d-md-none d-lg-inline d-xl-inline">
                  {" - "}
                  </span>
                  <span className="d-inline d-md-inline d-lg-none d-xl-none">
                  {" "}
                  </span>
                  {week}
                </span>
              </div>
            </div>
          </div>
          <div className="d-none d-md-none d-lg-block d-xl-block col-2 text-center">
            <span className="">{fileType}</span>
          </div>
          <div className="d-none d-md-none d-lg-flex d-xl-flex col-3 container-icons">
            {options[0] && options[1] ? (
              <a href={doc} target="_blank" className="icon-options" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                  <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z" />
                </svg>
              </a>
            ) : (
              <a href={doc} target="_blank" className="icon-options" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </svg>
              </a>
            )}
          </div>
          <div className="d-flex d-md-flex d-lg-none d-xl-none col-12 container-icons">
            {options[0] && options[1] ? (
              <a href={doc} target="_blank" className="icon-options bg-pdf" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                  <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z" />
                </svg>
                <span className="ms-2">Descargar PDF</span>
              </a>
            ) : (
              <a href={doc} target="_blank" className="icon-options bg-video" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </svg>
                <span className="ms-1">Ver video</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
