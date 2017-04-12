var iwonderSteps = [
    {title: "Step 1"},
    {title: "Step 2"},
    {title: "Step 3"},
    {title: "Step 4"},
    {title: "Step 5"},
    {title: "Step 6"},
    {title: "Step 7"},
    {title: "Where Next?"},
];

var scienceSteps = [
    {title: "Science Step 1"},
    {title: "Science Step 2"},
    {title: "Science Step 3"},
    {title: "Science Step 4"},
    {title: "Where Next?"}
];

var calculatePenultimate = function(array) {
    var penultimate = array[array.length - 2];
    penultimate.penultimate = true;
}

var guidesController = function() {
    var getIwonderIndex = function(req, res) {
        calculatePenultimate(iwonderSteps);

        res.render('guides.html', {
            title: 'iWonder',
            brand: 'iwonder',
            steps: iwonderSteps
        });
    };

    var getScienceIndex = function(req, res) {
        calculatePenultimate(scienceSteps);
        res.render('guides.html', {
            title: 'Science',
            brand: 'science',
            steps: scienceSteps
        });
    };    

    return {
        getIwonderIndex: getIwonderIndex,
        getScienceIndex: getScienceIndex,
    } 
};

module.exports = guidesController;