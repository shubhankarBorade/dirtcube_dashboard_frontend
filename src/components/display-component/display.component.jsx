import React from 'react'
import currentMenuItem from "../../data/currentMenuItem";
import UsersPage from "../../pages/users-page/users.page";
import DataPage from "../../pages/data-page/data.page";
import OverviewPage from "../../pages/overview-page/overview.page";
import SettingPage from "../../pages/setting-page/setting.page";

function DisplayComponent({state}) {
    switch (state) {
        case currentMenuItem.Overview :
            return (
                <div>
                    <OverviewPage/>
                </div>
            )
        case currentMenuItem.Data :
            return (
                <div>
                    <DataPage/>
                </div>
            )
        case currentMenuItem.Users :
            return (
                <div>
                    <UsersPage/>
                </div>
            )
        case currentMenuItem.Setting :
            return (
                <div>
                    <SettingPage/>
                </div>
            )
        default :
            throw new Error('Component not found');
    }

}

export default DisplayComponent;