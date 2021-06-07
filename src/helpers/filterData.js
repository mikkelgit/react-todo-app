export default function filterData (data, filterBy) {
    switch (filterBy) {
        case 'Todo':
            return data.filter(item => !item.done)
        case 'Done':
            return data.filter(item => item.done)
        case 'Priority':
            return data.filter(item => item.priority)
        default:
            return data
    }
}