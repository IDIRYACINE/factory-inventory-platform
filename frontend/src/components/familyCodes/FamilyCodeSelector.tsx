'use client';

import { useReadFamilyCodes } from "@/hooks/useFamilyCodes";
import Select from "antd/es/select";
import useTranslation from "next-translate/useTranslation";


export default function FamilyCodeSelector() {
    const codes = useReadFamilyCodes()
    const {t} = useTranslation('common')

    const options = codes.map(code => ({
        id: code._id,
        value: code.code,
        label: code.name,
    }))

    return (
        <Select
            showSearch
            style={{ width: 200 }}
            placeholder={t('familyCode')}
            optionFilterProp="children"
            filterOption={(input, option) => (option?.value ?? '').includes(input)}
            filterSort={(optionA, optionB) =>
                (optionA?.value ?? '').toLowerCase().localeCompare((optionB?.value ?? '').toLowerCase())
            }
            options={options}
        />
    )
}