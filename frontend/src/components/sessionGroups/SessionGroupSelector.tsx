'use client';

import { useReadSessionGroups } from "@/hooks/useSessionGroup";
import Select from "antd/es/select";
import useTranslation from "next-translate/useTranslation";


export default function SessionGroupSelector() {
    const groups = useReadSessionGroups()
    const {t} = useTranslation('common')

    const options = groups.map(group => ({
        id: group._id,
        value: group._id,
        label: group.groupName,
    }))

    return (
        <Select
            showSearch
            style={{ width: 200 }}
            placeholder={t('familyCode')}
            optionFilterProp="children"
            options={options}
        />
    )
}