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
      <Row style={{ padding: '10px 75px 10px 75px'}}>
        {artists!.map((x, index) => {
          if (x!) {
            return (
              <Col key={index}>
                <a
                  key={index}
                  href={x.artist_spotify_link}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    style={{ width: "100px", height: "100px" }}
                    src={x.artist_profile_pic}
                  />
                  <p>{x.artist_name}</p>
                </a>
              </Col>
            );
          }
        })}
      </Row>
    </>
  );
}
