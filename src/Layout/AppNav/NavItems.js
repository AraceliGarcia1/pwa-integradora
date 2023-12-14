import RouteConstant from '../../router/routeConstant';


export const AdminNav = [
    {
        icon: 'pe-7s-graph3',
        label: 'Categorías',
        to: RouteConstant.CATEGORIA
    },
    {
        icon: 'pe-7s-safe',
        label: 'Subcategorías',
        to: RouteConstant.SUBCATEGORIA
    },
    {
        icon: 'pe-7s-link',
        label: 'Tallas',
        to: RouteConstant.TALLAS
    },
    {
        icon: 'pe-7s-albums',
        label: 'Tipos de medida',
        to: RouteConstant.TIPO_MEDIDA
    },
];

export const CajaNav = [
    {
        icon: 'pe-7s-cash',
        label: 'Pagos',
        to: RouteConstant.PAGO
    },
];
export const AccesoNav = [
    {
        icon: 'pe-7s-user-female',
        label: 'Usuarios',
        to: RouteConstant.USUARIO
    },
];

export const ProductoNav = [
    {
        icon: 'pe-7s-cart',
        label: 'Productos',
        to: RouteConstant.PRODUCTO
    },
    {
        icon: 'pe-7s-box1',
        label: 'Almacén',
        to: RouteConstant.STOCK
    }
];


export const MainNav = [
    {
        icon: 'pe-7s-rocket',
        label: 'Dashboard Example',
        to: '/dashboards/basic',
    },
];
export const ComponentsNav = [
    {
        icon: 'pe-7s-diamond',
        label: 'Elements',
        content: [
            {
                label: 'Standard Buttons',
                to: '/elements/buttons-standard',
            },
            {
                label: 'Dropdowns',
                to: '/elements/dropdowns',

            },
            {
                label: 'Icons',
                to: '/elements/icons',
            },
            {
                label: 'Badges',
                to: '/elements/badges-labels',
            },
            {
                label: 'Cards',
                to: '/elements/cards',
            },
            {
                label: 'List Groups',
                to: '/elements/list-group',
            },
            {
                label: 'Navigation Menus',
                to: '/elements/navigation',
            },
            {
                label: 'Utilities',
                to: '/elements/utilities',
            },
        ],
    },
    {
        icon: 'pe-7s-car',
        label: 'Components',
        content: [
            {
                label: 'Tabs',
                to: '/components/tabs',
            },
            {
                label: 'Notifications',
                to: '/components/notifications',
            },
            {
                label: 'Modals',
                to: '/components/modals',
            },
            {
                label: 'Progress Bar',
                to: '/components/progress-bar',
            },
            {
                label: 'Tooltips & Popovers',
                to: '/components/tooltips-popovers',
            },
            {
                label: 'Carousel',
                to: '/components/carousel',
            },
            {
                label: 'Maps',
                to: '/components/maps',
            },
        ],
    },
    {
        icon: 'pe-7s-display2',
        label: 'Regular Tables',
        to: '/tables/regular-tables',
    },
];
export const FormsNav = [
    {
        icon: 'pe-7s-light',
        label: 'Controls',
        to: '/forms/controls',
    },
    {
        icon: 'pe-7s-eyedropper',
        label: 'Layouts',
        to: '/forms/layouts',
    },
    {
        icon: 'pe-7s-pendrive',
        label: 'Validation',
        to: '/forms/validation',
    },
];
export const WidgetsNav = [
    {
        icon: 'pe-7s-graph2',
        label: 'Dashboard Boxes',
        to: '/widgets/dashboard-boxes',
    },
];
export const ChartsNav = [
    {
        icon: 'pe-7s-graph2',
        label: 'ChartJS',
        to: '/charts/chartjs',
    },
];