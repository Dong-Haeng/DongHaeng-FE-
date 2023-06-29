import React from "react";
import './main.css';
import mainImg from '../images/mainImg.png';
import guitarClub from '../images/guitarClub.jpg';
import soccerClub from '../images/soccerClub.jpg';

function main(){
    return(
        <div>
        <div className="allContent">
            <div className="firstContent">
            <h1 className="title">동행</h1>

            <span className="secondTitle">나만의 동아리 찾기</span>
            <span className="secondTitle">나와 같이 즐길 동아리원 찾기</span>
            
            <div>
            <input type='button' value="바로가기" id="join" className="join"></input>
            </div>

    	        <img src={mainImg} alt='mainImg' className="mainImg" />
            </div>
        </div>
        
        <div className="secondContent">
            <div class="first">
                <div className="fistText">
                <span className="club1">동아리는 이렇게! 😊</span>
                    <div className="club2">
                        <p>각 대학의 중앙 동아리, 일반 동아리는 새로운 맴버를 모아볼 수 있어요!</p>
                        <p>동행에서 재공하는 모집 공고 서비스와 그에 따른 결과를 응답자별 심플하게,</p>
                        <p>출력으로 한번에 볼 수 있답니다 🙌</p>
                    </div>
                </div>
                <img src={guitarClub} alt='guitarClub' className='guitarClub' />
            </div>

            <div class="second">
                <div className="secondText">
                <div className="club1">사용자는 이렇게! 😊</div>
                    <div className="club2-1">
                        <p>사용자는 아래와 같은 방법으로 자신에게 맞는 동아리를 찾을수 있어요!</p>
                        <p>동아리 분과, 규모, 모집 여부 등의 조건을 사용한 원하는 동아리의 탐색</p>
                        <p>간단한 폼을 통한 동아리 지원이 가능해요 👍</p>
                    </div>
                </div>
                <img src={soccerClub} alt='soccerClub' className='soccerClub' />
            </div>
        </div>
    </div>

    )
}


export default main;
