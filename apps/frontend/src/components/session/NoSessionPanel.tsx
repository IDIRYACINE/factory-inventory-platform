import { Typography } from "antd"
import { useTranslation } from 'next-i18next'
    ;


export default function SessionGuard() {

    const { t } = useTranslation('common')

    return (
        <div className="p-4 flex flex-col justify-center items-center w-full h-full">
            <Typography.Title level={2}>{t('noSession')}</Typography.Title>
        </div>
    )
}