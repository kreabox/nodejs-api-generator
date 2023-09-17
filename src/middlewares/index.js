const middleware = (store) => (next) => (action) => {
    console.log('middleware', action);
    next(action);
}

export default middleware;