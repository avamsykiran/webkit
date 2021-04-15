exports.linkRoutes =(app,ctrl) => {
    app.get("/",ctrl.defaultGetHandler);
}

