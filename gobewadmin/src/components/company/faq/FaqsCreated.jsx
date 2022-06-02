import FaqCard from "./FaqCard"

export default function FaqsCreated({ faqsCreated }) {
    console.log(faqsCreated)
    return <div>
        <h2>FAQ creadas</h2>
        <div>
            {
                faqsCreated?.map((elem) => {
                    return <FaqCard key={elem._id} faqTitle={elem.faqTitle} faqDescription={elem.faqDescription} />
                })
            }
        </div>
    </div>
}