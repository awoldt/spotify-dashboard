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
            return <li key={index}><code>{x}</code></li>;
          })}
        </ul>
      )}
      <Row className="text-center">
        {artists!.pages![active_page! - 1].map(
          (x: top_artists, index: number) => {
            return (
              <Col key={index} className="mb-4">
                <span>{index + 1 + (active_page! - 1) * 10}</span>
                <img
                  src={x.artist_profile_pic}
                  style={{ width: "100px", height: "100px" }}
                />
                <p style={{ marginBottom: "0px" }}>{x.artist_name}</p>
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
