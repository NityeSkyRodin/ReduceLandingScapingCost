let cost = 0;

function onClickMenuItem() {
    console.log("cost == " + cost);
}

export function startup() {
    // Write code here that should happen on startup of the plugin.

    // Register a menu item under the map icon:
    if (typeof ui !== "undefined") {
        ui.registerMenuItem("ReduceLandingScapingCost", () => onClickMenuItem());
    }

    context.subscribe("action.execute", function (e) {
        if (e.action == "landraise" || e.action == "landlower") {
            // Set the cost to 0 for land raising and lowering actions.
            console.log("i come here EXEC");
            e.result.cost = 0;
            console.log(e.result);
        }
    });

    context.subscribe("action.query", function (e) {
        if (e.action == "landraise" || e.action == "landlower") {
            // Set the cost to 0 for land raising and lowering actions.
            console.log("i come here QUERY");
            e.result.cost = 0;
            console.log(e.result);
        }
    });
}
