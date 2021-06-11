// Hotel
db.hotels.insert({
    "name": 'HotelOne',
    "servicesCount": 2,
    "guestsCount": 2,
    "services": 
    [
        {
            "service1" : "joe",
        },
        {
            "service2" : "joe",
        }
    ],
    "guests": 
    [
        {
            "guest_name" : "joe",
            "details" : "guest_details"
        },
        {
            "guest2_name" : "will",
            "details" : "guest2_details"
        }
    ]
    
})

// HotelChain 
db.hotelsChain.insert({
    name: 'HotelChainOne',
    allServicesCount: 0,
    allGuestsCount: 0,
    allHotelsCount: 0,
    allhotels: {
        "hotelfromChainOne":{
            name: 'Something',
            servicesCount: 30,
            guestsCount: 200,
            services: {
                service1: "ServiceOne",
                service2: "ServiceTwo"
            },
            guests: {
                "guest_name":{
                    contact: "guest_contact"
                }
            }
        },
        "hote2fromChainOne": {
            name: 'Synergy',
            servicesCount: 30,
            guestsCount: 200,
            services: {
                service1: "Details",
                service2: "Details"
            },
            guests: {
                "guest_name":{
                    contact: "guest_contact"
                }
            }
        },
    },
})

// All Data
db.allData.insert({
    totalGuests: 0,
    totalServices: 0,
    totalHotels: 0,
    totalHotelsChains: 0,
})