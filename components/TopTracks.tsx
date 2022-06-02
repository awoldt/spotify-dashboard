import { top_tracks } from "../interfaces/spotifyData";
import { Row, Col, Pagination } from "react-bootstrap";
import { top_track_pagination } from "../interfaces/spotifyData";

const TopTracks = ({
  tracks_data,
  active_page,
  pagination,
}: {
  tracks_data: top_track_pagination | null;
  active_page: number | null;
  pagination: any[] | null;
}) => {
  return (
    <div style={{ padding: "25px", backgroundColor: '#f2f2f2', borderRadius: '15px'}}>
      <h2>Top Tracks</h2>
      <Row className="text-center">
        {tracks_data!.pages![active_page! - 1].map(
          (x: top_tracks, index: number) => {
            return (
              <Col key={index} className="mb-4">
                <span>{index + 1 + (active_page! - 1) * 10}.</span>
                <img
                  src={x.track_cover_art}
                  style={{ width: "100px", height: "100px" }}
                />
                <p style={{ marginBottom: "0px" }}>{x.track_name}</p>
                <p style={{ marginTop: "0px" }} className="text-secondary">
                  {x.artist_name}
                </p>
              </Col>
            );
          }
        )}
      </Row>
      <div>
        <Pagination>{pagination}</Pagination>
      </div>
    </div>
  );
};

export default TopTracks;
