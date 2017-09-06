// New vue instance
new Vue({
    el: '#vue-app',
    data: {
        search: '',
        previousSearch: '',
        selected: 'Show All',


        vehicles: [
            {
                name: "2012 Ford S-Max",
                Active: true,
                rule: "Van Speeding",
                Region: "All",
                Created: "Michelle Jones",
                Date: "6/12/16",

            },
            {
                name: "2015 Ford Model T-Van",
                Active: true,
                rule: "Van Excessive Idle",
                Region: "All",
                Created: "Michelle Jones",
                Date: "6/12/16"


            },
            {
                name: "2014 Ford Transit Connect",
                Active: true,
                rule: "Dump Truck Speeding SE",
                Region: "Southeast",
                Created: "John James",
                Date: "2/24/16"


            },
            {
                name: "2012 Buick Terraza",
                Active: false,
                rule: "Dump Truck Quick Acceleration",
                Region: "All",
                Created: "Roger Martin",
                Date: "2/25/16"


            },
            {
                name: "2009 960E-2*2",
                Active: true,
                rule: "Dump Truck Speeding NE",
                Region: "All",
                Created: "John James",
                Date: "2/24/16"


            },
            {
                name: "2011 960E-1k *2",
                Active: true,
                rule: "Dump Truck Sudden Stop",
                Region: "All",
                Created: "Michelle Jones",
                Date: "6/12/16"
            },
            {
                name: "Ferrari Enzo",
                Active: false,
                rule: "Vehicle Leaving Southeast",
                Region: "Southeast",
                Created: "Roger Martin",
                Date: "8/17/16"


            },
            {
                name: "2015 Ford F-150",
                Active: false,
                rule: "Vehicle Leaving Northeast",
                Region: "Northeast",
                Created: "Roger Martin",
                Date: "8/17/16"


            },
            {
                name: "2016 Ford F-250",
                Active: false,
                rule: "Vehicle Leaving Southeast",
                Region: "Midwest",
                Created: "Roger Martin",
                Date: "8/17/16"


            },


            {
                name: "2011 930E-4SE *2",
                Active: true,
                rule: "Dump Truck Engine off",
                Region: "All",
                Created: "John James",
                Date: "8/12/16"


            }
        ]
    },


    methods: {
        // Refresh data button
        refresh: function () {
            return this.selected = 'Show All', this.search = '';
        },
        // Toggle whether rule is active or inactive
        ruleToggle: function (index, vehicle) {
            console.log(vehicle);
            vehicle.Active = !vehicle.Active;
            this.vehicles.$set(index, vehicle);
            console.log(this.filteredVehicles);
        },

    },


    // Building an array of unique regions based on data
    computed: {
        getRegions: function () {
            var regionList = ['Show All'];
            for (var i = 0; i < this.vehicles.length; i++) {
                console.log(regionList);
                console.log(regionList.indexOf(this.vehicles[i].Region))
                if (regionList.indexOf(this.vehicles[i].Region) === -1) {
                    regionList.push(this.vehicles[i].Region);
                }
            }
            return regionList;
        },
        // Search function to filter vehicle data
        filteredVehicles: function () {
            var vehArray = this.vehicles,
                searchString = this.search;

            if (!searchString) {
                return vehArray;
            }

            searchString = searchString.trim().toLowerCase();

            vehArray = vehArray.filter(function (item) {
                if (item.rule.toLowerCase().indexOf(searchString) !== -1 ||
                    (item.Region === this.selected)
                ) {
                    return item;
                }
            })
            return vehArray;

        },
    }
})



