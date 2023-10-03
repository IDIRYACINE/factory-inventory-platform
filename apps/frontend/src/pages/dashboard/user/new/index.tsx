import UserForm from "@/components/users/UserForm";


export default function NewUserPage() {

    return (
        <div className="p-4 flex flex-col flex-start items-start">
            <UserForm />
        </div>
    )
}

import { getAppLocale } from "@/utility/locale/useLoadLocale";
export const getStaticProps = getAppLocale