import { StockPanel } from "@/components/stock/StockPanel";
import { GetServerSideProps } from "next/types";

export default function StockPage() {
    return (
        <>
            <StockPanel />
        </>
    )
}

import { getAppLocale } from "@/utility/locale/useLoadLocale";
export const getStaticProps = getAppLocale