import { GetStaticProps } from "next/types";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getAppLocale: GetStaticProps = async (context) => {
    return {
        props: {
            ...(await serverSideTranslations(context.locale!, [
                'common',
            ])),
        }
    }
}
