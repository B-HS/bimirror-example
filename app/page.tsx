import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import "./globals.css";

const Editor = dynamic(() => import("../components/editor/editor"), {
  loading: () => <p>Loading editor...</p>,
  ssr: false,
});

const Home = () => {
  return (
    <section style={{ height: "100dvh" }}>
      <Editor />
    </section>
  );
};

export default Home;
