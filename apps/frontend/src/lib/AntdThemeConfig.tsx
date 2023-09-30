import ConfigProvider from "antd/es/config-provider"

import theme from '@/theme/themeConfig'

export const AntdThemeProvider = ({ children }: React.PropsWithChildren) => {
    return (
        <ConfigProvider theme={theme}>
            {children}
        </ConfigProvider>
    )
}