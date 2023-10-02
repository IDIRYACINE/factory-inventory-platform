import type { ThemeConfig } from 'antd';
import { theme } from 'antd';

export const darkAlgorithm = theme.darkAlgorithm;
export const lightAlgorithm = theme.defaultAlgorithm;

const appTheme: ThemeConfig = {
  token: {
    fontSize: 20,
    colorPrimary: '#52c41a',
  },
  algorithm: lightAlgorithm,

};

export default appTheme;