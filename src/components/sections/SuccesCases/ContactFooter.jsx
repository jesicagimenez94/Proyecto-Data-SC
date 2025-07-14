import Button from "../../ui/button";

const ContactFooter = () => {
    return (
        <section className="bg-[#201C25] flex flex-col w-full items-center gap-10 px-20 py-20">
            <h4 className="heading-h4 mb-6 text-white text-center">¿Quieres llevar tu negocio al siguiente nivel?</h4>
            <Button className="px-5 py-2 bg-[#a33cfa] text-white rounded-full font-medium shadow-md">
                Hablemos
            </Button>
        </section>
    )
}

export default ContactFooter;