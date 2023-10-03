"use client"

import { Col, Row } from "antd";
import { useTranslation } from 'next-i18next'
    ;
import OpenSessionButton from "./OpenSessionButton";
import UsersButton from "./UsersButton";
import ImportsButton from "./ImportsButton";
import LogoutButton from "./LogoutButton";



export default function SettingsPanel() {

    const { t } = useTranslation('common')


    return (
        <div className="p-4 h-full w-full flex flex-row justify-start items-start">
            <Row className="w-full h-full" gutter={16}>
                <Col span={8}>
                    <OpenSessionButton openSessionTitle={t("openSession")} closeSessionTitle={t("closeSession")} />
                </Col>
                <Col span={8}>
                    <UsersButton usersTitle={t('users')} />
                </Col>
                <Col span={8}>
                    <ImportsButton importsTitle={t('imports')} />
                </Col>
                <Col span={8}>
                    <LogoutButton logoutTitle={t('logout')} />
                </Col>
            </Row>
        </div>
    )
}