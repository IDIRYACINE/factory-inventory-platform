
import theme from '@/theme/themeConfig'
import { ConfigProvider } from 'antd'

export const AntdThemeProvider = ({ children }: React.PropsWithChildren) => {
    return (
        <ConfigProvider theme={theme}>
            {children}
        </ConfigProvider>
    )
}