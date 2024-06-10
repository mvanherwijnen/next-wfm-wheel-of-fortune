import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>NEXT wfm Rad van Fortuin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="NEXT wfm Rad van Fortuin" />
        <hr />
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
}
