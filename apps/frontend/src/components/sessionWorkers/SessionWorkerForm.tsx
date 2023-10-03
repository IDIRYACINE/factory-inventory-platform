

import { useCreateSessionWorker, useReadSessionWorker, useUpdateSessionWorker } from "@/hooks/useSesionWorker";
import { Doc } from "@convex/_generated/dataModel";
import { Button, Form, Input } from "antd";

import { useTranslations } from 'next-intl';
import SessionGroupSelector from "@/components/sessionGroups/SessionGroupSelector";
import { useLoadSessionGroups, useReadSessionGroups } from "@/hooks/useSessionGroup";
import { Select } from "antd"; import { useSessionWorkerNavigation } from "@/hooks/useNavigation";


type FieldType = Doc<"sessionWorkers">

export default function SessionWorkerForm() {

  const t = useTranslations();

  const sessionWorker = useReadSessionWorker()
  const create = useCreateSessionWorker()
  const update = useUpdateSessionWorker()

  const groups = useLoadSessionGroups()

  const { navigateHome } = useSessionWorkerNavigation()

  const options = groups.map(group => ({
    id: group._id,
    value: group._id,
    label: group.groupName,
  }))

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
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder={t('group')}
          optionFilterProp="children"
          options={options}
        />
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