import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
    {
        path: '',
        title: 'home',
        icon: 'bx bx-book-alt',
        class: 'sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [
            {
                path: 'dashboard/default',
                title: 'Tutoriales',
                icon: 'bx bx-right- arrow - alt',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
        ]
    },
    {
        path: '',
        title: 'Productos',
        icon: 'bx bx-archive',
        class: 'sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [
            {
                path: '/dashboard/arttech/catalog',
                title: 'Catalogo',
                icon: 'bx bxs-food-menu',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
        ]
    },
];