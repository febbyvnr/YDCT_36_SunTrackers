import React, { useState } from "react";
import { useParams } from "react-router-dom";
import movies from "../dataFilm/movies.js";
import "../style/detailFilmCSS.css";

const DetailFilmPage = () => {
    const { id } = useParams();
    const movie = movies.find((m) => m.id === Number(id));

    const [openDetail, setOpenDetail] = useState(false);

    if (!movie) return <div className="detail-container">Film tidak ditemukan.</div>;

    return (
        <div className="detail-film-page">

            {/* ================== TOP SECTION ================== */}
            <div className="film-top">

                {/* POSTER */}
                <div className="film-posters">
                    <img src={movie.img} className="poster-vertical" />
                </div>

                {/* TRAILER */}
                <div className="trailer-column">
                    <h2 className="film-title">{movie.title}</h2>

                    <video muted loop controls className="trailer-video">
                        <source src={movie.trailer} type="video/mp4" />
                    </video>
                </div>

                {/* INFO */}
                <div className="info-column">
                    <p><strong>{movie.genre.join(", ")}</strong></p>

                    <div className="info-pills">
                        <span className="pill">{movie.duration}</span>
                        <span className="pill">{movie.age}</span>
                        <span className="pill">{movie.format}</span>
                    </div>

                    <button className={`btn-detail ${openDetail ? "active" : ""}`}
                        onClick={() => setOpenDetail(!openDetail)}>
                        Detail
                    </button>

                    <p>Director : <strong>{movie.director}</strong></p>
                    <p>Writers : <strong>{movie.writers}</strong></p>
                    <p>Cast : <strong>{movie.cast}</strong></p>

                    <div className="info-pills extra-pills">
                        <span className="pill">
                            9.8/10 <i className="bi bi-star" style={{ marginLeft: "4px" }}></i>
                        </span>
                        <span className="pill">
                            <i className="bi bi-heart" style={{ marginRight: "4px" }}></i>
                            Watchlist
                        </span>
                    </div>
                </div>
            </div>

            {/* ================== JADWAL + OPSIONAL DETAIL ================== */}
            <div className={`jadwal-deskripsi-wrapper ${openDetail ? "open" : ""}`}>

                {/* ===== LEFT: JADWAL ===== */}
                <div className="jadwal-left">
                    <div className="schedule-section">
                        <div className="jadwal-header">Jadwal</div>

                        {/* BARIS TANGGAL */}
                        <div className="tanggal-row">
                            {[
                                { tgl: "01 Nov", hari: "Sab" },
                                { tgl: "02 Nov", hari: "Min" },
                                { tgl: "03 Nov", hari: "Sen" },
                                { tgl: "04 Nov", hari: "Sel" },
                                { tgl: "05 Nov", hari: "Rab" },
                                { tgl: "06 Nov", hari: "Kam" },
                                { tgl: "07 Nov", hari: "Jum" },
                            ].map((item, i) => (
                                <div key={i} className="tanggal-card">
                                    <span className="tgl">{item.tgl}</span>
                                    <span className="hari">{item.hari}</span>
                                </div>
                            ))}
                        </div>

                        {/* CARD BIOSKOP */}
                        <div className="jadwal-section">
                            <div className="bioskop-section">
                                <div className="nama-bioskop">
                                    <span className="red-color">Éclipse </span>
                                    <span className="color-white">Cinema AMBARUKMO PLAZA</span>
                                </div>
                                <div className="alamat-bioskop">
                                    Plaza Ambarukmo Lt. 3, Jl. Adi Sucipto | (0274) 433 1221
                                </div>

                                <div className="jam-tayang-section">
                                    {["10.00", "11:35", "13:55", "15:20", "17:10", "19:45", "20.15", "21.30"].map((t, i) => (
                                        <button key={i} className="jam-btn">{t}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===== RIGHT: DETAIL DESKRIPSI (muncul kalau open) ===== */}
                {openDetail && (
                    <div className="deskripsi-right">
                        <div className="subheader-line">Deskripsi</div>
                        <div className="subheader">
                            Sinopsis
                        </div>
                        <p className="sinopsis">{movie.synopsis}</p>
                        <div style={{ marginBottom: "10px" }}>
                            <span className="subheader">Produser </span>
                            <span className="sinopsis">{movie.producer}</span>
                        </div>
                        <div style={{ marginBottom: "10px" }}>
                            <span className="subheader">Director </span>
                            <span className="sinopsis">{movie.director}</span>
                        </div>
                        <div style={{ marginBottom: "10px" }}>
                            <span className="subheader">Writers </span>
                            <span className="sinopsis">{movie.writers}</span>
                        </div>
                        <div className="subheader">Pemeran</div>
                        <div className="cast-row" style={{ marginBottom: "10px" }}>
                            {movie.pemeran?.map((src, i) => (
                                <img key={i} src={src} alt="foto-film" />
                            ))}
                        </div>
                        <div className="subheader">Foto</div>
                        <div className="foto-row" style={{ marginBottom: "10px" }}>
                            {movie.images?.map((src, i) => (
                                <img key={i} src={src} alt="foto-film" />
                            ))}
                        </div>
                        <div className="subheader">Video</div>
                        <div className="video-row" style={{ marginBottom: "10px" }}>
                            {movie.videos?.map((src, i) => (
                                <video key={i} muted controls>
                                    <source src={src} type="video/mp4" />
                                </video>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DetailFilmPage;
