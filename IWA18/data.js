export const TABLES = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13'
]

export const COLUMNS = [
    'ordered',
    'preparing',
    'served',
]

export const state = {
    orders: {},
    dragging: {
        source: null,
        over: null,
    }
}

const createUniqueId = () => {
    const random1 = Math.floor(Math.random() * 10000000000000000)
    const random2 = Math.floor(Math.random() * 10000000000000000)
    const timestamp = new Date().getTime()
    return `${random1}-${timestamp}-${random2}`
}

/**
 * A factory function that creates an order object literal representing an
 * actual order in the app state. It is wrapped in a factory function instead of
 * just being created directly since several values are created automatically
 * such as a unique ID and the creation date of the order.
 *
 * @param {object} props 
 * @returns {object}
 */
export const createOrderData = (props) => {
    const { title, table, column } = props

    return {
        title,
        table,
        column,
        id: createUniqueId(),
        created: new Date(),
    }
}

/**
 * A function that updates the state of the app to reflect current order that is
 * being dragged around the screen by a user, and also which column (if any) it
 * is currently being dragged over. This functionality is wrapped in a factory
 * function in order to ensure that the state is not updated if attempting to
 * update to the same exact values again (since the DOM event would fire each
 * time a new HTML element is dragged over, regardless whether it part of the
 * same column or not)
 *
 * @param {object} newDragging 
 */
export const updateDragging = (newDragging) => {
    const { source = state.dragging.source, over = state.dragging.over } = newDragging
    if (over === state.dragging.over) return

    state.dragging = {
        source,
        over,
    }
}