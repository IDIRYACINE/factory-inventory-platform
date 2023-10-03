

import { useSessionGroupNavigation } from "@/hooks/useNavigation"
import { Button } from "antd"
import clsx from "clsx"
import { useTranslations } from 'next-intl';


const SessionGroupTableActions = (props: React.ComponentPropsWithoutRef<"div">) => {
  const t = useTranslations()
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