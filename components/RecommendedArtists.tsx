import { recommended_artists } from "../interfaces/spotifyData";
import { Row, Col } from "react-bootstrap";

export default function RecommendedArtists({
  artists,
}: {
  artists: recommended_artists[] | null;
}) {
  return (
    <>
      <h3>Recommended Artists</h3>
      <Row style={{ padding: "10px 75px 10px 75px" }}>
        {artists!.map((x, index) => {
          if (x!) {
            return (
              <Col key={index} style={{margin: '10px'}}>
                <a
                  key={index}
                  href={x.artist_spotify_link}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img
                    style={{ width: "100px", height: "100px" }}
                    src={x.artist_profile_pic}
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
        })}
      </Row>
    </>
  );
}
