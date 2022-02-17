import Link from "next/link";
import Header from "../../components/header";
import { image_url, query_url } from "../_app";

function Page({ data }) {
  return (
    <div>
      <Header />

      <ul
        style={{
          width: "1140px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <h4>Arama Sonuçları</h4>
        {data.results.map((v, i) => {
          return (
            <Link
              href={{
                pathname: "/detail",
                query: { id: v.id },
              }}
            >
              <a
                style={{
                  margin: 15,
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  border: "1px solid #ccc",
                  borderRadius: 5,
                }}
                key={i}
              >
                <img
                  style={{ width: "30%", borderRadius: 10 }}
                  src={
                    v.backdrop_path !== null
                      ? image_url + `${v.backdrop_path}`
                      : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
                  }
                ></img>
                <div style={{ paddingLeft: 10, alignItems: "center" }}>
                  <h3>{v.title}</h3>
                  <p>{v.overview}</p>
                </div>
              </a>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const res = await fetch(`${query_url}/${query.word}`);
  const data = await res.json();
  return { props: { data } };
}

export default Page;
