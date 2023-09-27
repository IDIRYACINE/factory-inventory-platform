"use client"

import { Col, Row } from "antd/es/grid";
import useTranslation from "next-translate/useTranslation";
import OpenSessionButton from "./OpenSessionButton";



export default function SettingsPanel() {

    const { t } = useTranslation('common')


    return (
        <div className="p-4 h-full w-full flex flex-row justify-start items-start">
            <Row className="w-full h-full" gutter={16}>
                <Col span={8}>
                    <OpenSessionButton openSessionTitle={t("openSession")} closeSessionTitle={t("closeSession")} />
                </Col>
            </Row>
        </div>
    )
}