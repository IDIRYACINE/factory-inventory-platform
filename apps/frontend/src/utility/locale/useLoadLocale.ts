import { GetStaticProps } from "next/types";

export const getAppLocale: GetStaticProps = async (context) => {
    return {
        props: {

            messages: (await import(`@/utility/locale/locales/${context.locale}.json`)).default
        }
    };
}
