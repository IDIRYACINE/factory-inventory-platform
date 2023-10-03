

import { useSessionGroupNavigation } from "@/hooks/useNavigation"
import { Button } from "antd"
import clsx from "clsx"
import { useTranslation } from 'next-i18next'
  ;


const SessionGroupTableActions = (props: React.ComponentPropsWithoutRef<"div">) => {
  const { t } = useTranslation('common')
  const className = clsx(props.className, "flex flex-row justify-end items-center")
  const { navigateToNewSessionGroup } = useSessionGroupNavigation()


  return (
    <div className={className}>
      <Button onClick={navigateToNewSessionGroup} type="primary">
        {t('add')}
      </Button>

    </div>
  )
}

export default SessionGroupTableActions