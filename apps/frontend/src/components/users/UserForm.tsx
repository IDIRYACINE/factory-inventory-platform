

import { useCreateUser, useReadUser, useSelectUser, useUpdateUser } from "@/hooks/useUser";
import { useUserNavigation } from "@/hooks/useNavigation";
import { Doc } from "@convex/_generated/dataModel";
import { Button, Form, Input } from "antd";

import { useTranslation } from 'next-i18next'
  ;
import { Select } from "antd";


type FieldType = Doc<"user">

export default function UserForm() {

  const { t } = useTranslation('common')

  const { navigateHome } = useUserNavigation()

  const user = useReadUser({})

  const update = useUpdateUser()

  const create = useCreateUser()

  const { unSelectUser } = useSelectUser()

  const onFinish = (values: FieldType) => {

    if (user) {
      update({
        id: user._id,
        ...values
      })

      return;
    }

    create({
      ...values
    })

    unSelectUser()

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  const options = [
    {
      id: "role-option-admin",
      value: "admin",
      label: "admin",
    },
    {
      id: "role-option-user",
      value: "user",
      label: "user",
    }
  ]


  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={user}
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
        label={t('tokenIdentifier')}
        name="tokenIdentifier"
        rules={[{ required: true, message: 'ErrorMessageHere' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label={t('role')}
        name="role"
        rules={[{ required: true, message: 'ErrorMessageHere' }]}
      >
        <Select placeholder={t('group')}
          optionFilterProp="children"
          options={options} />
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