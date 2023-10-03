

import { useAffectationNavigation } from "@/hooks/useNavigation"
import { Button } from "antd"
import clsx from "clsx"
import { useTranslations } from 'next-intl';


const AffectationTableActions = (props: React.ComponentPropsWithoutRef<"div">) => {
  const t = useTranslations()
  const className = clsx(props.className, "flex flex-row justify-end items-center")
  const { navigateToNewAffectation } = useAffectationNavigation()


  return (
    <div className={className}>
      <Button onClick={navigateToNewAffectation} type="primary">
        {t('add')}
      </Button>

    </div>
  )
}

export default AffectationTableActions