import { Col, Row } from "antd";
import ImportCard from "./ImportCard";
import { useTranslations } from 'next-intl';
import { useDataImports } from "@/hooks/useImport";
import { useReadImportingStatus } from "@/hooks/useSettings";
import { useAppDispatch } from "@/stores/hooks";



export default function ImportPanel() {
    const t = useTranslations()

    const isUploadingLabel = t("uploading")
    const startUploadLabel = t("startUpload")

    const { importInventory, importAffectation, importFamilyCode, importStock } = useDataImports()

    const { importingAffectations, importingFamilyCode, importingInventory, importingStock } = useReadImportingStatus()


    const inventoryProps = {
        text: t("inventory"),
        isUploadingLabel,
        startUploadLabel,
        onUpload: importInventory,
        uploading: importingInventory
    }

    const stockProps = {
        text: t("stock"),
        isUploadingLabel,
        startUploadLabel,
        onUpload: importStock,
        uploading: importingStock

    }

    const familyProps = {
        text: t("family"),
        isUploadingLabel,
        startUploadLabel,
        onUpload: importFamilyCode,
        uploading: importingFamilyCode

    }

    const affectationProps = {
        text: t("affectation"),
        isUploadingLabel,
        startUploadLabel,
        onUpload: importAffectation,
        uploading: importingAffectations
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