FTBQuestsEvents.customTask('156E0457E5BC9A4E', event => {
    event.maxProgress = 1;
    event.setCheckTimer(20);

    event.setCheck((task, player) => {
        let rayTrace = player.rayTrace(5.0);
        let block = rayTrace.block;

        if (block && block.id == "create:mechanical_mixer") {
            let nbt = block.entityData;

            if (nbt && nbt.Speed) {

                console.log("NBT" + nbt);

                let velocity = nbt.Speed;

                if (velocity < 30) {
                    task.progress = 1;
                }
            }

        }
    });
});