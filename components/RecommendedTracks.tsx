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
      <p style={{ marginBottom: "0px" }} className="text-center">
        {tracks![trackIndex].artist_name}
      </p>
      <a
        href={tracks![trackIndex].spotify_track_link}
        target="_blank"
        rel="noreferrer"
        
      >
        Listen on{" "}
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
      </a>
      <audio
        src={tracks![trackIndex].spotify_preview_url}
        controls
        style={{ width: "inherit", marginTop: '40px'}}
      />
      <Row className="pt-5" style={{ marginBottom: "50px" }}>
        <Col>
          {trackIndex !== 0 && (
            <Button
            id="prev-slideshow-btn"
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
              id="next-slideshow-btn"
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
