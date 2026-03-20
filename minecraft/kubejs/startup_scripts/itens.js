StartupEvents.registry('item', event => {
    event.create('test_item_1').texture('mobbo:item/lava') // This texture would be located at kubejs/assets/mobbo/textures/item/lava.png

    // You can chain builder methods as much as you like
    event.create('test_item_2').maxStackSize(16).glow(true)

    event.create('question_mark') //
        .displayName('Ponto de Interrogação?')
        .tooltip('§e???')
        .texture('kubejs:item/question_mark')
})