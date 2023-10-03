

import { useReadAffectations } from "@/hooks/useAffectation";
import { Select } from "antd";
import { useTranslation } from 'next-i18next'
    ;


export default function AffectationSelector() {
    const codes = useReadAffectations()
    const { t } = useTranslation('common')

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