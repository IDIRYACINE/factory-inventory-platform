

import { useReadSessionGroups } from "@/hooks/useSessionGroup";
import { Select } from "antd"; import { useTranslations } from 'next-intl';


export default function SessionGroupSelector() {
    const groups = useReadSessionGroups()
    const t = useTranslations()

    const options = groups.map(group => ({
        id: group._id,
        value: group._id,
        label: group.groupName,
    }))

    return (
        <Select
            showSearch
            style={{ width: 200 }}
            placeholder={t('group')}
            optionFilterProp="children"
            options={options}
        />
    )
}