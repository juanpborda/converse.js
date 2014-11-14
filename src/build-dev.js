({
    baseUrl: "../",
    name: "components/almond/almond.js",
    out: "../builds/dev/converse-ipas.dev.min.js",
    include: ['main'],
    mainConfigFile: '../main.js',
    paths: {
        "converse-dependencies":    "src/deps-dev",
        "converse-custom":    "src/deps-custom",
        "locales":   "locale/nolocales"
    },
    removeCombined: true,
    findNestedDependencies: true
})
