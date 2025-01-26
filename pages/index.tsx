import type { NextPage } from "next";
import Head from "next/head";
import { Container, Button, Row, Col } from "react-bootstrap";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Discover Your Music Stats on Spotify</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <div
        style={{ backgroundColor: "black", minHeight: "100vh", color: "white" }}
      >
        <Container className="py-5">
          <Row className="justify-content-center text-center mb-5">
            <Col md={8}>
              <h1 className="display-4 fw-bold mb-4">
                Visualize your Spotify listening habits
              </h1>
              <p className="lead mb-4">
                Sign in to your Spotify account and see all the top tracks and
                artists you listen to, along with recommendations and a web
                player to listen to new music! All music data is recent and
                accurate.
              </p>
              <p className="text-muted mb-4">
                You will be automatically logged out after an hour.
              </p>
              <Button
                size="lg"
                style={{
                  backgroundColor: "#1DB954",
                  borderColor: "#1DB954",
                  padding: "0.75rem 2rem",
                }}
                className="mb-5"
              >
                <a
                  className="d-flex align-items-center text-decoration-none text-white fw-bold"
                  href={
                    "https://accounts.spotify.com/authorize?client_id=" +
                    process.env.SPOTIFY_CLIENT_ID +
                    "&response_type=code&redirect_uri=" +
                    process.env.REDIRECT_URI_ENCODED +
                    "&scope=user-top-read user-read-recently-played"
                  }
                  rel="noreferrer"
                  title="Sign into Spotify account"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-spotify me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />
                  </svg>
                  Sign in
                </a>
              </Button>
            </Col>
          </Row>

          <Row className="justify-content-center text-center g-4 mb-5">
            <Col md={4}>
              <div className="p-4">
                <div
                  className="rounded-circle mb-4 mx-auto d-flex align-items-center justify-content-center"
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "#1DB954",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-vinyl"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" />
                    <path d="M9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                </div>
                <h2 className="h3 mb-3">Top Tracks</h2>
                <p className="text-muted">
                  View the top 50 tracks you&apos;ve been playing the most
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-4">
                <div
                  className="rounded-circle mb-4 mx-auto d-flex align-items-center justify-content-center"
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "#1DB954",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                </div>
                <h2 className="h3 mb-3">Top Artists</h2>
                <p className="text-muted">
                  Top artists based on all the music you listen to
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-4">
                <div
                  className="rounded-circle mb-4 mx-auto d-flex align-items-center justify-content-center"
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "#1DB954",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-music-note-list"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                    <path fillRule="evenodd" d="M12 3v10h-1V3h1z" />
                    <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z" />
                    <path
                      fillRule="evenodd"
                      d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </div>
                <h2 className="h3 mb-3">Recommended Music</h2>
                <p className="text-muted">
                  Generated playlist based on your interests in music
                </p>
              </div>
            </Col>
          </Row>

          <div className="text-center text-muted">
            <p className="small mb-2">
              All data gathered using Spotify API. No personal data is saved.
            </p>
            <p className="small mb-4">
              This site has no affiliation with Spotify.
            </p>
            <p className="small d-flex align-items-center justify-content-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-lock me-2"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
              </svg>
              Secure and encrypted connection
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
