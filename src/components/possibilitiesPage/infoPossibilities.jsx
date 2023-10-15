import './infoPossibilities.css'

const InfoPossibilities = () => {
    return (
        <section className={"infoPossibilities"}>
            <div className={"possibilities__container"}>
                <div className={"possibilities__title"}>
                    Наши возможности
                </div>
                <div className={"possibilities__blocks"}>
                    <div className={"possibilities__start__block"}>
                        <text>
                            Что мы умеем в 2 или меньше что мы умеем стр
                        </text>
                    </div>
                    <div className={"possibilities__blocks-1"}>
                        <div className={"possibilities__blocks__title-1"}>
                            Заголовок плюшки
                        </div>
                        <text className={"possibilities__blocks__text-1"}>
                            Что мы умеем коротко. Что мы умеем к
                        </text>
                    </div>
                    <div className={"possibilities__blocks-2"}>
                        <div className={"possibilities__blocks__title-2"}>
                            Заголовок плюшки
                        </div>
                        <text className={"possibilities__blocks__text-2"}>
                            Что мы умеем коротко. Что мы умеем к
                        </text>
                    </div>
                    <div className={"possibilities__blocks-3"}>
                        <div className={"possibilities__blocks__title-3"}>
                            Заголовок плюшки
                        </div>
                        <text className={"possibilities__blocks__text-3"}>
                            Что мы умеем коротко. Что мы умеем к
                        </text>
                    </div>
                    <div className={"possibilities__blocks-4"}>
                        <div className={"possibilities__blocks__title-4"}>
                            Заголовок плюшки
                        </div>
                        <text className={"possibilities__blocks__text-4"}>
                            Что мы умеем коротко. Что мы умеем к
                        </text>
                    </div>
                    <div className={"possibilities__end__block"}>
                        <div className={"possibilities__end__block__title"}>
                            Что хотим добавить в будущем
                        </div>
                        <text className={"possibilities__end__block__text"}>
                            Что хотим делать дальше коротко
                            Что хотим делать дальше коротко
                            Что хотим делать дальше коротко
                        </text>
                    </div>
                </div>
                <div className={"get__info"}>
                    <li><a href="#!" className={"get__info-btn"}>
                        Узнать больше
                    </a></li>
                </div>
            </div>
        </section>
    );
}

export default InfoPossibilities;