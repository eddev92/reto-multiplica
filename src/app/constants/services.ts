export const SERVICES_ITEMS = [
    {
        code: 1,
        category: 'Todos',
        allElements: true,
        services: []
        
    },
    {
        code: 2,
        category: 'Autos',
        allElements: false,
        services: [
            {
                code: 1,
                service: 'Auxilio Mecanico',
            },
            {
                code: 2,
                service: 'Chofer de reemplazo',
            }
        ]
        
    },
    {
        code: 3,
        category: 'Salud',
        allElements: false,
        services: [
            {
                code: 1,
                service: 'Ambulancia',
            },
            {
                code: 2,
                service: 'Médico a domicilio',
            }
        ]
        
    },
    {
        code: 4,
        category: 'Hogar',
        allElements: false,
        services: [
            {
                code: 1,
                service: 'Gasfitero',
            },
            {
                code: 2,
                service: 'Electricidad',
            }
        ]
        
    }
];

export const CATEGORIES = [
    {
        id:'1',
        name:'Todos'
    },
    {
        id:'2',
        name:'Autos'
    },
    {
        id:'3',
        name:'Salud'
    },
    {
        id:'4',
        name:'Hogar'
    }
];
