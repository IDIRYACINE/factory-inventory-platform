

import { useWorkerNavigation } from "@/hooks/useNavigation";
import { useCreateWorker, useReadActiveWorker, useUpdateWorker } from "@/hooks/useWorkers";
import { useAppSelector } from "@/stores/hooks";
import { selectWorker } from "@/stores/workers/selectors";
import { Doc } from "@convex/_generated/dataModel";
import { Button, Form, Input } from "antd";

import { useTranslation } from 'next-i18next'
  ;


type FieldType = Doc<"workers">

export default function WorkerForm() {

  const { t } = useTranslation('common')

  const create = useCreateWorker()
  const update = useUpdateWorker()

  const { navigateHome } = useWorkerNavigation()

  const worker = useReadActiveWorker()

  const onFinish = (values: FieldType) => {
    if (worker) {
      update({ id: worker._id, ...values })
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
      initialValues={worker}
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
        label={t('phone')}
        name="phone"
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