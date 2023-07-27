// eslint-disable-next-line react/prop-types, no-unused-vars
export const MateriaListCard = ({ week, fileType, options, doc, name }) => {
  return (
    <>
      <div className="container">
        <div className="container-card-material container row">
          <div className="col-12 col-md-12 col-lg-7 col-xl-7">
            <div className="row">
              {options[0] ? (
                <div className="d-none d-md-none d-lg-flex d-xl-flex icon-black">
                </div>
              ) : (
                <div className="d-none d-md-none d-lg-flex d-xl-flex icon-red">
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
