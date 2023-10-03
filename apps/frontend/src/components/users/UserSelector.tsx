

import { useReadAffectations } from "@/hooks/useAffectation";
import { Select } from "antd"; import { useTranslations } from 'next-intl';


export default function AffectationSelector() {
    const codes = useReadAffectations()
    const t = useTranslations()

    const options = codes.map(affectation => ({
        id: affectation._id,
        value: affectation.affectationCode,
        label: affectation.affectationName,
    }))

    return (
        <Select
            showSearch
            style={{ width: 200 }}
            placeholder={t('Affectation')}
            optionFilterProp="children"
            filterOption={(input, option) => (option?.value ?? '').includes(input)}
            filterSort={(optionA, optionB) =>
                (optionA?.value ?? '').toLowerCase().localeCompare((optionB?.value ?? '').toLowerCase())
            }
            options={options}
        />
    )
}