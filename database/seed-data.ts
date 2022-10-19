interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}



export const seedData: SeedData = {
    entries: [
        {
            description: 'Pending: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            description: 'In-Progreso: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            description: 'Finished: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            status: 'finished',
            createdAt: Date.now() - 100000,
        },
    ]
}