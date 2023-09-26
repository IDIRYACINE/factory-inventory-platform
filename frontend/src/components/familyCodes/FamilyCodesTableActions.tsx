'use client';

import { useProductFamilyNavigation } from "@/hooks/useNavigation"
import Button from "antd/es/button"
import clsx from "clsx"
import useTranslation from "next-translate/useTranslation"


 const FamilyCodesTableActions = (props:React.ComponentPropsWithoutRef<"div">) => {
    const { t } = useTranslation('common')
    const className= clsx(props.className, "flex flex-row justify-end items-center")
    const { navigateToNewProductFamily } = useProductFamilyNavigation()
  
  
    return (
      <div className={className}>
        <Button onClick={navigateToNewProductFamily} type="primary">
          {t('add')}
        </Button>
  
      </div>
    )
  }

  export default FamilyCodesTableActions