const trolls = [
    { name: "anonymous", trollLevel: 9},
    { name: "krooleboolle" , trollLevel: 22},
    { name: "krolleline", trollLevel: 27 },
    ];

    // loop methods: map, filter, find, reduce, sort,forEach

    const trollsLevelPlus5 = trolls.map(troll => {        
        return { name: troll.name, trollLevel: troll.trollLevel +5};
        //({ ...trolls, trollLevel: troll.trollLevel += 5});
    });

    console.log(trollsLevelPlus5);

    const oddLeveledTrolls = trollsLevelPlus5.filter(troll => (troll.trollLevel  %2 === 1));

    console.log(oddLeveledTrolls);