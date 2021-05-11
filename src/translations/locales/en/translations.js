const englishTranslations = {
    // this is hello in English
    hello: "Hello",
    // 1 and 3 are the indexes in the node tree, strings are legit HTML nodes!
    // just inspect the Trans via React Chrome debugger and see the correct array
    // developer should do this, translator should just respect the tags
    helloWithALink: "This is <1>hello</1> with a <3>link in English</3>",
    helloWithALinkAlternative: "The English word for hello is <boldCustom>{{greeting}}</boldCustom>"
}

export default englishTranslations