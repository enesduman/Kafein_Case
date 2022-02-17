import { api_key, base_url, image_url } from "./_app";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Header from "../components/header";

function Page({ data }) {
  return (
    <div>
      <Header />
      <div
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          width: "75%",
        }}
      >
        <h3 style={{ textAlign: "center" }}>
          {data.dates.minimum + " - " + data.dates.maximum} Tarihleri Arasında
          Vizyona Girecek Filmler
        </h3>
        <Carousel
          infiniteLoop={true}
          thumbWidth={125}
          stopOnHover={true}
          verticalSwipe={true}
          autoPlay
          width={"100%"}
        >
          {data &&
            data.results.map((v, i) => {
              return (
                <div key={i}>
                  <img
                    style={{}}
                    src={image_url + `${v.backdrop_path}`}
                    alt="image1"
                  />
                  <p className="legend">{v.title}</p>
                  <p
                    style={{
                      position: "absolute",
                      top: 30,
                      color: "#fff",
                      backgroundColor: "#00000070",
                      fontWeight: "bold",
                      padding: 10,
                      borderRadius: 5,
                      width: "100%",
                      marginRight: "auto",
                      marginLeft: "auto",
                    }}
                  >
                    Vizyon Gösterim Tarihi : {v.release_date}
                  </p>
                </div>
              );
            })}
        </Carousel>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `${base_url}/movie/upcoming?api_key=${api_key}&region=tr`
  );
  const data = await res.json();

  return { props: { data } };
}

export default Page;
