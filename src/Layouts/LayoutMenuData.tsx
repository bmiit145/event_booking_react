import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

const Navdata = () => {
    const history = useNavigate();
    //state data
    const [isDashboard, setIsDashboard] = useState<boolean>(false);
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [isEvent, setIsEvent] = useState<boolean>(false);

    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e: any) {
        if (e && e.target && e.target.getAttribute("sub-items")) {
            const ul: any = document.getElementById("two-column-menu");
            const iconItems = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id = item.getAttribute("sub-items");
                const getID = document.getElementById(id) as HTMLElement
                if (getID)
                    getID.classList.remove("show");
            });
        }
    }

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        if (iscurrentState !== 'Dashboard') {
            setIsDashboard(false);
        }
        if (iscurrentState !== 'Auth') {
            setIsAuth(false);
        }
        if (iscurrentState !== 'Event') {
            setIsEvent(false);
        }
    }, [
        history,
        iscurrentState,
        isDashboard,
        isAuth,
        isEvent,
    ]);

    const menuItems: any = [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: "dashboard",
            label: "Dashboard",
            icon: <FeatherIcon icon="home" className="icon-dual" />,
            link: "/dashboard",
            stateVariables: isDashboard,
            click: function (e: any) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState('Dashboard');
                updateIconSidebar(e);
            },
            // subItems: [
            //     {
            //         id: "analytics",
            //         label: "Analytics",
            //         link: "/dashboard-analytics",
            //         parentId: "dashboard",
            //     },
            // ],
        },
        {
            id:"events",
            label:"Events",
            icon:<FeatherIcon icon="plus-square" className="icon-dual" />,
            link:"/#",
            stateVariables: isEvent,
            click: function (e: any) {
                e.preventDefault();
                setIsEvent(!isEvent);
                setIscurrentState('Event');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "add-event",
                    label: "Add Event",
                    link: "/add-event",
                    parentId: "event",
                },
                {
                    id: "view-event",
                    label: "View Event",
                    link: "/view-event",
                    parentId: "events",
                },
            ],
        },
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;