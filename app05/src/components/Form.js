import React,{useState} from "react";

const Form = ({addMovie}) => {

    const [count, setCount] = useState(4);  // db에서 시퀀스로 대체됨
    const [no, setNo] = useState(0);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    const saveBtn = () => {
        console.log("번호 : " + count);
        console.log("영화제목 : " + title);
        console.log("날짜 : " + date);

        // 영화정보 저장
        addMovie({no:count, title:title, date:date});
        resetData();    // 데이터 지우기
        setCount(count + 1);    // db에서 시퀀스로 대체
    }
    
    // input 화면 지우기
    const  resetData = () =>{
        setTitle("");
        setDate("");
    }
    
    return (
        <>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">영화 제목</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">날짜</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" value={date} onChange={(e)=>{setDate(e.target.value)}} />
                </div>
                <button type="button" onClick={saveBtn} className="btn btn-primary w-100">저장</button>
            </form>
        </>
    );
}

export default Form;