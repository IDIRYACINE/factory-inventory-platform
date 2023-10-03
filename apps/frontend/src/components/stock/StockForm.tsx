

import { Doc } from "@convex/_generated/dataModel";
import { Button, Form, Input, Select, Card } from "antd";

import { useTranslations } from 'next-intl';
import { useAppSelector } from "@/stores/hooks";
import { useCreateStock, useUpdateStock } from "@/hooks/useStock";
import { selectStock } from "@/stores/stock/selectors";
import { useReadFamilyCodes } from "@/hooks/useFamilyCodes";


type FieldType = Doc<"stock">

export default function StockForm() {

  const t = useTranslations();

  const create = useCreateStock()
  const update = useUpdateStock()

  const stock = useAppSelector(selectStock)

  const onFinish = (values: FieldType) => {
    if (stock) {
      update({ id: stock._id, ...values })
      return
    }
    create(values)

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const wrapperCol = { offset: 8, span: 24 }

  const codes = useReadFamilyCodes()

  const options = codes.map(code => ({
    id: code._id,
    value: code.code.toString(),
    label: code.name,
  }))

  return (
    <Card>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={stock}
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


        <div className="flex flex-row justify-end items-center gap-8">
          <Form.Item wrapperCol={wrapperCol}>
            <Button type="text" htmlType="reset">
              {t('cancel')}
            </Button>
          </Form.Item>

          <Form.Item wrapperCol={wrapperCol}>
            <Button type="primary" htmlType="submit">
              {t('submit')}
            </Button>
          </Form.Item>

        </div>

      </Form >
    </Card>
  )
}