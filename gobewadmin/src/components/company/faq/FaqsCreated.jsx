import FaqCard from "./FaqCard"

export default function FaqsCreated({ faqsCreated }) {

    return <div>
        <div>
            {
                faqsCreated?.map((elem) => {
                    return <FaqCard faqTitle={elem.faqTitle} faqDescription={elem.faqDescription} />
                })
            }
        </div>
    </div>
}