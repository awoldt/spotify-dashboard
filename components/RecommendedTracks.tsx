import { recommended_tracks } from "../interfaces/spotifyData";
import { Button, Row, Col } from "react-bootstrap";
import { useState } from "react";

export default function Tracks({
  tracks,
}: {
  tracks: recommended_tracks[] | null;
}) {
  let [trackIndex, setTrackIndex] = useState<number>(0);

  return (
    <>
      <h3 className="mb-4">Recommended Tracks</h3>
      <img
        style={{
          width: "250px",
          height: "250px",
          display: "block",
          margin: "auto",
        }}
        src={tracks![trackIndex].track_art_cover}
      />
      <p style={{ marginBottom: "0px" }}>{tracks![trackIndex].track_name}</p>
      <p style={{ marginBottom: "25px" }} className="text-center">
        {tracks![trackIndex].artist_name}
      </p>
      <audio
        src={tracks![trackIndex].spotify_preview_url}
        controls
        style={{ width: "inherit" }}
      />
      <Row className="pt-5" style={{ marginBottom: "50px" }}>
        <Col>
          {trackIndex !== 0 && (
            <Button
              variant="danger"
              onClick={() => {
                setTrackIndex((trackIndex -= 1));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-arrow-left-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                />
              </svg>
            </Button>
          )}
        </Col>
        <Col>
          {trackIndex !== tracks!.length - 1 && (
            <Button
              variant="danger"
              onClick={() => {
                setTrackIndex((trackIndex += 1));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-arrow-right-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                />
              </svg>
            </Button>
          )}
        </Col>
      </Row>
    </>
  );
}
