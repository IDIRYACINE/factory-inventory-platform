import AffectationForm from "@/components/affectation/AffectationForm";
import { getAppLocale } from "@/utility/locale/useLoadLocale";


export default function NewAffectationPage() {

    return (
        <div className="p-4 flex flex-col flex-start items-start">
            <AffectationForm />
        </div>
    )
}

export const getStaticProps = getAppLocale