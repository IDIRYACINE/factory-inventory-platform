

import { useSessionWorkerNavigation } from "@/hooks/useNavigation"
import { useReadActiveSessionWorker } from "@/hooks/useSesionWorker";
import { Button } from "antd"
import clsx from "clsx"
import { useTranslation } from 'next-i18next'
  ;


const SessionGroupTableActions = (props: React.ComponentPropsWithoutRef<"div">) => {
  const { t } = useTranslation('common')
  const className = clsx(props.className, "flex flex-row justify-end items-center")
  const { navigateSession, navigateToNewSessionWorker } = useSessionWorkerNavigation()

  const worker = useReadActiveSessionWorker()

  const handleEdit = () => {
    if (!worker) return

    navigateToNewSessionWorker()
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