

import { useCreateFamilyCode, useReadFamilyCode, useUpdateFamilyCode } from "@/hooks/useFamilyCodes";
import { useProductFamilyNavigation } from "@/hooks/useNavigation";
import { Doc } from "@convex/_generated/dataModel";
import { Button, Form, Input } from "antd";
import { useTranslation } from 'next-i18next'
  ;


type FieldType = Partial<Doc<"familyCode">>

export default function FamilyCodeForm() {

  const { t } = useTranslation('common')

  const { navigateHome } = useProductFamilyNavigation()

  const familyCode = useReadFamilyCode({})

  const update = useUpdateFamilyCode()

  const create = useCreateFamilyCode()

  const onFinish = (values: FieldType) => {

    if (familyCode) {
      update({
        id: familyCode._id,
        ...values
      })

      return;
    }

    create({
      code: values.code!,
      name: values.name!
    })

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
      initialValues={familyCode}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >


      <Form.Item<FieldType>
        label={t('name')}
        name="name"
        rules={[{ required: true, message: 'ErrorMessageHere' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label={t('code')}
        name="code"
        rules={[{ required: true, message: 'ErrorMessageHere' }]}
      >
        <Input />
      </Form.Item>

      <div className="flex flex-row justify-end items-center gap-8">
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="text" onClick={navigateHome}>
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