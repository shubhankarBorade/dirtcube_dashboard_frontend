import Overview from "../pages/overview-page/overview.page";
import DataPage from "../pages/data-page/data.page";
import UsersPage from "../pages/users-page/users.page";
import SettingPage from "../pages/setting-page/setting.page";


const currentMenuItem = {
    'Overview': Overview,
    'Data': DataPage,
    'Users': UsersPage,
    'Setting': SettingPage
};

export default currentMenuItem;