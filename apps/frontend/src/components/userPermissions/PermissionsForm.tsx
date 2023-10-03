

import { useGrantPermission } from "@/hooks/useUser";
import { usePermissionsNavigation } from "@/hooks/useNavigation";
import { Doc } from "@convex/_generated/dataModel";
import { Button, Form, Input } from "antd";

import { useTranslation } from 'next-i18next'
  ;


type FieldType = Doc<"affectationPermisions">

export default function PermissionsForm() {

  const { t } = useTranslation('common')

  const { navigateHome } = usePermissionsNavigation()


  const grant = useGrantPermission()

  const onFinish = (values: FieldType) => {

    grant({
      ...values
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
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >


      <Form.Item<FieldType>
        label={t('code')}
        name="affectationCode"
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