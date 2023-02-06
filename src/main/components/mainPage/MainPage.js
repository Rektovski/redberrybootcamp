import "../../design/mainPage/mainPageStyle.css";
import mainRedberryLogo from "../../assets/mainPage/mainRedberryLogo.png";
import companyRing from "../../assets/mainPage/companyRing.png";
import {Container} from "react-bootstrap";

export default function MainPage() {
    return (
        <>
            <div className={'mainPageBackground'}>
                <Container>
                    <img className={'mainRedberryLogo'} src={mainRedberryLogo} alt={'mainRedberryLogo'}/>
                    <figure className={'mainRedberryLogoUnderline'}/>
                    <img className={'companyRing'} src={companyRing} alt={'companyRing'}/>
                </Container>
                <div className={'centerResume'}>
                    <div className={'resumeAddSpace'}>
                        <div className={'resumeAdd'}>რეზიუმეს დამატება</div>
                    </div>
                </div>
            </div>
        </>
    )
}