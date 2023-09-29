'use client';

import { useSessionGroupNavigation } from "@/hooks/useNavigation";
import { useCreateSessionGroup, useReadSessionGroup, useUpdateSessionGroup } from "@/hooks/useSessionGroup";
import { Doc } from "@convex/_generated/dataModel";
import Button from "antd/es/button";
import Form from "antd/es/form";
import Input from "antd/es/input";
import useTranslation from "next-translate/useTranslation";


type FieldType = Doc<"sessionGroups">

export default function SessionGroupForm() {

  const { t } = useTranslation('common');

  const sessionGroup = useReadSessionGroup()
  const create = useCreateSessionGroup()
  const update = useUpdateSessionGroup()

  const {navigateHome} = useSessionGroupNavigation()

  const onFinish = (values: FieldType) => {
    if (sessionGroup) {
      update({ id: sessionGroup._id, ...values })
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
      initialValues={sessionGroup}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
     

      <Form.Item<FieldType>
        label={t('name')}
        name="groupName"
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