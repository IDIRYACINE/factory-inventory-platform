'use client';

import { useSessionWorkerNavigation } from "@/hooks/useNavigation"
import { useReadActiveSessionWorker } from "@/hooks/useSesionWorker";
import Button from "antd/es/button"
import clsx from "clsx"
import useTranslation from "next-translate/useTranslation"


 const SessionGroupTableActions = (props:React.ComponentPropsWithoutRef<"div">) => {
    const { t } = useTranslation('common')
    const className= clsx(props.className, "flex flex-row justify-end items-center")
    const { navigateToEditSessionWorker,navigateSession } = useSessionWorkerNavigation()

    const worker = useReadActiveSessionWorker()

    const handleEdit = () => {
      if(!worker) return

      navigateToEditSessionWorker(worker!._id)
    }
  
    return (
      <div className={className}>
        <Button onClick={handleEdit} type="primary">
          {t('edit')}
        </Button>
        <Button onClick={navigateSession} type="primary">
          {t('back')}
        </Button>
      </div>
    )
  }

  export default SessionGroupTableActions