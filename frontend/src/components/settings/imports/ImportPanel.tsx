import { Col, Row } from "antd/es/grid";
import ImportCard from "./ImportCard";
import useTranslation from "next-translate/useTranslation";
import { useDataImports } from "@/hooks/useImport";



export default function ImportPanel() {
    const { t } = useTranslation('common')

    const isUploadingLabel = t("uploading")
    const startUploadLabel = t("startUpload")

    const { importInventory, importAffectation, importFamilyCode, importStock } = useDataImports()

    const inventoryProps = {
        text: t("inventory"),
        isUploadingLabel,
        startUploadLabel,
        onUpload: importInventory
    }

    const stockProps = {
        text: t("stock"),
        isUploadingLabel,
        startUploadLabel,
        onUpload: importStock

    }

    const familyProps = {
        text: t("family"),
        isUploadingLabel,
        startUploadLabel,
        onUpload: importFamilyCode

    }

    const affectationProps = {
        text: t("affectation"),
        isUploadingLabel,
        startUploadLabel,
        onUpload: importAffectation
    }


    return (
        <Row className="p-4" gutter={16}>
            <Col>
                <ImportCard {...inventoryProps} />
            </Col>
            <Col>
                <ImportCard {...familyProps} />
            </Col>
            <Col>
                <ImportCard {...stockProps} />
            </Col>
            <Col>
                <ImportCard {...affectationProps} />
            </Col>
        </Row>
    )
}