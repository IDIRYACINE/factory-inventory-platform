'use client';

import { useSessionNavigation } from "@/hooks/useNavigation"
import Button from "antd/es/button"
import clsx from "clsx"
import useTranslation from "next-translate/useTranslation"


const SessionRecordTableActions = (props: React.ComponentPropsWithoutRef<"div">) => {
  const { t } = useTranslation('common')
  const className = clsx(props.className, "flex flex-row justify-end items-center")
  const { navigateSessionWorkers, navigateSessionGroups } = useSessionNavigation()


  return (
    <div className={className}>
      <Button onClick={navigateSessionGroups} type="primary">
        {t('groups')}
      </Button>

      <Button onClick={navigateSessionWorkers} type="primary">
        {t('workers')}
      </Button>
    </div>
  )
}

export default SessionRecordTableActions