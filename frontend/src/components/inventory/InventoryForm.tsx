'use client';

import { Doc } from "@convex/_generated/dataModel";
import Button from "antd/es/button";
import Form from "antd/es/form";
import Input from "antd/es/input";
import useTranslation from "next-translate/useTranslation";
import FamilyCodeSelector from "@/components/familyCodes/FamilyCodeSelector";
import { useCreateInventory, useUpdateInventory } from "@/hooks/useInventory";
import { useAppSelector } from "@/stores/hooks";
import { selectInventory } from "@/stores/inventory/selectors";


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
        <FamilyCodeSelector/>
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