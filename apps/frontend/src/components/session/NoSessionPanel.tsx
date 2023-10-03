import { Typography } from "antd"
import { useTranslations } from 'next-intl';


export default function SessionGuard() {

    const t = useTranslations()

    return (
        <div className="p-4 flex flex-col justify-center items-center w-full h-full">
            <Typography.Title level={2}>{t('noSession')}</Typography.Title>
        </div>
    )
}