// Listen for a custom task

/*
FTBQuestsEvents.customTask('6A8D2D43B41978A9', event => {
    event.maxProgress = 10 // Sets the goal
    event.setCheckTimer(10) // Checks every 1 second
    event.setCheck((task, player) => {

        console.log("\n\n\n", player.getMainHandItem().count, player.getMainHandItem().id);

        // Example: Check if player is holding a specific item
        if (player.getMainHandItem().id == 'minecraft:diamond') {
            if (player.getMainHandItem().count == 10) {
                task.progress = 10;
            }
        }
    })
})

*/

FTBQuestsEvents.customTask('6A8D2D43B41978A9', event => {
    event.maxProgress = 1;
    event.setCheckTimer(20);

    event.setCheck((task, player) => {

        /*

        try {
            console.error(task.getProgress())
            //console.log(Object.keys(task));

        } catch (err) {
            console.warn("Ele ia crashar de novo hein");
        }
        */

        let rayTrace = player.rayTrace(5.0);
        let block = rayTrace.block;

        if (block && block.id.startsWith("create:")) {
            let nbt = block.entityData;

            // Verificamos se o objeto 'Network' existe no NBT
            if (nbt && nbt.Network) {
                let stress = nbt.Network.Stress;
                let capacity = nbt.Network.Capacity;

                // Se o Stress for maior que a Capacidade, o sistema parou
                if (stress > capacity) {
                    //player.tell('§cAlerta: Sistema Sobrecarregado!');
                    task.progress = 1;
                }
            }
        }
    });
});