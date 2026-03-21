ServerEvents.recipes(event => {
    event.remove({ output: 'vs_eureka:engine' });
    event.remove({ output: "createbigcannons:steel_ingot" });
    event.remove({ output: "createbigcannons:steel_scrap" });
    event.remove({ output: "tconstruct:steel_ingot" });
    event.remove({ output: "tconstruct:steel_nugget" })
})