'use client';

import { Doc } from "@convex/_generated/dataModel";
import Button from "antd/es/button";
import Form from "antd/es/form";
import Input from "antd/es/input";
import useTranslation from "next-translate/useTranslation";
import FamilyCodeSelector from "@/components/familyCodes/FamilyCodeSelector";
import { useAppSelector } from "@/stores/hooks";
import { useCreateStock, useUpdateStock } from "@/hooks/useStock";
import { selectStock } from "@/stores/stock/selectors";


type FieldType = Doc<"stock">

export default function StockForm() {

  const { t } = useTranslation('common');

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

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
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
        <FamilyCodeSelector />
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