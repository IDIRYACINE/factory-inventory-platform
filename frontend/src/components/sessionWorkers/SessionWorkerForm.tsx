'use client';

import { useCreateSessionWorker, useReadSessionWorker, useUpdateSessionWorker } from "@/hooks/useSesionWorker";
import { Doc } from "@convex/_generated/dataModel";
import Button from "antd/es/button";
import Form from "antd/es/form";
import Input from "antd/es/input";
import useTranslation from "next-translate/useTranslation";
import SessionGroupSelector from "@/components/sessionGroups/SessionGroupSelector";


type FieldType = Doc<"sessionWorkers">

export default function SessionWorkerForm() {

  const { t } = useTranslation('common');

  const sessionWorker = useReadSessionWorker()
  const create = useCreateSessionWorker()
  const update = useUpdateSessionWorker()

  const onFinish = (values: FieldType) => {
    if (sessionWorker) {
      update({ id: sessionWorker._id, ...values })
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
      initialValues={sessionWorker}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
     <Form.Item<FieldType>
        label={t('name')}
        name="username"
        rules={[{ required: true, message: 'ErrorMessageHere' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label={t('group')}
        name="groupId"
        rules={[{ required: true, message: 'ErrorMessageHere' }]}
      >
        <SessionGroupSelector/>
      </Form.Item>

      <Form.Item<FieldType>
        label={t('password')}
        name="password"
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