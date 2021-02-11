$(document).ready(function () {
    // Object containing the validation rules
    let myRules =
        {
            height:
                {
                    required: true,
                    min: 59,
                    max: 79,
                    number: true
                },
            weight:
                {
                    required: true,
                    min: 88,
                    max: 353,
                    number:true
                }

        };

    // Object containing the error messages
    let myMessages =
        {
            height:
                {
                    required: "Please enter the height between 59 - 79 inches.",
                    min: "Please enter height greater than or equal to 59 inches.",
                    max: "Please enter height less than or equal to 79 inches.",
                    number: "Please enter number only"
                },
            weight:
                {
                    required: "Please enter the weight between 88 - 353 pounds.",
                    min: "Please enter weight more than or equal to 88 pounds.",
                    max: "Please enter weight less than or equal to 353 pounds.",
                    number: "Please enter number only"
                }

        };

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler: calculateBMI,
            rules: myRules,
            messages: myMessages
        }
    );


    function calculateBMI() {

        // Ask user for height in inches
        let yourHeight = parseFloat($("input#height").val());

        //Ask User for weight
        let yourWeight = parseFloat($("input#weight").val());

        //Calculate BMI using the formula
        let bmiValue = yourWeight/ (yourHeight * yourHeight) * 703;

        // Store the values in the value
        let value = "";

        //check for category based on bmi value results

        if(bmiValue < 15 )
        {
         value = "Very severely underweight";
        }
        else if(bmiValue >= 15 && bmiValue < 16 )
        {
        value = "Severely underweight";
        }
        else if (bmiValue >=16 && bmiValue <18.5)
        {
            value = "Underweight";
        }
        else if (bmiValue >= 18.5 && bmiValue < 25)
        {
            value = "Normal (healthy weight)";
        }
        else if (bmiValue >= 25 && bmiValue < 30)
        {
            value = "Overweight";
        }
        else if (bmiValue >= 30 && bmiValue < 35)
        {
            value = "Obese Class I (Moderately obese)";
        }
        else if (bmiValue >= 35 && bmiValue < 40)
        {
            value = "Obese Class II (Severely obese)";
        }
        else if (bmiValue > 40)
        {
            value = "Obese Class III (Very severely obese)";
        }

        //Print the output in the paragraph ith #message
        $("p#message").text(`Your BMI is ${bmiValue.toFixed(1)} and you are ${value}`)

    }

});







