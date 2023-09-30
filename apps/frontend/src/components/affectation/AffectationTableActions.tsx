'use client';

import { useAffectationNavigation } from "@/hooks/useNavigation"
import Button from "antd/es/button"
import clsx from "clsx"
import useTranslation from "next-translate/useTranslation"


 const AffectationTableActions = (props:React.ComponentPropsWithoutRef<"div">) => {
    const { t } = useTranslation('common')
    const className= clsx(props.className, "flex flex-row justify-end items-center")
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