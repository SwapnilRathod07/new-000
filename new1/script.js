        // Get references to the input field and heading element
        const inputField = document.getElementById('textInput');
        const texth = document.getElementById('texth');

        // Add event listener to input field for input event
        inputField.addEventListener('input', function() {
            // Update heading text with input field value
            texth.textContent = inputField.value;
        });



                // Get references to the input fields and total element
                const amount1Input = document.getElementById('amount1');
                const amount2Input = document.getElementById('amount2');
                const amount3Input = document.getElementById('amount3');
                const totalElement = document.getElementById('total');
        
                // Function to calculate total
                function calculateTotal() {
                    // Get input values and calculate total
                    const amount1 = parseFloat(amount1Input.value) || 0;
                    const amount2 = parseFloat(amount2Input.value) || 0;
                    const amount3 = parseFloat(amount3Input.value) || 0;
                    const total = amount1 + amount2 + amount3;
                    
                    // Update total element with the calculated total
                    totalElement.textContent = total;
                }
        
                // Add event listeners to input fields to recalculate total when values change
                amount1Input.addEventListener('input', calculateTotal);
                amount2Input.addEventListener('input', calculateTotal);
                amount3Input.addEventListener('input', calculateTotal);
        
                // Calculate total initially
                calculateTotal();



                /////////////////
               

 