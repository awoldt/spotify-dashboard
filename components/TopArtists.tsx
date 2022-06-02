import { top_artists, top_artists_pagination } from "../interfaces/spotifyData";
import { Row, Col, Pagination } from "react-bootstrap";

const TopTracks = ({
  artists,
  active_page,
  pagination,
  artists_stats,
}: {
  artists: top_artists_pagination | null;
  active_page: number | null;
  pagination: any[] | null;
  artists_stats: String[] | null;
}) => {
  return (
    <div
      style={{
        padding: "25px",
        backgroundColor: "#f2f2f2",
        borderRadius: "15px",
      }}
    >
      <h2>Top Artists</h2>
      {artists_stats! && (
        <ul>
          {artists_stats!.map((x: String, index: number) => {
            return (
              <li key={index}>
                <code>{x}</code>
              </li>
            );
          })}
        </ul>
      )}
      <Row className="text-center">
        {artists!.pages![active_page! - 1].map(
          (x: top_artists, index: number) => {
            return (
              <Col key={index} className="mb-4">
                <a
                  href={x.spotify_artist_link}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <span>{index + 1 + (active_page! - 1) * 10}.</span>
                  <img
                    src={x.artist_profile_pic}
                    style={{ width: "100px", height: "100px" }}
                  />
                  <p style={{ marginBottom: "0px" }}>{x.artist_name}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-box-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                </a>
              </Col>
            );
          }
        )}
      </Row>
      <div>
        <Pagination>{pagination}</Pagination>
      </div>
      <p style={{ marginTop: "50px" }} className="text-secondary">
        All artist data gathered from{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-spotify"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />
        </svg>{" "}
        Spotify
      </p>
    </div>
  );
};

export default TopTracks;
