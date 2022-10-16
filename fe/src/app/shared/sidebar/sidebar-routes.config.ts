import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
    {
        path: '',
        title: 'Pregunta&Respuesta',
        icon: 'bx bx-list-check',
        class: 'sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [
            {
                path: '/dashboard/saber-pro/question-answer',
                title: 'Asignar respuestas',
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
        title: 'Área',
        icon: 'bx bx-book-alt',
        class: 'sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [
            {
                path: '/dashboard/saber-pro/area',
                title: 'Asignar área',
                icon: 'bx bx-right- arrow - alt',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                path: '/dashboard/saber-pro/area/listar',
                title: 'Listar área',
                icon: 'bx bx-right- arrow - alt',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },


        ]
    },





];