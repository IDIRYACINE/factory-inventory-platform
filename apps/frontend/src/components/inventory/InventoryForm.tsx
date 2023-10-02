

import { Doc } from "@convex/_generated/dataModel";
import { Button, Form, Select, Input } from "antd";

import useTranslation from "next-translate/useTranslation";
import { useCreateInventory, useUpdateInventory } from "@/hooks/useInventory";
import { useAppSelector } from "@/stores/hooks";
import { selectInventory } from "@/stores/inventory/selectors";
import { useReadFamilyCodes } from "@/hooks/useFamilyCodes";

type FieldType = Doc<"inventory">

export default function InventoryForm() {

  const { t } = useTranslation('common');

  const create = useCreateInventory()
  const update = useUpdateInventory()

  const inventory = useAppSelector(selectInventory)

  const onFinish = (values: FieldType) => {
    if (inventory) {
      update({ id: inventory._id, ...values })
      return
    }
    create(values)

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const codes = useReadFamilyCodes()

  const options = codes.map(code => ({
    id: code._id,
    value: code.code.toString(),
    label: code.name,
  }))

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={inventory}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >


      <Form.Item<FieldType>
        label={t('name')}
        name="articleName"
        rules={[{ required: true, message: 'ErrorMessageHere' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label={t('code')}
        name="articleCode"
        rules={[{ required: true, message: 'ErrorMessageHere' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label={t('stockCode')}
        name="stockCode"
        rules={[{ required: true, message: 'ErrorMessageHere' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label={t('familyCode')}
        name="familyCode"
        rules={[{ required: true, message: 'ErrorMessageHere' }]}
      >
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
      </Form.Item>

      <Form.Item<FieldType>
        label={t('unit')}
        name="unit"
        rules={[{ required: true, message: 'ErrorMessageHere' }]}
      >
        <Input />
      </Form.Item>

      <div className="flex flex-row justify-end items-center gap-8">
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="text" htmlType="reset">
            {t('cancel')}
          </Button>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            {t('submit')}
          </Button>
        </Form.Item>

      </div>

    </Form >
  )
}