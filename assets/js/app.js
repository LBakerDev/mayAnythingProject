new Vue({
    el: '#vue-app',
    data: {
        checked: true,
        search: '',
        selected: '',
        vehicles: [
            {
                name: "2012 Ford S-Max",
                status: "Active",
                rule: "Van Speeding",
                Region: "All",
                Created: "Michelle Jones",
                Date: "6/12/16",

            },
            {
                name: "2015 Ford Model T-Van",
                status: "Active",
                rule: "Van Excessive Idle",
                Region: "All",
                Created: "Michelle Jones",
                Date: "6/12/16"


            },
            {
                name: "2014 Ford Transit Connect",
                status: "Active",
                rule: "Dump Truck Speeding SE",
                Region: "Southeast",
                Created: "John James",
                Date: "2/24/16"


            },
            {
                name: "2012 Buick Terraza",
                status: "Inactive",
                rule: "Dump Truck Quick Acceleration",
                Region: "All",
                Created: "Roger Martin",
                Date: "2/25/16"


            },
            {
                name: "2009 960E-2*2",
                status: "Active",
                rule: "Dump Truck Speeding NE",
                Region: "All",
                Created: "John James",
                Date: "2/24/16"


            },
            {
                name: "2011 960E-1k *2",
                status: "Active",
                rule: "Dump Truck Sudden Stop",
                Region: "All",
                Created: "Michelle Jones",
                Date: "6/12/16"
            },
            {
                name: "vehicle 7",
                status: "Inactive",
                rule: "Vehicle Leaving Southeast",
                Region: "Southeast",
                Created: "Roger Martin",
                Date: "8/17/16"


            },
            {
                name: "2015 Ford F-150",
                status: "Inactive",
                rule: "Vehicle Leaving Northeast",
                Region: "Northeast",
                Created: "Roger Martin",
                Date: "8/17/16"


            },
            {
                name: "2016 Ford F-250",
                status: "Inactive",
                rule: "Vehicle Leaving Southeast",
                Region: "Midwest",
                Created: "Roger Martin",
                Date: "8/17/16"


            },


            {
                name: "2011 930E-4SE *2",
                status: "Active",
                rule: "Dump Truck Engine off",
                Region: "All",
                Created: "John James",
                Date: "8/12/16"


            }
        ]
    },

    methods: {

        refresh: function () {
            return this.search='';
        
        }
    },

       
    // creating search functionality with computed
    computed: {
        filteredVehicles: function () {
            var vehArray = this.vehicles,
                searchString = this.search;

            if (!searchString) {
                return vehArray;
            }

            searchString = searchString.trim().toLowerCase();

            vehArray = vehArray.filter(function (item) {
                if (item.rule.toLowerCase().indexOf(searchString) !== -1) {
                    return item;
                }
            })
            return vehArray;
        },

        ruleToggle: function(filteredVehicles) {
            if(this.checked === true) {
                return filteredVehicles;
            }
            if(this.checked === false){
                return this.vehicles;
            }
        }

        // selectedVehicles: function (vehicles) {
        //     return this.vehicles.Region.filter(function (region) {
        //         var dataRegion = this.vehicles.Region;

        //         if(this.selected === dataRegion ) {
        //             return this.selected;
        //         }
        //     });
            

        // }

    }
})

