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
      <Row style={{ padding: '10px 75px 10px 75px'}}>
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
                <audio src={x.spotify_preview_url} controls style={{width: 'inherit'}}/>
              )}
            </Col>
          );
        })}
      </Row>
    </>
  );
}
