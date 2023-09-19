import "./Search.css";

export default function SearchContainer() {
  return (
    <>
      <div className="search-container">
        <div className="left">
          <div class="icon-container">
            <ion-icon name="film-outline"></ion-icon>
          </div>
          <h3
            style={{
              margin: 0,
              marginLeft: "19px",
              marginBottom: "0",
              color: "white",
            }}
          >
            FilmFusion
          </h3>
        </div>

        <input
          type="text"
          className="search-input"
          placeholder="What do you want to watch?"
        />
        <ion-icon name="search-outline"></ion-icon>

        <div className="right">
          <h3 style={{ margin: 0, marginRight: "19px", marginBottom: "0" }}>
            Sign in
          </h3>
          <div class="icon-container">
            <ion-icon name="reorder-two-outline"></ion-icon>
          </div>
        </div>
      </div>
      <div className="underline"></div>
    </>
  );
}
