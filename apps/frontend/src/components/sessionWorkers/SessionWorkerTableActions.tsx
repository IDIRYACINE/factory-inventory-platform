

import { useSessionWorkerNavigation } from "@/hooks/useNavigation"
import { useReadActiveSessionWorker } from "@/hooks/useSesionWorker";
import { Button } from "antd"
import clsx from "clsx"
import { useTranslations } from 'next-intl';


const SessionGroupTableActions = (props: React.ComponentPropsWithoutRef<"div">) => {
  const t = useTranslations()
  const className = clsx(props.className, "flex flex-row justify-end items-center")
  const { navigateToEditSessionWorker, navigateSession } = useSessionWorkerNavigation()

  const worker = useReadActiveSessionWorker()

  const handleEdit = () => {
    if (!worker) return

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