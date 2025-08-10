import ContactForm from "../../components/landingpage/ContactForm"
import { Header1 } from "@/components/ui/header"

export default function Contact() {
  return (
    <>
      <Header1 />
      <div className="pt-20">
        <ContactForm />
      </div>
    </>
  )
}
