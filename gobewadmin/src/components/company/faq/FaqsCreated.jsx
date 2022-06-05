import FaqCard from "./FaqCard"

export default function FaqsCreated({ faqsCreated }) {

    return <div>
        <h2>FAQ creadas</h2>
        <div>
            {
                faqsCreated?.map((elem) => {
                    return (<div>
                        <FaqCard key={elem.faqId} faqTitle={elem.faqTitle} faqDescription={elem.faqDescription} faqOrder={elem.faqOrder} faqId={elem.faqId} />
                    </div>)
                })
            }
        </div>
    </div>
}