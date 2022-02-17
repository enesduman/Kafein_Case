import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { query_url } from "../pages/_app";
import styles from "../styles/Home.module.css";

const Header = (props) => {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [searches, setSearches] = useState([]);
  if (typeof window !== "undefined") {
    useEffect(() => {
      var local = JSON.parse(localStorage.getItem("searches"));
      setSearches(local !== null ? local : []);
    }, [localStorage.getItem("searches")]);
  }
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Link
        href={{
          pathname: "/",
        }}
      >
        <a style={{ fontSize: 25, fontWeight: "bold" }}>Kafein Case</a>
      </Link>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <input
            value={input}
            onChange={(text) => {
              setInput(text.target.value);
            }}
          ></input>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (input !== "") {
                if (searches && searches.length <= 4) {
                  localStorage.setItem(
                    "searches",
                    JSON.stringify([input, ...searches])
                  );
                } else {
                  var removed = searches.pop()[0];
                  var newSearches = searches.filter((v) => v !== removed);

                  setSearches([input, ...newSearches]);
                  localStorage.setItem(
                    "searches",
                    JSON.stringify([input, ...newSearches])
                  );
                }
                setInput("");
                router.push({
                  pathname: "/results",
                  query: { word: input },
                });
              } else {
                alert("Boş arama yapılmaz");
              }
            }}
          >
            Ara
          </button>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {searches &&
              searches.map((v, i) => {
                return (
                  <Link
                    key={i}
                    href={{
                      pathname: "/results",
                      query: { word: v },
                    }}
                  >
                    <a
                      style={{
                        border: "0.5px solid #111",
                        padding: 2,
                        borderRadius: 5,
                        paddingRight: 10,
                        paddingLeft: 10,
                        marginTop: 5,
                        marginRight: 5,
                      }}
                    >
                      {v}
                    </a>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
