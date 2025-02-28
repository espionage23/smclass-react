import React,{useState} from 'react';

// prop : 변수 2개 -> {}를 사용해서 prop 변수를 구조분해해서 받음
const MovieList = ({movie, delMovie}) => {

    const deleteBtn = () => {
        alert(movie.no+"번 삭제 버튼을 클릭하였습니다.");
        delMovie(movie.no);
    }

    return (
        <>

            <div className="card">
                <h5 className="card-header">영화정보 {movie.no}</h5>
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.date}</p>
                    <a href="#" className="btn btn-primary mt">수정</a>
                    <a onClick={deleteBtn} className="btn btn-primary">삭제</a>
                </div>
            </div>
        </>
    );
}
export default MovieList;