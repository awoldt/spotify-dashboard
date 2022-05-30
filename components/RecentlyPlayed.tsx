import {
  recently_played,
  recently_played_pagination,
} from "../interfaces/spotifyData";
import { Row, Col, Pagination } from "react-bootstrap";

const RecentlyPlayed = ({
  recent_tracks,
  active_page,
  pagination,
}: {
  recent_tracks: recently_played_pagination | null;
  active_page: number | null;
  pagination: any[] | null;
}) => {
  return (
    <div style={{ padding: "25px" }}>
      <h2>Recently Played</h2>
      <Row className="text-center">
        {recent_tracks!.pages![active_page! - 1].map(
          (x: recently_played, index: number) => {
            return (
              <Col key={index} className='mb-4'>
                <img
                  src={x.track_cover_art}
                  style={{ width: "100px", height: "100px" }}
                />
                <p style={{ marginBottom: "0px" }}>{x.track_name}</p>
                <p
                  style={{ marginTop: "0px", marginBottom: "0px" }}
                  className="text-secondary"
                >
                  {x.artist_name}
                </p>
                <code>Played at {x.played_at}</code>
              </Col>
            );
          }
        )}
      </Row>
      <div style={{ marginTop: "10px" }}>
        <Pagination>{pagination}</Pagination>
      </div>
    </div>
  );
};

export default RecentlyPlayed;
