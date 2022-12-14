export const Questions = [
    {
        section: 1,
        items: [
            {
                label: 'Letter A',
                type: 'text',
                value: 'username'
            },
            {
                label: 'Letter B',
                type: 'password',
                value: 'password'
            }
        ]
    },
    {
        section: 2,
        items: [
            {
                label: 'Street Address',
                type: 'text',
                value: 'street'
            },
            {
                label: 'City',
                type: 'text',
                value: 'city'
            },
            {
                label: 'State',
                type: 'select',
                value: 'state',
                options: ['State 1', 'State 2']
            }
        ]
    },
    {
        section: 3,
        items: [
            {
                label: 'If you are ready to submit please press `Submit`',
                type: 'information'
            }
        ]
    }
]