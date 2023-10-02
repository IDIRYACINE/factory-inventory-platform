import { StockPanel } from "@/components/stock/StockPanel";
import { GetServerSideProps } from "next/types";

export default function StockPage() {
    return (
        <>
            <StockPanel />
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async () => {

    return { props: {} }
}