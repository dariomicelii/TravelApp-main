export default function HomePage() {
  return (
    <div className="d-flex flex-grow-1 justify-content-center align-items-center homepage-hero p-5 text-center bg-image ">
      <div className="mask">
        <div>
          <div className="text-white">
            <h1 className="mb-5 fs-1">TravelApp</h1>
            <h4 className="mb-5">Collaboratori</h4>
            <a
              data-mdb-ripple-init
              className="btn btn-outline-light btn-lg"
              href="/trips"
              role="button"
            >
              Vai ai viaggi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
