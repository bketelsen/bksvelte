export const get = async () => ({ 
    status: 200, 
    body: (await import('../../_build/data.json')).default 
})