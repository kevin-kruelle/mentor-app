const dummyData = [
    {
        id: 1,
        pics: ["https://placeimg.com/640/480/people"],
        name: "Nicholas Allen",
        location: "Miami, FL",
        company: "IBM",
        resources: ["https://teamtreehouse.com/?campaign=%2A%2ALP+-+TM+-+Academic&content=526982633685&keyword=treehouse%20learning&cid=10222&utm_source=google&utm_medium=cpc&utm_campaign=%2A%2ALP+-+TM+-+Academic&utm_term=treehouse%20learning&hsa_acc=9235032315&hsa_cam=2028603259&hsa_grp=71899871695&hsa_ad=526982633685&hsa_src=g&hsa_tgt=aud-764947623961:kwd-763862697986&hsa_kw=treehouse%20learning&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjw1ouKBhC5ARIsAHXNMI_LMju1fmk54qsS62gB7xs6iFIVSbHk9D4rKxoGayewOntvTR_xWvEaAmdfEALw_wcB"],        
        field: "Mathematics",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        interests: ["Reading, ", "Watersports, ", "Theatre"]
    },
    {
        id: 2,
        pics: ["https://placeimg.com/640/480/people"],
        name: "Ashley Smart",
        location: "Chicago, IL",
        company: "JPMorgan & Chase",
        resources: ["https://www.w3schools.com/java/java_for_loop.asp"],
        field: "Software Engineer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        interests: ["Travel, ", "Fashion, ", "Art"]
    },
    {
        id: 3,
        pics: ["https://placeimg.com/640/480/people"],
        name: "Hawke Lansang",
        location: "Boston, MA",
        company: "Boston Scientific",
        resources: ["https://teamtreehouse.com/?campaign=%2A%2ALP+-+TM+-+Academic&content=526982633685&keyword=treehouse%20learning&cid=10222&utm_source=google&utm_medium=cpc&utm_campaign=%2A%2ALP+-+TM+-+Academic&utm_term=treehouse%20learning&hsa_acc=9235032315&hsa_cam=2028603259&hsa_grp=71899871695&hsa_ad=526982633685&hsa_src=g&hsa_tgt=aud-764947623961:kwd-763862697986&hsa_kw=treehouse%20learning&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjw1ouKBhC5ARIsAHXNMI_LMju1fmk54qsS62gB7xs6iFIVSbHk9D4rKxoGayewOntvTR_xWvEaAmdfEALw_wcB"],        
        field: "Science",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        interests: ["Art, ", "Cooking, ", "Gaming"]
    },
    {
        id: 4,
        pics: ["https://placeimg.com/640/480/people"],
        name: "Khalil Abdellah",
        location: "Philadelphia, PA",
        company: "JPMorgan & Chase",
        resources: ["https://teamtreehouse.com/?campaign=%2A%2ALP+-+TM+-+Academic&content=526982633685&keyword=treehouse%20learning&cid=10222&utm_source=google&utm_medium=cpc&utm_campaign=%2A%2ALP+-+TM+-+Academic&utm_term=treehouse%20learning&hsa_acc=9235032315&hsa_cam=2028603259&hsa_grp=71899871695&hsa_ad=526982633685&hsa_src=g&hsa_tgt=aud-764947623961:kwd-763862697986&hsa_kw=treehouse%20learning&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjw1ouKBhC5ARIsAHXNMI_LMju1fmk54qsS62gB7xs6iFIVSbHk9D4rKxoGayewOntvTR_xWvEaAmdfEALw_wcB"],        
        field: "Software Engineer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        interests: ["Music, ", "Politics, ", "Skateboarding"]
    },
    {
        id: 5,
        pics: ["https://placeimg.com/640/480/people"],
        name: "Kevin Kruelle",
        location: "Wilmington, DE",
        company: "Hardwire",
        resources: ["https://teamtreehouse.com/?campaign=%2A%2ALP+-+TM+-+Academic&content=526982633685&keyword=treehouse%20learning&cid=10222&utm_source=google&utm_medium=cpc&utm_campaign=%2A%2ALP+-+TM+-+Academic&utm_term=treehouse%20learning&hsa_acc=9235032315&hsa_cam=2028603259&hsa_grp=71899871695&hsa_ad=526982633685&hsa_src=g&hsa_tgt=aud-764947623961:kwd-763862697986&hsa_kw=treehouse%20learning&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjw1ouKBhC5ARIsAHXNMI_LMju1fmk54qsS62gB7xs6iFIVSbHk9D4rKxoGayewOntvTR_xWvEaAmdfEALw_wcB"],        
        field: "Mechanical Engineer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        interests: ["Music, ", "Skiing, ", "Surfing"]
    },
    {
        id: 6,
        pics: ["https://placeimg.com/640/480/people"],
        name: "Oumaima Azzat",
        location: "Los Angeles, CA",
        company: "Capital One",
        resources: ["https://teamtreehouse.com/?campaign=%2A%2ALP+-+TM+-+Academic&content=526982633685&keyword=treehouse%20learning&cid=10222&utm_source=google&utm_medium=cpc&utm_campaign=%2A%2ALP+-+TM+-+Academic&utm_term=treehouse%20learning&hsa_acc=9235032315&hsa_cam=2028603259&hsa_grp=71899871695&hsa_ad=526982633685&hsa_src=g&hsa_tgt=aud-764947623961:kwd-763862697986&hsa_kw=treehouse%20learning&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjw1ouKBhC5ARIsAHXNMI_LMju1fmk54qsS62gB7xs6iFIVSbHk9D4rKxoGayewOntvTR_xWvEaAmdfEALw_wcB"],        
        field: "Web Developer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        interests: ["Foody, ", "Coding, ", "Traveling"]
    }

];

export default dummyData;