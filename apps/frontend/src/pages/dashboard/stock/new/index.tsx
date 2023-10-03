import StockNewPanel from "@/components/stock/StockNewPanel";


export default function StockNewPage() {
    return (
        <StockNewPanel />
    )
}

import { getAppLocale } from "@/utility/locale/useLoadLocale";
export const getStaticProps = getAppLocale