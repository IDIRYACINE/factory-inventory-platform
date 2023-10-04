

import { useSessionWorkerNavigation, useWorkerNavigation } from "@/hooks/useNavigation"
import { useReadActiveWorker } from "@/hooks/useWorkers";
import { Button } from "antd"
import clsx from "clsx"
import { useTranslation } from 'next-i18next'
  ;


const WorkersTableActions = (props: React.ComponentPropsWithoutRef<"div">) => {
  const { t } = useTranslation('common')
  const className = clsx(props.className, "flex flex-row justify-end items-center")
  const { navigateToNewWorker } = useWorkerNavigation()

  const { navigateToNewSessionWorker } = useSessionWorkerNavigation()

  const worker = useReadActiveWorker()

  const handleEdit = () => {
    if (!worker) return

    navigateToNewWorker()
  }


  return (
    <div className={className}>
      <Button onClick={navigateToNewSessionWorker} type="primary">
        {t('addToSession')}
      </Button>
      <Button onClick={handleEdit} type="primary">
        {t('edit')}
      </Button>
      <Button onClick={navigateToNewWorker} type="primary">
        {t('add')}
      </Button>

    </div>
  )
}

export default WorkersTableActions