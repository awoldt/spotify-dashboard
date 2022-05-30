import type { NextPage } from "next";
import Head from "next/head";
import { Container, Button } from "react-bootstrap";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Visualize Spotify Listening</title>
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
      <Container>
        <h1 style={{ marginTop: "25px" }}>Visualize your Spotify listening</h1>
        <p>
          Sign in to your Spotify account and see all the top tracks and artists
          you listen to, along with other stats! All music data is recent and accurate.
        </p>
        <p>You can see results such as: </p>
        <ul>
          <li>Top Tracks</li>
          <li>Top Artists</li>
          <li>Recently Played</li>
          <li>Recommended Tracks</li>
          <li>Recommended Artists</li>
        </ul>

        <p>
          You will be automaitcally logged out after an hour.
          
        </p>

        <a
          href={
            "https://accounts.spotify.com/authorize?client_id=" +
            process.env.SPOTIFY_CLIENT_ID +
            "&response_type=code&redirect_uri=" +
            process.env.REDIRECT_URI_ENCODED +
            "&scope=user-top-read user-read-recently-played"
          }
          rel="noreferrer"
        >
          <Button className="mb-3">
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
          </Button>
        </a>
        <p className="text-secondary mb-5" style={{ fontSize: "14px" }}>
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
       
      </Container>
    </>
  );
};

export default Home;
