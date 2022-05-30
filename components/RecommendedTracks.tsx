import { recommended_tracks } from "../interfaces/spotifyData";
import { Row, Col } from "react-bootstrap";

export default function Tracks({
  tracks,
}: {
  tracks: recommended_tracks[] | null;
}) {
  return (
    <>
      <h3>Recommended Tracks</h3>
      <Row style={{ padding: "75px" }}>
        {tracks!.map((x, index) => {
          return (
            <Col key={index}>
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  display: "block",
                  margin: "auto",
                }}
                src={x.track_art_cover}
              />
              <p style={{ marginBottom: "0px" }}>{x.track_name}</p>
              <p className="text-secondary">{x.artist_name}</p>
              {x.spotify_preview_url! && (
                <audio
                  controls
                  style={{ marginBottom: "50px", maxWidth: "100px" }}
                >
                  <source src={x.spotify_preview_url} type="audio/mp3" />
                  Your browser does not support audio element
                </audio>
              )}
            </Col>
          );
        })}
      </Row>
    </>
  );
}
