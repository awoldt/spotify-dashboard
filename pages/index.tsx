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
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Container fluid style={{ backgroundColor: "black" }}>
        <Container className="text-center" style={{ backgroundColor: "black" }}>
          <h1 style={{ marginTop: "25px" }}>
            Visualize your Spotify listening habits
          </h1>
          <p style={{ maxWidth: "500px" }} className="mx-auto">
            Sign in to your Spotify account and see all the top tracks and
            artists you listen to, along with recommendations and a web player
            to listen to new music! All music data is recent and accurate.
          </p>

          <p>You will be automaitcally logged out after an hour.</p>

          <Button
            className="mb-3"
            style={{ backgroundColor: "#1DB954", borderColor: "#1DB954" }}
          >
            <a
              style={{ textDecoration: "none", color: "white" }}
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
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-spotify"
                viewBox="0 0 16 16"
                style={{ marginRight: "5px" }}
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />
              </svg>{" "}
              Sign in
            </a>
          </Button>

          <Row className="mt-5 mb-5">
            <Col md={4} className="mb-4">
              <img src="/vinyl-icon.svg" alt="music icon" className="mb-4" />
              <h2>Top Tracks</h2>
              <p>View the top 50 tracks you&apos;ve been playing the most</p>
            </Col>
            <Col md={4} className="mb-4">
              <img
                src="/person-circle.svg"
                alt="person icon"
                className="mb-4"
              />
              <h2>Top Artists</h2>
              <p>Top artists based on all the music you listen to</p>
            </Col>
            <Col md={4} className="mb-4">
              <img
                src="/music-note-list.svg"
                alt="music icon"
                className="mb-4"
              />
              <h2>Recommended Music</h2>
              <p>Generated playlist based on your interests in music</p>
            </Col>
          </Row>

          <p
            className="text-secondary mb-5"
            style={{ fontSize: "14px", marginTop: "50px" }}
          >
            All data gathered using Spotify API. No personal data is saved.
            <br></br> This site has no affiliation with Spotify.
            <br></br>
            <br></br>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-lock"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
            </svg>{" "}
            Secure and encrypted connection
          </p>

          <span
            className="text-center"
            style={{
              display: "block",
              marginTop: "100px",
              marginBottom: " 50px",
            }}
          >
            <a
              href="https://awoldt.com/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#6c757d" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-brush"
                viewBox="0 0 16 16"
                style={{ marginRight: "5px" }}
              >
                <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z" />
              </svg>
              Made by awoldt
            </a>
          </span>
        </Container>
      </Container>
    </>
  );
};

export default Home;
