

import { useProductFamilyNavigation } from "@/hooks/useNavigation"
import { Button } from "antd"
import clsx from "clsx"
import { useTranslations } from 'next-intl';


const FamilyCodesTableActions = (props: React.ComponentPropsWithoutRef<"div">) => {
  const t = useTranslations()
  const className = clsx(props.className, "flex flex-row justify-end items-center")
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