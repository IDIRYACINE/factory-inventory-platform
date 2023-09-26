'use client';

import { useWorkerNavigation } from "@/hooks/useNavigation"
import Button from "antd/es/button"
import clsx from "clsx"
import useTranslation from "next-translate/useTranslation"


 const SessionGroupTableActions = (props:React.ComponentPropsWithoutRef<"div">) => {
    const { t } = useTranslation('common')
    const className= clsx(props.className, "flex flex-row justify-end items-center")
    const { navigateToNewWorker } = useWorkerNavigation()
  
  
    return (
      <div className={className}>
        <Button onClick={navigateToNewWorker} type="primary">
          {t('add')}
        </Button>
  
      </div>
    )
  }

  export default SessionGroupTableActions