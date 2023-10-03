

import { useCreateAffectation, useReadAffectation, useUpdateAffectation } from "@/hooks/useAffectation";
import { useAffectationNavigation } from "@/hooks/useNavigation";
import { Doc } from "@convex/_generated/dataModel";
import { Form, Input, Button } from "antd";

import { useTranslations } from 'next-intl';


type FieldType = Partial<Doc<"affectations">>

export default function AffectationForm() {

  const t = useTranslations();

  const { navigateHome } = useAffectationNavigation()

  const affectation = useReadAffectation({})

  const update = useUpdateAffectation()

  const create = useCreateAffectation()

  const onFinish = (values: FieldType) => {

    if (affectation) {
      update({
        id: affectation._id,
        affectationName: values.affectationName!,
      })

      return;
    }

    create({
      affectationCode: values.affectationCode!,
      affectationName: values.affectationName!
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
      initialValues={affectation}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >


      <Form.Item<FieldType>
        label={t('name')}
        name="affectationName"
        rules={[{ required: true, message: 'ErrorMessageHere' }]}
      >
        <Input />
      </Form.Item>

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