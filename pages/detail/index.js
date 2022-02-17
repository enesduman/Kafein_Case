import Link from "next/link";
import React, { useState } from "react";
import Header from "../../components/header";
import { api_key, base_url, image_url } from "../_app";

function DetailPage({ data, similar_data }) {
  const movie = data;
  const similar = similar_data;
  return (
    <div>
      <Header />
      <div
        style={{
          width: 850,
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: 10,
          border: "3px solid #ccc",
          borderRadius: 10,
        }}
      >
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <img
            style={{ width: "40%" }}
            src={image_url + movie.poster_path}
          ></img>
          <div style={{ width: "60%", paddingLeft: 10 }}>
            <h4>Orijinal Başlık : {movie.original_title}</h4>
            <h4>Başlık : {movie.title}</h4>

            <p>Açıklama : {movie.overview}</p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p>Kategori :</p>

              {movie.genres.map((v) => {
                return <p style={{ marginRight: 5 }}> {v.name} </p>;
              })}
            </div>
            <p>Yayınlanma Tarihi : {movie.release_date}</p>
            <p>Puan : {movie.vote_average}</p>
            <p>Oylama Sayısı : {movie.vote_count}</p>
            <p>Orijinal Dil : {movie.original_language}</p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: 1120,
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#f00",
            borderBottom: "1px solid #ccc",
          }}
        >
          Benzer İçerikler
        </h2>
        {similar_data.results.map((v, i) => {
          return (
            <Link
              href={{
                pathname: "/detail",
                query: { id: v.id },
              }}
            >
              <a
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "50%",
                  justifyContent: "space-between",
                  margin: 5,
                  marginRight: "auto",
                  marginLeft: "auto",
                  border: "1px solid #000",
                  paddingRight: 10,
                }}
                key={i}
              >
                <img
                  style={{ width: "20%" }}
                  src={image_url + v.backdrop_path}
                ></img>
                <h4>{v.title}</h4>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const res = await fetch(`${base_url}/movie/${query.id}?api_key=${api_key}`);
  const similar = await fetch(
    `${base_url}/movie/${query.id}/similar?api_key=${api_key}`
  );
  const data = await res.json();
  const similar_data = await similar.json();
  return { props: { data, similar_data } };
}

export default DetailPage;
