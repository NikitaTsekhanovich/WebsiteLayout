import './infoAboutUs.css'
import firstImg from '../../img/images/ImgInfoAboutUsPage/Block_1.png'
import secondImg from '../../img/images/ImgInfoAboutUsPage/Block_5.png'
import thirdImg from '../../img/images/ImgInfoAboutUsPage/Block_6.png'

const InfoAboutUs = () => {
    return (
        <section className="infoAboutUs">
            <div className="info__container">
                <div className={"info__title"}>
                    <text>Чем мы занимаемся?</text>
                </div>
                <div className={"info__blocks"}>
                    <div className={"info__blocks-1"}>
                        <div className={"info__blocks__text-1"}>
                            <text className={"info__blocks__text__number-1"}>
                                01
                            </text>
                            <text className={"info__blocks__text__title-1"}>
                                Чем занимаемся 01
                            </text>
                            <text className={"info__blocks__text__desc-1"}>
                                Короткое описание того, чем занимаемся в 2 строчки
                            </text>
                        </div>
                    </div>
                    <div className={"info__blocks-2"}>
                        <div className={"info__blocks__text-2"}>
                            <text className={"info__blocks__text__number-2"}>
                                02
                            </text>
                            <text className={"info__blocks__text__title-2"}>
                                Чем занимаемся 02
                            </text>
                            <text className={"info__blocks__text__desc-2"}>
                                Короткое описание того, чем занимаемся в 2 строчки
                            </text>
                        </div>
                    </div>
                    <div className={"info__blocks-3"}>
                        <img src={firstImg} alt={"firstImg"}/>
                    </div>
                    <div className={"info__blocks-4"}>
                        <img src={secondImg} alt={"secondImg"}/>
                    </div>
                    <div className={"info__blocks-5"}>
                        <div className={"info__blocks__text-5"}>
                            <text className={"info__blocks__text__number-5"}>
                                03
                            </text>
                            <text className={"info__blocks__text__title-5"}>
                                Чем занимаемся 05
                            </text>
                            <text className={"info__blocks__text__desc-5"}>
                                Короткое описание того, чем занимаемся в 2 строчки
                            </text>
                        </div>
                    </div>
                    <div className={"info__blocks-6"}>
                        <div className={"info__blocks__text-6"}>
                            <text className={"info__blocks__text__number-6"}>
                                04
                            </text>
                            <text className={"info__blocks__text__title-6"}>
                                Чем занимаемся 06
                            </text>
                            <text className={"info__blocks__text__desc-6"}>
                                Короткое описание того, чем занимаемся в 2 строчки
                            </text>
                        </div>
                    </div>
                    <div className={"info__blocks-7"}>
                        <img src={thirdImg} alt={"thirdImg"}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InfoAboutUs;